import React, { useState } from 'react';
import { motion } from 'framer-motion';
import resoluteTrackerImage from '../assets/resolute-tracker.png';
import studyGuideImage from '../assets/prework-study-guide.png';
import codingCertificateImage from '../assets/coding-certificate.png';
import publicSpeakingImage from '../assets/public-speaking.jpg';

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null);

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
          {[resoluteTrackerImage, studyGuideImage, codingCertificateImage, publicSpeakingImage].map((image, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full md:w-5/12 px-4 mb-12 md:mb-0 ${applyBlur(index)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`Project ${index + 1}`} className="rounded-lg shadow-lg dark:shadow-black/20" />
              </a>
              <h3>Project {index + 1}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
