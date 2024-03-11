import React from 'react';
import conferenceImage from '../assets/conference-image.png';

export default function About() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full lg:mb-0 lg:w-5/12">
            <div className="flex justify-center lg:justify-start lg:py-12">
              <img src={conferenceImage} alt="Tyler on a stage presenting" className="z-10 w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-blue-400 p-6 text-white lg:pl-12">
              <div className="lg:pl-12" style={{ paddingLeft: '20px' }}> 
                <h1 className="mb-8 text-3xl font-bold">About Me</h1>
                <p className="mb-8 pb-2">
                  I'm Tyler Yannes - I live in Austin, TX and I'm a hardworking professional with over 7 years of experience in 
                  the Shopify ecommerce ecosystem. I have worked with over 100 brands to develop growth
                  strategies optimizing acquisition and retention.
                </p>
                <p className="mb-8 pb-2">
                  I currently work for a SAAS company that powers recurring billing (subscriptions) for merchants
                  on Shopify. In March of 2023, I was promoted to a hybrid Product Manager role.
                </p>
                <p className="mb-8 pb-2">
                  As a Product Manager, I manage our Data Team which includes scoping out all of our platform's analytics, 
                  coordinating with our engineers on the build, and managing the launch of our platform's internal analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
