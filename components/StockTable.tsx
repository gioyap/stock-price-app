import React from 'react';

type StockTableProps = {
  symbols: { symbol: string; name: string }[];
  onSelect: (symbol: string) => void;
};

const StockTable: React.FC<StockTableProps> = ({ symbols, onSelect }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {symbols.map((symbol) => (
            <tr key={symbol.symbol}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{symbol.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{symbol.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => onSelect(symbol.symbol)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
