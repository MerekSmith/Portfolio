import React from "react";
import "../css/projects.css";
import "../css/shadowbox/component.css";
import "../css/shadowbox/demo.css";
import "../css/shadowbox/normalize.css";
import Project from "./project";



const Projects = props => (
  <div className="hero-project-container">
    <div className="container-fluid projects">
      <header>
        <h1>Recent Projects</h1>
      </header>
      <div className="wrapper">
        <Project />
      </div>
    </div>
  </div>
);

export default Projects;
