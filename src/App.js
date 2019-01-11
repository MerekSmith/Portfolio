import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import "./App.css";
import "./css/navbar.css";
import "./css/home.css";
import "./css/about.css";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
          </div>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
