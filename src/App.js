import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
// import "./css/navbar.css";
// import "./css/home.css";
// import "./css/about.css";
import AOS from "aos";

AOS.init();

class App extends Component {
  loader() {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      // fade out
      ele.classList.add("available");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 2000);
    }
  }

  componentDidMount() {
    window.addEventListener("load", this.loader());
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Router onUpdate={() => window.scrollTo(0, 0)}> */}
        <div className='container-fluid portfolio'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} rel='preload' />
            <Route exact path='/home' component={Home} rel='preload' />
            <Route exact path='/projects' component={Projects} rel='preload' />
            <Route exact path='/contact' component={Contact} rel='preload' />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
