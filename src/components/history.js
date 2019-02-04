import React from "react";
import "../css/about.css";

import uofuLogo from "../assets/images/uofu_logo.png";
import slccLogo from "../assets/images/slcc_logo.png";
import webDevLogo from "../assets/images/uofu webdev certificate-small.png";
import ostkLogo from "../assets/images/ostk_logo.png";
import blyLogo from "../assets/images/bly_logo.png";
import henkelLogo from "../assets/images/henkel_logo.png";

const schools = [
  {
    logo: webDevLogo,
    alt: "UofU Web Dev",
    link:
      "https://www.youracclaim.com/badges/f2b648dd-7ec6-4821-a6f6-073a4b4cb359/public_url",
    degree: "Certificate of Completion - The Coding Bootcamp",
    school: "University of Utah, Sandy, UT",
    graduated: "Graduated 2018"
  },
  {
    logo: uofuLogo,
    alt: "UofU",
    link: "http://www.utah.edu/",
    degree: "Bachelor of Science – Finance",
    school: "University of Utah, SLC, UT",
    graduated: "Graduated 2012"
  },
  {
    logo: slccLogo,
    alt: "SLCC",
    link: "http://www.slcc.edu/",
    degree: "Associates of Science – Business",
    school: "Salt Lake Community College, West Jordan, UT",
    graduated: "Graduated 2011"
  }
];

const jobs = [
  {
    logo: ostkLogo,
    alt: "Overstock Logo",
    link: "https://www.overstock.com",
    company: "Overstock.com",
    title: "Supply Chain Analyst",
    time: "Mar 2018 - Present"
  },
  {
    logo: blyLogo,
    alt: "Boart Longyear Logo",
    link: "https://www.boartlongyear.com",
    company: "Boart Longyear",
    title: "Supply Chain Analyst",
    time: "Mar 2015 - Mar 2018"
  },
  {
    logo: henkelLogo,
    alt: "Henkel Logo",
    link: "https://www.henkel.com/",
    company: "Henkel (Sun Products Corp)",
    title: "Customer Supply Chain Analyst",
    time: "Aug 2012 - Mar 2015"
  }
];

const History = props =>
  props.historyType === "schools" ? (
    <div className={props.historyType}>
      {schools.map((school, index) => {
        return (
          <div className="row school" key={index}>
            <div className="col-md-3" />
            <div className="col-md-2 logo">
              <a href={school.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={school.logo}
                  alt={school.alt}
                  className="school-logo"
                />
              </a>
            </div>
            <div className="col-md-7">
              <div className="degree">{school.degree}</div>
              <div> - {school.school} </div>
              <div> - {school.graduated} </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className={props.historyType}>
      {schools.map((school, index) => {
        return (
          <div className="row school" key={index}>
            <div className="col-md-3" />
            <div className="col-md-2 logo">
              <a href={school.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={school.logo}
                  alt={school.alt}
                  className="school-logo"
                />
              </a>
            </div>
            <div className="col-md-7">
              <div className="degree">{school.degree}</div>
              <div> - {school.school} </div>
              <div> - {school.graduated} </div>
            </div>
          </div>
        );
      })}
    </div>
  );

export default History;
