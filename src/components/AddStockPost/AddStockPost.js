import React, { useState, useContext } from "react";
import { StocksContext } from "../../context/StocksContext";
import "./AddStockPost.css";

const AddStockPost = () => {
  const { addStock } = useContext(StocksContext);
  const [ticker_symbol, setTicker_symbol] = useState("");
  const [purchase_price, setPurchase_price] = useState(0);
  const [recommendation_status, setRecommendation_status] = useState("Select");
  const [stock_value, setStock_value] = useState("Select");
  const [posting, setPosting] = useState(
    "Enter up to 120 characters in a post"
  );
  const URL = process.env.REACT_APP_POCKET_STOCKS_DATABASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const url = `${URL}/api/stocks/home`;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ticker_symbol: ticker_symbol,
            recommendation_status: recommendation_status,
            stock_value: stock_value,
            posting: posting,
            purchase_price: purchase_price,
          }),
        };
        await fetch(url, options)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseJson) => {
            addStock(responseJson);
          });
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };

  return (
    <div className="addStockSection">
      <form action="submit">
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              className="inputTickerSymbol"
              placeholder="Ticker Symbol"
              value={ticker_symbol}
              onChange={(e) => setTicker_symbol(e.target.value)}
            />
          </div>
          <div className="form-column">
            <input
              type="number"
              className="inputPurchasePrice"
              placeholder="Purchase Price"
              value={purchase_price}
              onChange={(e) => setPurchase_price(e.target.value)}
            />
          </div>
          <div className="form-column">
            <select
              className="chooseStatus"
              value={recommendation_status}
              onChange={(e) => setRecommendation_status(e.target.value)}
            >
              <option disabled>Select</option>
              <option value="BUY">BUY</option>
              <option value="HOLD">HOLD</option>
              <option value="SELL">SELL</option>
            </select>
          </div>
          <div
            className="form-column"
            value={stock_value}
            onChange={(e) => setStock_value(e.target.value)}
          >
            <select className="chooseStockValue">
              <option disabled>Select</option>
              <option value="Overvalued">Overvalued</option>
              <option value="Undervalued">Undervalued</option>
              <option value="Accurate">Accurate</option>
            </select>
          </div>
        </div>
        <div className="commentSection">
          <textarea
            name="comment"
            className="textbox"
            value={posting}
            onChange={(e) => setPosting(e.target.value)}
          />
        </div>
        <div onClick={handleSubmit} className="postButton">
          <button className="postBtn">Post!</button>
        </div>
      </form>
    </div>
  );
};

export default AddStockPost;
