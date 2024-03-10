import React from 'react';
import resoluteTrackerImage from '../assets/resolute-tracker.png'; 
import studyGuideImage from '../assets/prework-study-guide.png'; 
import codingCertificateImage from '../assets/coding-certificate.png'; 
import publicSpeakingImage from '../assets/public-speaking.jpg'; 

export default function Portfolio() {
  return (
    <main className="block-container">
      <h1 className="mywork-h1" id="mywork-h1-bottomborder">My Work</h1>
      <div className="block-wrapper">
        <section className="block-item" id="double-size">
          <h3>Project 2</h3>
          <a href="https://resolution-tracker-cc532db3cd97.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={resoluteTrackerImage} alt="Screenshot of module 1 challenge" />
          </a>
        </section>

        <section className="block-item">
          <h3>Github</h3>
          <a href="https://github.com/tyleryannes94" target="_blank" rel="noopener noreferrer">
            <img src={studyGuideImage} alt="Screenshot of the study guide from Tyler's github" />
          </a>
        </section>

        <section className="block-item" id="block-item-last">
          <h3>Coding Certificates</h3>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/track/10cbaaa5ab478f679aeb424201bd5839f6006d50" target="_blank" rel="noopener noreferrer">
            <img src={codingCertificateImage} alt="Screenshot of a coding certificate from Datacamp" />
          </a>
        </section>

        <section className="block-item">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/tyler-yannes" target="_blank" rel="noopener noreferrer">
            <img src={publicSpeakingImage} alt="Image of Tyler public speaking" />
          </a>
        </section>
      </div>
    </main>
  );
}
