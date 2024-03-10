import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import HeroImage from '../assets/hero-image.png'

export default function Homepage() {
  return (
    <div>
      <section className="hero-image">
        <img src={HeroImage} alt="image of downtown Austin, TX"/>
      </section>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}