import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';


function App() {
  return (
    <div className="App">
      <Router basename='/'>
       <div>
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
        <Route exact path="/" component= {Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
       </div>
      </Router>
    </div>
  );
}

export default App;
