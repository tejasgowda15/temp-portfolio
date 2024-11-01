// src/components/Certifications/Certifications.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

// Add custom icons here; these can be image URLs or icon components
import LinkedInIcon from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/logos/linkedin.png';
import MatlabIcon from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/logos/matlab.png';
import CatiaIcon from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/logos/nitte.png';
import PythonIcon from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/logos/coursera.png';
import ExcelIcon from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/logos/coursera.png';

// Add images for each certification here
import SupplyChainImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/certifications pics/supplychain.jpg';
import MatlabImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/certifications pics/matlab onramp.jpg';
import CatiaImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/certifications pics/designwars.jpg';
import PythonImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/certifications pics/pythoncourse.jpg';
import ExcelImage from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/certifications pics/excel.jpg';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'Supply Chain Foundations: Project Management',
      provider: 'LinkedIn',
      icon: LinkedInIcon,
      description: 'A comprehensive course that covers the basics of supply chain management, focusing on key project management techniques and methodologies.',
      date: 'Oct 2024',
      image: SupplyChainImage,
    },
    {
      title: 'MATLAB Onramp',
      provider: 'MathWorks',
      icon: MatlabIcon,
      description: 'An introduction to MATLAB, covering the essential functions and techniques for data analysis and visualization.',
      date: 'Oct 2024',
      image: MatlabImage,
    },
    {
      title: 'Design Wars on Catia V6',
      provider: 'Nitte Meenakshi Institute of Technology',
      icon: CatiaIcon,
      description: 'Participated in "Design Wars on Catia V6" where the participants were given with an assembly to complete and the fastest one wins.',
      date: 'Dec 2023',
      image: CatiaImage,
    },
    {
      title: 'Crash Course on Python',
      provider: 'Coursera',
      icon: PythonIcon,
      description: 'A beginner-friendly course that introduces Python programming concepts and practical applications.',
      date: 'Jun 2023',
      image: PythonImage,
    },
    {
      title: 'Getting Started with Microsoft Excel',
      provider: 'Coursera',
      icon: ExcelIcon,
      description: 'An introductory course to Excel, covering formulas, functions, and data management techniques.',
      date: 'Sep 2022',
      image: ExcelImage,
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <motion.section 
      id="certifications" 
      className="certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Certifications</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(cert)}
          >
            <img src={cert.icon} alt={`${cert.provider} icon`} className="cert-icon" />
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div 
            className="cert-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
          >
            <h3>{selectedCert.title}</h3>
            <p><strong>Provided by:</strong> {selectedCert.provider}</p>
            <p><strong>Date Obtained:</strong> {selectedCert.date}</p>
            <p><strong>Description:</strong> {selectedCert.description}</p>
            {/* Added certificate image */}
            <img src={selectedCert.image} alt={`${selectedCert.title} certificate`} className="cert-image" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}

export default Certifications;
