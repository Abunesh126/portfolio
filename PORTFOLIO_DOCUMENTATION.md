# Dark & Gold Luxury Portfolio

A premium, performance-optimized portfolio website featuring a luxurious dark and gold theme with advanced animations and glassmorphism effects.

## 🌟 Features

### Design & Theme
- **Dark & Gold Luxury Theme**: Premium color palette with gold accents
- **Glassmorphism Effects**: Modern glass-like UI components with backdrop blur
- **Advanced Animations**: 15+ custom keyframe animations optimized for 60fps
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Performance Optimized**: GPU-accelerated transforms and minimal layout thrashing

### Components
1. **Header**: Sticky navigation with theme toggle and mobile menu
2. **Hero**: Animated profile section with rotating roles and floating particles
3. **Skills**: Interactive skill bubbles with floating animations
4. **Projects**: Luxury project cards with hover effects
5. **Contact**: Animated contact form with real-time validation
6. **Footer**: Social links with elegant branding

### Animation System
- **Floating Effects**: `luxuryFloat`, `luxuryFloat1-4` for organic movement
- **Glow & Shine**: `luxuryGlow`, `goldShine`, `shine` for premium effects
- **Particle System**: Sparkle, twinkle, and ping animations
- **Hover Interactions**: Scale, glow, and lift effects
- **Entrance Animations**: Staggered fade-in and slide effects

## 🎨 Theme System

### Color Palette
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

### Utility Classes
- `.text-luxury` - Gold gradient text
- `.glass-effect` - Glassmorphism background
- `.btn-luxury` - Premium button with shine effect
- `.card-luxury` - Glass card with hover effects
- `.animate-luxuryFloat` - Floating animations

## 🚀 Performance Features

### Optimizations
- **GPU Acceleration**: Transform-only animations
- **Reduced Motion Support**: Accessibility-compliant fallbacks
- **Efficient Animations**: 60fps target with `will-change` optimization
- **Tree-shaken CSS**: Modular stylesheet architecture
- **Lazy Loading**: Intersection Observer for scroll-triggered animations

### File Structure
```
src/
├── styles/
│   ├── theme.css          # Core theme system (~144 lines)
│   ├── animations.css     # Animation library (~274 lines)
│   ├── components.css     # Component styles (~350+ lines)
│   └── index.css          # Main imports and globals
├── components/
│   ├── Hero.tsx           # Landing section with animations
│   ├── Skills.tsx         # Interactive skill bubbles
│   ├── Contact.tsx        # Contact form with validation
│   └── Project.tsx        # Project showcase grid
└── pages/
    ├── Header.tsx         # Navigation with theme toggle
    └── Footer.tsx         # Social links and branding
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first styling with custom extensions
- **Framer Motion 12.23.12** - Advanced animations (if needed for complex sequences)
- **React Icons 5.5.0** - Comprehensive icon library

### Build Tools
- **Vite 6.3.5** - Lightning-fast build tool
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **ESLint** - Code quality and consistency

## 🎯 Component Details

### Header Component
```typescript
// Features:
- Sticky navigation with backdrop blur
- Animated logo with shine effect
- Mobile hamburger menu
- Theme toggle with localStorage persistence
- Smooth scroll navigation
```

### Hero Component
```typescript
// Features:
- Animated profile image with crown
- Cycling role titles with icons
- Floating background particles
- CTA buttons with hover effects
- Social media links
- Scroll indicator
```

### Skills Component
```typescript
// Features:
- Floating skill bubbles with random animations
- Technology icons with hover effects
- Category grouping and legend
- Intersection observer for scroll animations
- Responsive grid layout
```

### Projects Component
```typescript
// Features:
- Luxury project cards with glass effects
- Technology tags with hover animations
- Featured project badges
- External links to GitHub/live demos
- Staggered entrance animations
```

### Contact Component
```typescript
// Features:
- Animated contact form with validation
- Contact method cards with icons
- Real-time form status feedback
- Glass morphism design
- Floating particle effects
```

### Footer Component
```typescript
// Features:
- Social media links with hover effects
- Tech stack indicators
- Scroll-to-top button
- Responsive layout
- Subtle animations
```

## ⚡ Animation Performance

### Custom Keyframes (15+)
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

### Performance Guidelines
- Use `transform` and `opacity` for animations
- Apply `will-change` for frequently animated elements
- Provide `prefers-reduced-motion` fallbacks
- Target 60fps on all devices
- Minimize layout-triggering properties

## 🎨 Usage Examples

### Creating Luxury Buttons
```jsx
<button className="btn-luxury group">
  <FiRocket className="group-hover:rotate-12 transition-transform duration-300" />
  Get Started
</button>
```

### Adding Floating Animations
```jsx
<div className="animate-luxuryFloat2 delay-300">
  <YourComponent />
</div>
```

### Glass Effect Cards
```jsx
<div className="card-luxury hover-luxury">
  <h3 className="text-luxury">Title</h3>
  <p className="text-gold/80">Content</p>
</div>
```

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🎨 Customization

### Adding New Animations
1. Define keyframes in `animations.css`
2. Add animation class
3. Include in Tailwind config if needed

### Extending Color Palette
1. Update CSS variables in `theme.css`
2. Add Tailwind color extensions
3. Create utility classes

### Adding New Components
1. Follow existing component structure
2. Include proper TypeScript interfaces
3. Add responsive breakpoints
4. Implement accessibility features

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large**: 1024px+

## ♿ Accessibility Features

- **WCAG AA Contrast**: Gold/dark theme meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Animation fallbacks for users with motion sensitivity
- **Focus Indicators**: Clear focus outlines in gold theme

## 🚀 Deployment

The project is optimized for deployment on modern hosting platforms:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📈 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Animation Performance**: 60fps on modern devices
- **Bundle Size**: Optimized with tree-shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Test animations on multiple devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with passion in the luxury realm of code** ✨👑

*Crafted by Abunesh RP - Full Stack Developer*
