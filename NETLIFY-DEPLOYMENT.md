# 🌐 Netlify Deployment Guide for Portfolio

## 📁 Folder Structure for mahesh.contact/portfolio

Your main site repository should have this structure:

```
/main-site-repo/
├── public/
│   └── index.html          # Main site (mahesh.contact)
└── portfolio/              # Portfolio subpath (mahesh.contact/portfolio)
    ├── index.html
    ├── assets/
    ├── chunks/
    └── entry/
```

## 🚀 Deployment Steps

### Option 1: Manual Upload to Netlify

1. **Build the portfolio**:
   ```bash
   npm run build:netlify
   ```

2. **Copy `dist/` contents to your main site**:
   - Copy everything from `dist/` folder
   - Paste into `/portfolio/` folder in your main site repository
   - Upload to Netlify

### Option 2: Automatic Deployment

1. **Connect this repository to Netlify**:
   - Go to Netlify Dashboard
   - "New site from Git"
   - Connect your GitHub `portfolio` repository

2. **Build Settings**:
   - **Build command**: `npm run build:netlify`
   - **Publish directory**: `dist`
   - **Node version**: `18`

3. **Custom Domain Setup**:
   - Add `mahesh.contact` as custom domain
   - Configure DNS to point to Netlify

## ⚙️ Configuration Files

### `netlify.toml` (Already created)
```toml
[build]
  publish = "dist"
  command = "npm run build:netlify"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/portfolio/*"
  to = "/portfolio/index.html"
  status = 200
```

### `_redirects` (Already created)
```
/portfolio/* /portfolio/index.html 200
/portfolio /portfolio/index.html 200
```

## 🎯 Expected URLs

After deployment:
- **Main site**: `https://mahesh.contact`
- **Portfolio**: `https://mahesh.contact/portfolio`

## 🔧 Troubleshooting

- If you get 404 errors, check the `_redirects` file
- Ensure the build outputs to `dist/` with `/portfolio/` base path
- Verify custom domain DNS settings in Netlify
