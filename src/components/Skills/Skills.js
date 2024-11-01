// src/components/Skills/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Adjusting the import paths to be relative to the Skills.js file
import SolidWorksLogo from './logos/solidworks.png'; // Path to SolidWorks logo
import designmodellerLogo from './logos/ansys.png'; // Path to Design Modeller logo
import hypermeshLogo from './logos/hypermesh.png'; // Path to Hyper Mesh logo
import ansysmeshingLogo from './logos/ansys.png'; // Path to Ansys Meshing logo
import fluentLogo from './logos/ansys.png'; // Path to Fluent logo
import patranLogo from './logos/patran.png'; // Path to Patran logo
import matlabLogo from './logos/matlab.png'; // Path to MATLAB logo
import excelLogo from './logos/excel.png'; // Path to Excel logo

function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Modelling and Meshing</h3>
          <div className="tool">
            <img src={SolidWorksLogo} alt="SolidWorks Logo" className="tool-logo" />
            <span>SolidWorks</span>
          </div>
          <div className="tool">
            <img src={designmodellerLogo} alt="Design Modeller Logo" className="tool-logo" />
            <span>Design Modeller</span>
          </div>
          <div className="tool">
            <img src={hypermeshLogo} alt="Hyper Mesh Logo" className="tool-logo" />
            <span>Hyper Mesh</span>
          </div>
          <div className="tool">
            <img src={ansysmeshingLogo} alt="Ansys Meshing Logo" className="tool-logo" />
            <span>Ansys Meshing</span>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>Analysis</h3>
          <div className="tool">
            <img src={fluentLogo} alt="Fluent Logo" className="tool-logo" />
            <span>Fluent</span>
          </div>
          <div className="tool">
            <img src={patranLogo} alt="Patran Logo" className="tool-logo" />
            <span>Patran</span>
          </div>
        </div>
        
        <div className="skill-card">
          <h3>Others</h3>
          <div className="tool">
            <img src={matlabLogo} alt="MATLAB Logo" className="tool-logo" />
            <span>MATLAB</span>
          </div>
          <div className="tool">
            <img src={excelLogo} alt="Excel Logo" className="tool-logo" />
            <span>Excel</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
