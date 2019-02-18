import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import favicon from "../assets/images/m_favicon.ico";
// import home from "../assets/images/nav_icons/home.svg";
// import me from "../assets/images/nav_icons/me.png";
// import projects from "../assets/images/nav_icons/projects.png";
// import contact from "../assets/images/nav_icons/contact.svg";

let navClass = "sticky-top";

// This function checks for the browser being used and updates the class to static-top, since sticky is not supported on IE or Edge.
function browserCheck() {
  // console.log("navigator", navigator.userAgent);
  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    // console.log('Browser: IE');
    navClass = "static-top";
    // alert('This website performs best in Chrome');
  } else if (
    navigator.userAgent.indexOf("Edge") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    // console.log('Browser: Edge');
    navClass = "static-top";
    // alert('This website performs best in Chrome');
  }
  // 	else if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 )
  //  {
  // 		 alert('Opera');
  //  }
  //  else if(navigator.userAgent.indexOf("Chrome") !== -1 )
  //  {
  // 		 alert('Chrome');
  //  }
  //  else if(navigator.userAgent.indexOf("Safari") !== -1)
  //  {
  // 		 alert('Safari');
  //  }
  //  else if(navigator.userAgent.indexOf("Firefox") !== -1 )
  //  {
  // 			alert('Firefox');
  //  }
  else {
    // console.log('Browser: Not IE or Edge');
  }
}

browserCheck();

const Navbar = props => (
  <nav
    className={`navbar navbar-expand-lg navbar-dark bg-dark ${navClass}`}
    role="navigation"
  >
    <Link className="navbar-brand" to="/">
      <img
        src={favicon}
        width="30px"
        height="30px"
        alt="M"
        className="favicon animated flip"
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
        <Link
          className="nav-item nav-link btn btn-sm btn-outline-secondary nav-btn"
          to="/"
        >
          {/* <img src={home} alt="Home" className="nav-icon" /> */}
          <i className="fas fa-home nav-icon" />
          Home
        </Link>
        <Link
          className="nav-item nav-link btn btn-sm btn-outline-secondary nav-btn"
          to="/about"
        >
					{/* <img src={me} alt="Home" className="nav-icon" /> */}
					<i className="fas fa-user nav-icon"></i>
          About Me
        </Link>
        <Link
          className="nav-item nav-link btn btn-sm btn-outline-secondary nav-btn"
          to="/projects"
        >
					{/* <img src={projects} alt="Home" className="nav-icon" /> */}
					<i className="fas fa-project-diagram nav-icon"></i>
          Projects
        </Link>
        <Link
          className="nav-item nav-link btn btn-sm btn-outline-secondary nav-btn"
          to="/contact"
          // aria-disabled="true"
        >
					{/* <img src={contact} alt="Home" className="nav-icon" /> */}
					<i className="fas fa-envelope nav-icon"></i>
          Contact Me
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
