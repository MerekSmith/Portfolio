import React from "react";

import "../css/carousel.css";

import mern_logo from '../assets/images/tech_logos/MERN_stack.jpg';
import js_logo from '../assets/images/tech_logos/javascript.png';
import css_logo from '../assets/images/tech_logos/css.png';
import html_logo from '../assets/images/tech_logos/html.png';
import mongoose_logo from '../assets/images/tech_logos/mongoose.png';
import sequelize_logo from '../assets/images/tech_logos/sequelize.png';
import sql_logo from '../assets/images/tech_logos/sql.png';
import vsc_logo from '../assets/images/tech_logos/vsc.png';
import bootstrap_logo from '../assets/images/tech_logos/bootstrap-stack.png';
import git_logo from '../assets/images/tech_logos/git.png';
import npm_logo from '../assets/images/tech_logos/npm.png';
import yarn_logo from '../assets/images/tech_logos/yarn.png';


const Carousel = props => (

	<div className="carousel-container animated fadeInUpBig">
		<div id="carousel">
			<figure><img src={yarn_logo} alt="" className="carousel-img animated zoomIn" id="carousel-12"/></figure>
      		<figure><img src={npm_logo} alt="" className="carousel-img animated zoomIn" id="carousel-11"/></figure>
     		<figure><img src={git_logo} alt="" className="carousel-img animated zoomIn" id="carousel-10"/></figure>
      		<figure><img src={bootstrap_logo} alt="" className="carousel-img animated zoomIn" id="carousel-9"/></figure>
			<figure><img src={vsc_logo} alt="" className="carousel-img animated zoomIn" id="carousel-8"/></figure>
			<figure><img src={sql_logo} alt="" className="carousel-img animated zoomIn" id="carousel-7"/></figure>
			<figure><img src={sequelize_logo} alt="" className="carousel-img animated zoomIn" id="carousel-6"/></figure>
			<figure><img src={mongoose_logo} alt="" className="carousel-img animated zoomIn" id="carousel-5"/></figure>
			<figure><img src={html_logo} alt="" className="carousel-img animated zoomIn" id="carousel-4"/></figure>
			<figure><img src={css_logo} alt="" className="carousel-img animated zoomIn" id="carousel-3"/></figure>
			<figure><img src={js_logo} alt="" className="carousel-img animated zoomIn" id="carousel-2"/></figure>
			<figure><img src={mern_logo} alt="" className="carousel-img animated zoomIn" id="carousel-1"/></figure>
		</div>
	</div>

);

export default Carousel;
