import React from "react";

// Define the props for the StockPrice component
type StockPriceProps = {
	price: number | null; // The current price of the stock, or null if not available
	error: string | null; // An error message, or null if there is no error
};

const StockPrice: React.FC<StockPriceProps> = ({ price, error }) => {
	return (
		<div className="flex justify-center mt-5">
			{error ? (
				// Display the error message in red if there is an error
				<div className="text-red-500">{error}</div>
			) : (
				// Display the current price in green if there is no error
				<div className="text-green-500 text-xl">Current Price: ${price}</div>
			)}
		</div>
	);
};

export default StockPrice;
