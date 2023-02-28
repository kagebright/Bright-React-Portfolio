import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/portfolio" className="nav__link">Portfolio</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">Contact</Link>
          </li>
          <li className="nav__item">
            <Link to="/resume" className="nav__link">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
