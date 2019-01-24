import React from "react";
import "../css/about.css";

import portrait from '../assets/images/profilepic.jpg';
import uofuLogo from '../assets/images/uofu_logo.png';
import slccLogo from '../assets/images/slcc_logo.png';
import webDevLogo from '../assets/images/uofu webdev certificate-small.png';
import ostkLogo from '../assets/images/ostk_logo.jpg';
import blyLogo from '../assets/images/bly_logo.png';
import henkelLogo from '../assets/images/henkel_logo.png';

const About = props => (
  <div className="about">
    <div className="parallax bg1">
      <div className="parallax-caption">
        <span className="border">Getting to Know Me</span>
      </div>
    </div>

    <div className="about-me">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-2 portrait-container about-me-col">
          <img className="portrait" src={portrait} alt="portrait" />
        </div>
        <div className="col-md-10 about-me-col">
          <p>
            I am a full stack web developer with a background in Supply Chain and Finance. I recently graduated the Coding Bootcamp from the University of Utah in July 2018. I primarily learned and use the MERN stack and am currently working to continue my education in web development. I am taking several more online courses to further my knowledge, with a focus on React and Redux. I am currently working as a Supply Chain Analyst with Overstock.com but am pursuing a career change into Web Development. I am a quick learner with a strong work ethic and constantly strive to learn more and progress.
      </p>
          <p>

          </p>
        </div>
      </div>
    </div>

    <div className="parallax bg2">
      <div className="parallax-caption">
        <span className="border">My Work History</span>
      </div>
    </div>

    <div className="work">
      {/* <h2>About Me</h2> */}

      <div className="work-container">

        {/* Web Dev Logo */}
        <div className="job">
          <span>
            <a href="https://www.overstock.com" target="_blank" rel="noopener noreferrer">
              <img src={ostkLogo} alt="Web Dev Logo" className="job-logo" />
            </a>
          </span>
          <span className="company">Overstock.com</span>
          <span> - Supply Chain Analyst</span>
          <span> - Mar 2018 - Present </span>
        </div>


        {/* UofU Logo */}
        <div className="job">
          <span>
            <a href="http://www.utah.edu/" target="_blank" rel="noopener noreferrer">
              <img src={blyLogo} alt="UofU Logo" className="job-logo" />
            </a>
          </span>
          <span className="company"> Boart Longyear </span>
          <span> - Supply Chain Analyst </span>
          <span> - Mar 2015 - Mar 2018 </span>
        </div>


        {/* SLCCLogo */}
        <div className="job">
          <span>
            <a href="http://www.slcc.edu/" target="_blank" rel="noopener noreferrer">
              <img src={henkelLogo} alt="SLCC Logo" className="job-logo" />
            </a>
          </span>
          <span className="company">Henkel (Sun Products Corp)</span>
          <span> - Customer Supply Chain Analyst</span>
          <span> - Aug 2012 – Mar 2015 </span>
        </div>

      </div>

    </div>

    <div className="parallax bg3">
      <div className="parallax-caption">
        <span className="border">Schooling</span>
      </div>
    </div>

    <div className="schooling">
      {/* <h2>Schooling</h2> */}

      <div className="schools-container">

        {/* Web Dev Logo */}
        <div className="school">
          <span>
            <a href="https://www.youracclaim.com/badges/f2b648dd-7ec6-4821-a6f6-073a4b4cb359/public_url" target="_blank" rel="noopener noreferrer">
              <img src={webDevLogo} alt="Web Dev Logo" className="school-logo" />
            </a>
          </span>
          <span className="degree">Certificate of Completion – The Coding Bootcamp</span>
          <span> - University of Utah, Sandy, Utah</span>
          <span> - Graduated 2018 </span>
        </div>


        {/* UofU Logo */}
        <div className="school">
          <span>
            <a href="http://www.utah.edu/" target="_blank" rel="noopener noreferrer">
              <img src={uofuLogo} alt="UofU Logo" className="school-logo" />
            </a>
          </span>
          <span className="degree">Bachelor of Science – Finance</span>
          <span> - University of Utah, Salt Lake City, Utah </span>
          <span> - Graduated 2012 </span>
        </div>


        {/* SLCCLogo */}
        <div className="school">
          <span>
            <a href="http://www.slcc.edu/" target="_blank" rel="noopener noreferrer">
              <img src={slccLogo} alt="SLCC Logo" className="school-logo" />
            </a>
          </span>
          <span className="degree">Associates of Science – Business</span>
          <span> - Salt Lake Community College, West Jordan, Utah</span>
          <span> - Graduated 2011 </span>
        </div>

      </div>

    </div>

    <div className="parallax bg4">
      <div className="parallax-caption">
        <span className="border">Personal Interests</span>
      </div>
    </div>

    <div className="personal">
      {/* <h2>Personal Interests</h2> */}
      <p>
        When I am not working on web development, I love to spend time with my family. My newly found, favorite hobby is playing board games. I have over 100 unique, modern board games. Part of my collection includes games that my 5 year old daughter can play but are still very interesting for adults. They can often be very educational as well. I find games to be very stimulating as I love to think and be strategic. I am also a geek at heart and love superheroes, especially Marvel movies, as well as video games.
      </p>
    </div>

    <div className="parallax bg5">
      <div className="parallax-caption">
        <span className="border">Thanks for looking!</span>
      </div>
    </div>

    {/* end parent div */}
  </div>
);

export default About;
