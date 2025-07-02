import { motion } from 'framer-motion';
import React from 'react';
import './Purpose.css';

const Purpose: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8
      }
    })
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

  const titleLetters = ">Propósito>".split("");

  return (
    <section id="purpose" className="purpose-section">
      <div className="purpose-container">
        <motion.div 
          className="purpose-title poppins-light"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {titleLetters.map((letter, index) => (
            <motion.h1
              key={index}
              className="purpose-letter"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={letterVariants}
              viewport={{ once: true }}
            >
              {letter}
            </motion.h1>
          ))}
        </motion.div>

        <div className="purpose-cards">
          <motion.section 
            className="purpose-card mission-card"
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-icon">
              <img src="/img/Mision.png" alt="Misión" className="purpose-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Mi Misión</h3>
              <p className="card-description mukta-malar-extralight">
                Como desarrollador de software, me enfoco en crear soluciones tecnológicas eficientes que mejoren la vida
                de las personas y optimicen los procesos empresariales. Me esfuerzo por entender las necesidades de cada
                cliente y ofrecer soluciones personalizadas, guiado por la colaboración y el trabajo en equipo. Uso
                herramientas como Git y GitHub para gestionar proyectos, manteniendo siempre una comunicación fluida con
                los stakeholders. Mi objetivo es entregar productos de alta calidad que cumplan con las expectativas de
                los clientes, combinando habilidades técnicas con una mentalidad competitiva y resiliente.
              </p>
            </div>
          </motion.section>

          <motion.section 
            className="purpose-card vision-card"
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-icon">
              <img src="/img/visión.png" alt="Visión" className="purpose-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Mi Visión</h3>
              <p className="card-description mukta-malar-extralight">
                Aspiro a lograr reconocimiento global creando proyectos innovadores que transformen el mundo tecnológico.
                Mi meta es trabajar en grandes empresas, y luego fundar mi propio producto o empresa. Me enfoco en aportar
                ideas disruptivas, desarrollar habilidades interpersonales y generar relaciones de valor, todo con el
                objetivo de posicionarme estratégicamente y seguir creciendo personal y profesionalmente.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
