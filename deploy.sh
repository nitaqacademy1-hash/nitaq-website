#!/bin/bash

# Nitaq Training Center - Deployment Helper Script
# This script helps prepare and deploy your site to Vercel

echo "🚀 Nitaq Training Center - Deployment Helper"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if node_modules exists
echo "📦 Step 1: Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi
echo ""

# Step 2: Run build test
echo "🔨 Step 2: Testing build..."
if npm run build; then
    echo -e "${GREEN}✓ Build successful!${NC}"
else
    echo -e "${RED}✗ Build failed. Please fix errors before deploying.${NC}"
    exit 1
fi
echo ""

# Step 3: Check Git status
echo "📝 Step 3: Checking Git status..."
if [ -d ".git" ]; then
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
fi
echo ""

# Step 4: Show deployment options
echo "🎯 Step 4: Choose deployment method:"
echo ""
echo "Option 1: Deploy via Vercel Dashboard (Recommended for first-time)"
echo "  1. Push code to GitHub"
echo "  2. Go to vercel.com"
echo "  3. Import your repository"
echo "  4. Click Deploy"
echo ""
echo "Option 2: Deploy via Vercel CLI"
echo "  Run: npm i -g vercel && vercel --prod"
echo ""

# Ask user what they want to do
read -p "Do you want to commit changes to Git? (y/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter commit message: " commit_msg
    git add .
    git commit -m "$commit_msg"
    echo -e "${GREEN}✓ Changes committed${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin YOUR_REPO_URL"
    echo "3. Run: git push -u origin main"
    echo "4. Deploy on Vercel"
fi

echo ""
echo "=============================================="
echo -e "${GREEN}✅ Pre-deployment checks complete!${NC}"
echo "=============================================="
echo ""
echo "📚 For detailed instructions, see:"
echo "  - DEPLOYMENT.md"
echo "  - DEPLOYMENT-CHECKLIST.md"
echo ""
echo "🎉 Good luck with your deployment!"
