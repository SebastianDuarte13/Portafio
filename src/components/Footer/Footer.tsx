import { motion } from 'framer-motion';
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastduarte/',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SebastianDuarte13',
      icon: 'fab fa-github'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/duarte_bby/',
      icon: 'fab fa-instagram'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <motion.div className="footer-brand" variants={itemVariants}>
            <h3>Sebastian Duarte</h3>
            <p>Desarrollador Full Stack</p>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Navegación</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#purpose">Propósito</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            <h4>Contacto</h4>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> tu.email@ejemplo.com</p>
              <p><i className="fas fa-phone"></i> +57 300 123 4567</p>
              <p><i className="fas fa-map-marker-alt"></i> Colombia</p>
            </div>
          </motion.div>

          <motion.div className="footer-social" variants={itemVariants}>
            <h4>Sígueme</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sebastian Duarte. Todos los derechos reservados.</p>
            <div className="footer-actions">
              <a href="/hoja_vida.pdf" download className="download-cv">
                <i className="fas fa-download"></i>
                Descargar CV
              </a>
              <motion.button 
                onClick={scrollToTop}
                className="scroll-to-top"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Volver arriba"
              >
                <i className="fas fa-arrow-up"></i>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="footer-background">
        <div className="footer-wave"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
