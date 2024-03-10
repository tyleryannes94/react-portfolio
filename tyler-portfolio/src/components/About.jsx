import React from 'react'
import conferenceImage from '../assets/conference-image.png';

export default function About() {
  return (
    <section className="about-container" id="about-link">
    <img className="about-img" src={conferenceImage} alt="Tyler on a stage presenting" />
    <article className="about-content">
      <h1>About Me</h1>
      <p>
        I'm Tyler Yannes - I live in Austin, TX and I'm a hardworking professional with over 7 years of experience in 
        the Shopify ecommerce ecosystem. I have worked with over 100 brands to develop growth
        strategies optimizing acquisition and retention. My work experience includes Product
        Manager, Founding Strategic Account Manager, and CX Manager. I have worked at 3 
        startups as early stage hires (ranging from employee #7 to #17).
      </p>
      <p>
        I currently work for a SAAS company that powers recurring billing (subscriptions) for merchants
        on Shopify. I joined the company in March 2022 and became the first account manager to help our 
        clients optimize their subscription strategy, focusing on acquisition and retention of customers who
        have subscriptions. 
      </p>
      <p>
        In March of 2023, I was promoted to a hybrid Product Manager role where I assist our engineers
        in scoping out new features, managing the launch of the feature, and writing out training docs.
      </p>
      <p>          
        As a Product Manager, I manage our Data Team which includes scoping out all of our platform's analytics, 
        coordinating with our engineers on the
        build, run the QA process, train employees on how to use analytics with clients, and write
        external facing documentation for our clients. I managed the launch of our platform's internal analytics which
        includes 6 data dashboards to showcase to merchants the value of our platform as well as understanding the 
        behavior of subscriptions.
      </p>
    </article>
  </section>
);
}