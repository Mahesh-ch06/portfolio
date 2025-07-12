# 🚀 Portfolio Deployment Guide - mahesh.contact/portfolio

## ✅ Your Project is Ready for Subpath Deployment!
Your Vite React portfolio is configured for `mahesh.contact/portfolio` with:
- **Bundle Size**: ~75kB total (gzipped)
- **Base Path**: `/portfolio/` configured
- **Performance**: GPU-accelerated animations
- **SEO**: Optimized for subpath routing

---

## 📁 Step 1: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Portfolio setup for mahesh.contact/portfolio deployment"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/your-username/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel with Subpath Configuration

### Quick Deploy:
1. Go to [vercel.com](https://vercel.com)
2. Login with GitHub
3. Click **"Add New → Project"**
4. Select your portfolio repository
5. **Framework Preset**: Vite (auto-detected)
6. **Build Command**: `npm run build` (pre-configured)
7. **Output Directory**: `dist` (pre-configured)
8. Click **Deploy**

Your site will be live at: `https://portfolio-username.vercel.app`

---

## 🎯 Step 3: Setup Custom Domain (mahesh.contact/portfolio)

### Method 1: Using Vercel Project Settings (Recommended)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add domain: `mahesh.contact`
   - Set the project to handle the `/portfolio` path

2. **Configure Path-Based Routing**:
   - Vercel will handle `/portfolio` route automatically
   - Your `vercel.json` is already configured for this

3. **DNS Setup at Your Domain Provider**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: Auto/3600
   ```

   OR for CNAME:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   TTL: Auto/3600
   ```

### Method 2: Main Site + Portfolio Setup

If you have a main site at `mahesh.contact`, you'll need:

1. **Main Site**: Deploy separately to handle root domain
2. **Portfolio**: This project handles `/portfolio` path
3. **Proxy/Rewrite**: Configure main site to proxy `/portfolio/*` to this deployment

---

## 🛠 Step 4: Verify Configuration

### Build Test:
```bash
# Test production build with subpath
npm run build

# Preview locally with subpath
npm run preview
# Visit: http://localhost:4173/portfolio/
```

### Environment Variables:
- ✅ `VITE_APP_URL=https://mahesh.contact/portfolio`
- ✅ `VITE_BASE_URL=/portfolio/`
- ✅ Vite config: `base: '/portfolio/'` in production

---

## 📊 Subpath-Optimized Configuration

### Vite Config (vite.config.ts):
```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  // ... other config
})
```

### Vercel Config (vercel.json):
```json
{
  "rewrites": [
    {
      "source": "/portfolio/(.*)",
      "destination": "/portfolio/$1"
    },
    {
      "source": "/portfolio",
      "destination": "/portfolio/index.html"
    }
  ]
}
```

---

## � Deploy Commands

### Using Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login

# Deploy to production
vercel --prod

# Set domain (if needed)
vercel domains add mahesh.contact
```

### Using Git (Auto-deploy):
```bash
# Any push to main branch auto-deploys
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 📱 Final URL Structure

| Purpose | URL | Status |
|---------|-----|--------|
| **Portfolio** | `https://mahesh.contact/portfolio` | ✅ Configured |
| **Direct Access** | `https://portfolio-username.vercel.app` | ✅ Backup URL |
| **Assets** | `https://mahesh.contact/portfolio/assets/*` | ✅ Cached |

---

## 🎯 Post-Deployment Checklist

- [ ] Visit `https://mahesh.contact/portfolio`
- [ ] Test all navigation (should stay within `/portfolio` path)
- [ ] Verify responsive design on mobile
- [ ] Check loading performance (should be <3s)
- [ ] Test contact form functionality
- [ ] Verify dark/light mode toggle
- [ ] Check all animations work smoothly
- [ ] Test download resume functionality
- [ ] Validate CSS and JS assets load correctly

---

## � Important Notes for Subpath Deployment

1. **Asset Paths**: All assets automatically use `/portfolio/` prefix
2. **Navigation**: Internal links work within the subpath
3. **SEO**: Meta tags updated for subpath URL
4. **Social Sharing**: URLs include full subpath
5. **Analytics**: Track with full subpath in URL

---

## 📞 Troubleshooting

### If `/portfolio` shows 404:
1. Check DNS propagation (24-48 hours)
2. Verify Vercel domain settings
3. Ensure `vercel.json` rewrites are correct

### If assets don't load:
1. Check `base` path in vite.config.ts
2. Verify asset paths include `/portfolio/`
3. Clear browser cache

---

Your portfolio is now configured for `mahesh.contact/portfolio`! 🌟

**Final URL**: `https://mahesh.contact/portfolio`
