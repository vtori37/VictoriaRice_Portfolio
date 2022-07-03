import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navi from './components/Navi';
import Footer from './components/Footer.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import Resume from './pages/Resume.js';


function App() {
  return (
    <div className="App">
    <Router>
      <Navi />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
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
