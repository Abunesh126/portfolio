import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components.css';

// Import social icons
import gmailIcon from '../assets/footer icon/gmail.svg';
import githubIcon from '../assets/footer icon/github.svg';
import linkedinIcon from '../assets/footer icon/linkedin.svg';
import twitterIcon from '../assets/footer icon/twitter.svg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      platform: "Gmail",
      url: "mailto:abunesh2006@gmail.com",
      icon: gmailIcon,
      ariaLabel: "Send email"
    },
    {
      platform: "GitHub",
      url: "https://github.com/Abunesh126",
      icon: githubIcon,
      ariaLabel: "View GitHub profile"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abunesh-r-p-803677278/",
      icon: linkedinIcon,
      ariaLabel: "Connect on LinkedIn"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/YourTwitterHandle",
      icon: twitterIcon,
      ariaLabel: "Follow on Twitter"
    }
  ];

  return (
    <motion.footer 
      className="footer-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero-style background effects */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -15, 0],
          rotate: [0, 90, 180]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="footer-bg-orb footer-bg-orb-1"
      />
      <motion.div 
        animate={{ 
          x: [0, -25, 0], 
          y: [0, 15, 0],
          rotate: [180, 90, 0]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="footer-bg-orb footer-bg-orb-2"
      />

      <motion.div 
        className="footer-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="footer-main"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Left Section - Full Left Corner */}
          <motion.div 
            className="footer-left-section"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="footer-brand-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="footer-brand-content">
                {/* Logo */}
                <motion.div 
                  className="footer-logo"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="footer-logo-image">
                    <img 
                      src="/src/assets/logo.png" 
                      alt="Abunesh RP Logo" 
                      className="footer-logo-img"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.className = 'footer-logo-fallback';
                        fallback.textContent = 'AR';
                        e.currentTarget.parentElement!.appendChild(fallback);
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Name & Title */}
                <motion.div 
                  className="footer-brand-info"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="footer-brand-name">
                    Abunesh RP
                  </h3>
                  <p className="footer-brand-title">Fullstack Developer</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Full Right Corner */}
          <motion.div 
            className="footer-right-section"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "Gmail" ? "_blank" : undefined}
                  rel={link.platform !== "Gmail" ? "noopener noreferrer" : undefined}
                  className="footer-social-link group"
                  aria-label={link.ariaLabel}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={link.icon} 
                    alt={link.platform} 
                    className="footer-social-icon"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                  <span className="fallback hidden">
                    {link.platform.charAt(0)}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="footer-bottom"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="footer-bottom-content"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {/* Copyright */}
            <motion.div 
              className="footer-copyright"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="footer-copyright-text">
                &copy; {currentYear} Abunesh RP Portfolio. Crafted with passion in the luxury realm of code ✨
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced sparkle effects - Following Hero pattern */}
      <div className="footer-sparkles-container">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: 0.5 
          }}
          className="footer-sparkle footer-sparkle-1"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.3, 0.5]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: 1.5 
          }}
          className="footer-sparkle footer-sparkle-2"
        />
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            scale: [0.6, 1.1, 0.6]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            delay: 2.5 
          }}
          className="footer-sparkle footer-sparkle-3"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
