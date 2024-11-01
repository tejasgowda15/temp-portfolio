// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="about" smooth={true} duration={100}>About</Link>
      <Link to="skills" smooth={true} duration={100}>Skills</Link>
      <Link to="experience" smooth={true} duration={100}>Experience</Link>
      <Link to="projects" smooth={true} duration={100}>Projects</Link>
      <Link to="certifications" smooth={true} duration={100}>Certifications</Link>
      <Link to="education" smooth={true} duration={100}>Education</Link>
      <Link to="involvement" smooth={true} duration={100}>Involvement</Link>
      <Link to="contact" smooth={true} duration={100}>Contact</Link>
    </nav>
  );
}

export default Navbar;
