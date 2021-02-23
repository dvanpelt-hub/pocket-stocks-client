import React, { useState, createContext } from 'react';

export const StocksContext = createContext();

const StockContextProvider = props => {

  const [stocks, setStocks] = useState([]);

  const [selectedStock, setSelectedStock] = useState("");

  const [selectedTickerSymbol, setSelectedTickerSymbol] = useState("");

  const addStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
    <StocksContext.Provider value={{stocks, setStocks, addStock, selectedStock, setSelectedStock, selectedTickerSymbol, setSelectedTickerSymbol}}>
      {props.children}
    </StocksContext.Provider>
  )
}

export default StockContextProvider;