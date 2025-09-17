# 🚀 Deployment Guide - Easy Daily Recipe

## 🌊 DigitalOcean App Platform

### Method 1: Using App Platform (Recommended)

1. **Push to GitHub**
   - Upload all files to your GitHub repository
   - Make sure the repository is public or connected to DigitalOcean

2. **Create App on DigitalOcean**
   - Go to DigitalOcean App Platform
   - Click "Create App"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Run Command**: `npm run serve`
   - **Output Directory**: `dist`
   - **Environment**: Node.js

4. **Deploy**
   - Click "Create Resources"
   - Wait for deployment to complete

### Method 2: Static Site Hosting

If you want to deploy as a static site (cheaper option):

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to:
   - DigitalOcean Spaces + CDN
   - Netlify (free)
   - Vercel (free)
   - GitHub Pages (free)

## 🎯 GitHub Pages (Free Alternative)

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy

2. **Your site will be live at**:
   `https://yourusername.github.io/easy-daily-recipe`

## 🔧 Netlify (Free Alternative)

1. **Connect GitHub repo** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automatically**

## ⚡ Vercel (Free Alternative)

1. **Connect GitHub repo** to Vercel
2. **Auto-detects** Vite configuration
3. **Deploys automatically**

## 🆘 Troubleshooting DigitalOcean

### Error: "Container not responding on port 3000"
**Solution**: Use the updated configuration files I provided

### Error: "Health check failure"
**Solution**: The app.yaml includes proper health check configuration

### Cost Optimization
- Use **static site hosting** instead of App Platform for lower costs
- GitHub Pages, Netlify, and Vercel are **free** alternatives

## 💡 Recommendation

For a static website like Easy Daily Recipe:
1. **GitHub Pages** - Free and automatic
2. **Netlify** - Free with great features
3. **Vercel** - Free with excellent performance
4. **DigitalOcean** - Paid but more control

Choose GitHub Pages for the easiest free deployment!