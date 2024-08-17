type StockPriceProps = {
    price: number | null;
    error: string | null;
  };
  
  const StockPrice: React.FC<StockPriceProps> = ({ price, error }) => {
    return (
      <div className="flex justify-center mt-5">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="text-green-500 text-xl">Current Price: ${price}</div>
        )}
      </div>
    );
  };
  
  export default StockPrice;
  