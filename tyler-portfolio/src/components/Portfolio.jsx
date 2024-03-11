import React from 'react';
import resoluteTrackerImage from '../assets/resolute-tracker.png'; 
import studyGuideImage from '../assets/prework-study-guide.png'; 
import codingCertificateImage from '../assets/coding-certificate.png'; 
import publicSpeakingImage from '../assets/public-speaking.jpg'; 

export default function Portfolio() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1 className="text-3xl font-bold mb-12">My Work</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
            <a href="https://resolution-tracker-cc532db3cd97.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={resoluteTrackerImage} alt="Screenshot of module 1 challenge" className="rounded-lg shadow-lg dark:shadow-black/20" />
            </a>
            <h3>Project 2</h3>
          </div>
          
          <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
            <a href="https://github.com/tyleryannes94" target="_blank" rel="noopener noreferrer">
              <img src={studyGuideImage} alt="Screenshot of the study guide from Tyler's github" className="rounded-lg shadow-lg dark:shadow-black/20" />
            </a>
            <h3>Github</h3>
          </div>

          <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
            <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/10cbaaa5ab478f679aeb424201bd5839f6006d50" target="_blank" rel="noopener noreferrer">
              <img src={codingCertificateImage} alt="Screenshot of a coding certificate from Datacamp" className="rounded-lg shadow-lg dark:shadow-black/20" />
            </a>
            <h3>Coding Certificates</h3>
          </div>

          <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
            <a href="https://www.linkedin.com/in/tyler-yannes" target="_blank" rel="noopener noreferrer">
              <img src={publicSpeakingImage} alt="Image of Tyler public speaking" className="rounded-lg shadow-lg dark:shadow-black/20" />
            </a>
            <h3>LinkedIn</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
