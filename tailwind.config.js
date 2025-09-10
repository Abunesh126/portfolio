/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        'dark': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'dark-accent': '#2d2d2d',
        'dark-surface': 'rgba(10, 10, 10, 0.95)',
        
        // Gold Theme Colors
        'gold': '#FFD700',
        'gold-light': '#FFF8DC',
        'gold-dark': '#B8860B',
        'gold-accent': '#DAA520',
        'gold-300': '#D4AF37',
        'gold-400': '#B8860B',
        'gold-500': '#DAA520',
        
        // Glass Effects
        'glass': 'rgba(255, 215, 0, 0.1)',
        'glass-border': 'rgba(255, 215, 0, 0.2)',
        'shadow-gold': 'rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'luxuryFloat': 'luxuryFloat 6s ease-in-out infinite',
        'luxuryFloat1': 'luxuryFloat1 8s ease-in-out infinite',
        'luxuryFloat2': 'luxuryFloat2 10s ease-in-out infinite',
        'luxuryFloat3': 'luxuryFloat3 12s ease-in-out infinite',
        'luxuryFloat4': 'luxuryFloat4 14s ease-in-out infinite',
        'luxuryGlow': 'luxuryGlow 4s ease-in-out infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'goldShine': 'goldShine 3s ease-in-out infinite',
        'crown-float': 'crown-float 4s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'ping-delayed': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        luxuryFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        luxuryFloat1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        luxuryFloat2: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-25px) translateX(10px)' },
        },
        luxuryFloat3: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-18px) scale(1.05)' },
        },
        luxuryFloat4: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) translateX(5px) rotate(2deg)' },
          '75%': { transform: 'translateY(-10px) translateX(-5px) rotate(-2deg)' },
        },
        luxuryGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        goldShine: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'crown-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(10deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
