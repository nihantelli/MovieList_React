import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="menu">
      <nav className="navbar-expand-lg px-1">
        <ul className="navbar-nav row">
          <li className="nav-item col-lg-2 col-xs-6 ">
            <Link className="nav-link" to="/">
              HOME
              <i class="fa-sharp fa-solid fa-house fa-lg ps-2"></i>
            </Link>
          </li>
          <li className="nav-item col-lg-2 col-xs-6 ps-1">
            <Link className="nav-link" to="/add">
              ADD MOVIE
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
