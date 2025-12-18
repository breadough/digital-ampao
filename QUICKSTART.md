# 🚀 Quick Start Guide

## Running Locally

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   
2. **Open your browser to:**
   ```
   http://localhost:5173
   ```

3. **How to play:**
   - Click on any red envelope to select it
   - The selected envelope will pulse and show a hint
   - Click the same envelope again to reveal your prize
   - Click "Play Again" to reset and shuffle prizes

## Deploying to Vercel

### Quick Deploy (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Via GitHub

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

Your app will be live in seconds! 🎉

## Customizing Your Prizes

Open `src/App.jsx` and edit the `prizeOptions` array:

```javascript
const prizeOptions = [
  '🎁 Your Custom Prize 1',
  '💎 Your Custom Prize 2',
  '🏆 Your Custom Prize 3',
  // Add as many as you want!
];
```

The prizes will be randomly distributed each time you play!

## Need Help?

- Check the main README.md for detailed documentation
- Vercel docs: https://vercel.com/docs
- Vite docs: https://vite.dev
- React docs: https://react.dev

Enjoy your digital ampao experience! 🧧✨
