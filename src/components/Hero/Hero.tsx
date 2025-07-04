import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import AnimatedText from '../UI/AnimatedText';
import ParticlesBackground from '../UI/ParticlesBackground';
import SocialLinks from '../UI/SocialLinks';
import './Hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const header = document.querySelector('header');
      const headerRect = header?.getBoundingClientRect();

      if (!headerRect || e.clientY < headerRect.top || e.clientY > headerRect.bottom) {
        createCursorTrail(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createCursorTrail = (x: number, y: number) => {
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-effect');
    cursorTrail.style.left = x + 'px';
    cursorTrail.style.top = y + 'px';
    // document.body.appendChild(cursorTrail);

    setTimeout(() => {
      cursorTrail.remove();
    }, 600);
  };

  const createCenizas = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <motion.div
        key={i}
        className="ceniza"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [-100, -500],
          x: [0, Math.random() * 200 - 100]
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ));
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  const desarrolladorLetters = "Desarrollador".split("");

  return (
    <section id="hero" className="hero-section">
      <ParticlesBackground />
      
      <div className="cenizas">
        {createCenizas()}
      </div>

      <div className="hero-content">
        <motion.div 
          className="nombre"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="top japanese-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="temblor letra3">★</h2>
            <h2 className="temblor letra3">SPACE</h2>
            <h2 className="temblor letra3">★</h2>
          </motion.div>

          <div className="animated-text-container">
            <AnimatedText />
          </div>

          <motion.div 
            className="descripcion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {desarrolladorLetters.map((letter, index) => (
              <motion.h1
                key={index}
                className="letra"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div 
            className="enfoques"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <ul>
              <li>Software</li>
              <li>BackEnd</li>
              <li>FrontEnd</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div 
            className="top japanese-text bottom-japanese"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <h2 className="temblor letra3">★</h2>
            <h2 className="temblor letra3">予</h2>
            <h2 className="temblor letra3">★</h2>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <div className="mouse-btn">
          <div className="mouse-scroll"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
