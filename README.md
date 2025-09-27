# 3D Developer Portfolio

An interactive, high-performance developer portfolio built with React, Vite, Three.js, and Tailwind CSS. It features rich 3D scenes (via @react-three/fiber and @react-three/drei), smooth animations (Framer Motion), and a responsive UI.

Live demo: Add your deployment link here

## ✨ Features

- 3D hero section with orbit controls and starfield/planet scenes
- Smooth page transitions and micro-interactions
- Project showcase with images and links
- Experience timeline
- Responsive navbar and layout
- Contact form with EmailJS integration

## 🧰 Tech Stack

- React 18 + Vite 4
- Three.js, @react-three/fiber, @react-three/drei, maath
- Tailwind CSS + PostCSS + Autoprefixer
- Framer Motion
- React Router DOM
- ESlint (React + hooks + refresh)

## 📦 Scripts

- dev: Start the Vite dev server
- build: Production build
- preview: Preview the production build locally
- lint: Lint source files

## 🚀 Getting Started

Prerequisites:

- Node.js 18+ recommended (Vite requires Node 14.18+, 16+ works; 18 LTS preferred)
- npm or yarn (examples use npm)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## ⚙️ Configuration

### Contact form (EmailJS)

The contact form currently uses EmailJS. In `src/components/Contact.jsx`, you’ll see hardcoded placeholders for service ID, template ID, and public key:

Update these with your own EmailJS credentials or refactor to use environment variables.

Recommended (env-based) approach:

1. Create a `.env` file at the project root (see `.env.example`).
2. Use the following keys:
   - VITE_EMAILJS_SERVICE_ID=...
   - VITE_EMAILJS_TEMPLATE_ID=...
   - VITE_EMAILJS_PUBLIC_KEY=...
3. Replace the hardcoded values in `Contact.jsx` with:

```js
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    to_name: "Your Name",
    from_email: form.email,
    to_email: "your@email.com",
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

Security note: Never commit real secrets. Vite-exposed env vars (VITE\_\*) are embedded client-side, so treat them like public keys only.

## 📁 Project Structure

Key folders and files:

- `src/` React app source
  - `components/` UI sections and shared components
  - `components/canvas/` Three.js canvases (Earth, Stars, etc.)
  - `constants/` App data
  - `hoc/` Higher-order components (e.g., SectionWrapper)
  - `utils/` Animation helpers (Framer Motion variants)
  - `App.jsx`, `main.jsx`, `styles.js`, `index.css`
- `public/` Static assets
  - `planet/` 3D model and textures
  - `profile/` Images
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js`

## 🖼️ Assets & Credits

The planet model in `public/planet` is licensed under CC-BY-4.0 and requires attribution:

This work is based on "Stylized planet" (https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70) by cmzw (https://sketchfab.com/cmzw) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

Please keep `public/planet/license.txt` with the distribution and include the credit wherever the project is shared.

Images and logos in `public/profile` and `src/assets` should be used according to their respective licenses/ownership.

## 🚢 Deployment

Any static host that supports SPA routing will work:

- Vercel/Netlify: Deploy the repository; build command `npm run build`, output directory `dist`
- GitHub Pages: Build locally and publish `dist/` or use an action

If using client-side routing, ensure 404 rewrites to `index.html` are configured.

## 🧪 Troubleshooting

- Blank canvas or WebGL errors: Ensure hardware acceleration is enabled and your browser supports WebGL2.
- Slow performance: Reduce model complexity or texture sizes; prefer `.basis`/`.ktx2` when possible; limit shadows.
- Email not sending: Double-check EmailJS service/template/public key and allowed origins; check your spam folder.
- Tailwind classes not applying: Make sure content paths in `tailwind.config.js` include your files and restart the dev server after edits.

## 📄 License

No explicit license for source code is declared in this repository. If you intend to open-source it, add a license file (e.g., MIT). Third-party assets keep their own licenses.

---

Made with React, Three.js, and lots of curiosity.
