// src/components/Involvement/Involvement.js
import React from 'react';
import { motion } from 'framer-motion';
import './Involvement.css';

function Involvement() {
  return (
    <motion.section 
      id="involvement" 
      className="involvement"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Involvement</h2>
      <div className="involvement-list">
        <div className="involvement-item">
          <h3>Chiguru Club</h3>
          <p>Volunteered in organizing events for Kannada Rajyotsava like ‘Geeta Gayana’ and ‘Kathe Kattu’.</p>
        </div>
        <div className="involvement-item">
          <h3>IEEE Student Member</h3>
          <p>Submitted a paper to ICMNWC-2024 at the Sri Siddhartha Academy of Higher Education Conference on a solar panel with a sun tracking mechanism using ML.</p>
        </div>
        <div className="involvement-item">
          <h3>Event Organization</h3>
          <p>Organized and coordinated events like “Aero Farewell,” “Dassault Systems Project Handover,” and “Gate-Jam Outreach Program.”</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Involvement;
