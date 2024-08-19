import React, { useState } from "react";

// Define the props for the StockTable component
type StockTableProps = {
	symbols: { symbol: string; name: string }[];
	onSelect: (symbol: string) => void;
};

// StockTable component
const StockTable: React.FC<StockTableProps> = ({ symbols, onSelect }) => {
	// State for managing the current page
	const [currentPage, setCurrentPage] = useState(1);

	// State for managing the number of rows displayed per page
	const [rowsPerPage, setRowsPerPage] = useState(10);

	// State for managing the search query
	const [searchQuery, setSearchQuery] = useState("");

	// Handle the change in rows per page
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setRowsPerPage(Number(event.target.value));
		setCurrentPage(1); // Reset to the first page
	};

	// Handle page change
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	// Handle search input change
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
		setCurrentPage(1); // Reset to the first page on new search
	};

	// Filter the symbols based on the search query
	const filteredSymbols = symbols.filter(
		(symbol) =>
			symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			symbol.symbol.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Calculate the starting index of the current page
	const startIdx = (currentPage - 1) * rowsPerPage;

	// Get the symbols for the current page
	const currentSymbols = filteredSymbols.slice(
		startIdx,
		startIdx + rowsPerPage
	);

	return (
		<div className="flex flex-col h-full">
			{/* Search input for filtering symbols, the user can also search the company name */}
			<div className="mb-4">
				<label
					htmlFor="search"
					className="mr-2 text-sm font-medium text-gray-700"
				>
					Search:
				</label>
				<input
					id="search"
					type="text"
					value={searchQuery}
					onChange={handleSearchChange}
					placeholder="Search by symbol or name"
					className="border border-blue-500 rounded-md p-2 w-full"
				/>
			</div>

			{/* Dropdown for selecting rows per page */}
			<div className="mb-4">
				<label
					htmlFor="rowsPerPage"
					className="mr-2 text-sm font-medium text-gray-700"
				>
					Rows per page:
				</label>
				<select
					id="rowsPerPage"
					value={rowsPerPage}
					onChange={handleChangeRowsPerPage}
					className="border border-gray-300 rounded-md"
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
				</select>
			</div>

			{/* Table displaying the symbols */}
			<div className="flex-grow overflow-x-auto h-[330px] overflow-y-auto">
				<table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg">
					<thead className="bg-blue-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
								Symbol
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
								Name
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{currentSymbols.map((symbol) => (
							<tr key={symbol.symbol} className="hover:bg-blue-50">
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{symbol.symbol}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{symbol.name}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<button
										onClick={() => onSelect(symbol.symbol)}
										className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
									>
										Select
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Real time pagination controls */}
			<div className="flex justify-center items-center mt-4 fixed bottom-0 left-0 right-0 p-4 shadow-md mx-auto">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="text-white bg-orange-500 hover:bg-orange-700 font-semibold py-2 px-4 rounded disabled:bg-gray-500"
				>
					Previous
				</button>
				<span className="text-sm font-medium text-white mx-4">
					Page {currentPage} of{" "}
					{Math.ceil(filteredSymbols.length / rowsPerPage)}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={
						currentPage === Math.ceil(filteredSymbols.length / rowsPerPage)
					}
					className="text-white bg-orange-500 hover:bg-orange-700 font-semibold py-2 px-4 rounded disabled:bg-gray-500"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default StockTable;
