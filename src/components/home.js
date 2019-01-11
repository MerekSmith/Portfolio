import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
// import LazyHero from "react-lazy-hero";
import github from "../assets/images/github_icon.png";
import linkedIn from "../assets/images/linkedin_icon.png";
import stackedOverflow from "../assets/images/stackoverflow_icon.png";
import ironman from "../assets/images/background_iron_man.jpg";
import "../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <LazyHero imageSrc={ironman}> */}
          <div className="homeContents">
            <h1>Full Stack Development by Merek Smith</h1>
            <div className="iconGroup">
              <Link to="https://github.com/MerekSmith" target="_blank">
                <img src={github} className="icons" alt="GitHub" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/merek-smith/"
                target="_blank"
              >
                <img src={linkedIn} className="icons" alt="LinkedIn" />
              </Link>
              <Link
                to="https://stackoverflow.com/users/9142901/merek-smith"
                target="_blank"
              >
                <img
                  src={stackedOverflow}
                  className="icons"
                  alt="Stack Overflow"
                />
              </Link>
            </div>
          </div>
        {/* </LazyHero> */}
      </div>
    );
  }
}
