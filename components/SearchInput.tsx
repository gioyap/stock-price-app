import { useState } from 'react';

type SearchInputProps = {
  onSearch: (symbol: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symbol.trim()) {
      onSearch(symbol);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
        className="border p-2 rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
