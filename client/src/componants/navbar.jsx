/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navabar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixedtop">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link">
              <NavLink className="nav-text" to={"/"}>
                Laptops
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <NavLink className="nav-text" to={"/insert"}>
                Insert
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navabar;
