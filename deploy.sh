#!/bin/bash

# Nitaq Training Center - Deployment Helper Script
# This script helps prepare and deploy your static site

echo "🚀 Nitaq Training Center - Deployment Helper"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check Git status
echo "📝 Step 1: Checking Git status..."
if [ -d ".git" ]; then
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
fi
echo ""

# Step 2: Show deployment options
echo "🎯 Step 2: Choose deployment method:"
echo ""
echo "Option 1: Deploy via Vercel (Static)"
echo "  1. Push code to GitHub"
echo "  2. Import repo in Vercel"
echo "  3. Vercel will auto-detect it as a static site"
echo ""
echo "Option 2: Deploy via Netlify"
echo "  Drag and drop this folder to Netlify Drop"
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
fi

echo ""
echo "=============================================="
echo -e "${GREEN}✅ Ready for deployment!${NC}"
echo "=============================================="
