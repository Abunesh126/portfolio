import React, { useEffect, useState, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Code,
  Database,
  Brain,
  Rocket,
  Terminal,
  Zap,
  Mail,
} from "lucide-react";
import profileImg from "../assets/profile/profile.jpg";

// Import CSS styles
import "../styles/components.css";

// Type definitions
interface Role {
  text: string;
  icon: React.ReactNode;
}

interface HeroProps {
  name?: string;
  profileImage?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  description?: string;
}

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400,
      mass: 0.6,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Custom hook for role cycling
const useRoleCycling = (roles: Role[], interval: number = 3000) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const nextRole = useCallback(() => {
    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    const timer = setInterval(nextRole, interval);
    return () => clearInterval(timer);
  }, [nextRole, interval]);

  return { currentRole: roles[currentRoleIndex] };
};

const Hero: React.FC<HeroProps> = ({
  name = "Abunesh R P",
  profileImage = profileImg,
  githubUrl = "https://github.com/Abunesh126",
  linkedinUrl = "https://www.linkedin.com/in/abunesh-r-p-803677278/",
  description = "I build powerful, scalable web applications and AI-driven solutions by combining expertise in frontend, backend, and data modeling — delivering innovative products with precision and performance.",
}) => {
  const roles: Role[] = [
    { text: "Fullstack Developer", icon: <Code className="w-5 h-5" /> },
    { text: "Data Analyst", icon: <Database className="w-5 h-5" /> },
    { text: "AI/ML Developer", icon: <Brain className="w-5 h-5" /> },
    { text: "Innovation Engineer", icon: <Zap className="w-5 h-5" /> },
  ];

  const { currentRole } = useRoleCycling(roles);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-luxury-section"
      aria-label="Hero section"
      role="banner"
    >
      {/* Enhanced luxury background */}
      <div className="hero-bg-container">
        {/* Primary dark luxury gradient */}
        <div className="hero-bg-primary" />

        {/* Animated luxury background elements */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="hero-bg-orb-1"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="hero-bg-orb-2"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hero-bg-orb-3"
        />

        {/* Luxury grid pattern overlay */}
        <div className="hero-grid-pattern" />
      </div>

      {/* Floating Particles */}
      <div className="hero-particles-container">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0,
          }}
          className="hero-particle hero-particle-1"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="hero-particle hero-particle-2"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.75,
            repeat: Infinity,
            delay: 2,
          }}
          className="hero-particle hero-particle-3"
        />
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, -8, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.25,
            repeat: Infinity,
            delay: 3,
          }}
          className="hero-particle hero-particle-4"
        />

        {/* Additional floating particles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="hero-particle hero-particle-5"
        />
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2.75,
            repeat: Infinity,
            delay: 1.5,
          }}
          className="hero-particle hero-particle-6"
        />
        <motion.div
          animate={{
            y: [0, -22, 0],
            opacity: [0.4, 1, 0.4],
            rotate: [0, -180],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 2.5,
          }}
          className="hero-particle hero-particle-7"
        />
        <motion.div
          animate={{
            y: [0, -16, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            delay: 3.5,
          }}
          className="hero-particle hero-particle-8"
        />
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, -5, 0],
            opacity: [0.5, 0.9, 0.5],
            rotate: [0, 270],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            delay: 4,
          }}
          className="hero-particle hero-particle-9"
        />
        <motion.div
          animate={{
            y: [0, -14, 0],
            x: [0, -18, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            delay: 4.5,
          }}
          className="hero-particle hero-particle-10"
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-main-container"
      >
        <div className="hero-content-wrapper">
          <div className="hero-grid">
            {/* Left column - Main content */}
            <div className="hero-left-column">
              {/* Profile image with luxury styling */}
              <motion.div
                variants={itemVariants}
                className="hero-profile-wrapper"
              >
                <div className="hero-profile-container">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="hero-profile-motion-wrapper"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt={`${name} - Profile`}
                        className="hero-profile-image"
                        loading="lazy"
                      />
                    ) : (
                      <div className="hero-profile-fallback">
                        <span className="hero-profile-initials">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                    <div className="hero-profile-glow" />
                  </motion.div>
                  {/* Crown decoration */}
                  <div className="hero-crown">👑</div>
                </div>
              </motion.div>

              {/* Name with luxury gradient - moved below profile */}
              <h1 className="hero-name">{name}</h1>

              {/* Dynamic role with enhanced styling */}
              <div className="hero-role-container">
                <div className="hero-role-icon-wrapper">{currentRole.icon}</div>
                <span>{currentRole.text}</span>
              </div>

              {/* Description */}
              <motion.p variants={itemVariants} className="hero-description">
                {description}
              </motion.p>

              {/* CTA buttons with luxury styling */}
              <motion.div
                variants={itemVariants}
                className="hero-cta-container"
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 162, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="hero-btn-primary"
                >
                  <Rocket className="w-4 h-4" />
                  View Projects
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 162, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="hero-btn-primary"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.button>
                <motion.a
                  href="/src/assets/profile/resume.pdf"
                  download="Abunesh_RP_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hero-btn-secondary"
                >
                  <Terminal className="w-4 h-4" />
                  Resume
                </motion.a>
              </motion.div>

              {/* Social links with luxury styling */}
              <motion.div
                variants={itemVariants}
                className="hero-social-container"
              >
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hero-social-link"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hero-social-link"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right column - Enhanced floating elements */}
            <div className="hero-right-column">
              <div className="hero-floating-container">
                {/* Code snippet 1 - Main developer object */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="hero-code-card hero-code-card-1"
                >
                  <div className="hero-code-dots">
                    <div className="hero-code-dot-red"></div>
                    <div className="hero-code-dot-yellow"></div>
                    <div className="hero-code-dot-green"></div>
                    <span className="hero-code-filename">developer.js</span>
                  </div>
                  <div className="hero-code-content">
                    <div className="hero-syntax-keyword">const</div>
                    <div className="hero-syntax-function ml-2">
                      developer = {`{`}
                    </div>
                    <div className="hero-syntax-string ml-4">
                      name: '{name.split(" ")[0]}',
                    </div>
                    <div className="hero-syntax-property ml-4">
                      passion: 'Innovation',
                    </div>
                    <div className="hero-syntax-value ml-4">
                      skills: ['React', 'AI', 'Data'],
                    </div>
                    <div className="hero-syntax-emoji ml-4">
                      mission: 'Build Future' ✨
                    </div>
                    <div className="hero-syntax-function ml-2">{`}`}</div>
                  </div>
                </motion.div>

                {/* Terminal window */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "2s" }}
                  className="hero-terminal-card"
                >
                  <div className="hero-terminal-header">
                    <Terminal className="w-4 h-4 text-amber-400" />
                    <span className="hero-terminal-title">Terminal</span>
                    <div className="hero-terminal-dots">
                      <div className="hero-code-dot-red"></div>
                      <div className="hero-code-dot-yellow"></div>
                      <div className="hero-code-dot-green"></div>
                    </div>
                  </div>
                  <div className="hero-terminal-content">
                    <div className="hero-terminal-command">
                      $ npm run innovation
                    </div>
                    <div className="hero-terminal-success">
                      ✓ Building the future...
                    </div>
                    <div className="hero-terminal-info">
                      ✓ Compiling dreams...
                    </div>
                    <div className="hero-terminal-warning">
                      ✓ Deploying solutions...
                    </div>
                    <div className="hero-terminal-ready">
                      <div className="hero-terminal-pulse"></div>
                      <span className="hero-terminal-text">
                        Ready to innovate!
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating geometric shapes */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "4s" }}
                  className="hero-shape-1"
                >
                  <div className="hero-shape-blur hero-shape-blur-1" />
                </motion.div>

                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "3s" }}
                  className="hero-shape-2"
                >
                  <div className="hero-shape-blur hero-shape-blur-2" />
                </motion.div>

                {/* Additional decorative elements */}
                <div className="hero-deco-square"></div>
                <div className="hero-deco-circle"></div>
                <div className="hero-deco-rect"></div>

                {/* More floating decorative elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="hero-deco-triangle"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hero-deco-diamond"
                ></motion.div>

                <motion.div
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hero-deco-hexagon"
                ></motion.div>

                <motion.div
                  animate={{
                    rotate: [0, -270],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="hero-deco-star"
                ></motion.div>

                <motion.div
                  animate={{
                    x: [0, 25, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="hero-deco-pentagon"
                ></motion.div>

                <motion.div
                  animate={{
                    rotate: [0, 180, 0],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="hero-deco-octagon"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                  className="hero-deco-cross"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Corner Decorative Elements */}
      <div className="hero-corner-decorations">
        {/* Top Left Corner */}
        <div className="hero-corner-top-left">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hero-corner-shape-1"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hero-corner-shape-2"
          />
          {/* Additional corner elements */}
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="hero-corner-extra-1"
          />
        </div>

        {/* Top Right Corner */}
        <div className="hero-corner-top-right">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="hero-corner-shape-3"
          />
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-corner-extra-2"
          />
        </div>

        {/* Bottom Left Corner */}
        <div className="hero-corner-bottom-left">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hero-corner-shape-4"
          />
          <motion.div
            animate={{
              rotate: [0, -90, -180],
              x: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hero-corner-extra-3"
          />
        </div>

        {/* Bottom Right Corner */}
        <div className="hero-corner-bottom-right">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="hero-corner-shape-5"
          />
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hero-corner-shape-6"
          />
          <motion.div
            animate={{
              rotate: [0, 270],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="hero-corner-extra-4"
          />
        </div>

        {/* Center floating elements */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-center-float-1"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            rotate: [360, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="hero-center-float-2"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [0.8, 1.4, 0.8],
            rotate: [0, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="hero-center-float-3"
        />
      </div>

      {/* Additional sparkle effects */}
      <div className="hero-sparkles-container">
        <motion.div
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="hero-sparkle hero-sparkle-1"
        />
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1.5,
          }}
          className="hero-sparkle hero-sparkle-2"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 2.5,
          }}
          className="hero-sparkle hero-sparkle-3"
        />
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 3.5,
          }}
          className="hero-sparkle hero-sparkle-4"
        />

        {/* More sparkle effects */}
        <motion.div
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [0.4, 1.6, 0.4],
            rotate: [0, 180],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 4.5,
          }}
          className="hero-sparkle hero-sparkle-5"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.9, 1.1, 0.9],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 5.5,
          }}
          className="hero-sparkle hero-sparkle-6"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.3, 1.7, 0.3],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: 6,
          }}
          className="hero-sparkle hero-sparkle-7"
        />
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.5, 0.8],
            rotate: [0, -270],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 7,
          }}
          className="hero-sparkle hero-sparkle-8"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.5, 1.8, 0.5],
            x: [0, -8, 0],
            y: [0, 12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 8,
          }}
          className="hero-sparkle hero-sparkle-9"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [0.6, 1.9, 0.6],
            rotate: [0, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            delay: 9,
          }}
          className="hero-sparkle hero-sparkle-10"
        />
      </div>
    </section>
  );
};

export default Hero;
