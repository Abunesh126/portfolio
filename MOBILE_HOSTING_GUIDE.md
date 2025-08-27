# 📱 Mobile Hosting Guide for Your Portfolio

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

## 🌐 Production Hosting Options

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

### 4. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📱 Mobile Optimization Features

Your portfolio already includes:
- ✅ Responsive viewport meta tag
- ✅ Touch-friendly interactions
- ✅ Mobile-first Tailwind CSS design
- ✅ Optimized images and assets
- ✅ Fast loading with Vite bundling
- ✅ Progressive Web App capabilities

## 🔧 Local IP Detection

To find your local IP for mobile testing:

### Windows:
```cmd
ipconfig | find "IPv4"
```

### macOS/Linux:
```bash
ifconfig | grep "inet "
```

## 🚀 Performance Tips for Mobile

1. **Image Optimization**: Your images are already optimized
2. **Code Splitting**: Implemented in vite.config.ts
3. **Caching**: Set up in your hosting provider
4. **Compression**: Enable gzip/brotli on your server

## 📊 Testing Your Mobile Site

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Lighthouse**: Built into Chrome DevTools

## 🔒 HTTPS for Mobile

Most hosting providers (Netlify, Vercel, etc.) provide HTTPS automatically. This is important for:
- Service Workers
- Camera/location access
- Modern browser features

## Support

If you encounter issues:
1. Check your mobile device and computer are on the same WiFi
2. Disable firewall temporarily for testing
3. Try a different port: `npm run preview -- --port 3001`
