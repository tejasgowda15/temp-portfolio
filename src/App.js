// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications'; // New import
import Education from './components/Education/Education';
import Involvement from './components/Involvement/Involvement';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Navbar />
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications /> {/* Added Certifications section */}
        <Education />
        <Involvement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
