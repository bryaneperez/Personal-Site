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
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/projects" element = {<Projects/>} />
          <Route path ="/experience" element = {<Experience/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
