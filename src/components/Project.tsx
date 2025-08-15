import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiZap } from 'react-icons/fi';
import '../styles/components.css';

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

const Projects: React.FC = () => {
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
      title: "AI-Powered Web Application",
      description: "A full-stack web application that leverages artificial intelligence to provide intelligent recommendations and data insights. Built with React, Node.js, and TensorFlow for seamless user experience.",
      technologies: ["React", "TypeScript", "Node.js", "TensorFlow", "MongoDB", "Express"],
      githubUrl: "https://github.com/Abunesh126",
      liveUrl: "https://your-live-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with real-time updates. Features advanced charting, filtering, and export capabilities for business intelligence.",
      technologies: ["Python", "Tableau", "React", "PostgreSQL", "Django"],
      githubUrl: "https://github.com/Abunesh126",
      liveUrl: "https://your-dashboard-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with secure payment integration, inventory management, and responsive design. Built with scalability and performance in mind.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis"],
      githubUrl: "https://github.com/Abunesh126",
      liveUrl: "https://your-ecommerce-demo.com"
    },
    {
      id: 4,
      title: "Mobile App Backend",
      description: "RESTful API backend for mobile applications with authentication, real-time notifications, and cloud storage integration. Optimized for high performance and security.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "AWS"],
      githubUrl: "https://github.com/Abunesh126"
    },
    {
      id: 5,
      title: "Machine Learning Model",
      description: "Predictive analytics model for business forecasting using machine learning algorithms. Includes data preprocessing, model training, and deployment pipeline.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Docker", "Flask"],
      githubUrl: "https://github.com/Abunesh126",
      liveUrl: "https://your-ml-demo.com"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This luxury-themed portfolio website showcasing modern web development techniques with beautiful animations and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Abunesh126/portfolio",
      liveUrl: "https://your-portfolio.com",
      featured: true
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero-style background orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20, 
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
          duration: 25, 
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
          duration: 18, 
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
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Section Header - Following Hero typography pattern */}
        <motion.div 
          className="projects-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <motion.h2 
            className="projects-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="projects-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            A showcase of my latest work in web development, AI, and data science. Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        {/* Projects Grid - Enhanced with Hero-style animations */}
        <motion.div 
          className="projects-grid"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
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
                duration: 0.6, 
                delay: index * 0.1 + 0.7,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
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
                    duration: 0.5, 
                    delay: index * 0.1 + 1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <FiZap size={12} />
                  Featured
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