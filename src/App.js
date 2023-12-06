import './App.css';
import React, {Component} from 'react';
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";

class App extends Component {
  render () {
    return (
      <Router basename = "/">
        <div>
          <ul>
            <li><Link to= "/">Home</Link></li>
            <li><Link to = "/projects">Projects</Link></li>
            <li><Link to = "/experience">Experience</Link></li>
          </ul>

          <hr />
          <Routes>

          <Route exact path ="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>
const Projects = () => <div><h2>Projects</h2></div>
const Experience = () => <div><h2>Experience</h2></div>
export default App;
