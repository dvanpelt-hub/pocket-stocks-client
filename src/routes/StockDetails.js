import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StocksContext } from "../context/StocksContext";
import Nav from '../components/navigation/Nav';


const StockDetails = (props) => {
  const { id } = useParams();
  const { selectedStock, setSelectedStock } = useContext(StocksContext);
  const { selectedTickerSymbol, setSelectedTickerSymbol } = useContext(
    StocksContext
    );
  const [currentPost, setCurrentPost] = React.useState("");
  const [purchase_price, setPurchase_price] = React.useState(0);
  const [ROI, setROI] = React.useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const url = "https://fathomless-ravine-36841.herokuapp.com/";
        // const url = `http://localhost:3000/api/v1/stocks/${id}`;
        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
        await fetch(url, options)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseJson) => {
            // CALLBACK PROP TO USE SET CONTEXT ON TICKER SYMBOL //
            props.setTicker(responseJson.holdings.stock.ticker_symbol);
            // UPDATES THE SELECTED STOCK ON PAGE LOAD //
            setSelectedStock(responseJson.holdings.stock);
            // UPDATES THE POST ON PAGE LOAD //
            setCurrentPost(responseJson.holdings.stock.posting);
            // SETS THE PURCHASE PRICE ON PAGE LOAD //
            setPurchase_price(responseJson.holdings.stock.purchase_price);
          })
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // Empty dependency array called here, which makes it run only once on MOUNT //
  }, []);
  
  const updateROI = () => {
    // console.log(props.currentMarketPrice);
    let initial = purchase_price;
    let current = props.currentMarketPrice;
    let ROI = (((current - initial) / initial) * 100).toFixed(2) + "%";
    setROI(ROI);
    console.log(ROI);
  };

  return (
    <div>
      <Nav />
      {/* Renders only if a stock was selected */}
      <h1>{selectedStock && selectedStock.ticker_symbol}</h1>
      <div>
        <p>Current Market Price: ${props.currentMarketPrice}</p>
      </div>
      <div>
        <p>Purchase price: ${purchase_price}</p>
      </div>
      <div>
        <p>ROI: {ROI}</p>
      </div>
      <div>
        <p>Post: {currentPost}</p>
      </div>
      <button onClick={() => props.getStockPrice(selectedTickerSymbol)}>
        Get current price
      </button>
      <br />
      <button onClick={updateROI}>
        Get ROI
      </button>
    </div>
  );
};

export default StockDetails;
