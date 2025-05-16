
# 🐉 DragonFireBackground.jsx

**DragonFireBackground** is a whimsical, interactive background component designed for React applications. It blends a floating particle canvas with randomly-animated crypto, dragon, and meme-themed emojis — creating a fun, immersive vibe perfect for DeFi projects like [YUPFUN](https://yup.fun).

---

## ✨ Features

- 🔥 Floating canvas particle animation with colored fire-like particles.
- 🐉 Easter egg mode with secret messages and YUPFUN-themed rewards.
- 🎉 Randomly selected emoji animations from a rich set of:
  - Crypto icons (ETH, SOL, BTC, etc.)
  - Meme emojis (🤑, 🚀, 🍕, 🎮, etc.)
  - Fantasy/Dragon themes (🐉, 💰, 🔥)
- 🧠 Performance-optimized using `useMemo`, throttled animation updates, and canvas reuse.
- 🧪 Clickable dragon triggers hidden messages and repositions randomly.
- 💻 Responsive and works across screen sizes.

---

## 🚀 Usage

```jsx
import DragonFireBackground from './DragonFireBackground';

function App() {
  return (
    <div>
      <DragonFireBackground showOnAllPages={true} />
      {/* Your main content */}
    </div>
  );
}
```

Set `showOnAllPages` to `false` if you want to control its visibility conditionally.

---

## 🧩 Dependencies

- `react`
- `framer-motion`
- `react-icons`

Install via:

```bash
npm install framer-motion react-icons
```

---

## 🎯 Easter Eggs

Click the 🐉 dragon to trigger YUPFUN rewards. Or just move your mouse around and enjoy the spontaneous easter egg messages like:

- `"WAGMI! 💎🙌"`
- `"Dragon loot: 500 YUPFUN tokens! 💰"`
- `"Slippage monster defeated! 🐲"`

---

## 🛠️ Customization Ideas

- Add more emojis or tweak their sizes/colors.
- Adjust particle count or FPS for performance tuning.
- Replace emoji icons with images or custom SVGs.
- Link Easter Egg rewards to real backend rewards or token airdrops.

---

## 🧪 Development Notes

This background effect was built with fun and performance in mind. It's designed to bring delight without blocking interaction or slowing the app.

---

## 📜 License

MIT — use freely and make your app more legendary 🐉🔥🚀

---

## 🙌 Created for the YUPFUN Ecosystem

For more fun and memes, visit [yup.fun](https://yup.fun)
