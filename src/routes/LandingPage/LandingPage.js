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
            Everyone wants to say "I told you so". Say it with your stock market
            predictions!
          </p>
        </section>
        <section className="appDesc">
          <p>
            To use this app, simply navigate to the 'Holdings' page, enter the
            required information:
          </p>
          <ul>
            <li>Ticker Symbol</li>
            <li>Purchase Price</li>
            <li>Recommendation Status</li>
            <li>
              Your Post, defending your position, forecasting, or just an
              opinion
            </li>
          </ul>

          <p>
            Your post will be added to our database where other users can read
            your post along with all others.
          </p>
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
