import React from "react";
import "../css/projects.css";
import "../css/shadowbox/component.css";
import "../css/shadowbox/demo.css";
import "../css/shadowbox/normalize.css";
import projectArray from "../project_list.json";

const Project = props => (
  <ul className="stage clearfix">
    {projectArray.map((project, index) => {
      return (	
        <li className="scene" data-aos="zoom-in-up" data-aos-duration="1500" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="movie">
              <div className="poster" />
              <div className="info">
                <header>
                  <h1>{project.title}</h1>
                  {/* <span className="year">1946</span>
                <span className="rating">PG</span>
                <span className="duration">130 minutes</span> */}
                </header>
                <p>{project.description}</p>
                <p>This project used: {project.technologies}</p>
              </div>
            </div>
          </a>
        </li>
      );
    })}

    {/* End of list */}
  </ul>
);

export default Project;
