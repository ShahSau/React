import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link text-second text-slanted" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link text-slanted" to="/recipes">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
