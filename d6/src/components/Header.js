import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <ul className="right">
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/comments">Comments</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header;