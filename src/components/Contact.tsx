import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import '../styles/components.css';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "abunesh2006@gmail.com",
      link: "mailto:abunesh2006@gmail.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9042845355",
      link: "tel:+919042845355"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero-style background orbs */}
      <motion.div 
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="contact-bg-orb contact-bg-orb-1"
      />
      <motion.div 
        animate={{ 
          x: [0, -35, 0], 
          y: [0, 25, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="contact-bg-orb contact-bg-orb-2"
      />
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 24, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="contact-bg-orb contact-bg-orb-3"
      />

      {/* Main content container */}
      <motion.div 
        className="contact-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        {/* Section Header - Following Hero typography pattern */}
        <motion.div 
          className="contact-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.15, delay: 0.075 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="contact-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.125 }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ x: -40, opacity: 0 }}
              animate={{ 
                x: isVisible ? 0 : -40, 
                opacity: isVisible ? 1 : 0 
              }}
              transition={{ duration: 0.2, delay: 0.175 }}
            >
              <h3 className="contact-info-title">Get in Touch</h3>
              
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    className="contact-method group"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1 
                    }}
                    whileHover={{ 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="contact-method-icon"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <method.icon className="text-xl" />
                    </motion.div>
                    <div className="contact-method-info">
                      <div className="contact-method-label">{method.label}</div>
                      <div className="contact-method-value">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="contact-features"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <h4 className="contact-features-title">Why Work With Me?</h4>
                <ul className="contact-features-list">
                  {[
                    'Innovative solutions with cutting-edge technology',
                    'Responsive design and optimal performance',
                    'Clear communication throughout the project',
                    'Timely delivery and ongoing support'
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="contact-feature-item"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.1 
                      }}
                    >
                      <div className="contact-feature-bullet"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ x: 40, opacity: 0 }}
              animate={{ 
                x: isVisible ? 0 : 40, 
                opacity: isVisible ? 1 : 0 
              }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced sparkle effects - Following Hero pattern */}
      <div className="contact-sparkles-container">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: 0.5 
          }}
          className="contact-sparkle contact-sparkle-1"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: 1.5 
          }}
          className="contact-sparkle contact-sparkle-2"
        />
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.6, 1.3, 0.6]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            delay: 2.5 
          }}
          className="contact-sparkle contact-sparkle-3"
        />
      </div>
    </motion.section>
  );
};

export default Contact;
