import React from "react";

// Logo
import Logo from "../assets/logo.png";

// Footer icons
import GmailIcon from "../assets/footer icon/gmail.svg";
import GithubIcon from "../assets/footer icon/github.svg";
import LinkedInIcon from "../assets/footer icon/linkedin.svg";
import TwitterIcon from "../assets/footer icon/twitter.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <div className="text-center md:text-left">
            <span className="font-bold text-xl text-gray-900 dark:text-white block">Abunesh RP</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</span>
          </div>
        </div>

        {/* Middle: Copyright */}
        <div className="text-center">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Abunesh RP Portfolio
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            All rights reserved. Built with React & TypeScript
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="mailto:abuneshfire@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600"
            aria-label="Send email"
          >
            <img src={GmailIcon} alt="Gmail" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://github.com/abunesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600"
            aria-label="Visit GitHub profile"
          >
            <img src={GithubIcon} alt="GitHub" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://www.linkedin.com/in/abunesh-r-p-803677278/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600"
            aria-label="Visit LinkedIn profile"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://twitter.com/abunesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600"
            aria-label="Visit Twitter profile"
          >
            <img src={TwitterIcon} alt="Twitter" className="w-5 h-5 group-hover:scale-110 transition-transform rounded" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
