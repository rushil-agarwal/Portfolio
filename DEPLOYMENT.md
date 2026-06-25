# Deployment Guide - Vercel

## 🚀 Deploy Your Portfolio to Vercel

Follow these steps to deploy your portfolio to Vercel for free.

---

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free) - Sign up at [vercel.com](https://vercel.com)
- ✅ Your portfolio code pushed to GitHub

---

## Step 1: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push
git push -u origin main
```

---

## Step 2: Connect to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select your portfolio repository
6. Click **"Import"**

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Step 3: Configure Project

Vercel will auto-detect Next.js. Verify these settings:

### Build & Development Settings

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |
| **Development Command** | `npm run dev` |

These should be automatically configured. Click **"Deploy"** if they look correct.

---

## Step 4: Wait for Deployment

- Vercel will install dependencies, build your site, and deploy
- Usually takes 2-5 minutes
- You'll see real-time logs

---

## Step 5: Your Site is Live! 🎉

You'll get a URL like:
```
https://your-portfolio-abc123.vercel.app
```

Click on it to visit your live portfolio!

---

## 🌐 Add Custom Domain (Optional)

### 1. Buy a Domain

Popular registrars:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://www.cloudflare.com)

### 2. Add Domain in Vercel

1. Go to your project in Vercel
2. Click **"Settings"**
3. Click **"Domains"**
4. Enter your domain (e.g., `rushilagarwal.com`)
5. Click **"Add"**

### 3. Configure DNS

Vercel will show you DNS records to add:

#### For Root Domain (rushilagarwal.com)

Add an **A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

#### For Subdomain (www.rushilagarwal.com)

Add a **CNAME Record**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. Wait for DNS Propagation

- DNS changes take 24-48 hours to propagate
- Usually works within 1-2 hours
- Check status in Vercel dashboard

---

## ⚙️ Environment Variables (Optional)

### For Google Analytics

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add:
   ```
   Name: NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID
   Value: G-XXXXXXXXXX
   ```

### For Google Search Console

1. Verify your site in [Google Search Console](https://search.google.com/search-console)
2. Get verification code
3. Add in Vercel:
   ```
   Name: NEXT_PUBLIC_GOOGLE_VERIFICATION
   Value: your-verification-code
   ```

---

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub:

### Production Deployments
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
- Pushes to `main` branch deploy to production
- Your site updates automatically!

### Preview Deployments
```bash
# Create a new branch
git checkout -b new-feature

# Make changes and push
git add .
git commit -m "Add new feature"
git push origin new-feature
```
- Vercel creates a preview URL for each branch
- Test changes before merging to main

---

## 📊 Vercel Features

### Analytics (Free)

1. Go to project → **Analytics** tab
2. View:
   - Page views
   - Visitor count
   - Performance metrics
   - Real-time data

### Performance Insights

1. Go to project → **Speed Insights**
2. See:
   - Core Web Vitals
   - Performance scores
   - Optimization suggestions

### Logs

1. Go to project → **Deployments**
2. Click any deployment
3. View **Build Logs** and **Function Logs**

---

## 🐛 Troubleshooting

### Build Fails

**Check build logs**:
1. Go to Vercel dashboard
2. Click failed deployment
3. Read error messages

**Common issues**:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally first
- Environment variables: Add them in Vercel settings

### Site Not Loading

**Check deployment status**:
- Green checkmark = deployed successfully
- Red X = deployment failed

**Clear cache**:
```bash
vercel --force
```

### Domain Not Working

**Check DNS**:
- Verify DNS records match Vercel's requirements
- Wait 24-48 hours for propagation
- Use [DNS Checker](https://dnschecker.org) to verify

**SSL Certificate**:
- Vercel automatically provides SSL
- Wait a few minutes after adding domain
- Should show "Certificate issued" in Vercel

---

## 📱 Mobile Optimization

Vercel automatically:
- ✅ Optimizes images
- ✅ Minifies JavaScript/CSS
- ✅ Enables HTTP/2
- ✅ Compresses responses
- ✅ Serves from CDN edge locations
- ✅ Generates SSL certificate

---

## 🔒 Security Features

- **HTTPS**: Automatic SSL certificates
- **DDoS Protection**: Built-in
- **Firewall**: Vercel Edge Network
- **Environment Variables**: Encrypted

---

## 💰 Pricing

### Free (Hobby) Plan Includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Custom domains
- Preview deployments
- Analytics

**Perfect for personal portfolios!**

### Pro Plan ($20/month):
- 1 TB bandwidth
- Advanced analytics
- Password protection
- Commercial use
- Priority support

---

## 📧 Post-Deployment

### 1. Test Your Site

Visit your live URL and check:
- ✅ All pages load correctly
- ✅ Images appear
- ✅ Links work
- ✅ Contact information correct
- ✅ Mobile responsive
- ✅ Themes switch properly

### 2. Submit to Search Engines

**Google**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your site
3. Submit sitemap: `https://your-site.com/sitemap.xml`

**Bing**:
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 3. Share Your Portfolio

Update your:
- LinkedIn profile
- GitHub profile README
- Resume
- Email signature
- Social media bios

---

## 🎯 Optimization Tips

### Before Deployment:

1. **Replace placeholder images**:
   - Add your profile photo to `/public/profile-img.jpg`
   - Add your logo to `/public/logo.png`

2. **Update site URL**:
   - Edit `config/site.ts`
   - Change `url` to your production URL

3. **Test build locally**:
   ```bash
   npm run build
   npm start
   ```

4. **Check for errors**:
   ```bash
   npm run lint
   ```

### After Deployment:

1. **Monitor performance** in Vercel dashboard
2. **Check analytics** weekly
3. **Update content** regularly
4. **Keep dependencies updated**:
   ```bash
   npm update
   ```

---

## 🆘 Need Help?

### Vercel Documentation
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

### Common Commands

```bash
# View deployment logs
vercel logs <deployment-url>

# List all deployments
vercel list

# Remove a deployment
vercel remove <deployment-url>

# Check project info
vercel inspect <deployment-url>
```

---

## ✨ Success Checklist

- [ ] Code pushed to GitHub
- [ ] Connected to Vercel
- [ ] Site deployed successfully
- [ ] Custom domain added (optional)
- [ ] DNS configured (optional)
- [ ] Environment variables set (optional)
- [ ] Site tested on mobile and desktop
- [ ] Submitted to Google Search Console
- [ ] Updated LinkedIn/GitHub profiles
- [ ] Shared with network

---

Congratulations! Your portfolio is now live and accessible worldwide! 🎉
