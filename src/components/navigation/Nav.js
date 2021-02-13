import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="links">
      <Link className="landing" to="/">
        Home
      </Link>
      <br />
      <Link className="holdings" to="/home">
        Holdings
      </Link>
    </div>
  );
};

export default Nav;