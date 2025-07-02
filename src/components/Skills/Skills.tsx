import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { skills } from '../../data/portfolio';
import './Skills.css';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="neonderthaw-regular">Habilidades</h1>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <a 
                href={skill.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="skill-link"
              >
                <div className="skill-image-container">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="skill-image"
                  />
                </div>
                
                <div className={`skill-tooltip ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                  <h4 className="tooltip-title">{skill.name}</h4>
                  <p className="tooltip-description">{skill.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
