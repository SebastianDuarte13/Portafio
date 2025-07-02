import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getPrevIndex = () => (currentIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentIndex + 1) % projects.length;

  const currentProject: Project = projects[currentIndex];
  const prevProjectData: Project = projects[getPrevIndex()];
  const nextProjectData: Project = projects[getNextIndex()];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="projects-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="title-proyectos">Proyectos</h1>
        </motion.div>

        <div className="slider-container">
          <motion.div 
            className="slider-preview prev-preview"
            onClick={prevProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={prevProjectData.image} 
              alt={`Proyecto ${prevProjectData.title}`} 
              className="preview-image"
            />
            <h4 className="preview-title">{prevProjectData.title}</h4>
          </motion.div>

          <div className="slider-main">
            <motion.button 
              className="nav-button prev-btn"
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Proyecto anterior"
            >
              &lt;
            </motion.button>

            <div className="slider-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="slide active"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <a 
                    href={currentProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <motion.img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="project-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  
                  <div className="slide-info">
                    <h3 className="slide-title">{currentProject.title}</h3>
                    <p className="slide-description">{currentProject.description}</p>
                    
                    {currentProject.technologies && (
                      <div className="technologies">
                        {currentProject.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button 
              className="nav-button next-btn"
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Proyecto siguiente"
            >
              &gt;
            </motion.button>
          </div>

          <motion.div 
            className="slider-preview next-preview"
            onClick={nextProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={nextProjectData.image} 
              alt={`Proyecto ${nextProjectData.title}`} 
              className="preview-image"
            />
            <h4 className="preview-title">{nextProjectData.title}</h4>
          </motion.div>
        </div>

        <div className="slider-dots">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>

        <div className="auto-play-indicator">
          <div className={`play-icon ${isAutoPlaying ? 'playing' : 'paused'}`}>
            {isAutoPlaying ? '⏸️' : '▶️'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
