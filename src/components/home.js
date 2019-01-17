import React, { Component } from "react";
// import { Parallax } from "react-scroll-parallax";
// import LazyHero from "react-lazy-hero";
import github from "../assets/images/github_icon.png";
import linkedIn from "../assets/images/linkedin_icon.png";
import stackedOverflow from "../assets/images/stackoverflow_icon.png";
import "../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeContents">
          <h1 className="animated bounceInLeft">Full Stack Web Development by Merek Smith</h1>
          <div className="iconGroup animated bounceInLeft">
            <a
              href="https://www.github.com/MerekSmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                className="icons"
                alt="GitHub"
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/merek-smith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedIn}
                className="icons"
                alt="LinkedIn"
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/9142901/merek-smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={stackedOverflow}
                className="icons"
                alt="Stack Overflow"
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-sine"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
