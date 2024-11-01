// src/components/Contact/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, feel free to email me at:</p>
      <a href="mailto:tejas.krishnegowda@gmail.com" className="contact-email">tejas.krishnegowda@gmail.com</a>
    </motion.section>
  );
}

export default Contact;
