# 🚀 3D Portfolio - Daniel Bogale

A modern, interactive 3D portfolio website built with React, Three.js, and Framer Motion. Features immersive 3D graphics, smooth animations, and a responsive design showcasing my professional journey as a Full-Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.154.0-000000?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **🌟 3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber
- **💫 Smooth Animations**: Beautiful transitions powered by Framer Motion
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎨 Modern UI/UX**: Clean design with Tailwind CSS
- **📧 Contact Form**: Integrated with EmailJS for direct communication
- **🎥 Project Demos**: Video demonstrations of featured projects
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🌐 Interactive Timeline**: Vertical timeline showcasing work experience
- **💬 Testimonials**: Reviews from clients and colleagues
- **🎯 Skills Showcase**: Animated tech stack with 3D ball canvas

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.2** - Modern UI library with hooks
- **React Router DOM** - Client-side routing

### 3D Graphics & Animation

- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **maath** - Math utilities for 3D

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefix automation

### Additional Libraries

- **@emailjs/browser** - Email service integration
- **react-tilt** - Tilt.js React wrapper
- **react-vertical-timeline-component** - Timeline component

### Development Tools

- **Vite** - Next-generation build tool
- **ESLint** - Code linting
- **TypeScript Types** - Type definitions

## 📂 Project Structure

```
my-3D-portfolio/
├── public/                      # Static assets
│   ├── demo-videos/            # Project demonstration videos
│   ├── profile/                # Profile and testimonial images
│   └── planet/                 # 3D Earth model files
├── src/
│   ├── assets/                 # Bundled assets
│   │   ├── backgrounds/       # Background images
│   │   ├── icons/            # UI icons (logo, menu, etc.)
│   │   ├── services/         # Service category icons
│   │   ├── company/          # Company/employer logos
│   │   ├── tech/             # Technology stack icons
│   │   └── projects/         # Project screenshots
│   ├── components/            # React components
│   │   ├── canvas/           # 3D canvas components
│   │   ├── About.jsx         # About section
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Experience.jsx    # Work timeline
│   │   ├── Feedbacks.jsx     # Testimonials
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Tech.jsx          # Skills showcase
│   │   └── Works.jsx         # Projects section
│   ├── constants/             # Data constants
│   │   ├── navigation.js     # Navigation menu items
│   │   ├── services.js       # Services data
│   │   ├── technologies.js   # Tech stack data
│   │   ├── experiences.js    # Work experience data
│   │   ├── testimonials.js   # Testimonials data
│   │   └── projects.js       # Projects data
│   ├── hoc/                   # Higher-order components
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/daniel-bogale/my-3D-portfolio.git
   cd my-3D-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory for EmailJS:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The optimized production build will be in the `dist/` directory.

## 🎨 Customization

### Adding New Projects

1. Add project screenshot to `src/assets/projects/`
2. Add demo video (optional) to `public/demo-videos/`
3. Update `src/constants/projects.js`:

```javascript
{
  name: "Project Name",
  description: "Project description...",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" }
  ],
  image: projectScreenshot,
  source_code_link: "https://github.com/...",
  demo_video: "/demo-videos/project-demo.mp4" // optional
}
```

### Adding Work Experience

Update `src/constants/experiences.js`:

```javascript
{
  title: "Job Title",
  company_name: "Company Name",
  icon: companyLogo,
  iconBg: "#383E56",
  date: "Jan 2023 - Present",
  points: [
    "Responsibility 1...",
    "Responsibility 2..."
  ]
}
```

### Adding Technologies

1. Add tech icon to `src/assets/tech/`
2. Import in `src/assets/index.js`
3. Update `src/constants/technologies.js`:

```javascript
{
  name: "Technology Name",
  icon: techIcon
}
```

### Updating Contact Information

Edit the contact form settings in `src/components/Contact.jsx` and ensure EmailJS is configured.

## 🎯 Key Sections

### Hero Section

- Animated 3D name reveal
- Computer model with mouse scroll indicator
- Starfield background animation

### About Section

- Service cards with tilt effect
- Overview of skills and expertise

### Experience Section

- Interactive vertical timeline
- Work history with detailed points

### Tech Stack

- 3D ball canvas with tech icons
- Smooth rotation animations

### Projects

- Project cards with details
- Video demo modal
- Live demo and source code links

### Testimonials

- Client and colleague reviews
- Profile images and positions

### Contact

- EmailJS-powered contact form
- 3D Earth model animation
- Form validation

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure environment variables

### Other Platforms

The built `dist/` folder can be deployed to any static hosting service (GitHub Pages, AWS S3, Firebase Hosting, etc.).

## 📸 Screenshots

### Desktop View

Full 3D interactive experience with smooth animations

### Mobile View

Fully responsive design optimized for touch interactions

### 3D Elements

- Animated computer model
- Interactive Earth globe
- Particle starfield
- Tech stack balls

## 🔧 Configuration Files

### `vite.config.js`

Vite build configuration and React plugin setup

### `tailwind.config.js`

Tailwind CSS customization including custom colors, animations, and background patterns

### `postcss.config.js`

PostCSS plugins for Tailwind CSS processing

## 📝 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🐛 Known Issues & Solutions

### 3D Models Not Loading

- Ensure model files are in the `public/` directory
- Check browser console for WebGL errors
- Update GPU drivers if necessary

### Email Form Not Working

- Verify EmailJS credentials in `.env`
- Check EmailJS service is active
- Ensure correct template ID

### Slow Performance

- Reduce particle count in Stars component
- Optimize 3D model complexity
- Enable production build optimizations

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daniel Bogale**

- Website: [danielbogale](https:danielbogale.com)
- GitHub: [@daniel-bogale](https://github.com/daniel-bogale)
- LinkedIn: [Daniel Bogale](https://linkedin.com/in/daniel-bogale)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact via the portfolio contact form
- Reach out on LinkedIn

---

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Daniel Bogale
