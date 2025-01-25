import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/add-reviews"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          Add Reviews
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
