import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="links">
          <Link className="landing" to="/">
            Home
          </Link>
          <br />
          <Link className="holdings" to="/home">
            Holdings
          </Link>
        </div>
        <header>
          <h1>Pocket Stocks</h1>
          {/* <button className="join_button" type="submit">Sign up</button> */}
        </header>
        <section className="briefOV">
          <h3>Stock predictions in the palm of your hand</h3>
          <p>
            Everyone wants to say "I told you so", especially on Wallstreet...
          </p>
        </section>
        <section className="appDesc">
          <h3>
            Post your stock predictions, forecasts, and opinion on past,
            current, and future stock valuations
          </h3>
        </section>
        <div className="navHoldings">
          <Link className="navHold" to="/home">
            Get Started!
          </Link>
        </div>
      </div>
    );
  }
}
