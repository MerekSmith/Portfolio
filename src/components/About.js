import React, { Component } from "react";
import "../css/about.css";
import History from "./History";
import Games from "./GameTable";

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

// Run browserCheck formula to see if IE or not.
browserCheck();

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: window.innerWidth > 500 ? true : false
    };
  }

  // Listen event for screen resizing. This then updates the state tableWidth variable. If the screen width goes below 500px, the game collection table is removed as it does not properly respond to a phone in portrait mode and messes up the page to include a section of white on the right. With this dynamic approach, the table will now show up if someone is able to switch to a larger format, such as moving their phone/tablet to landscape.
  setTableWidth = () => {
    if (window.innerWidth > 500) {
      this.setState({ tableWidth: true });
    } else {
      this.setState({ tableWidth: false });
    }
  };

  // When the About page component is loaded, the sizing event listener starts.
  componentDidMount() {
    window.addEventListener("resize", this.setTableWidth);
  }

  // When the About page is left, the event handler is removed.
  componentWillUnmount() {
    window.removeEventListener("resize", this.setTableWidth);
  }

  render() {
    return (
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
                I have always enjoyed working with computers but from the moment
                I went through The Coding Bootcamp course, I knew development
                was what I wanted to do the rest of my career. Web Development
                has not been the normal grind for me but an outlet for my
                creativity and a way to engage the challenge of continually
                learning, growing, and improving my skills. This brought me back
                to my passion for technology and has only gotten more exciting
                as time goes by.
              </p>
              <p>
                I am a full stack web developer with a background in Analytics,
                Supply Chain, and Finance. I recently graduated the Coding
                Bootcamp from the University of Utah in July 2018. I primarily
                learned and use the MERN stack and am currently working to
                continue my education in web development. I am taking several
                more online courses to further my knowledge, with a focus on
                React and Redux. I am currently pursuing a career change into
                Web Development and am extremely excited to start that journey.
                I am a quick learner with a strong work ethic and constantly
                strive to learn more and progress.
              </p>
              <p>
                I would like to invite you to check out my projects page to
                showcase my skills as well as click on the certificate logo here
                to see all of the technologies learned during The Coding
                Bootcamp I attended.
              </p>
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
            I have a strong passion for learning and improving myself. I
            actively seek out new challenges, in many forms, and push myself to
            take risks and be willing to make mistakes. I have a goal of reading
            2-4 books each month which are generally personal growth and
            philosophy books. I enjoy keeping myself mentally active as well as
            physically active. I have been active in weight lifting for over 10
            years and also enjoy Yoga and playing Racquetball.
          </p>
          <p>
            When I am not working on web development, I love to spend time with
            my family. My newly found, favorite hobby is playing board games. I
            have over 100 unique, modern board games. Part of my collection
            includes games that my 5 year old daughter can play but are still
            very interesting for adults. They can often be very educational as
            well. I find games to be very stimulating as I love to think and be
            strategic. I am also a geek at heart and love superheroes,
            especially Marvel movies, as well as video games. At home, I am
            normally a DIYer and really enjoy doing projects around the house. I
            enjoy the challenge of learning how things around the house work and
            what it takes to fix them. Before I owned my home, I barely knew how
            to use a screwdriver and I would now consider myself a very handy
            person.
          </p>
        </div>
        <div className={`parallax bg5 ${ieParallax ? "ie-parallax" : null}`}>
          <div className='parallax-caption'>
            <span className='border'>Thanks for looking!</span>
          </div>
        </div>

        {/* Would love to find a better way to make this dynamically determine if the screen width is below 640 to remove the games table. Once it goes on a mobile phone below width of about 400px (in portrait), the table does not respond properly and makes the entire page too wide and adds a blank white section to the right. */}
        {this.state.tableWidth ? (
          <div className='personal'>
            <Games />
          </div>
        ) : null}

        {/* end parent div */}
      </div>
    );
  }
}
export default About;
