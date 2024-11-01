// src/components/Modal.js
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  // Disable scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect on unmount or when isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {project ? (
          <>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} className="modal-image" />
            <p>{project.details}</p>
          </>
        ) : (
          <p>No project selected.</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
