import { motion } from 'framer-motion';
import '../styles/components.css';

// Import social icons
import gmailIcon from '../assets/footer icon/gmail.svg';
import githubIcon from '../assets/footer icon/github.svg';
import linkedinIcon from '../assets/footer icon/linkedin.svg';
import twitterIcon from '../assets/footer icon/twitter.svg';

const Footer = () => {
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
      url: "https://x.com/Abunesh126?t=qc4uEA-YVWUFcbvIzmHMaA&s=09",
      icon: twitterIcon,
      ariaLabel: "Follow on Twitter"
    }
  ];

  return (
    <footer className="footer-section"
    >
      {/* Enhanced luxury background */}
      <div className="footer-bg-container">
        <div className="footer-bg-primary" />
        
        {/* Animated background orbs */}
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="footer-bg-orb footer-bg-orb-1"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="footer-bg-orb footer-bg-orb-2"
        />
      </div>

      {/* Main footer content */}
      <motion.div 
        className="footer-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Bottom Layout - Name on left, Social on right */}
        <motion.div 
          className="flex justify-between items-end"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {/* Left - Name */}
          <motion.div
            className="text-left"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #fcd34d, #fde047)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              Abunesh R P
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm mt-1"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Full-stack & AI/ML Developer
            </motion.p>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            className="text-right"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#f59e0b' }}>Connect With Me</h4>
            <div className="flex justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.ariaLabel}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { 
                      duration: 0.2, 
                      delay: index * 0.05
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  <img
                    src={social.icon}
                    alt={`${social.platform} icon`}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright - Centered at bottom */}
        <motion.div 
          className="text-center pt-8 mt-8 border-t border-gray-700"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <motion.p 
            className="text-gray-400"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.4 }}
          >
            © {new Date().getFullYear()} Abunesh R P. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced sparkle effects */}
      <div className="footer-sparkles-container">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: 0.5 
          }}
          className="footer-sparkle footer-sparkle-1"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 1.25, 
            repeat: Infinity, 
            delay: 1.5 
          }}
          className="footer-sparkle footer-sparkle-2"
        />
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.6, 1.3, 0.6]
          }}
          transition={{ 
            duration: 1.75, 
            repeat: Infinity, 
            delay: 2.5 
          }}
          className="footer-sparkle footer-sparkle-3"
        />
      </div>
    </footer>
  );
};

export default Footer;
