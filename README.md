# Rushil Agarwal - Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS, showcasing projects, experience, skills, and coding achievements.

## ✨ Features

- **Projects Showcase** - 6 detailed project pages with descriptions, tech stacks, and achievements
- **Experience Timeline** - Work experience and education history
- **Skills Display** - Technical skills with ratings and descriptions
- **Coding Profiles** - GitHub, Codeforces, LeetCode, and LinkedIn integration
- **Contact Page** - Clean contact information with email, LinkedIn, and GitHub
- **Dark/Light Themes** - Multiple theme options (retro, cyberpunk, aurora, etc.)
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Structured data, meta tags, and sitemap
- **Fast Performance** - Built with Next.js 16 and optimized for speed

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/rushil-agarwal/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio!

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── (root)/            # Main pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── common/           # Shared components
│   ├── ui/               # UI components
│   ├── projects/         # Project components
│   ├── experience/       # Experience components
│   └── skills/           # Skills components
├── config/               # Configuration files
│   ├── site.ts          # Site metadata
│   ├── projects.ts      # Projects data
│   ├── experience.ts    # Experience data
│   ├── skills.ts        # Skills data
│   ├── socials.ts       # Social links
│   └── contributions.ts # Coding profiles
├── public/              # Static assets
│   ├── profile-img.jpg  # Your photo (REPLACE THIS)
│   ├── logo.png         # Your logo (REPLACE THIS)
│   └── favicon.ico      # Browser icon (REPLACE THIS)
└── lib/                 # Utility functions
```

## 🎨 Customization

### Update Your Information

All content is in the `config/` folder:

1. **Personal Info**: Edit `config/site.ts`
   - Name, description, social links, keywords

2. **Projects**: Edit `config/projects.ts`
   - Add/remove/edit your projects

3. **Experience**: Edit `config/experience.ts`
   - Work history and education

4. **Skills**: Edit `config/skills.ts`
   - Technical skills and ratings

5. **Social Profiles**: Edit `config/socials.ts`
   - GitHub, LinkedIn, Codeforces, LeetCode

6. **Coding Profiles**: Edit `config/contributions.ts`
   - Competitive programming achievements

### Replace Images

Replace these files in `/public/`:
- `profile-img.jpg` - Your profile photo (1200x630px recommended)
- `logo.png` - Your logo/icon (512x512px recommended)
- `favicon.ico` - Browser tab icon (32x32px)

### Detailed Customization

See `HOW_TO_CUSTOMIZE.md` and `QUICK_EDIT_GUIDE.md` for complete customization instructions.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

6. Click "Deploy"

Your site will be live in minutes!

### Environment Variables (Optional)

For analytics, add these in Vercel dashboard:
```
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### Custom Domain

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide Icons, React Icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Deployment**: Vercel

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **SEO Score**: 100
- **Accessibility Score**: 100

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🔍 SEO Features

- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card tags
- Dynamic sitemap generation
- Robots.txt
- Semantic HTML
- Proper heading hierarchy
- Alt tags for images

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images for all screen sizes

## 🎭 Themes

Available themes:
- Light (default)
- Dark
- Retro
- Cyberpunk
- Paper
- Aurora
- Synthwave

Users can switch themes using the theme toggle in the navigation.

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork the repository
- Use it as a template for your own portfolio
- Report issues or suggest improvements

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

- **Email**: rushilbti@gmail.com
- **LinkedIn**: [linkedin.com/in/rushil-agarwal-86b519298](https://www.linkedin.com/in/rushil-agarwal-86b519298/)
- **GitHub**: [github.com/rushil-agarwal](https://github.com/rushil-agarwal)
- **Codeforces**: Specialist (1503)
- **LeetCode**: Guardian (2206)

## 🙏 Acknowledgments

- Original template inspiration from [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Built with ❤️ by Rushil Agarwal
