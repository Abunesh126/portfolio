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
    <footer className="w-full py-4 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-semibold text-lg">Abunesh RP</span>
        </div>

        {/* Middle: Copyright */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a href="mailto:abuneshfire@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={GmailIcon} alt="Gmail" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://github.com/YourGithubUsername" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://linkedin.com/in/YourLinkedInUsername" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
