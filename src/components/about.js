import React from "react";
import portrait from '../assets/images/profilepic.jpg';
import "../css/about.css";

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
            When I am not working on web development, I love to spend time with my family. My newly found, favorite hobby is playing board games. I have over 100 unique, modern board games. Part of my collection includes games that my 5 year old daughter can play but are still very interesting for adults. They can often be very educational as well. I find games to be very stimulating as I love to think and be strategic. I am also a geek at heart and love superheroes, especially Marvel movies, as well as video games.
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
      <p>
        Parallax scrolling is a web site trend where the background content is
        moved at a different speed than the foreground content while scrolling.
        Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
        posuere mollis ullamcorper libero ante lectus, blandit pellentesque a,
        magna turpis est sapien duis blandit dignissim. Viverra interdum mi
        magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur
        aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque
        non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt
        mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan
        fringilla vulputate at quibusdam sociis eleifend, aenean maecenas
        vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare.
        Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue
        etiam maecenas, porta porttitor placerat leo.
      </p>
    </div>

    <div className="parallax bg3">
      <div className="parallax-caption">
        <span className="border">Schooling</span>
      </div>
    </div>

    <div className="school">
      {/* <h2>About Me</h2> */}
      <p>
        Parallax scrolling is a web site trend where the background content is
        moved at a different speed than the foreground content while scrolling.
        Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
        posuere mollis ullamcorper libero ante lectus, blandit pellentesque a,
        magna turpis est sapien duis blandit dignissim. Viverra interdum mi
        magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur
        aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque
        non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt
        mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan
        fringilla vulputate at quibusdam sociis eleifend, aenean maecenas
        vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare.
        Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue
        etiam maecenas, porta porttitor placerat leo.
      </p>
    </div>

    <div className="parallax bg4">
      <div className="parallax-caption">
        <span className="border">Personal Interests</span>
      </div>
    </div>

    <div className="personal">
      {/* <h2>About Me</h2> */}
      <p>
        Parallax scrolling is a web site trend where the background content is
        moved at a different speed than the foreground content while scrolling.
        Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
        posuere mollis ullamcorper libero ante lectus, blandit pellentesque a,
        magna turpis est sapien duis blandit dignissim. Viverra interdum mi
        magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur
        aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque
        non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt
        mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan
        fringilla vulputate at quibusdam sociis eleifend, aenean maecenas
        vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare.
        Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue
        etiam maecenas, porta porttitor placerat leo.
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
