import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex-container">
          <div className="navbar-left">
            <h2>
              <span style={{ color: "#A9508B" }}>Clarusway</span> Web Design
            </h2>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                  to="/services"
                >
                  SERVICES
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
