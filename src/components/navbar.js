import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import favicon from "../assets/images/m_favicon.ico";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-nav">
    <Link className="navbar-brand" to="/">
      <img
			src={favicon}
        width="30px"
        height="30px"
        alt=""
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link active" to="/">
          About Me
        </Link>
        <Link className="nav-item nav-link active" to="/">
          Projects
        </Link>
        <Link
          className="nav-item nav-link active"
          to="/"
          aria-disabled="true"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
