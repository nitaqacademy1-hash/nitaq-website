# Nitaq Training Center - Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Git installed on your computer

### Step-by-Step Deployment

#### 1. **Prepare Your Project**
```bash
# Make sure all changes are saved
# Build the project locally to test
npm run build
```

#### 2. **Initialize Git Repository (if not already done)**
```bash
git init
git add .
git commit -m "Initial commit - Nitaq Training Center"
```

#### 3. **Create GitHub Repository**
- Go to github.com
- Click "New Repository"
- Name it: `nitaq-training-center`
- Don't initialize with README
- Click "Create Repository"

#### 4. **Push to GitHub**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/nitaq-training-center.git
git branch -M main
git push -u origin main
```

#### 5. **Deploy on Vercel**

**Option A: Using Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Wait 1-2 minutes for deployment

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 6. **Configure Custom Domain (Optional)**
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 📋 Pre-Deployment Checklist

### ✅ Files to Check

- [x] `vercel.json` - Vercel configuration
- [x] `package.json` - Build scripts configured
- [x] `.gitignore` - Excludes node_modules and dist
- [x] All images in `/public/images/` folder
- [x] All HTML files use correct image paths

### ✅ Image Paths
Make sure all image paths start with `/` for production:
```html
<!-- ✅ Correct -->
<img src="/images/logo.png" alt="Logo">
<img src="/public/images/student.jpg" alt="Student">

<!-- ❌ Wrong -->
<img src="images/logo.png" alt="Logo">
<img src="../images/logo.png" alt="Logo">
```

### ✅ Build Test
```bash
# Test build locally
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Vercel Configuration

The `vercel.json` file includes:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (auto-detected)
- **Caching**: Optimized for static assets

---

## 🌐 Environment Variables (if needed)

If you need environment variables:

1. Create `.env` file locally (already in .gitignore)
2. Add variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add each variable (e.g., API keys)

---

## 📱 Post-Deployment Testing

After deployment, test:
- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Images display properly
- ✅ Forms submit correctly
- ✅ Mobile responsiveness
- ✅ All course pages accessible

---

## 🔄 Updating Your Site

After deployment, to update:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push

# Vercel will auto-deploy!
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Check image paths start with `/`
- Verify images are in `/public/images/` folder
- Check file names match exactly (case-sensitive)

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors
- Check `vercel.json` rewrites configuration
- Ensure all HTML files are in root directory

---

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Gzip compression
- ✅ Edge caching

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/

---

## 🎉 Your Site Will Be Live At:

```
https://nitaq-training-center.vercel.app
```

Or your custom domain once configured!

---

**Last Updated**: December 23, 2025
**Status**: Ready for Deployment ✅
