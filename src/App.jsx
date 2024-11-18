import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Invoice from './Components/Invoice';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
  
        <Navbar />
        <Hero/>
        <About />
        <Services/>
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;