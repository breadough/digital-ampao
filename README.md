# 🧧 Digital Ampao - Red Envelope Prize Game

See app on vercel [Digital Ampao]([url](https://ampao.vercel.app/))

An interactive web app that simulates the exciting experience of receiving a red envelope (ampao) with a fun prize reveal mechanism!

**🚀 [See Live Demo on Vercel](https://ampao.vercel.app/)**

## Features

- **5 Beautiful Red Envelopes** - Realistic ampao envelope design with traditional gold "福" (fortune) symbol
- **Two-Step Reveal Process**:
  1. Click an envelope to select it
  2. Click again to reveal your prize
- **Randomized Prizes** - Prizes are randomly distributed across envelopes from a preset pool
- **Smooth Animations** - Engaging hover effects, selection pulse, and prize reveal animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Play Again** - Reset button to shuffle prizes and play multiple times

## Prize Pool

- 🎁 $100 Cash
- 🎉 iPhone 15
- 💰 $500 Gift Card
- 🎊 PlayStation 5
- ✨ MacBook Air
- 🎮 Nintendo Switch
- 💎 $200 Cash
- 🏆 Premium Headphones
- 🌟 Vacation Package
- 🎯 Smartwatch

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

## Customization

### Change Prize Options

Edit the `prizeOptions` array in `src/App.jsx`:

```javascript
const prizeOptions = [
  '🎁 Your Prize 1',
  '🎉 Your Prize 2',
  // Add more prizes...
];
```

### Change Number of Envelopes

Modify the envelope count in the `useEffect` and `resetGame` functions:

```javascript
const initialEnvelopes = Array.from({ length: 5 }, (_, i) => ({
  // Change 5 to your desired number
```

### Customize Colors

Edit the CSS in `src/App.css`:
- Envelope color: `.envelope-body` gradient
- Gold accents: `.gold-symbol` color
- Background: `.app` gradient

## Technologies

- React 18
- Vite 7
- CSS3 Animations
- Vercel (for deployment)

## License

MIT

---

Made with ❤️ for celebrating special occasions!
