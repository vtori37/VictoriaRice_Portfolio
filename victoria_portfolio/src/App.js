import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
import Navi from './components/Navi.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navi/>
  
      <Footer />  
        
    </div>
  );
}

export default App;
