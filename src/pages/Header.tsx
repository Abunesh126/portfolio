import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

// NPM requirements:
// npm install react react-dom react-icons tailwindcss
// (plus vite, typescript, etc. for your stack)

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    // Use system preference on first load
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Apply theme to <html> for all pages
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Ensure theme is set on first load (for SSR/hydration)
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (!saved) {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white via-blue-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 transition-colors duration-500 shadow-xl border-b border-white/10 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4 h-16">
        {/* Left: Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 focus:outline-none cursor-pointer"
          aria-label="Go to hero section"
          onClick={e => {
            e.preventDefault();
            const hero = document.getElementById("hero");
            if (hero) hero.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Abunesh RP
        </a>
        {/* Right: Nav and Theme Toggle */}
        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;