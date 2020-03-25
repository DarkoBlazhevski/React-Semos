import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <h4 className="left">C5</h4>
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header;