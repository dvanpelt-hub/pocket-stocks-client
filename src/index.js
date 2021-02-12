import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StockContextProvider from './context/StocksContext';
import App from "./App/App";

ReactDOM.render(
  <StockContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StockContextProvider>,
  document.getElementById("root")
);
