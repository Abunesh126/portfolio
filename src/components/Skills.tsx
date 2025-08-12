import React, { useEffect, useRef } from 'react';
import profileImg from "../assets/profile.png";


// ProfileCard component
export function ProfileCard() {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Image Circle */}
      <div className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-lg border-4 border-white dark:border-gray-800">
        <img
          src={profileImg}
          alt="Abunesh RP"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
        Abunesh RP
      </h3>

      {/* Role */}
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
        Software Engineer
      </p>
    </div>
  );
}

/**
 * Production-ready Skill Orbit Component
 * 
 * Features:
 * - Single GPU-accelerated CSS rotation on outer container
 * - Counter-rotated skill cards to stay upright
 * - Connection lines from center to each skill
 * - Responsive design with CSS variables
 * - Full accessibility support (keyboard + screen reader)
 * - Performance optimized with minimal DOM and no JS animations
 */

// Type definitions
interface Skill {
  id: string;
  label: string;
  category: string;
  icon: string;
  ariaLabel: string;
  angle: number;
}

interface SkillCategory {
  [key: string]: string[];
}

// Skills data organized by category
const SKILL_CATEGORIES: SkillCategory = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  Frontend: ['React', 'TailwindCSS'],
  Backend: ['Node.js', 'Laravel'],
  Database: ['MongoDB'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Postman'],
  AI_ML: ['TensorFlow', 'Tableau'],
  Design: ['Blender', 'Canva']
};

// Helper function to get total skill count
const getTotalSkillCount = (): number => {
  return Object.values(SKILL_CATEGORIES).reduce((total, skills) => total + skills.length, 0);
};

// Helper function to get icon file name
const getIconFileName = (skillName: string): string => {
  const iconMap: { [key: string]: string } = {
    'Python': 'python-5.svg',
    'Java': 'java-14.svg', 
    'JavaScript': 'javascript-1.svg',
    'TypeScript': 'typescript.svg',
    'HTML5': 'html-1.svg',
    'CSS3': 'css-3.svg',
    'React': 'react-2.svg',
    'TailwindCSS': 'tailwind-css-2.svg',
    'Node.js': 'nodejs-1.svg',
    'Laravel': 'laravel-2.svg',
    'MongoDB': 'mongodb-icon-1.svg',
    'Git': 'git.svg',
    'GitHub': 'github-icon-1.svg',
    'VS Code': 'visual-studio-code-1.svg',
    'Jupyter': 'jupyter.svg',
    'Postman': 'postman.svg',
    'TensorFlow': 'tensorflow-2.svg',
    'Tableau': 'tableau-logo-1.svg',
    'Blender': 'blender-2.svg',
    'Canva': 'canva-wordmark-2.svg'
  };
  return iconMap[skillName] || `${skillName.toLowerCase()}.svg`;
};

// Generate skills array with computed angles
const generateSkills = (): Skill[] => {
  const allSkills: Skill[] = [];
  let currentAngle = 0;
  const totalSkills = getTotalSkillCount();
  
  Object.entries(SKILL_CATEGORIES).forEach(([category, skillNames]) => {
    skillNames.forEach((skillName) => {
      const id = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
      allSkills.push({
        id,
        label: skillName,
        category,
        icon: `/src/assets/icon/${getIconFileName(skillName)}`,
        ariaLabel: `${skillName} — ${category}`,
        angle: currentAngle
      });
      // Distribute skills evenly around the circle
      currentAngle += 360 / totalSkills;
    });
  });
  
  return allSkills;
};

const SkillOrbit: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const skills = generateSkills();

  /**
   * Dynamic radius calculation for responsive design
   * Uses CSS variables to control orbit size without re-rendering
   */
  useEffect(() => {
    const updateRadius = () => {
      if (orbitRef.current) {
        const containerSize = Math.min(orbitRef.current.clientWidth, orbitRef.current.clientHeight);
        const radius = containerSize * 0.35; // 35% of container size
        const cardSize = Math.max(48, Math.min(64, containerSize * 0.08)); // Responsive card size
        
        orbitRef.current.style.setProperty('--orbit-radius', `${radius}px`);
        orbitRef.current.style.setProperty('--card-size', `${cardSize}px`);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 py-16 px-4"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with, 
            organized by category and continuously expanding.
          </p>
        </div>

        {/* Skill Orbit Container */}
        <div 
          ref={orbitRef} 
          className="relative mx-auto aspect-square w-full max-w-2xl"
          style={{
            '--orbit-radius': '200px',
            '--card-size': '56px'
          } as React.CSSProperties}
        >
          {/* Central Profile */}
          <div
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            role="figure"
            aria-label="Profile of Abunesh RP, Software Engineer"
          >
            <div className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl md:text-3xl font-bold shadow-lg border-4 border-white dark:border-gray-800 overflow-hidden">
              <img
                src={profileImg}
                alt="Abunesh RP"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Abunesh RP
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Software Engineer
            </p>
          </div>

          {/* Single Rotating Container - GPU Accelerated */}
          <div className="orbit-container absolute inset-0 orbit-rotation">
            {skills.map(({ id, label, icon, ariaLabel, angle, category }) => (
              <div
                key={id}
                className="absolute left-1/2 top-1/2 origin-center"
                style={{ 
                  transform: `rotate(${angle}deg) translateY(calc(var(--orbit-radius) * -1))`,
                }}
              >
                {/* Connection Line - Rotates with spoke */}
                <div 
                  className="absolute top-0 left-1/2 w-0.5 bg-gradient-to-t from-gray-300 to-transparent dark:from-gray-600 -translate-x-1/2 origin-top"
                  style={{ 
                    height: 'var(--orbit-radius)',
                    transform: 'translateY(-100%)'
                  }}
                />

                {/* Skill Card - Counter-rotated to stay upright */}
                <div
                  tabIndex={0}
                  role="button"
                  aria-label={ariaLabel}
                  className="group relative flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:scale-110"
                  style={{
                    width: 'var(--card-size)',
                    height: 'var(--card-size)',
                    transform: `rotate(${-angle}deg)`, // Counter-rotation to keep upright
                  }}
                >
                  {/* Skill Icon */}
                  <img 
                    src={icon} 
                    alt="" 
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    loading="lazy"
                  />

                  {/* Tooltip - Appears on hover/focus */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                    <span>{label}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Orbit Ring Indicator */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200 dark:border-gray-700 rounded-full opacity-20"
            style={{
              width: 'calc(var(--orbit-radius) * 2)',
              height: 'calc(var(--orbit-radius) * 2)'
            }}
          />
        </div>

        {/* Skills Legend */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                {category.replace('_', '/')}
              </h4>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {skills.length} skill{skills.length !== 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .orbit-rotation {
          animation: orbit-rotate 120s linear infinite;
        }

        @keyframes orbit-rotate {
          0% {
            transform: rotate(0deg);
          }
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .orbit-rotation {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillOrbit;