import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";
import "./css/navbar.css";
import "./css/home.css";
import "./css/about.css";
import AOS from 'aos';

AOS.init();

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
