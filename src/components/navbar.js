import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import favicon from "../assets/images/m_favicon.ico";

let navClass = 'sticky-top';

// This function checks for the browser being used and updates the class to static-top, since sticky is not supported on IE or Edge.
function browserCheck() { 
	console.log('navigator',navigator.userAgent);
	if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) //IF IE > 10
	{
		console.log('Browser: IE'); 
		navClass = 'static-top'
	}  
	else if((navigator.userAgent.indexOf("Edge") !== -1 ) || (!!document.documentMode === true )) //IF IE > 10
	{
		console.log('Browser: Edge'); 
		navClass = 'static-top'
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
 else 
 {
		console.log('Browser: Not IE or Edge');
		
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
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/about">
              About Me
            </Link>
            <Link className="nav-item nav-link active" to="/projects">
              Projects
            </Link>
            <Link
              className="nav-item nav-link active"
              to="/contact"
              aria-disabled="true"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
);

export default Navbar;
