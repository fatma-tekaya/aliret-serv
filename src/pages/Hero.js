import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Project from '../components/Project';

const Hero = () => {
  
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
           <Project/>
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Hero;
