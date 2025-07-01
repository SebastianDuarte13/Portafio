import { motion } from 'framer-motion';
import React from 'react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastduarte/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="40" width="40">
          <path stroke="#fff" strokeLinejoin="round" d="M1.5 3.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0" strokeWidth="1"></path>
          <path stroke="#fff" strokeLinejoin="round" d="M1.5 22.5v-14h4v14h-4Z" clipRule="evenodd" strokeWidth="1"></path>
          <path stroke="#fff" strokeLinejoin="round" d="M8 8.5v14h4v-6.908c0 -1.092 1 -3.092 3.895 -3.092 1.643 0 2.605 0.845 2.605 2.5v7.5h4V15c0 -1.309 -0.312 -2.937 -1.394 -4.277 -1.144 -1.417 -2.913 -2.223 -5.21 -2.223 -1.513 0 -2.835 0.615 -3.896 1.366V8.5H8Z" clipRule="evenodd" strokeWidth="1"></path>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SebastianDuarte13',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="40" width="40">
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M11.996 1.771a10.486 10.486 0 0 0 -3.314 20.438c0.523 0.092 0.69 -0.216 0.69 -0.493 0 -0.25 0.005 -0.945 0 -1.824 -2.919 0.633 -3.522 -1.381 -3.522 -1.381a2.775 2.775 0 0 0 -1.163 -1.534c-0.952 -0.65 0.071 -0.638 0.071 -0.638a2.201 2.201 0 0 1 1.607 1.08 2.232 2.232 0 0 0 3.05 0.871c0.05 -0.53 0.285 -1.025 0.666 -1.397 -2.328 -0.266 -4.776 -1.165 -4.776 -5.184a4.055 4.055 0 0 1 1.08 -2.815 3.762 3.762 0 0 1 0.103 -2.774s0.882 -0.282 2.883 1.076a9.924 9.924 0 0 1 5.252 0c2.007 -1.357 2.881 -1.076 2.881 -1.076 0.387 0.878 0.424 1.87 0.104 2.774a4.05 4.05 0 0 1 1.079 2.816c0 4.03 -2.452 4.916 -4.789 5.174a2.487 2.487 0 0 1 0.718 1.933v2.904c0 0.28 0.17 0.59 0.702 0.488a10.487 10.487 0 0 0 -3.322 -20.438v0 Z" strokeWidth="1"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/duarte_bby/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="40" width="40">
          <path stroke="#fff" strokeLinejoin="round" d="M18 6.5a0.5 0.5 0 0 1 0 -1" strokeWidth="1"></path>
          <path stroke="#fff" strokeLinejoin="round" d="M18 6.5a0.5 0.5 0 0 0 0 -1" strokeWidth="1"></path>
          <path stroke="#fff" strokeLinejoin="round" d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0" strokeWidth="1"></path>
          <path stroke="#fff" d="M16.5 1.5h-9a6 6 0 0 0 -6 6v9a6 6 0 0 0 6 6h9a6 6 0 0 0 6 -6v-9a6 6 0 0 0 -6 -6Z" strokeWidth="1"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link ${link.name.toLowerCase()}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
