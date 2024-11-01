// src/components/Projects/Projects.js
import React, { useState } from 'react';
import Modal from '../Modal';
import './Projects.css';

// Import images
import image1 from '../../components/Projects/photos/wedge.png';
import image2 from '../../components/Projects/photos/composites.png'; // Update with the correct image path
import image3 from '../../components/Projects/photos/stability.png'; // Update with the correct image path
import image4 from '../../components/Projects/photos/gridfin.png'; // Update with the correct image path for project 4

const projectData = [
  {
    title: 'Supersonic Symmetric Wedge Analysis',
    details: `Conducted an analysis on a symmetric wedge in ANSYS to understand the formation of shock and expansion waves at supersonic speed and validated it using code written in MATLAB from Isentropic relations.`,
    image: image1,
  },
  {
    title: 'Structural Analysis of Coir Fiber Composite',
    details: `Integrated Coconut Fiber as a custom material into ANSYS and created a composite to perform a static linear structural analysis to determine its properties.`,
    image: image2,
  },
  {
    title: 'Performance and Stability Analysis',
    details: `Performed performance analysis like Thrust Required Curve, Range and Endurance, Landing and Takeoff Performance, and stability analysis such as Longitudinal, Lateral, and Directional Stability.`,
    image: image3,
  },
  {
    title: 'Design of Gridfins at Subsonic Speed ', // New project title
    details: `Description for Project 4 goes here. This project involves...`, // Provide details for the new project
    image: image4, // Use the imported image for project 4
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleOpenModal(project)}
          >
            <h3 className="project-title">{project.title}</h3>
            <div className="project-content">
              <img src={project.image} alt={project.title} className="project-image" />
              <p className="project-caption">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
