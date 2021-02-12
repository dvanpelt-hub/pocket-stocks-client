import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import LandingPage from "../routes/LandingPage/LandingPage";
import Login from "../routes/Login";
import SignUp from "../routes/SignUp";
import StockDetails from "../routes/StockDetails";
import UpdatePost from "../routes/UpdatePost/UpdatePost";
import "./App.css";
const API_TOKEN = process.env.REACT_APP_POCKET_STOCKS_KEY;


const App = () => {
  const [currentMarketPrice, setCurrentMarketPrice] = React.useState(0);
  const [selectedTickerSymbol, setSelectedTickerSymbol] = React.useState(null);

  // UPDATES THE TICKER SYMBOL SO IT CAN BE USED IN THE API CALL //
  const setTicker = (chosenTickerSymbol) => {
    setSelectedTickerSymbol(chosenTickerSymbol);
  };

  const getStockPrice = (ticker) => {
    fetch(
      `https://twelve-data1.p.rapidapi.com/price?symbol=${selectedTickerSymbol}&outputsize=30&format=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            `${API_TOKEN}`,
          "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        let price = parseFloat(responseJson.price);
        let final = price.toFixed(2);
        setCurrentMarketPrice(final);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/home"
          render={() => {
            return (
              <Home
                getStockPrice={getStockPrice}
              />
            );
          }}
        />
        <Route
          exact
          path="/stocks/:id"
          render={() => {
            return (
              <StockDetails
                getStockPrice={getStockPrice}
                selectedTickerSymbol={selectedTickerSymbol}
                setTicker={setTicker}
                currentMarketPrice={currentMarketPrice}
              />
            );
          }}
        />
        <Route exact path="/stocks/:id/update" component={UpdatePost} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
