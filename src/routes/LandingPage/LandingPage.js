import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';

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
          <h3>Post your stock predictions, forecasts, and opinion on past, current, and future stock valuations</h3>
      </section>
      <div className="navHoldings">
        <Link className="navHold" to="/home">
            Get Started!
          </Link>
      </div>
      {/* <section className="signUpForm">
          <h3>Sign up to start keeping track!</h3>
        <form className="signup-form">
          <div className="first-name">
            <label htmlFor="first-name">First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>          
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="join_button" type="submit">Sign Up</button>
        </form>
      </section> */}
      </div>
    )
  }
}
