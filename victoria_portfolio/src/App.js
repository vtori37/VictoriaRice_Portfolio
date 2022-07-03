import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navi from './components/Navi.js';
 import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navi />
    <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="portfolio" element={<Portfolio />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="resume" element={<Resume />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">about</Link></li>
            <li><Link to="portfolio">Portfolio</Link></li>
            <li><Link to="contact">Cotact</Link></li>
            <li><Link to="resume">Resume</Link></li>
          </ul>
        </div>
     </Router>
    <Footer />  
    </div>
  );
}

export default App;
