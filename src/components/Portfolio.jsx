import React, { useState } from 'react';
import { motion } from 'framer-motion';
import resoluteTrackerImage from '../assets/resolute-tracker.png';
import project3Image from '../assets/project-3.png'; 
import module18Image from '../assets/module-18.png'; 
import project1Image from '../assets/project-1.png'; 
import module13Image from '../assets/module-13.png'; 
import module12Image from '../assets/module-12.png'; 





export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const projects = [
    { img: project3Image, name: 'Project 3', link: 'https://workout-buddy-2.onrender.com/' },
    { img: project1Image, name: 'Project 1', link: 'https://github.com/Donnie1129/marvel-character-personality-quiz' },
    { img:  resoluteTrackerImage, name: 'Project 2', link: 'https://github.com/tyleryannes94/health-tracker' }, 
    { img: module12Image, name: 'Module 12', link: 'https://github.com/tyleryannes94/social-media-api' },
    { img: module13Image, name: 'Module 13', link: 'https://github.com/tyleryannes94/ecommerce-backend' },
    { img: module18Image, name: 'Module 18', link: 'https://github.com/tyleryannes94/social-media-api' },

  ];


  const applyBlur = (index) => hoveredItem !== null && hoveredItem !== index ? 'filter blur-sm' : '';

  return (
    <div className="container my-24 mx-auto md:px-6">
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } }
        }}
        className="mb-32 text-center"
      >
        <h1 className="text-3xl font-bold mb-12">My Work</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full md:w-5/12 px-4 mb-12 md:mb-0 ${applyBlur(index)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className="rounded-lg shadow-lg dark:shadow-black/20" />
              </a>
              <h3>{project.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
