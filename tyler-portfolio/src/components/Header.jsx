import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // Main navigation container with Tailwind CSS classes
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-nowrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          {/* Updated to use React Router Link for home page */}
          <Link to="/" className="text-xl text-black dark:text-white">Tyler Yannes</Link>
        </div>
        {/* Hamburger menu and collapsible navbar container removed for simplicity, can be added if needed */}
        
        {/* Collapsible navbar container - Adjusted to always be visible */}
        <div className="flex-grow basis-[100%] items-center lg:flex lg:basis-auto lg:visible mt-2">
          {/* Left links */}
          <ul className="list-none flex flex-col pl-0 lg:flex-row lg:mt-1">
            {/* React Router Links for internal navigation */}
            <li className="my-4 pl-2 lg:my-0 lg:pr-1 lg:pl-2">
              <Link to="/about" className="text-black dark:text-white lg:px-2">About Me</Link>
            </li>
            <li className="mb-4 pl-2 lg:mb-0 lg:pr-1 lg:pl-0">
              <Link to="/portfolio" className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">Portfolio</Link>
            </li>
            <li className="mb-4 pl-2 lg:mb-0 lg:pr-1 lg:pl-0">
              <Link to="/contact" className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">Contact Me</Link>
            </li>
            <li className="mb-4 pl-2 lg:mb-0 lg:pr-1 lg:pl-0">
              <Link to="/resume" className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
