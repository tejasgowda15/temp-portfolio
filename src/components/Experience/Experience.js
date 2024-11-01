// src/components/Experience/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import matlabLogo from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/components/Experience/logos/nitte.png'; // Update with your actual logo path

function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Experience</h2>
      <div className="experience-container">
        
        <div className="experience-item">
          <h3>
            <img src={matlabLogo} alt="MATLAB Logo" className="experience-logo" />
            MATLAB and Simulink Application in Aerospace Engineering
          </h3>
          <p>Sep 2023 - Oct 2023</p>
          <ul>
            <li>Learned basics of MATLAB from simple syntaxes to user-defined functions.</li>
            <li>Programmed aerospace-related problems using MATLAB.</li>
            <li>Modeled a spring-damper system in Simulink for simulation.</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h3>
            <img src={matlabLogo} alt="UAV Logo" className="experience-logo" />
            Designing, Manufacturing, and Flying of UAV
          </h3>
          <p>Jul 2022 – Jul 2022</p>
          <ul>
            <li>Designed and built a remote-controlled aircraft for the project "Design, Manufacturing, and Flight Testing of UAVs."</li>
            <li>Conducted flying tests to assess the stability of the UAV in a controlled environment.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}

export default Experience;
