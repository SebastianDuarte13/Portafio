import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular llamada a MockAPI
      const response = await fetch('https://64b21e4c38e74e386d52bf0f.mockapi.io/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="contact-title">Contáctame</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar de ti!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Información de Contacto</h3>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  
            <svg viewBox="0 0 128 128">
            <path fill="#f0000" d="M27.271.11c-.2.078-5.82 3.28-12.487 7.112-8.078 4.644-12.227 7.09-12.449 7.32-.19.225-.34.482-.438.76-.167.564-.179 82.985-.01 83.578.061.23.26.568.44.754.436.46 48.664 28.19 49.25 28.324.272.065.577.054.88-.03.658-.165 48.76-27.834 49.188-28.286.175-.195.375-.532.44-.761.084-.273.115-4.58.115-13.655v-13.26l11.726-6.735c11.056-6.357 11.733-6.755 12.017-7.191l.29-.47V43.287c0-15.548.03-14.673-.585-15.235-.165-.146-5.798-3.433-12.53-7.31L100.89 13.71h-1.359l-11.963 6.87c-6.586 3.788-12.184 7.027-12.457 7.203-.272.18-.597.512-.73.753l-.242.417-.054 13.455-.048 13.46-9.879 5.69c-5.434 3.124-9.957 5.71-10.053 5.734-.175.049-.187-1.232-.187-25.966V15.293l-.26-.447c-.326-.545 1.136.324-13.544-8.114C27.803-.348 28.098-.2 27.27.11zm11.317 10.307c5.15 2.955 9.364 5.4 9.364 5.43 0 .031-4.516 2.641-10.035 5.813l-10.041 5.765-10.023-5.764c-5.507-3.173-10.02-5.783-10.02-5.814 0-.03 4.505-2.64 10.013-5.805l9.999-5.752.69.376c3.357 1.907 6.708 3.824 10.053 5.751zm71.668 13.261c5.422 3.122 9.908 5.702 9.95 5.744.114.103-19.774 11.535-20.046 11.523-.272-.008-19.915-11.335-19.907-11.473.01-.157 19.773-11.527 19.973-11.496.091.022 4.607 2.59 10.03 5.702zM16.3 25.328l9.558 5.503.055 27.247.05 27.252.233.368c.122.194.352.459.52.581.158.115 5.477 3.146 11.818 6.724l11.52 6.506v11.527c0 6.326-.043 11.516-.097 11.516-.041 0-10-5.699-22.124-12.676L5.793 97.201l-.03-38.966-.019-38.954.49.271c.283.15 4.807 2.748 10.065 5.775zm33.754 19.18v25.109l-.387.253c-.525.332-19.667 11.335-19.732 11.335-.03 0-.054-11.336-.054-25.193l.012-25.182 10-5.752c5.499-3.165 10.034-5.733 10.088-5.714.039.024.073 11.34.073 25.144zm38.15-5.775 10.023 5.763V55.92c0 10.838-.011 11.42-.176 11.357-.107-.041-4.642-2.64-10.083-5.774l-9.91-5.69v-11.42c0-6.287.032-11.424.062-11.424.043 0 4.577 2.592 10.084 5.764zm34.164 5.587c0 6.254-.042 11.412-.084 11.462-.072.115-19.896 11.538-20.022 11.538-.031 0-.062-5.135-.062-11.423v-11.42l10-5.756c5.507-3.16 10.042-5.752 10.084-5.752.053 0 .084 5.105.084 11.351zM95.993 70.933 52.005 96.04 32.056 84.693S76 59.277 76.176 59.343zm2.215 14.827-.034 11.442-22.028 12.676c-12.12 6.976-22.082 12.675-22.132 12.675-.053 0-.095-4.658-.095-11.516V99.51l22.08-12.592c12.132-6.923 22.101-12.59 22.154-12.602.043 0 .062 5.148.054 11.443z"></path>
            </svg>
          
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>jsdr177@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-text">
                  <h4>Teléfono</h4>
                  <p>+57 322 744 7394</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-text">
                  <h4>Ubicación</h4>
                  <p>Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Asunto del mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Enviar mensaje
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div 
                className="status-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-check-circle"></i>
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="status-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                Hubo un error al enviar el mensaje. Inténtalo de nuevo.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
