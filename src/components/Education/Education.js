// src/components/Education/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import nitteLogo from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/components/Education/logos/nitte.png'; // Update with the correct logo path
import chaitanyaLogo from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/components/Education/logos/chaitanya.png'; // Update with the correct logo path
import vidyaniketanLogo from 'C:/Users/dophd/OneDrive/Desktop/trialthree/portfolio/src/components/Education/logos/vidyaniketan.png'; // Update with the correct logo path

const educationData = [
  {
    institution: 'Nitte Meenakshi Institute of Technology',
    degree: 'B.E in Aeronautical Engineering – 7.86 CGPA (Till 6th Sem)',
    year: '2021 - 2025',
    logo: nitteLogo,
  },
  {
    institution: 'Sri Chaitanya PU College',
    degree: '2nd PU – PCMC – 78.1%',
    year: '2019 - 2021',
    logo: chaitanyaLogo,
  },
  {
    institution: 'Vidyaniketan Public School',
    degree: '10th Grade – CBSE – 74%',
    year: '2007 - 2019',
    logo: vidyaniketanLogo,
  },
];

function Education() {
  return (
    <motion.section 
      id="education" 
      className="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Education</h2>
      <div className="education-content">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <img src={item.logo} alt="Institution Logo" className="education-logo" />
            <div className="education-info">
              <h3>{item.institution}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
