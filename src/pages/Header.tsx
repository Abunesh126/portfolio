import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/header.css";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo Section - Full Left Corner */}
          <div className="header-logo-section">
            <button
              onClick={() => scrollToSection("#hero")}
              className="header-logo-button"
              aria-label="Go to home"
            >
              {/* Logo Image */}
              <div className="header-logo-image">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Abunesh RP Logo" 
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.className = 'header-logo-fallback';
                    fallback.textContent = 'AR';
                    e.currentTarget.parentElement!.appendChild(fallback);
                  }}
                />
              </div>
              
              {/* Name */}
              <div className="header-logo-text">
                <h1 className="header-logo-title">
                  Abunesh RP
                </h1>
                <p className="header-logo-subtitle">
                  Full Stack Developer
                </p>
              </div>
            </button>
          </div>

          {/* Right Section - Full Right Corner */}
          <div className="header-actions">
            {/* Desktop Navigation */}
            <nav className="header-nav">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="header-nav-link"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="header-mobile-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="header-mobile-nav">
            <nav className="header-mobile-nav-inner">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="header-mobile-nav-link"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="header-decoration">
          <div className="header-decoration-dot"></div>
          <div className="header-decoration-dot"></div>
          <div className="header-decoration-dot"></div>
        </div>
      </header>

      {/* Header spacing for fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
