# Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- React 19
- TypeScript
- Tailwind CSS
- Vite
- Zod (form validation)
- ESLint & Prettier
- And more...

### Step 2: Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   (On Windows, you can manually copy the file)

2. Open `.env.local` and verify the values:
   ```env
   VITE_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
   VITE_PHONE_NUMBER=+17243423647
   VITE_ADDRESS=2005 Pine Hollow Blvd, Hermitage, PA 16148
   ```

3. (Optional) Add your Google Analytics ID:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 3: Start Development Server

```bash
npm run dev
```

The website will open at: `http://localhost:3000`

---

## 🎨 Making Changes

### Update Content

Edit `src/constants/index.ts` to change:
- Testimonials
- Business hours
- Contact information
- Navigation links

### Change Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  pink: {
    primary: '#ff6b95',  // Change this!
    // ...
  }
}
```

### Update Components

All components are in `src/components/`:
- `sections/` - Page sections (Header, Hero, etc.)
- `ui/` - Reusable components (Button, Input, etc.)

---

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

Test the production build locally:

```bash
npm run preview
```

---

## 🚢 Deploying to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is taken, Vite will automatically use the next available port (3001, 3002, etc.)

### Module Not Found Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

Check for TypeScript errors:
```bash
npm run type-check
```

Fix linting issues:
```bash
npm run lint:fix
```

---

## 📞 Need Help?

- Check the full README.md for detailed documentation
- Review TRANSFORMATION_SUMMARY.md to understand the codebase structure
- Contact: (724) 342-3647

---

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Installed all dependencies
- [ ] Set up environment variables
- [ ] Tested locally (`npm run dev`)
- [ ] Run linting (`npm run lint`)
- [ ] Built successfully (`npm run build`)
- [ ] Replaced placeholder images with real photos
- [ ] Updated social media links
- [ ] Configured Google Analytics (if desired)
- [ ] Tested on mobile devices
- [ ] Tested form submission

---

**You're all set!** 🎉

Your professional website is ready to go live. Just deploy to Vercel and share with the world!
