import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <img src="/img/logo.png" alt="Marca personal" width="55" height="50" />
      </div>
      
      <nav className={`nav rocknroll-one-regular ${isMenuOpen ? 'show' : ''}`}>
        <a 
          href="/hoja_vida.pdf" 
          download="hoja_vida.pdf" 
          className="nav-link"
          onClick={closeMenu}
        >
          Hoja de vida
        </a>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('hero')}
        >
          Inicio
        </button>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('about')}
        >
          Acerca de mí
        </button>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('purpose')}
        >
          Propósito
        </button>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('skills')}
        >
          Habilidades
        </button>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('projects')}
        >
          Proyectos
        </button>
        <button 
          className="nav-link nav-button"
          onClick={() => handleLinkClick('contact')}
        >
          Contacto
        </button>
      </nav>

      <button 
        className="menu-icon" 
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </motion.header>
  );
};

export default Header;
