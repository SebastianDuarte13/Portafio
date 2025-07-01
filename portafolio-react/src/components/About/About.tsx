import { motion } from 'framer-motion';
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="background-stars">
        <img src="/img/starts.png" alt="stars" className="star1" />
        <img src="/img/starts.png" alt="stars" className="star2" />
      </div>
      
      <div className="about-container">
        <motion.div 
          className="title-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Acerca de mí</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="/img/yo.jpg" 
              alt="Sebastian Duarte" 
              className="profile-image"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="about-card poppins-semibold-italic">
              <p className="about-description">
                Técnico certificado con experiencia en Java, Python, MySQL, PostgreSQL, y frameworks como SpringBoot y
                Bootstrap. Aplico principios SOLID y arquitectura hexagonal para crear soluciones eficientes. Con
                habilidades de comunicación y enfoque creativo, me especializo en optimizar sistemas y resolver problemas
                complejos. Comprometido a contribuir al éxito de su empresa con dedicación e innovación.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
