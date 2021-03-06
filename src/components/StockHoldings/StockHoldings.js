import React, { useEffect, useContext } from "react";
import { StocksContext } from "../../context/StocksContext";
import { useHistory } from "react-router-dom";
import "./StockHoldings.css";

const StockHoldings = (props) => {
  const { stocks, setStocks } = useContext(StocksContext);
  const { selectedTickerSymbol, setSelectedTickerSymbol } = useContext(
    StocksContext
  );

  const URL = process.env.REACT_APP_POCKET_STOCKS_DATABASE_URL;

  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${URL}/api/stocks/home`;
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
            setStocks(responseJson);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // Empty dependency array called here, which makes it run only once on MOUNT //
  }, []);

  const handleDelete = async (e, id) => {
    // Prevents event from sending function to the table row //
    e.stopPropagation();
    try {
      const url = `${URL}/api/stocks/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      await fetch(url, options).then((response) => {
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        // Find the specified id associated with the stock being deleted, and use filter to remove it and return the new array //
        setStocks(
          stocks.filter((stock) => {
            return stock.id !== id;
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigateStock = (id, ticker_symbol) => {
    setSelectedTickerSymbol(ticker_symbol);
    history.push(`/stocks/${id}/`);
  };

  return (
    <>
      <div className="stockHoldings">
        <table className="holdingsTable">
          <thead>
            <tr className="tableRow">
              <th scope="column1">Ticker Symbol</th>
              <th scope="column2">Status</th>
              <th scope="column3">Value</th>
              {/* <th scope="column6">Edit</th> */}
              <th scope="column7">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* If stocks exist, run the code */}
            {stocks.map((stock) => {
              return (
                <tr
                  key={stock.id}
                  onClick={() =>
                    handleNavigateStock(stock.id, stock.ticker_symbol)
                  }
                  className="trow"
                >
                  <td>{stock.ticker_symbol}</td>
                  <td>{stock.recommendation_status}</td>
                  <td>{stock.stock_value}</td>
                  <td>
                    {/* Use arrow function as a reference to the function so it executes on delete */}
                    <button
                      onClick={(e) => handleDelete(e, stock.id)}
                      className="deleteBtn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StockHoldings;
