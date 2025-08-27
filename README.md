#  React + Tailwind CSS + Vite + TypeScript Template

This branch provides a **React** starter template configured with **Tailwind CSS**, **Vite**, and **TypeScript**. Ideal for modern frontend development with fast builds and utility-first styling.

---

## 📁 Folder Structure


``` 
├── public/  
├── src/  
├── .gitignore  
├── README.md  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.cjs  
├── tailwind.config.js  
├── tsconfig.json  
├── tsconfig.app.json  
├── tsconfig.node.json  
└── vite.config.ts

```

---

## 🧰 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS v3
- 🟦 TypeScript


---

## 🚀 Getting Started

### 1. Clone the Repository & Checkout the Tailwind Branch

```bash
https://github.com/dharshan-kumarj/React_CSS_Frameworks_Starter/tree/Tailwind
cd React_CSS_Frameworks_Starter
git checkout Tailwind

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Start the Dev Server

```bash
npm run dev

```

----------

## 🧩 Tailwind CSS Configuration

###  `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
### `postcss.config.cjs`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

###  `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

----------

## 🧪 Verifying Tailwind CSS

To check if Tailwind is working:

1.  Go to `src/App.tsx`
    
2.  Add a class like `bg-blue-600 text-white p-4 rounded`
    
3.  Run the app and see the changes
    

----------

## 🏗️ Build for Production

```bash
npm run build

```

Then preview using:

```bash
npm run preview

```

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
"# portfolio" 
