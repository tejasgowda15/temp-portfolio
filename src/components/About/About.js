// src/components/About/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import myImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/photos/profiletwo.png'; // Update this line with your image path

function About() {
  const handleResumeClick = () => {
    // Link to your resume or handle the button click as needed
    window.open('https://drive.google.com/file/d/1vtxjUG3JjHEaYausln_hLF8qsbaTcznk/view?usp=sharing', '_blank'); // Update this line with your resume path
  };

  return (
    <motion.section 
      id="about" 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <div className="about-text">
          <h2>Hey! I'm Tejas K</h2>
          <p>I am a motivated and adaptable individual with a strong enthusiasm for embracing new challenges. My passion for learning drives me to deliver high-quality results consistently. With a positive attitude and a growth mindset, I am committed to making a meaningful contribution and achieving significant success.</p>
          <button className="resume-button" onClick={handleResumeClick}>
            Checkout my Resume
          </button>
        </div>
        <img src={myImage} alt="Myself" className="about-image" />
      </div>
    </motion.section>
  );
}

export default About;
