"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import StockPrice from "./StockPrice";
import StockTable from "./StockTable";
import { stockSymbols } from "@/data/stockSymbol";

const Main: React.FC = () => {
	const [price, setPrice] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

	const fetchStockPrice = async (symbol: string) => {
		setError(null);
		setPrice(null);

		try {
			const response = await fetch(`/api/stock-price?symbol=${symbol}`);
			const data = await response.json();

			if (data.error) {
				setError(data.error);
			} else {
				setPrice(data.price);
			}
		} catch (error) {
			setError("Failed to fetch stock price. Please try again.");
		}
	};

	const handleSelectSymbol = (symbol: string) => {
		setSelectedSymbol(symbol);
		fetchStockPrice(symbol);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-400 to-blue-500 py-10">
			<div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-lg">
				<h1 className="text-2xl font-bold text-center mb-4 text-blue-800">
					Stock Price Checker
				</h1>
				<SearchInput onSearch={fetchStockPrice} />
				<StockPrice price={price} error={error} />
			</div>
			<div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
				<h2 className="text-xl font-bold text-center mb-4 text-blue-800">
					Available Stocks
				</h2>
				<StockTable symbols={stockSymbols} onSelect={handleSelectSymbol} />
			</div>
		</div>
	);
};

export default Main;
