@echo off
echo 🏗️ Building portfolio for Netlify...

REM Build the project
call npm run build:portfolio

REM Create portfolio subdirectory structure
if not exist "dist-netlify" mkdir dist-netlify
if not exist "dist-netlify\portfolio" mkdir dist-netlify\portfolio

REM Copy built files to portfolio subdirectory
xcopy "dist\*" "dist-netlify\portfolio\" /E /I /Y

REM Copy _redirects to root
copy "public\_redirects" "dist-netlify\_redirects"

echo ✅ Netlify build complete!
echo 📁 Files ready in dist-netlify/
echo 🌐 Portfolio will be available at: your-domain.com/portfolio
