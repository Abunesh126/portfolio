# 🎭 Dark & Gold Luxury Portfolio

> A premium, performance-optimized portfolio website featuring a luxurious dark and gold theme with advanced animations and glassmorphism effects. Recently optimized for faster performance and cleaner codebase.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🆕 Recent Updates (September 2025)

- ⚡ **Performance Optimized**: Contact page animations 50-70% faster
- 🧹 **Code Cleanup**: Removed unused files and redundant code
- 🔧 **Environment Config**: Professional API key management
- 🎭 **Animation Balance**: Maintained visual appeal with improved performance
- 📱 **Mobile Focus**: Enhanced touch-friendly interactions

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Installation](#️-installation)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 Design System](#-design-system)
- [🎬 Animation System](#-animation-system)
- [📱 Mobile Optimization](#-mobile-optimization)
- [📧 Contact Integration](#-contact-form-integration)
- [🌐 Deployment](#-deployment)
- [⚡ Performance](#-performance)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

### ⚡ Performance & Optimization Features

- **🚀 Optimized Animations**: Contact page animations 50-70% faster
- **🧹 Clean Codebase**: Removed unused files and redundant code
- **📦 Reduced Bundle Size**: Eliminated unnecessary dependencies
- **🔧 Environment Config**: Professional API key management with fallbacks
- **📱 Mobile Performance**: Touch-optimized interactions and faster loading
- **🎭 Balanced Effects**: Maintained visual luxury while improving speed

## ✨ Features

### 🎯 Core Features

- **🌙 Dark & Gold Luxury Theme**: Premium color palette with sophisticated gold accents
- **🔄 Theme Toggle**: Seamless switching between light and dark modes with persistent storage
- **💎 Glassmorphism Effects**: Modern glass-like UI components with backdrop blur
- **🎭 50+ Advanced Animations**: Custom keyframe animations optimized for 60fps
- **📱 Fully Responsive**: Mobile-first approach with fluid layouts across all devices
- **♿ Accessibility First**: Full keyboard navigation and screen reader support
- **⚡ Performance Optimized**: GPU-accelerated animations and minimal re-renders

### 🧩 Component Features

#### Skills Showcase

- **🔮 Interactive Skill Bubbles**: Floating animations with luxury effects
- **🎪 Dynamic Positioning**: Organic movement patterns with collision detection
- **📊 Category Organization**: Skills grouped by technology categories
- **🎨 Hover Effects**: Interactive feedback with tooltips and scaling
- **📐 Responsive Sizing**: Dynamic sizing based on screen dimensions

#### Hero Section

- **⚡ 50+ Animated Elements**: Particles, shapes, sparkles, and decorations
- **🔄 Dynamic Role Cycling**: Smooth animated job title transitions
- **✨ Particle System**: Sparkle, twinkle, and floating effects
- **🎪 Interactive Elements**: Hover effects and micro-interactions

#### Project Showcase

- **🏆 Luxury Project Cards**: Glass morphism with hover effects
- **🖼️ Image Optimization**: Lazy loading and responsive images
- **🔗 Live Demo Links**: Interactive project navigation
- **📊 Technology Tags**: Visual tech stack indicators

#### Contact System

- **📝 Animated Contact Form**: Real-time validation and feedback (⚡ 50-70% faster animations)
- **📧 HloMail Integration**: External API with environment variable configuration
- **🔒 Security Features**: API key protection and fallback values
- **📱 Mobile Optimized**: Touch-friendly form elements with faster response times

### 🎯 Performance Optimizations

- **⚡ Faster Contact Animations**: Reduced animation durations from 7-16s to 2.5-4.5s
- **🔧 Environment Variables**: Professional API configuration with `.env.example` template
- **🧹 Code Cleanup**: Removed unused files (`server.js`, `mobile-host.bat`, duplicate CSS)
- **📦 Dependency Optimization**: Cleaned up package.json and imports
- **🎭 Balanced Effects**: Maintained luxury visual appeal with improved performance

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YourUsername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

## 🛠️ Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16 or later ([Download](https://nodejs.org/))
- **npm**: v7 or later (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### Dependencies

```bash
# Core dependencies
npm install react react-dom react-icons
npm install tailwindcss framer-motion lucide-react

# Development dependencies
npm install --save-dev @types/react @types/react-dom
npm install --save-dev typescript vite @vitejs/plugin-react
npm install --save-dev eslint @typescript-eslint/eslint-plugin
```

### Step-by-Step Setup

1. **Clone and Navigate**

   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   # Copy the environment template
   cp .env.example .env
   
   # Edit .env with your configuration
   # Update VITE_HLOMAIL_API_KEY with your API key
   # Update VITE_HLOMAIL_ENDPOINT if needed
   ```

4. **Start Development**

   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── 📁 components/           # React components
│   ├── Hero.tsx            # Hero section with animations
│   ├── Skills.tsx          # Floating skills showcase
│   ├── Projects.tsx        # Project portfolio grid
│   ├── Contact.tsx         # Contact form with validation
│   ├── Header.tsx          # Navigation with theme toggle
│   └── Footer.tsx          # Footer with social links
├── 📁 pages/               # Page components
│   └── Home.tsx           # Main landing page
├── 📁 styles/              # Stylesheet system
│   ├── index.css          # Central import hub
│   ├── theme.css          # Dark & gold theme system
│   ├── animations.css     # Animation library
│   ├── components.css     # Component-specific styles
│   ├── skills-float.css   # Skills floating animations
│   └── skill-orbit.css    # Legacy orbit animations
├── 📁 assets/              # Static assets
│   ├── 📁 icons/          # Skill technology icons
│   ├── 📁 images/         # Project screenshots
│   └── profile.jpg        # Profile image
├── 📁 utils/               # Utility functions
├── 📁 types/               # TypeScript definitions
├── App.tsx                # Root component
├── main.tsx              # Application entry point
└── vite.config.ts        # Vite configuration
```

## 🎨 Design System

### Color Palette

```css
/* Dark Theme */
--dark: #0a0a0a              /* Primary dark background */
--dark-secondary: #1a1a1a    /* Secondary dark surfaces */
--dark-accent: #2d2d2d       /* Accent dark elements */
--dark-surface: rgba(10, 10, 10, 0.95)  /* Glass dark surface */

/* Gold Theme */
--gold: #FFD700              /* Primary gold accent */
--gold-light: #FFF8DC        /* Light gold highlights */
--gold-dark: #B8860B         /* Dark gold shadows */
--gold-accent: #DAA520       /* Secondary gold accent */

/* Glass Effects */
--glass: rgba(255, 215, 0, 0.1)         /* Glass background */
--glass-border: rgba(255, 215, 0, 0.2)  /* Glass borders */
--shadow-gold: rgba(255, 215, 0, 0.3)   /* Gold shadow */
```

### Typography Scale

```css
/* Heading Scale */
.text-4xl { font-size: 2.25rem; }  /* 36px */
.text-3xl { font-size: 1.875rem; } /* 30px */
.text-2xl { font-size: 1.5rem; }   /* 24px */
.text-xl  { font-size: 1.25rem; }  /* 20px */
.text-lg  { font-size: 1.125rem; } /* 18px */

/* Luxury Text Effects */
.text-luxury     /* Gold gradient text */
.text-glow       /* Glowing text effect */
.text-shine      /* Animated shine effect */
```

### Utility Classes

```css
.glass-effect      /* Glassmorphism background */
.btn-luxury        /* Premium button with shine effect */
.card-luxury       /* Glass card with hover effects */
.animate-luxuryFloat  /* Floating animation */
.glow-gold         /* Gold glow effect */
.border-gold       /* Gold border utilities */
```

### Responsive Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

## 🎬 Animation System

### Custom Keyframes (15+ Animations)

```css
@keyframes luxuryFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes luxuryGlow {
  0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.8); }
}

@keyframes goldShine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
}
```

### Animation Categories

#### Floating Effects

- `luxuryFloat` - Basic floating motion
- `luxuryFloat1-4` - Complex floating variations with rotation
- `crown-float` - Royal floating effect for premium elements

#### Glow & Shine

- `luxuryGlow` - Glow intensity animation
- `goldShine` - Premium gold shine sweep
- `pulse-gold` - Gold pulsing effect

#### Particle System

- `sparkle` - Sparkle appearance animation
- `twinkle` - Twinkling stars effect
- `particle-float` - Organic particle movements

#### Entrance Animations

- `fadeInUp` - Fade in from bottom
- `slideInLeft/Right` - Side entrance animations
- `scaleIn` - Scale entrance effect

### Framer Motion Integration

```tsx
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      delayChildren: 0.15, 
      staggerChildren: 0.1,
      duration: 0.3,
      ease: "easeOut"
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
      ease: 'easeInOut',
    },
  },
};
```

### Performance Guidelines

- ✅ Use `transform` and `opacity` for animations
- ✅ Apply `will-change` for frequently animated elements
- ✅ Provide `prefers-reduced-motion` fallbacks
- ✅ Target 60fps on all devices
- ✅ Minimize layout-triggering properties

## 📱 Mobile Optimization

### Testing on Mobile Device

#### Quick Start (Windows)

```bash
# Double-click the batch script
./mobile-host.bat
```

#### Manual Commands

```bash
# Build the project
npm run build

# Serve for mobile testing
npm run mobile

# Full-stack mobile testing
npm run fullstack:mobile
```

### Mobile Features

- ✅ **Responsive Viewport**: Optimized meta tag configuration
- ✅ **Touch-Friendly**: Large touch targets and swipe gestures
- ✅ **Mobile-First CSS**: Tailwind's mobile-first approach
- ✅ **Optimized Images**: Responsive images with lazy loading
- ✅ **Fast Loading**: Vite bundling for optimal mobile performance
- ✅ **PWA Ready**: Progressive Web App capabilities

### Finding Your Local IP

**Windows:**

```cmd
ipconfig | find "IPv4"
```

**macOS/Linux:**

```bash
ifconfig | grep "inet "
```

Then visit `http://YOUR_LOCAL_IP:3000` on your mobile device.

## 📧 Contact Form Integration

### HloMail API Configuration

The portfolio now uses HloMail API service for contact form submissions instead of a local server. This provides better reliability and easier deployment.

1. **Environment Setup**

   ```bash
   # Copy the environment template
   cp .env.example .env
   ```

2. **Configure Environment Variables**
   Edit `.env` file:

   ```env
   # HloMail API Configuration
   VITE_HLOMAIL_API_KEY=your_api_key_here
   VITE_HLOMAIL_ENDPOINT=https://hlomail-backend.onrender.com/v1/contact-mail

   # Portfolio Configuration
   VITE_APP_NAME=Portfolio
   VITE_APP_VERSION=1.0.0
   ```

3. **API Key Management**
   - The application includes fallback API key for development
   - For production, set your own `VITE_HLOMAIL_API_KEY`
   - Environment variables ensure secure configuration

### Contact Form Features

- ✅ **Real-time Validation**: Client-side form validation with instant feedback
- ✅ **Professional API**: HloMail service integration for reliable email delivery
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Security**: Environment-based API key management
- ✅ **Fast Animations**: Optimized animation performance (50-70% faster)

### Frontend-Only Deployment

Since the contact form uses an external API service:

- ✅ **No Backend Required**: Deploy anywhere (Vercel, Netlify, GitHub Pages)
- ✅ **Easy Maintenance**: No server management needed
- ✅ **Reliable**: Professional email service handling
- ✅ **Scalable**: Handles form submissions without custom infrastructure

## 🌐 Deployment

### Option 1: Netlify (Recommended - Free)

1. **Build your project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Create account and drag/drop your `dist` folder
   - Your site goes live with HTTPS instantly

3. **Custom Domain** (Optional)
   - Add your custom domain in Netlify settings
   - DNS configuration provided automatically

### Option 2: Vercel (Great for React)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts for configuration
```

### Option 3: GitHub Pages

1. **Create Workflow File**

   ```bash
   mkdir -p .github/workflows
   ```

2. **Add Deploy Configuration**

   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v3
       - uses: actions/setup-node@v3
         with:
           node-version: '18'
       - run: npm install
       - run: npm run build
       - uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

### Option 4: Self-Hosting

```bash
# Build for production
npm run build

# Serve with any static server
npx serve dist
# or
python -m http.server 3000 -d dist
# or
php -S localhost:3000 -t dist
```

## ⚡ Performance

### Core Web Vitals Targets

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1

### Recent Performance Optimizations (September 2025)

#### Contact Page Speed Improvements

- **⚡ 50-70% Faster Animations**: Contact page animations optimized
  - Background particles: 7-16s → 2.5-4.5s duration
  - Form animations: 0.8s → 0.4s duration
  - Stagger delays: 0.1s → 0.05s intervals
- **🧹 Code Cleanup**: Removed unused files and dependencies
  - Eliminated `server.js`, `mobile-host.bat`, duplicate CSS files
  - Cleaned up imports and optimized bundle size
- **🔧 Environment Variables**: Professional API configuration
  - Added `.env.example` template for easy setup
  - Secure API key management with fallbacks

### Optimization Features

#### Image Optimization

- **Profile Image Issue**: `profile.jpg` is 773 KB (too large!)
- **Target Size**: < 100 KB (87% reduction needed)
- **Recommended Dimensions**: 400×400px or 500×500px
- **Preferred Format**: WebP or optimized JPG

#### Quick Image Optimization Tools

1. **[TinyPNG.com](https://tinypng.com/)** - Easy compression
2. **[Squoosh.app](https://squoosh.app/)** - Advanced options
3. **[Optimizilla.com](https://imagecompressor.com/)** - Batch processing

#### Animation Optimizations

- **GPU Acceleration**: Transform-only animations
- **Reduced Motion**: Accessibility-compliant fallbacks
- **60fps Target**: Optimized with `will-change` properties
- **Tree-shaken CSS**: Modular stylesheet architecture
- **Lazy Loading**: Intersection Observer for scroll animations

#### Performance Monitoring

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Bundle analysis
npm run build:analyze

# Performance testing
npm run test:performance
```

### Browser Support

- **Chrome/Edge**: 88+
- **Firefox**: 87+
- **Safari**: 14+
- **Mobile**: All modern browsers

## 🔧 Configuration

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true, // Allow external connections
  },
})
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#2d2d2d',
        },
        gold: {
          light: '#FFF8DC',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
          accent: '#DAA520',
        },
      },
      animation: {
        'luxury-float': 'luxuryFloat 6s ease-in-out infinite',
        'luxury-glow': 'luxuryGlow 2s ease-in-out infinite alternate',
        'gold-shine': 'goldShine 2s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        luxuryFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        // ... other keyframes
      },
    },
  },
  plugins: [],
}
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🤝 Contributing

We welcome contributions to make this portfolio template even better!

### Development Setup

1. **Fork the Repository**

   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start Development**

   ```bash
   npm run dev
   ```

5. **Make Changes and Test**

   ```bash
   npm run build
   npm run preview
   ```

6. **Commit and Push**

   ```bash
   git add .
   git commit -m "✨ Add amazing feature"
   git push origin feature/amazing-feature
   ```

7. **Create Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Add proper TypeScript types for new features
- Update documentation for significant changes
- Test on multiple devices and browsers
- Ensure accessibility compliance
- Maintain performance standards

### Code Style

```typescript
// Use descriptive names
const isUserAuthenticated = true;

// Prefer const over let
const userPreferences = {
  theme: 'dark',
  animations: true,
};

// Use arrow functions for components
const MyComponent: React.FC = () => {
  return <div>Hello World</div>;
};

// Add proper types
interface User {
  id: string;
  name: string;
  email: string;
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Links & Resources

### Documentation

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/guide/)

### Design Inspiration

- [Dribbble - Portfolio Designs](https://dribbble.com/tags/portfolio)
- [Awwwards - Portfolio Sites](https://www.awwwards.com/websites/portfolio/)
- [CSS Design Awards](https://www.cssdesignawards.com/)

### Performance Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Deployment Platforms

- [Netlify](https://netlify.com) - Static site hosting
- [Vercel](https://vercel.com) - React/Next.js hosting
- [GitHub Pages](https://pages.github.com) - Free static hosting

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

⭐ **Star this repository if it helped you!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/YourUsername/portfolio?style=social)](https://github.com/YourUsername/portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/YourUsername/portfolio?style=social)](https://github.com/YourUsername/portfolio/network/members)

</div>
