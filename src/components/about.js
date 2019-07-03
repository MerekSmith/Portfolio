import React from "react";
import "../css/about.css";
import History from "./history";
import Games from "./gameTable";

import portrait from "../assets/images/profilepic.jpg";
import devCert from "../assets/images/uofu webdev certificate-large.png";

let ieParallax = false;

// This function checks for the browser being used and updates the class to static-top, since sticky is not supported on IE or Edge.
function browserCheck() {
  // console.log("navigator", navigator.userAgent);
  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    // console.log('Browser: IE');
    ieParallax = true;
    // alert('This website performs best in Chrome');
  } else if (
    navigator.userAgent.indexOf("Edge") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    // console.log('Browser: Edge');
    ieParallax = true;
    // alert('This website performs best in Chrome');
  }
}

browserCheck();

const About = props => (
  <div className='about'>
    <div className={`parallax bg1 ${ieParallax ? "ie-parallax" : null}`}>
      <div className='parallax-caption'>
        <span className='border'>Me in a Nutshell</span>
      </div>
    </div>

    <div className='about-me'>
      <h2>How Did I Get in This Nutshell?</h2>
      <div className='row'>
        <div className='col-md-2 portrait-container about-me-col'>
          <img className='portrait' src={portrait} alt='portrait' />
        </div>
        <div className='col-md-8 about-me-col'>
          <p>
            I am a full stack web developer with a background in Supply Chain
            Analytics and Finance. I recently graduated the Coding Bootcamp from
            the University of Utah in July 2018. I primarily learned and use the
            MERN stack and am currently working to continue my education in web
            development. I am taking several more online courses to further my
            knowledge, with a focus on React and Redux. I am currently pursuing
            a career change into Web Development and am extremely excited to
            start that journey. I am a quick learner with a strong work ethic
            and constantly strive to learn more and progress.
          </p>
          I would like to invite you to to click on the certificate logo here to
          see all of the technologies learned during The Coding Bootcamp I
          attended.
          <p />
        </div>
        <div className='col-md-2 dev-cert-container'>
          <a
            href='https://www.youracclaim.com/badges/f2b648dd-7ec6-4821-a6f6-073a4b4cb359/public_url'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='dev-cert'
              src={devCert}
              alt='Coding Bootcamp Certificate'
            />
          </a>
        </div>
      </div>
    </div>

    <div className={`parallax bg2 ${ieParallax ? "ie-parallax" : null}`}>
      <div className='parallax-caption'>
        <span className='border'>My Work History</span>
      </div>
    </div>

    <div className='work'>
      {/* <h2>About Me</h2> */}

      <div className='work-container'>
        {/* Web Dev Logo */}
        <History historyType={"jobs"} />

        {/* Example of pdf download link where pdf is local */}
        {/* <a href="./directory/yourfile.pdf" download="newfilename"> */}

        {/* Resume Link */}
        <div className='resume-container'>
          <a
            href='https://drive.google.com/file/d/1KhrPkaNFVGLsKodvtapi0Y50yko9TePg/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-lg btn-danger resume-btn'
            role='button'
          >
            View My Resume
          </a>
        </div>

        {/* end of work-container */}
      </div>
      {/* end of work */}
    </div>

    <div className={`parallax bg3 ${ieParallax ? "ie-parallax" : null}`}>
      <div className='parallax-caption'>
        <span className='border'>Schooling</span>
      </div>
    </div>

    {/* schooling */}
    <div className='schooling'>
      {/* <h2>Schooling</h2> */}

      <div className='schools-container'>
        <History historyType={"schools"} />
      </div>
    </div>
    {/* school end */}

    <div className={`parallax bg4 ${ieParallax ? "ie-parallax" : null}`}>
      <div className='parallax-caption'>
        <span className='border'>Personal Interests</span>
      </div>
    </div>

    <div className='personal'>
      {/* <h2>Personal Interests</h2> */}
      <p>
        I have a strong passion for learning and improving myself. I actively
        seek out new challanges, in many forms, and push myself to take risks
        and be willing to make mistakes. I have a goal of reading 2-4 books each
        month which are generally personal growth books. I enjoy keeping myself
        mentally active as well as physically active. I have been active in
        weight lifting for over 10 years and also enjoy Yoga and playing
        Racquetball.
      </p>
      <p>
        When I am not working on web development, I love to spend time with my
        family. My newly found, favorite hobby is playing board games. I have
        over 100 unique, modern board games. Part of my collection includes
        games that my 5 year old daughter can play but are still very
        interesting for adults. They can often be very educational as well. I
        find games to be very stimulating as I love to think and be strategic. I
        am also a geek at heart and love superheroes, especially Marvel movies,
        as well as video games.
      </p>
    </div>

    <div className={`parallax bg5 ${ieParallax ? "ie-parallax" : null}`}>
      <div className='parallax-caption'>
        <span className='border'>Thanks for looking!</span>
      </div>
    </div>

    <div className='personal'>
      <Games />
    </div>

    {/* end parent div */}
  </div>
);

export default About;
