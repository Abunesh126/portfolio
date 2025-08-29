# 🎭 Dark & Gold Luxury Portfolio

A premium, performance-optimized portfolio website featuring a luxurious dark and gold theme with advanced animations and glassmorphism effects.

---

# Portfolio Website

This is a modern, responsive portfolio website built with React, Tailwind CSS, and TypeScript. It showcases skills with an innovative orbiting animation, projects, and contact information in a visually appealing design.

## Features

- **Theme Toggle:** Seamless switching between light and dark modes with persistent storage
- **Orbiting Skills Showcase:** Interactive 3D-style skill orbit with GPU-accelerated animations
- **Responsive Design:** Fully responsive across all device sizes
- **Accessibility First:** Full keyboard navigation and screen reader support
- **Performance Optimized:** GPU-accelerated animations and minimal re-renders
- **Projects Section:** Highlight key projects and achievements
- **Contact Section:** Streamlined contact form and social media integration
- **Footer:** Professional footer with social links

## Skills Component Features

- **Single GPU-Accelerated Animation:** One CSS rotation for optimal performance
- **Counter-Rotated Cards:** Skills remain upright while orbiting the center
- **Connection Lines:** Visual lines connecting center to each skill
- **Category Organization:** Skills grouped by technology categories
- **Hover/Focus Effects:** Interactive feedback with tooltips and scaling
- **Responsive Sizing:** Dynamic orbit radius based on screen size
- **Accessibility:** Full keyboard navigation and screen reader support

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Required Dependencies

```bash
npm install react react-dom react-icons tailwindcss
npm install --save-dev @types/react @types/react-dom typescript vite
```

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Build for Production

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` folder.

## Component Usage

### Skills Orbit Component

```tsx
import SkillOrbit from '@/components/Skills';

// Use in your page
<SkillOrbit />
```

The component automatically:
- Loads skill icons from `src/assets/icon/`
- Distributes skills evenly around the orbit
- Handles responsive sizing
- Provides accessibility features

### File Structure

```
src/
├── components/
│   ├── Skills.tsx          # Main orbiting skills component
│   ├── Hero.tsx           # Hero section
│   ├── Contact.tsx        # Contact form
│   └── Projects.tsx       # Projects showcase
├── pages/
│   ├── Header.tsx         # Navigation header with theme toggle
│   └── Footer.tsx         # Footer component
├── styles/
│   └── skill-orbit.css    # Custom CSS for orbit animations
└── assets/
    └── icon/              # Skill technology icons (SVG)
```

## Performance Optimizations

- **GPU Acceleration:** Uses `transform` and `will-change` for smooth animations
- **Single Animation:** One CSS rotation instead of multiple JavaScript animations
- **Minimal DOM:** Optimized DOM structure to reduce layout thrashing
- **Responsive CSS Variables:** Runtime sizing without JavaScript recalculation
- **Image Optimization:** Lazy loading for skill icons

## Accessibility Features

- **Keyboard Navigation:** Full tab support for all interactive elements
- **Screen Reader Support:** Proper ARIA labels and semantic HTML
- **Focus Management:** Visual focus indicators and logical tab order
- **Reduced Motion:** Respects user's motion preferences
- **Color Contrast:** WCAG AA compliant color combinations

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Modern mobile browsers

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

# 🌟 Features & Documentation

## Design & Theme
- **Dark & Gold Luxury Theme**: Premium color palette with gold accents
- **Glassmorphism Effects**: Modern glass-like UI components with backdrop blur
- **Advanced Animations**: 50+ custom keyframe animations optimized for 60fps
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Performance Optimized**: GPU-accelerated transforms and minimal layout thrashing

## Components
1. **Header**: Sticky navigation with theme toggle and mobile menu
2. **Hero**: Animated profile section with rotating roles and floating particles
3. **Skills**: Interactive skill bubbles with floating animations
4. **Projects**: Luxury project cards with hover effects
5. **Contact**: Animated contact form with real-time validation
6. **Footer**: Social links with elegant branding

## Animation System
- **Floating Effects**: `luxuryFloat`, `luxuryFloat1-4` for organic movement
- **Glow & Shine**: `luxuryGlow`, `goldShine`, `shine` for premium effects
- **Particle System**: Sparkle, twinkle, and ping animations
- **Hover Interactions**: Scale, glow, and lift effects
- **Entrance Animations**: Staggered fade-in and slide effects

---

# 🎨 Theme System

## Color Palette
```css
/* Dark Theme */
--dark: #0a0a0a
--dark-secondary: #1a1a1a
--dark-accent: #2d2d2d
--dark-surface: rgba(10, 10, 10, 0.95)

/* Gold Theme */
--gold: #FFD700
--gold-light: #FFF8DC
--gold-dark: #B8860B
--gold-accent: #DAA520

/* Glass Effects */
--glass: rgba(255, 215, 0, 0.1)
--glass-border: rgba(255, 215, 0, 0.2)
--shadow-gold: rgba(255, 215, 0, 0.3)
```

## Utility Classes
- `.text-luxury` - Gold gradient text
- `.glass-effect` - Glassmorphism background
- `.btn-luxury` - Premium button with shine effect
- `.card-luxury` - Glass card with hover effects
- `.animate-luxuryFloat` - Floating animations

## File Structure
```
src/styles/
├── theme.css          # Core theme system
├── animations.css     # Animation library
├── components.css     # Component styles
├── skills-float.css   # Skills floating animations
├── skill-orbit.css    # Legacy orbit animations
└── index.css          # Main imports and globals
```

---

# 🎬 Hero Section Animation System

## Overview
The Hero section features **50+ individual animated elements** with luxury dark-gold theme, including:
- ⚡ **50+ Animated Elements** - Particles, shapes, sparkles, and decorations
- 🎨 **Luxury Gold Aesthetic** - Dark background with gold accents
- 📱 **Fully Responsive** - Mobile-first design with desktop enhancements
- 🎭 **Glass Morphism** - Backdrop blur effects and transparency
- 🔄 **Dynamic Role Cycling** - Animated job title transitions
- 🎪 **Interactive Elements** - Hover effects and micro-interactions

## Animation Variants

### Framer Motion Variants
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

### Particle Animations (10 Total)
```tsx
// Particle patterns with varying complexity
animate={{ 
  y: [0, -20, 0],
  opacity: [0.4, 0.8, 0.4]
}}
transition={{ duration: 2, repeat: Infinity, delay: 0 }}
```

### Geometric Shape Animations (8+ Shapes)
```tsx
// Triangle - Continuous rotation with scale
animate={{ 
  rotate: [0, 360],
  scale: [1, 1.1, 1]
}}
transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
```

---

# 📧 Backend Integration Setup Guide

## Quick Start

### 1. Email Configuration (Gmail)
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Environment Setup
Create a `.env` file in your project root:

```bash
# Copy the example file
copy .env.example .env
```

Edit `.env` and add your Gmail App Password:
```env
EMAIL_USER=abunesh2006@gmail.com
EMAIL_PASS=your-16-character-app-password-here
API_KEY=78c4be0c6c8779406b83ded5172480a3
PORT=3001
```

### 3. Running the Full Application

**Option 1: Frontend + Backend (Development)**
```bash
npm run fullstack:dev
```

**Option 2: Frontend + Backend (Mobile Testing)**
```bash
npm run fullstack:mobile
```

**Option 3: Run Separately**
```bash
# Terminal 1 - Backend
npm run backend:dev

# Terminal 2 - Frontend
npm run dev
```

## API Endpoints

### Contact Form
- **URL**: `http://localhost:3001/v1/contact-mail`
- **Method**: POST
- **Content-Type**: application/json

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!",
  "phone_no": "+1234567890",
  "api_key": "78c4be0c6c8779406b83ded5172480a3"
}
```

## Security Features
✅ **Rate Limiting**: 5 requests per 15 minutes per IP
✅ **API Key Validation**: Protects against unauthorized access
✅ **Input Validation**: Validates email format and required fields
✅ **CORS Protection**: Configured for security
✅ **Error Handling**: Comprehensive error responses

---

# 📱 Mobile Hosting Guide

## Quick Start - Test on Mobile Device

### Option 1: Using the Batch Script (Windows)
1. Double-click `mobile-host.bat`
2. The script will build and serve your portfolio
3. Connect your mobile device to the same WiFi network
4. Open the mobile URL shown in the terminal on your phone

### Option 2: Manual Commands
```bash
# Build the project
npm run build

# Serve for mobile testing
npm run mobile
```

Then visit `http://YOUR_LOCAL_IP:3000` on your mobile device.

## Production Hosting Options

### 1. Netlify (Recommended - Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder to Netlify
3. Your site will be live with HTTPS and mobile-optimized
4. Custom domain available

### 2. Vercel (Great for React)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts
4. Automatic deployments from Git

### 3. GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. Create `.github/workflows/deploy.yml`:

```yaml
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

## Mobile Optimization Features
Your portfolio already includes:
- ✅ Responsive viewport meta tag
- ✅ Touch-friendly interactions
- ✅ Mobile-first Tailwind CSS design
- ✅ Optimized images and assets
- ✅ Fast loading with Vite bundling
- ✅ Progressive Web App capabilities

---

# 🚀 Performance Optimizations

## Custom Keyframes (15+)
1. `luxuryFloat` - Basic floating motion
2. `luxuryFloat1-4` - Complex floating variations
3. `luxuryGlow` - Glow intensity animation
4. `shine` - Shine sweep effect
5. `goldShine` - Premium gold shine
6. `crown-float` - Royal floating effect
7. `sparkle` - Sparkle appearance
8. `twinkle` - Twinkling stars
9. `bounce-slow` - Gentle bouncing
10. `spin-slow` - Slow rotation
11. `pulse-gold` - Gold pulsing
12. `fadeInUp` - Entrance animation
13. `slideInLeft/Right` - Side entrances
14. `scaleIn` - Scale entrance
15. `particle-float` - Particle movements

## Performance Guidelines
- Use `transform` and `opacity` for animations
- Apply `will-change` for frequently animated elements
- Provide `prefers-reduced-motion` fallbacks
- Target 60fps on all devices
- Minimize layout-triggering properties

## Optimizations
- **GPU Acceleration**: Transform-only animations
- **Reduced Motion Support**: Accessibility-compliant fallbacks
- **Efficient Animations**: 60fps target with `will-change` optimization
- **Tree-shaken CSS**: Modular stylesheet architecture
- **Lazy Loading**: Intersection Observer for scroll-triggered animations

---

# 📝 Refactoring Summary

## Completed Tasks

### File Organization & Cleanup
- ❌ Removed `src/App.css` (empty file)
- ❌ Removed `src/components/skills-float.css` (duplicate)
- ❌ Removed `src/styles/Skills.css` (empty file)
- ✅ Updated `App.tsx` to import correct `Skills` component
- ✅ Removed duplicate CSS imports
- ✅ Fixed broken component references

### Styles Folder Organization
Created comprehensive style system:
```
src/styles/
├── index.css           # Central import hub
├── theme.css           # Core dark & gold theme
├── animations.css      # All luxury animations
├── components.css      # Component-specific styles
├── skills-float.css    # Skills floating animations
├── skill-orbit.css     # Legacy orbit animations
└── README.md           # Documentation
```

### Updated Components
1. **Hero.tsx** ✅ - Dark & gold luxury theme with floating particles
2. **Skills.tsx** ✅ - Floating skills bubbles with luxury effects
3. **Header.tsx** ✅ - Luxury navigation with gold accents
4. **Contact.tsx** ✅ - Dark form with glass morphism effects
5. **Footer.tsx** ✅ - Dark surface with gold accents
6. **Projects.tsx** ✅ - Complete project showcase with luxury theme

### Theme Consistency
Applied Dark & Gold Luxury Theme:
- **Colors**: Dark backgrounds with gold accents
- **Typography**: Luxury gradient text effects
- **Animations**: Premium floating and glow effects
- **Components**: Glass morphism with gold borders
- **Interactive Elements**: Luxury hover states and transitions

---

# 🎯 Usage Examples

## Creating Luxury Buttons
```jsx
<button className="btn-luxury group">
  <FiRocket className="group-hover:rotate-12 transition-transform duration-300" />
  Get Started
</button>
```

## Adding Floating Animations
```jsx
<div className="animate-luxuryFloat2 delay-300">
  <YourComponent />
</div>
```

## Using Glass Effects
```jsx
<div className="glass-effect border border-gold/20 backdrop-blur-lg">
  Glass morphism content
</div>
```

---

# 🔧 Local IP Detection

To find your local IP for mobile testing:

### Windows:
```cmd
ipconfig | find "IPv4"
```

### macOS/Linux:
```bash
ifconfig | grep "inet "
```

---

# 📊 Testing & Quality Assurance

## Performance Testing
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Lighthouse**: Built into Chrome DevTools

## Code Quality
- ✅ TypeScript strict mode compliance
- ✅ ESLint rules followed
- ✅ Consistent naming conventions
- ✅ Proper component structure
- ✅ Clean import organization

## Browser Compatibility
- ✅ Modern browsers support
- ✅ Progressive enhancement
- ✅ Fallbacks for older browsers
- ✅ Cross-platform tested

---

# 🎉 License

"# portfolio" 
"# newportfolio" 
