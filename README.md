# Amir Deilamizadeh - Portfolio

An impressive portfolio SPA showcasing AI solutions architecture expertise, built with Next.js 15, Three.js, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Next.js 15, React 18, TypeScript
- **Beautiful UI**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js for immersive visual experiences
- **Smooth Animations**: Framer Motion for polished interactions
- **Dark/Light Theme**: System-aware theme switching
- **Fully Responsive**: Mobile-first design approach
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags and Open Graph support

## 📦 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages via GitHub Actions

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/amirdeilamizadeh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page with all sections
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Page sections (Hero, About, etc.)
│   └── ui/                # Shadcn UI components
├── lib/
│   ├── constants.ts       # Resume data and configuration
│   └── utils.ts           # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## 🎨 Sections

1. **Hero** - Animated introduction with CTA buttons
2. **About** - Professional summary with key statistics
3. **Tech Stack** - Filterable skills showcase
4. **Experience** - Timeline-based career history
5. **Projects** - Featured AI projects in bento grid
6. **Education** - Academic background and certifications
7. **Languages** - Language proficiency indicators
8. **Contact** - Contact form and social links

## 🚀 Deployment

This project is configured for GitHub Pages with automatic deployment via GitHub Actions.

### Setup

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Source: GitHub Actions
4. Push to main branch triggers deployment

The site will be available at: `https://amirdeilamizadeh.github.io/portfolio/`

## 📝 Customization

### Update Personal Information

Edit `lib/constants.ts` to update:

- Personal info and summary
- Work experience
- Projects
- Education
- Skills and proficiency levels
- Language proficiency
- Social links

### Theme Colors

Modify theme colors in `app/globals.css`:

- Custom color palette with HSL values
- Dark/light mode variants
- Primary, accent, and other semantic colors

## 📄 License

© 2026 Amir Deilamizadeh. All rights reserved.

## 🤝 Contact

- **Email**: amir@example.com
- **LinkedIn**: [linkedin.com/in/amirdeilamizadeh](https://linkedin.com/in/amirdeilamizadeh)
- **GitHub**: [github.com/amirdeilamizadeh](https://github.com/amirdeilamizadeh)

---

Built with ❤️ using Next.js and Three.js
