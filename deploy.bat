@echo off
REM Portfolio Deployment Script for mahesh.contact/portfolio (Windows)
REM This script automates the deployment process

echo 🚀 Starting deployment for mahesh.contact/portfolio...

REM Step 1: Clean and build
echo 📦 Building production version...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Step 2: Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git branch -M main
)

REM Step 3: Add and commit changes
echo 📝 Committing changes...
git add .
git commit -m "Deploy portfolio to mahesh.contact/portfolio - %date% %time%"

REM Step 4: Check for remote and push
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo 📤 Pushing to GitHub...
    git push origin main
) else (
    echo ⚠️  No GitHub remote found. Add your repository:
    echo git remote add origin https://github.com/your-username/portfolio.git
    echo git push -u origin main
)

echo.
echo 🎯 Next Steps:
echo 1. Go to https://vercel.com
echo 2. Login with GitHub
echo 3. Click 'Add New → Project'
echo 4. Select your portfolio repository
echo 5. Click 'Deploy'
echo.
echo 📱 Your portfolio will be live at:
echo    - Vercel URL: https://portfolio-username.vercel.app
echo    - Custom Domain: https://mahesh.contact/portfolio
echo.
echo 🔧 Don't forget to:
echo    - Add mahesh.contact domain in Vercel Dashboard
echo    - Update DNS records at your domain provider
echo    - Test at http://localhost:4173/portfolio/ first
echo.
echo ✨ Deployment preparation complete!
pause
