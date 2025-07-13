import React, { useEffect, useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Skills from './Skills';
import Contact from './Contact';
import ParticleBackground from './ParticleBackground';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <ParticleBackground />
      <div className="content-wrapper">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;