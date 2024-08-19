# Stock Price Application

This is a React application that displays a searchable table of stock symbols and their corresponding company names. Users can search for specific stocks and select a stock to view more details.

## Features

- **Basic Layout**: Create a simple and intuitive interface for users to input stock symbols and view results.
- **Error Message Display**: Clearly display an error message if the stock symbol is not found.
- **Stock Price Display**: Show the current stock price in a readable format.
- **Search Functionality**: Easily search for stocks by their symbol or company name.
- **Pagination**: Navigate through the list of stocks with pagination.
- **Select Action**: Select a stock to view more details.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher) installed on your machine.
- **npm** (v6.x or higher) or **yarn** for managing dependencies.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gioyap/stock-price-app.git
   cd stock-price-app
   ```

2. **Install dependencies**:

   If you are using npm:

   ```bash
   npm install
   ```

   Or, if you are using yarn:

   ```bash
   yarn install
   ```

## Running the Application

To run the application locally, use the following steps:

1. **Start the development server**:

   If you are using npm:

   ```bash
   npm start
   ```

   Or, if you are using yarn:

   ```bash
   yarn start
   ```

2. **Open your browser**:

   The application should be running on `http://localhost:3000`.

## Usage

- **Search**: Use the search bar at the top of the page to filter stocks by symbol or company name.
- **Pagination**: Use the pagination controls at the bottom of the page to navigate between different pages of stocks.
- **Select**: Click the "Select" button next to a stock to perform an action, such as viewing stock details.

## Project Structure

- **`/app/page.tsx`**: The main page of the project
- **`/components/Main.tsx`**: Responsible for making one all the components which the StockTable, StockPrice and SearchInput.
- **`/components/StockTable.tsx`**: The main component that displays the stock table with search and pagination functionality.
- **`/data/stockSymbols.ts`**: The data source containing the list of stock symbols and company names.
- **`/app/api/stock-price/route.ts`**: Responsible for fetching the api fron finnhub.

## Customization

- You can customize the ui design in `SearchInput` and `StockPrice` and the number of rows per page by modifying the `rowsPerPage` state in the `StockTable` component.
- Add more stocks to the `stockSymbols` array in `/data/stockSymbols.ts`.

## Contact

If you want to contact me, you can reach me at [gioedrian.yap.l@gmail.com](mailto:gioedrian.yap.l@gmail.com).
