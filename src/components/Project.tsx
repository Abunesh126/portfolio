import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiZap } from 'react-icons/fi';
import '../styles/components.css';

// Import project images
import hydrowatchImg from '../assets/project profile/Hydrowatch.jpg';
import doveImg from '../assets/project profile/Dove.jpg';
import riderxImg from '../assets/project profile/RiderX.jpg';
import auraImg from '../assets/project profile/Aura.jpg';
import claveImg from '../assets/project profile/Clave.jpg';
import portfolioImg from '../assets/project profile/portfilo.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

const Projects = () => {
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

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "HydroWatch",
      description: "A TypeScript-based water management app, designed with Figma, featuring real-time monitoring and analytics. Integrated with an LSTM RNN model for water level prediction to support flood risk assessment and sustainable resource management.",
      technologies: ["TypeScript", "React", "Node.js", "Python/Flask", "LSTM RNN", "Figma"],
      githubUrl: "https://github.com/Abunesh126/HydroWatch",
      liveUrl: "https://hydrowatch-demo.vercel.app",
      image: hydrowatchImg,
    },
    {
      id: 2,
      title: "DOVE Sign",
      description: "An innovative digital signing platform with advanced authentication and document management features. Built primarily with JavaScript, offering secure document workflows and digital signature capabilities.",
      technologies: ["JavaScript", "Java", "XSLT", "HTML", "Python"],
      githubUrl: "https://github.com/Abunesh126/DOVE-Sign",
      liveUrl: "https://dove-sign-demo.vercel.app",
      image: doveImg,
    },
    {
      id: 3,
      title: "RiderX",
      description: "AI-powered rider safety system for KTM bikes that uses a dashcam and computer vision to detect incorrect posture in real time and alert the rider instantly",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
      githubUrl: "https://github.com/Abunesh126/RiderX",
      liveUrl: "https://riderx-demo.vercel.app",
      image: riderxImg
    },
    {
      id: 4,
      title: "Aura",
      description: "A sophisticated TypeScript-based application focused on user experience and modern web technologies. Features elegant design patterns, responsive layouts, and optimized performance for enhanced user interaction.",
      technologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Abunesh126/Aura",
      liveUrl: "https://aura-demo.vercel.app",
      image: auraImg,
    },
    {
      id: 5,
      title: "Clave",
      description: "A radar-signal-based AI model for classifying drones and non-drones (e.g.,drone,aircraft,birds) using micro-Doppler signatures. The system processes .mat radar files, extracts features, and predicts the target class with high accuracy.",
      technologies: ["Python", "CSS", "HTML", "JavaScript"],
      githubUrl: "https://github.com/Abunesh126/Clave",
      liveUrl: "https://clave-demo.vercel.app",
      image: claveImg
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This luxury-themed portfolio website showcasing modern web development techniques with beautiful animations and responsive design. Built with cutting-edge technologies for optimal performance.",
      technologies: ["CSS", "TypeScript", "JavaScript", "HTML"],
      githubUrl: "https://github.com/Abunesh126/portfolio",
      liveUrl: "https://abunesh-portfolio.vercel.app",
      image: portfolioImg,
      
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Hero-style background orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="projects-bg-orb projects-bg-orb-1"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="projects-bg-orb projects-bg-orb-2"
      />
      <motion.div 
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="projects-bg-orb projects-bg-orb-3"
      />

      {/* Main content container */}
      <motion.div 
        className="projects-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        {/* Section Header - Following Hero typography pattern */}
        <motion.div 
          className="projects-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.15, delay: 0.075 }}
        >
          <motion.h2 
            className="projects-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="projects-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.125 }}
          >
            A showcase of my latest work in web development, AI, and data science. Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        {/* Projects Grid - Enhanced with Hero-style animations */}
        <motion.div 
          className="projects-grid"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ 
                y: isVisible ? 0 : 60, 
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05 + 0.35,
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.15 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Badge */}
              {project.featured && (
                <motion.div 
                  className="project-badge"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: index * 0.05 + 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <FiZap size={12} />
                  Featured
                </motion.div>
              )}

              {/* Project Image */}
              {project.image && (
                <motion.div 
                  className="project-image-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 + 0.15 }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="project-image-overlay" />
                </motion.div>
              )}

              {/* Project Content */}
              <motion.div 
                className="project-content"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.05 + 0.45 }}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </motion.div>

              {/* Technology Tags */}
              <motion.div 
                className="project-tech"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.05 + 0.55 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    className="tech-tag"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + techIndex * 0.05 + 1.2 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Project Links */}
              <motion.div 
                className="project-links"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.05 + 0.65 }}
              >
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link secondary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="group-hover:rotate-12 transition-transform duration-300" />
                  Code
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="group-hover:scale-110 transition-transform duration-300" />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button - Following Hero CTA pattern */}
        <motion.div 
          className="projects-cta"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Abunesh126"
            target="_blank"
            rel="noopener noreferrer"
            className="btn group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiCode className="group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <FiExternalLink className="group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced sparkle effects - Following Hero pattern */}
      <div className="projects-sparkles-container">
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
          className="projects-sparkle projects-sparkle-1"
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
          className="projects-sparkle projects-sparkle-2"
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
          className="projects-sparkle projects-sparkle-3"
        />
      </div>
    </motion.section>
  );
};

export default Projects;