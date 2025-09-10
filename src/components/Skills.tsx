import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Code2,
  Server,
  Database,
  Palette,
  Wrench,
  BrainCircuit,
  Monitor,
} from "lucide-react";

// Import SVG icons
import PythonIcon from "../assets/icon/python-5.svg";
import JavaIcon from "../assets/icon/java-14.svg";
import JavaScriptIcon from "../assets/icon/javascript-1.svg";
import TypeScriptIcon from "../assets/icon/typescript.svg";
import HTMLIcon from "../assets/icon/html-1.svg";
import CSSIcon from "../assets/icon/css-3.svg";
import ReactIcon from "../assets/icon/react-2.svg";
import TailwindIcon from "../assets/icon/tailwind-css-2.svg";
import BootstrapIcon from "../assets/icon/bootstrap.svg";
import NodeIcon from "../assets/icon/nodejs-1.svg";
import LaravelIcon from "../assets/icon/laravel-2.svg";
import MongoDBIcon from "../assets/icon/mongodb-icon-1.svg";
import MySQLIcon from "../assets/icon/mysql.svg";
import PostgreSQLIcon from "../assets/icon/postgresql.svg";
import GitIcon from "../assets/icon/git.svg";
import GitHubIcon from "../assets/icon/github-icon-1.svg";
import VSCodeIcon from "../assets/icon/visual-studio-code-1.svg";
import JupyterIcon from "../assets/icon/jupyter.svg";
import PostmanIcon from "../assets/icon/postman.svg";
import PyCharmIcon from "../assets/icon/pycharm.svg";
import SQLIcon from "../assets/icon/sql.svg";
import TensorFlowIcon from "../assets/icon/tensorflow-2.svg";
import TableauIcon from "../assets/icon/tableau-logo-1.svg";
import PowerBIIcon from "../assets/icon/powerbi.svg";
import BlenderIcon from "../assets/icon/blender-2.svg";
import CanvaIcon from "../assets/icon/canva-wordmark-2.svg";
import FigmaIcon from "../assets/icon/figma.svg";

// Icon mapping for skills using imported SVG icons
const skillIcons: Record<string, string> = {
  // Languages
  Python: PythonIcon,
  Java: JavaIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  HTML5: HTMLIcon,
  CSS3: CSSIcon,
  SQL: SQLIcon,

  // Frontend
  React: ReactIcon,
  TailwindCSS: TailwindIcon,
  Bootstrap: BootstrapIcon,

  // Backend
  "Node.js": NodeIcon,
  Laravel: LaravelIcon,

  // Database
  MongoDB: MongoDBIcon,
  MySQL: MySQLIcon,
  PostgreSQL: PostgreSQLIcon,

  // Tools
  Git: GitIcon,
  GitHub: GitHubIcon,
  "VS Code": VSCodeIcon,
  Jupyter: JupyterIcon,
  Postman: PostmanIcon,
  PyCharm: PyCharmIcon,

  // AI & ML
  TensorFlow: TensorFlowIcon,
  Tableau: TableauIcon,
  PowerBI: PowerBIIcon,

  // Design
  Blender: BlenderIcon,
  Canva: CanvaIcon,
  Figma: FigmaIcon,
};

// Category icons
const categoryIcons = {
  Languages: Code2,
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  "AI & ML": BrainCircuit,
  Design: Palette,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.03,
    },
  },
};

const skillsData = {
  title: "Technical Skills",
  description:
    "Explore my technical expertise across different categories. Hover over each skill to discover what I've learned and accomplished.",
  categories: {
    Languages: {
      icon: "Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "SQL",
      ],
    },
    Frontend: {
      icon: "Frontend",
      skills: ["React", "TailwindCSS", "Bootstrap"],
    },
    Backend: {
      icon: "Backend",
      skills: ["Node.js", "Laravel"],
    },
    Database: {
      icon: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    Tools: {
      icon: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Postman", "PyCharm"],
    },
    "AI & ML": {
      icon: "AI & ML",
      skills: ["TensorFlow", "Tableau", "PowerBI"],
    },
    Design: {
      icon: "Design",
      skills: ["Blender", "Canva", "Figma"],
    },
  },
  skills: {
    Python: {
      description:
        "🐍 Master of Python development with 3+ years experience. Built web applications with Django/Flask, automated workflows, and developed machine learning models. Expertise in data analysis, scripting, and API development.",
      achievements: [
        "Built 10+ web applications",
        "Automated complex workflows",
        "Developed ML models",
        "Created REST APIs",
      ],
    },
    Java: {
      description:
        "☕ Proficient in object-oriented programming with Java. Developed enterprise applications, worked with Spring Framework, and built Android applications. Strong understanding of JVM optimization and design patterns.",
      achievements: [
        "Enterprise application development",
        "Spring Framework expertise",
        "Android app development",
        "Design pattern implementation",
      ],
    },
    JavaScript: {
      description:
        "⚡ Expert in modern JavaScript (ES6+) for dynamic web applications. Experience with async programming, DOM manipulation, and building interactive user interfaces. Proficient in both frontend and backend development.",
      achievements: [
        "Modern ES6+ features",
        "Async programming",
        "Interactive UIs",
        "Full-stack development",
      ],
    },
    TypeScript: {
      description:
        "🎯 Advanced TypeScript developer ensuring type safety in large-scale applications. Experience with React TypeScript projects, API typing, and improving code maintainability through strong typing.",
      achievements: [
        "Type-safe applications",
        "React TypeScript projects",
        "API type definitions",
        "Code maintainability",
      ],
    },
    HTML5: {
      description:
        "🗂️ Semantic HTML5 markup specialist. Create accessible, SEO-optimized web structures using modern HTML5 features like Canvas, WebGL, and progressive web app capabilities.",
      achievements: [
        "Semantic markup",
        "Accessibility standards",
        "SEO optimization",
        "PWA development",
      ],
    },
    CSS3: {
      description:
        "🎨 Advanced CSS3 styling with Flexbox, Grid, animations, and responsive design. Experience with CSS-in-JS, preprocessors (Sass), and modern CSS frameworks.",
      achievements: [
        "Flexbox & Grid layouts",
        "CSS animations",
        "Responsive design",
        "CSS preprocessors",
      ],
    },
    React: {
      description:
        "⚛️ React ecosystem expert with hooks, context, and state management. Built scalable SPAs, component libraries, and implemented performance optimization techniques like memoization and lazy loading.",
      achievements: [
        "Scalable SPAs",
        "Custom hooks",
        "Performance optimization",
        "Component libraries",
      ],
    },
    TailwindCSS: {
      description:
        "🎨 Utility-first CSS framework specialist. Rapid prototyping and responsive design implementation. Custom design systems and component styling with Tailwind's advanced features.",
      achievements: [
        "Rapid prototyping",
        "Custom design systems",
        "Responsive layouts",
        "Component styling",
      ],
    },
    Bootstrap: {
      description:
        "📱 Bootstrap framework proficiency for responsive web design. Custom theme development, component customization, and mobile-first development approaches.",
      achievements: [
        "Responsive design",
        "Custom themes",
        "Component customization",
        "Mobile-first approach",
      ],
    },
    "Node.js": {
      description:
        "🟢 Node.js backend development with Express.js, REST APIs, and microservices architecture. Experience with authentication systems, database integration, and scalable server solutions.",
      achievements: [
        "REST API development",
        "Microservices architecture",
        "Authentication systems",
        "Scalable solutions",
      ],
    },
    Laravel: {
      description:
        "🔴 PHP Laravel framework expert. Built MVC applications, implemented authentication systems, created RESTful APIs, and managed database relationships with Eloquent ORM.",
      achievements: [
        "MVC applications",
        "RESTful APIs",
        "Eloquent ORM",
        "Authentication systems",
      ],
    },
    MongoDB: {
      description:
        "🍃 NoSQL database specialist with MongoDB. Schema design for document databases, aggregation pipelines, indexing strategies, and integration with Node.js applications.",
      achievements: [
        "Schema design",
        "Aggregation pipelines",
        "Indexing strategies",
        "Node.js integration",
      ],
    },
    MySQL: {
      description:
        "🐬 Relational database expert with MySQL. Query optimization, stored procedures, database normalization, and performance tuning for high-traffic applications.",
      achievements: [
        "Query optimization",
        "Stored procedures",
        "Database normalization",
        "Performance tuning",
      ],
    },
    PostgreSQL: {
      description:
        "🐘 Advanced PostgreSQL user with complex queries, JSON operations, and database administration. Experience with advanced features like window functions and custom data types.",
      achievements: [
        "Complex queries",
        "JSON operations",
        "Window functions",
        "Custom data types",
      ],
    },
    Git: {
      description:
        "🌿 Version control expert with Git workflows. Proficient in branching strategies, merge conflict resolution, rebasing, and collaborative development practices for team projects.",
      achievements: [
        "Branching strategies",
        "Conflict resolution",
        "Team collaboration",
        "Git workflows",
      ],
    },
    GitHub: {
      description:
        "🙈 GitHub power user managing repositories, pull requests, and CI/CD workflows. Experience with GitHub Actions, project management, and open-source contribution.",
      achievements: [
        "Repository management",
        "CI/CD workflows",
        "GitHub Actions",
        "Open-source contributions",
      ],
    },
    "VS Code": {
      description:
        "💻 VS Code master with custom configurations, extensions, and debugging setups. Optimized development environment for multiple programming languages and frameworks.",
      achievements: [
        "Custom configurations",
        "Extension development",
        "Debugging setups",
        "Multi-language support",
      ],
    },
    Jupyter: {
      description:
        "📊 Jupyter notebook specialist for data science and research. Created interactive data visualizations, documented analysis workflows, and shared reproducible research.",
      achievements: [
        "Data visualizations",
        "Analysis workflows",
        "Reproducible research",
        "Interactive notebooks",
      ],
    },
    Postman: {
      description:
        "🚀 API testing and development expert. Automated API testing suites, environment management, and comprehensive API documentation for REST and GraphQL services.",
      achievements: [
        "API testing suites",
        "Environment management",
        "API documentation",
        "GraphQL testing",
      ],
    },
    PyCharm: {
      description:
        "🧠 Professional Python IDE user with advanced debugging, refactoring, and project management. Configured for Django development and data science workflows.",
      achievements: [
        "Advanced debugging",
        "Code refactoring",
        "Django development",
        "Data science workflows",
      ],
    },
    SQL: {
      description:
        "🗃️ Database query optimization specialist. Written complex queries, stored procedures, and database schema design for high-performance applications.",
      achievements: [
        "Query optimization",
        "Stored procedures",
        "Schema design",
        "Performance tuning",
      ],
    },
    TensorFlow: {
      description:
        "🧠 Machine learning with TensorFlow and Keras. Built neural networks, image classification models, and deployed ML models to production environments.",
      achievements: [
        "Neural networks",
        "Image classification",
        "Model deployment",
        "Production ML",
      ],
    },
    Tableau: {
      description:
        "📈 Data visualization and business intelligence with Tableau. Created interactive dashboards, performed data analysis, and presented insights to stakeholders.",
      achievements: [
        "Interactive dashboards",
        "Data analysis",
        "Business intelligence",
        "Stakeholder presentations",
      ],
    },
    PowerBI: {
      description:
        "📊 Microsoft Power BI specialist for business intelligence and data visualization. Built comprehensive reports, created dynamic dashboards, and implemented data modeling for business insights.",
      achievements: [
        "Business intelligence reports",
        "Dynamic dashboards",
        "Data modeling",
        "Business insights",
      ],
    },
    Blender: {
      description:
        "🎬 3D modeling and animation with Blender. Created 3D assets, animations, and visual effects for web applications and presentations.",
      achievements: [
        "3D modeling",
        "Animation creation",
        "Visual effects",
        "Asset development",
      ],
    },
    Canva: {
      description:
        "🎨 Graphic design for marketing materials, social media content, and professional presentations. Brand consistency and visual communication expertise.",
      achievements: [
        "Marketing materials",
        "Social media content",
        "Brand consistency",
        "Visual communication",
      ],
    },
    Figma: {
      description:
        "🎯 UI/UX design and prototyping with Figma. Collaborative design workflows, design systems, and user interface development for web and mobile applications.",
      achievements: [
        "UI/UX design",
        "Design systems",
        "Prototyping",
        "Collaborative workflows",
      ],
    },
  },
};

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Reset to default state when leaving the skills section or when other sections come into view
  useEffect(() => {
    const currentSection = sectionRef.current;

    // Observer for Skills section
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        // When the Skills section is not visible, reset to default state
        if (!entry.isIntersecting) {
          setExpandedCategory("");
          setSelectedSkill(null);
          setHoveredSkill(null);
        }
      },
      {
        threshold: 0.1, // More sensitive - trigger when 10% of the section is visible
        rootMargin: "-5% 0px -5% 0px", // Smaller margin for faster response
      }
    );

    // Observer for Hero and Project sections to trigger reset
    const resetObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If Hero or Project section is significantly visible, reset Skills
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setExpandedCategory("");
            setSelectedSkill(null);
            setHoveredSkill(null);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of Hero/Project is visible
        rootMargin: "0px 0px 0px 0px",
      }
    );

    // Additional scroll listener for immediate response
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const heroSection = document.getElementById("hero");
      const projectsSection = document.getElementById("projects");

      if (!skillsSection) return;

      const skillsRect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if Skills section is mostly out of view
      const skillsVisibility =
        Math.max(
          0,
          Math.min(windowHeight, skillsRect.bottom) -
            Math.max(0, skillsRect.top)
        ) / windowHeight;

      // If Skills section visibility is less than 20%, reset
      if (skillsVisibility < 0.2) {
        // Check if Hero or Projects are in view
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const heroVisibility =
            Math.max(
              0,
              Math.min(windowHeight, heroRect.bottom) -
                Math.max(0, heroRect.top)
            ) / windowHeight;

          if (heroVisibility > 0.3) {
            setExpandedCategory("");
            setSelectedSkill(null);
            setHoveredSkill(null);
            return;
          }
        }

        if (projectsSection) {
          const projectsRect = projectsSection.getBoundingClientRect();
          const projectsVisibility =
            Math.max(
              0,
              Math.min(windowHeight, projectsRect.bottom) -
                Math.max(0, projectsRect.top)
            ) / windowHeight;

          if (projectsVisibility > 0.3) {
            setExpandedCategory("");
            setSelectedSkill(null);
            setHoveredSkill(null);
            return;
          }
        }
      }
    };

    // Find Hero and Project sections
    const heroSection = document.getElementById("hero");
    const projectsSection = document.getElementById("projects");

    // Start observing
    if (currentSection) {
      skillsObserver.observe(currentSection);
    }

    if (heroSection) {
      resetObserver.observe(heroSection);
    }

    if (projectsSection) {
      resetObserver.observe(projectsSection);
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (currentSection) {
        skillsObserver.unobserve(currentSection);
      }
      if (heroSection) {
        resetObserver.unobserve(heroSection);
      }
      if (projectsSection) {
        resetObserver.unobserve(projectsSection);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const selectedSkills = useMemo(() => {
    if (!expandedCategory || !(expandedCategory in skillsData.categories))
      return [];
    return skillsData.categories[
      expandedCategory as keyof typeof skillsData.categories
    ].skills;
  }, [expandedCategory]);

  const handleCategoryClick = (category: string) => {
    // Toggle functionality - if clicking the same category, close it
    if (expandedCategory === category) {
      setExpandedCategory("");
    } else {
      setExpandedCategory(category);
    }
    setSelectedSkill(null);
    setHoveredSkill(null);
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };

  const closeSkillDetails = () => {
    setSelectedSkill(null);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "transparent",
        marginTop: "-2rem",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Distributed Decorative Elements */}
      {/* Floating particles with low opacity */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 0,
        }}
        className="absolute top-[20%] left-[5%] w-2 h-2 rounded-full bg-yellow-400"
        style={{ opacity: 0.15 }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute top-[60%] right-[8%] w-3 h-3 rounded-full bg-orange-400"
        style={{ opacity: 0.12 }}
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.08, 0.2, 0.08],
          rotate: [0, 180],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 4,
        }}
        className="absolute bottom-[15%] left-[85%] w-1.5 h-1.5 rounded-full bg-yellow-300"
        style={{ opacity: 0.1 }}
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute top-[80%] left-[15%] w-2.5 h-2.5 rounded-full bg-amber-400"
        style={{ opacity: 0.13 }}
      />
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, -12, 0],
          opacity: [0.05, 0.18, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          delay: 3,
        }}
        className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-yellow-500"
        style={{ opacity: 0.08 }}
      />

      {/* Geometric shapes with very low opacity */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-[10%] right-[15%] w-8 h-8 border border-yellow-400"
        style={{
          opacity: 0.08,
          transform: "rotate(45deg)",
        }}
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [0.8, 1.1, 0.8],
          opacity: [0.03, 0.12, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-[25%] left-[10%] w-6 h-6 border border-orange-400"
        style={{
          opacity: 0.06,
          borderRadius: "30%",
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[15%] left-[10%] w-[280px] h-[280px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(245, 158, 11, 0.05), rgba(234, 179, 8, 0.05))",
          mixBlendMode: "multiply",
          filter: "blur(3rem)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[25%] right-[15%] w-[220px] h-[220px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(251, 146, 60, 0.05), rgba(245, 158, 11, 0.05))",
          mixBlendMode: "multiply",
          filter: "blur(3rem)",
        }}
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[45%] right-[35%] w-[180px] h-[180px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(252, 211, 77, 0.15), rgba(251, 191, 36, 0.15))",
          mixBlendMode: "multiply",
          filter: "blur(3rem)",
        }}
      />

      {/* Main content container */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {skillsData.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            {skillsData.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {/* Left Sidebar - Categories */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <div
              className="p-4 lg:p-6 rounded-xl border backdrop-filter backdrop-blur-lg lg:sticky lg:top-8"
              style={{
                background: "rgba(26, 32, 44, 0.8)",
                borderColor: "rgba(245, 158, 11, 0.2)",
              }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {Object.entries(skillsData.categories).map(([name], index) => {
                  const IconComponent =
                    categoryIcons[name as keyof typeof categoryIcons];
                  const isExpanded = expandedCategory === name;

                  return (
                    <motion.button
                      key={name}
                      onClick={() => handleCategoryClick(name)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 group ${
                        isExpanded
                          ? "text-amber-200 border border-amber-500/40 shadow-lg shadow-amber-500/20"
                          : "text-gray-200 hover:text-amber-100 border border-transparent hover:border-amber-500/20"
                      }`}
                      style={{
                        background: isExpanded
                          ? "rgba(245, 158, 11, 0.1)"
                          : "transparent",
                      }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                      }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{name}</span>
                      </div>
                      <motion.div
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Content Area - Skills Grid */}
          <motion.div
            className="lg:col-span-9 order-1 lg:order-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <div className="mb-8">
              {expandedCategory ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-amber-100">
                      {expandedCategory}
                    </h3>
                    <div
                      className="px-4 py-2 rounded-full border text-sm font-mono text-amber-200 shadow-lg"
                      style={{
                        background: "rgba(26, 32, 44, 0.3)",
                        borderColor: "rgba(245, 158, 11, 0.2)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {selectedSkills.length} skills
                    </div>
                  </div>

                  {/* Skills Grid with Card Flip Effect */}
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <AnimatePresence mode="wait">
                      {selectedSkills.map(
                        (skillName: string, index: number) => {
                          const skill =
                            skillsData.skills[
                              skillName as keyof typeof skillsData.skills
                            ];
                          if (!skill) return null;

                          const isHovered = hoveredSkill === skillName;
                          const isSelected = selectedSkill === skillName;

                          return (
                            <motion.div
                              key={`${expandedCategory}-${skillName}`}
                              className="relative"
                              style={{
                                perspective: "1000px",
                                transformStyle: "preserve-3d",
                              }}
                              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                rotateY: 0,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.8,
                                rotateY: 90,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.03,
                                ease: "easeOut",
                              }}
                              whileHover={{
                                scale: 1.05,
                                z: 50,
                              }}
                              onHoverStart={() => setHoveredSkill(skillName)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              onClick={() => handleSkillClick(skillName)}
                            >
                              {/* Card Container */}
                              <div
                                className="relative w-full h-40 cursor-pointer"
                                style={{
                                  transformStyle: "preserve-3d",
                                  transform: isHovered
                                    ? "rotateY(180deg)"
                                    : "rotateY(0deg)",
                                  transition: "transform 0.6s ease-in-out",
                                }}
                              >
                                {/* Front of card */}
                                <div
                                  className={`absolute inset-0 p-6 rounded-xl backdrop-filter backdrop-blur-lg transition-all duration-300 ${
                                    isSelected
                                      ? "border-amber-400/50 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/30"
                                      : "border-slate-600/30 hover:border-amber-500/40"
                                  }`}
                                  style={{
                                    background: isSelected
                                      ? "rgba(245, 158, 11, 0.1)"
                                      : "rgba(26, 32, 44, 0.2)",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    backfaceVisibility: "hidden",
                                  }}
                                >
                                  <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                                    <div
                                      className={`p-3 rounded-xl transition-all duration-300 ${
                                        isSelected ? "scale-110" : ""
                                      }`}
                                      style={{
                                        background: isSelected
                                          ? "rgba(245, 158, 11, 0.2)"
                                          : "rgba(71, 85, 105, 0.3)",
                                      }}
                                    >
                                      <img
                                        src={skillIcons[skillName]}
                                        alt={skillName}
                                        className="w-8 h-8"
                                      />
                                    </div>
                                    <h3
                                      className={`font-semibold transition-colors ${
                                        isSelected
                                          ? "text-amber-100"
                                          : "text-gray-200"
                                      }`}
                                    >
                                      {skillName}
                                    </h3>
                                  </div>
                                </div>

                                {/* Back of card - What I learned */}
                                <div
                                  className="absolute inset-0 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-amber-500/40"
                                  style={{
                                    background: "rgba(245, 158, 11, 0.15)",
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                  }}
                                >
                                  <div className="h-full flex flex-col justify-center text-center space-y-2">
                                    <h4 className="text-amber-100 font-semibold text-sm mb-2">
                                      What I've Learned
                                    </h4>
                                    <div className="space-y-1">
                                      {skill.achievements
                                        .slice(0, 3)
                                        .map(
                                          (
                                            achievement: string,
                                            idx: number
                                          ) => (
                                            <div
                                              key={idx}
                                              className="text-xs text-gray-200 leading-tight"
                                            >
                                              • {achievement}
                                            </div>
                                          )
                                        )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </AnimatePresence>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Default 12 Skills Grid */}
                  <motion.div
                    className="grid grid-cols-4 gap-6 max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* First Column - HTML, CSS, JavaScript */}
                    {[
                      { name: "HTML5", icon: HTMLIcon },
                      { name: "CSS3", icon: CSSIcon },
                      { name: "JavaScript", icon: JavaScriptIcon },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.05,
                          z: 50,
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill.name)}
                      >
                        {/* Card Container */}
                        <div
                          className="relative w-full h-40 cursor-pointer"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              hoveredSkill === skill.name
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                            transition: "transform 0.6s ease-in-out",
                          }}
                        >
                          {/* Front of card */}
                          <div
                            className="absolute inset-0 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-600/30 hover:border-amber-500/40 transition-all duration-300"
                            style={{
                              background: "rgba(26, 32, 44, 0.2)",
                              backfaceVisibility: "hidden",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                              <div
                                className="p-3 rounded-xl transition-all duration-300"
                                style={{
                                  background: "rgba(71, 85, 105, 0.3)",
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8"
                                />
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                {skill.name}
                              </h3>
                            </div>
                          </div>

                          {/* Back of card - What I learned */}
                          <div
                            className="absolute inset-0 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-amber-500/40"
                            style={{
                              background: "rgba(245, 158, 11, 0.15)",
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <div className="h-full flex flex-col justify-center text-center space-y-2">
                              <h4 className="text-amber-100 font-semibold text-sm mb-2">
                                What I've Learned
                              </h4>
                              <div className="space-y-1">
                                {skillsData.skills[
                                  skill.name as keyof typeof skillsData.skills
                                ]?.achievements
                                  .slice(0, 3)
                                  .map((achievement: string, idx: number) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-gray-200 leading-tight"
                                    >
                                      • {achievement}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Second Column - Python and related */}
                    {[
                      { name: "Python", icon: PythonIcon },
                      { name: "TensorFlow", icon: TensorFlowIcon },
                      { name: "Jupyter", icon: JupyterIcon },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: (index + 3) * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.05,
                          z: 50,
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill.name)}
                      >
                        {/* Card Container */}
                        <div
                          className="relative w-full h-40 cursor-pointer"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              hoveredSkill === skill.name
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                            transition: "transform 0.6s ease-in-out",
                          }}
                        >
                          {/* Front of card */}
                          <div
                            className="absolute inset-0 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-600/30 hover:border-amber-500/40 transition-all duration-300"
                            style={{
                              background: "rgba(26, 32, 44, 0.2)",
                              backfaceVisibility: "hidden",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                              <div
                                className="p-3 rounded-xl transition-all duration-300"
                                style={{
                                  background: "rgba(71, 85, 105, 0.3)",
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8"
                                />
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                {skill.name}
                              </h3>
                            </div>
                          </div>

                          {/* Back of card - What I learned */}
                          <div
                            className="absolute inset-0 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-amber-500/40"
                            style={{
                              background: "rgba(245, 158, 11, 0.15)",
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <div className="h-full flex flex-col justify-center text-center space-y-2">
                              <h4 className="text-amber-100 font-semibold text-sm mb-2">
                                What I've Learned
                              </h4>
                              <div className="space-y-1">
                                {skillsData.skills[
                                  skill.name as keyof typeof skillsData.skills
                                ]?.achievements
                                  .slice(0, 3)
                                  .map((achievement: string, idx: number) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-gray-200 leading-tight"
                                    >
                                      • {achievement}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Third Column - GitHub and related */}
                    {[
                      { name: "GitHub", icon: GitHubIcon },
                      { name: "Git", icon: GitIcon },
                      { name: "VS Code", icon: VSCodeIcon },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: (index + 6) * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.05,
                          z: 50,
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill.name)}
                      >
                        {/* Card Container */}
                        <div
                          className="relative w-full h-40 cursor-pointer"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              hoveredSkill === skill.name
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                            transition: "transform 0.6s ease-in-out",
                          }}
                        >
                          {/* Front of card */}
                          <div
                            className="absolute inset-0 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-600/30 hover:border-amber-500/40 transition-all duration-300"
                            style={{
                              background: "rgba(26, 32, 44, 0.2)",
                              backfaceVisibility: "hidden",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                              <div
                                className="p-3 rounded-xl transition-all duration-300"
                                style={{
                                  background: "rgba(71, 85, 105, 0.3)",
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8"
                                />
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                {skill.name}
                              </h3>
                            </div>
                          </div>

                          {/* Back of card - What I learned */}
                          <div
                            className="absolute inset-0 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-amber-500/40"
                            style={{
                              background: "rgba(245, 158, 11, 0.15)",
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <div className="h-full flex flex-col justify-center text-center space-y-2">
                              <h4 className="text-amber-100 font-semibold text-sm mb-2">
                                What I've Learned
                              </h4>
                              <div className="space-y-1">
                                {skillsData.skills[
                                  skill.name as keyof typeof skillsData.skills
                                ]?.achievements
                                  .slice(0, 3)
                                  .map((achievement: string, idx: number) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-gray-200 leading-tight"
                                    >
                                      • {achievement}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Fourth Column - Canva and related */}
                    {[
                      { name: "Canva", icon: CanvaIcon },
                      { name: "Figma", icon: FigmaIcon },
                      { name: "Blender", icon: BlenderIcon },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: (index + 9) * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.05,
                          z: 50,
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill.name)}
                      >
                        {/* Card Container */}
                        <div
                          className="relative w-full h-40 cursor-pointer"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              hoveredSkill === skill.name
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                            transition: "transform 0.6s ease-in-out",
                          }}
                        >
                          {/* Front of card */}
                          <div
                            className="absolute inset-0 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-slate-600/30 hover:border-amber-500/40 transition-all duration-300"
                            style={{
                              background: "rgba(26, 32, 44, 0.2)",
                              backfaceVisibility: "hidden",
                            }}
                          >
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                              <div
                                className="p-3 rounded-xl transition-all duration-300"
                                style={{
                                  background: "rgba(71, 85, 105, 0.3)",
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8"
                                />
                              </div>
                              <h3 className="font-semibold text-gray-200">
                                {skill.name}
                              </h3>
                            </div>
                          </div>

                          {/* Back of card - What I learned */}
                          <div
                            className="absolute inset-0 p-4 rounded-xl backdrop-filter backdrop-blur-lg border border-amber-500/40"
                            style={{
                              background: "rgba(245, 158, 11, 0.15)",
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <div className="h-full flex flex-col justify-center text-center space-y-2">
                              <h4 className="text-amber-100 font-semibold text-sm mb-2">
                                What I've Learned
                              </h4>
                              <div className="space-y-1">
                                {skillsData.skills[
                                  skill.name as keyof typeof skillsData.skills
                                ]?.achievements
                                  .slice(0, 3)
                                  .map((achievement: string, idx: number) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-gray-200 leading-tight"
                                    >
                                      • {achievement}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(4px)",
            }}
            onClick={closeSkillDetails}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-lg w-full rounded-2xl border p-8 shadow-2xl"
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                borderColor: "rgba(245, 158, 11, 0.2)",
                backdropFilter: "blur(20px)",
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeSkillDetails}
                className="absolute top-4 right-4 p-2 text-gray-300 hover:text-amber-100 transition-colors rounded-lg"
                style={{ background: "rgba(71, 85, 105, 0.5)" }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(245, 158, 11, 0.2)" }}
                >
                  <img
                    src={skillIcons[selectedSkill]}
                    alt={selectedSkill}
                    className="w-10 h-10 brightness-110"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-100">
                    {selectedSkill}
                  </h2>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed text-lg mb-6">
                {
                  skillsData.skills[
                    selectedSkill as keyof typeof skillsData.skills
                  ]?.description
                }
              </p>

              <div>
                <h4 className="text-amber-100 font-semibold mb-3">
                  Key Achievements:
                </h4>
                <div className="space-y-2">
                  {skillsData.skills[
                    selectedSkill as keyof typeof skillsData.skills
                  ]?.achievements.map((achievement: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-gray-200"
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#f59e0b" }}
                      />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
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
          className="absolute top-[20%] right-[10%] w-2 h-2 rounded-full"
          style={{ background: "#f59e0b" }}
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
          className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 rounded-full"
          style={{ background: "#fbbf24" }}
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
          className="absolute top-[60%] left-[5%] w-1 h-1 rounded-full"
          style={{ background: "#fcd34d" }}
        />
      </div>
    </motion.section>
  );
};

export default Skills;
