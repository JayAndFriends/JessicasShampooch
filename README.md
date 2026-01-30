# Jessica's Shampooch - Premium Pet Grooming Website

A modern, professional, and performant website for Jessica's Shampooch pet grooming salon in Hermitage, PA.

## 🚀 Features

- ⚡ **Fast & Performant** - Built with Vite for lightning-fast builds and optimized bundle sizes
- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations and transitions
- 📱 **Fully Responsive** - Looks great on all devices from mobile to desktop
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data, and more
- 📊 **Analytics Ready** - Google Analytics integration placeholder
- ✅ **Type Safe** - Full TypeScript coverage with strict mode enabled
- 🎯 **Form Validation** - Zod-powered validation with user-friendly error messages
- 🧪 **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks

## 📋 Prerequisites

- Node.js 18+ (recommended: latest LTS version)
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jessica's-shampooch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and update with your values:
   ```bash
   cp .env.example .env.local
   ```

   Update the following variables:
   - `VITE_WEBHOOK_URL` - Your form submission webhook endpoint
   - `VITE_GA_MEASUREMENT_ID` - Your Google Analytics measurement ID (optional)

## 🚦 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Building for Production

Build the production-ready bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel dashboard

### Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Set environment variables in Netlify dashboard

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider

## 🧪 Code Quality

### Linting

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

```bash
# Check formatting
npm run format:check

# Auto-format code
npm run format
```

### Type Checking

```bash
npm run type-check
```

## 📁 Project Structure

```
jessica's-shampooch/
├── src/
│   ├── assets/           # Images, icons, and static assets
│   ├── components/
│   │   ├── ui/          # Reusable UI components (Button, Input, etc.)
│   │   ├── sections/    # Page sections (Header, Hero, Footer, etc.)
│   │   └── SEO.tsx      # SEO meta tags component
│   ├── constants/       # App constants and configuration
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles and Tailwind imports
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── public/             # Public static assets
├── .env.example        # Environment variables template
├── .env.local         # Your local environment variables (git-ignored)
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:

```js
colors: {
  pink: {
    primary: '#ff6b95',
    light: '#ff85a1',
    dark: '#ff4d7d',
    // ...
  },
}
```

### Content

Update constants in `src/constants/index.ts`:

- Testimonials
- Business hours
- Contact information
- Navigation links
- SEO meta tags

### Images

Replace placeholder images in:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Testimonials.tsx`

## 📊 Analytics

To enable Google Analytics:

1. Get your GA4 Measurement ID from Google Analytics
2. Add it to `.env.local`:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Analytics will automatically initialize on app load

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEBHOOK_URL` | Form submission endpoint | Yes |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | No |
| `VITE_APP_NAME` | Application name | No |
| `VITE_PHONE_NUMBER` | Contact phone number | No |
| `VITE_ADDRESS` | Business address | No |

## 🐛 Troubleshooting

### Dependencies issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
# Run type checking to see detailed errors
npm run type-check
```

## 📝 License

© 2025 Jessica's Shampooch. All rights reserved.

## 🤝 Support

For support, email support@jessicas-shampooch.com or call (724) 342-3647.
