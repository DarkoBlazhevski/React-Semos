import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <ul className="right">
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header;