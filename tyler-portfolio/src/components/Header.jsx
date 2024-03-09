import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <h1 className="navbar-h1">Tyler Yannes</h1>
      <nav>
        <ul>
          <li><Link to="/github">Github</Link></li>
          <li><Link to="/linkedin">LinkedIn</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
