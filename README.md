# 🚀 3D Portfolio - Daniel Bogale

A modern, interactive 3D portfolio website showcasing my professional journey as a Senior Full-Stack Developer. Built with cutting-edge technologies including React, Three.js, and Framer Motion, this portfolio features immersive 3D graphics, smooth animations, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.154.0-000000?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.18-0055FF?style=for-the-badge&logo=framer)

## 🌟 Live Demo

Experience the portfolio live: **[Coming Soon]**

## ✨ Features

- **🌟 Interactive 3D Graphics**:
  - Animated computer model in hero section
  - 3D Earth globe with rotation controls
  - Particle starfield background with parallax effect
  - 3D rotating tech stack spheres
- **💫 Smooth Animations**: Powered by Framer Motion with custom fade-in, slide-in, and stagger effects
- **📱 Fully Responsive**: Optimized user experience across mobile, tablet, and desktop devices
- **🎨 Modern UI/UX**:
  - Clean, minimalist design with Tailwind CSS
  - Custom gradient text effects
  - Tilt effects on interactive cards
  - Smooth scroll indicators
- **📧 Contact Form**: Integrated with EmailJS for direct communication without backend
- **🎥 Project Video Demos**:
  - Interactive video modal for project demonstrations
  - Featured projects: Dasesa, AcademyTube, Heaven's Echo, FeedFilterAI
- **⚡ Blazing Fast Performance**: Built with Vite for optimized builds and HMR
- **🌐 Interactive Timeline**: Vertical timeline showcasing 5+ years of professional experience
- **💬 Client Testimonials**: Verified reviews from clients and colleagues
- **🎯 Tech Stack Showcase**: 14+ technologies displayed with interactive 3D ball canvas
- **🔗 Social Links**: Floating social media cards (LinkedIn, GitHub) with hover animations
- **🎭 Professional Card**: Fixed position social links for easy connection

## 🛠️ Tech Stack

### Core Technologies

- **React 18.2** - Modern UI library with hooks and concurrent features
- **React Router DOM 6.14** - Client-side routing and navigation

### 3D Graphics & Animation

- **Three.js 0.154** - WebGL-powered 3D graphics library
- **@react-three/fiber 8.13** - React renderer for Three.js
- **@react-three/drei 9.77** - Useful helpers and abstractions for R3F
- **Framer Motion 10.12** - Production-ready motion library
- **maath 0.7** - Math utilities for 3D transformations

### Styling & UI

- **Tailwind CSS 3.3** - Utility-first CSS framework
- **PostCSS 8.4** - CSS transformations
- **Autoprefixer 10.4** - Vendor prefix automation
- **React Tilt 1.0** - Parallax tilt effect for cards
- **React Vertical Timeline 3.6** - Vertical timeline component

### Services & Integration

- **EmailJS 3.11** - Email service integration for contact form

### Development Tools

- **Vite 4.3** - Next-generation frontend tooling
- **ESLint 8.38** - Code linting and quality
- **TypeScript Types** - Type definitions for better DX

## 📂 Project Structure

```
my-3D-portfolio/
├── public/                      # Static assets
│   ├── demo-videos/            # Project demonstration videos
│   │   ├── Dasesa-demo.mp4
│   │   ├── Academy Tube Demo.mp4
│   │   ├── Heaven's Echo Demo.mp4
│   │   └── FeedFilterAI-demo.mp4
│   ├── profile/                # Profile and testimonial images
│   └── planet/                 # 3D Earth model textures
│       ├── license.txt
│       └── textures/
├── src/
│   ├── assets/                 # Bundled assets
│   │   ├── backgrounds/       # Background images and patterns
│   │   ├── icons/            # UI icons (logo, menu, social media)
│   │   ├── services/         # Service category icons
│   │   ├── company/          # Company/employer logos
│   │   ├── tech/             # Technology stack icons (React, Next.js, etc.)
│   │   ├── projects/         # Project screenshots
│   │   └── index.js          # Asset exports
│   ├── components/            # React components
│   │   ├── canvas/           # 3D canvas components
│   │   │   ├── Ball.jsx      # 3D tech stack balls
│   │   │   ├── Earth.jsx     # 3D Earth globe
│   │   │   ├── Stars.jsx     # Starfield background
│   │   │   └── index.js
│   │   ├── About.jsx         # About section with services
│   │   ├── Contact.jsx       # Contact form with EmailJS
│   │   ├── Experience.jsx    # Work timeline
│   │   ├── Feedbacks.jsx     # Client testimonials
│   │   ├── Hero.jsx          # Hero section with 3D computer
│   │   ├── Navbar.jsx        # Navigation bar with mobile menu
│   │   ├── Tech.jsx          # Tech stack showcase
│   │   ├── Works.jsx         # Projects portfolio with video modals
│   │   ├── Loader.jsx        # Loading component
│   │   ├── TimelineProgressBar.jsx  # Progress indicator
│   │   ├── ProfessionalCard.jsx     # Floating social links
│   │   └── index.js          # Component exports
│   ├── constants/             # Data and configuration
│   │   ├── navigation.js     # Nav menu items
│   │   ├── services.js       # Services offered (4 services)
│   │   ├── technologies.js   # Tech stack (14 technologies)
│   │   ├── experiences.js    # Work experience (5 positions)
│   │   ├── testimonials.js   # Client testimonials (5 reviews)
│   │   ├── projects.js       # Featured projects (5 projects)
│   │   └── index.js          # Constants exports
│   ├── hoc/                   # Higher-order components
│   │   ├── SectionWrapper.jsx # Section wrapper with animations
│   │   └── index.js
│   ├── hooks/                 # Custom React hooks
│   │   └── useScrollProgress.js  # Scroll progress tracker
│   ├── utils/                 # Utility functions
│   │   └── motion.js         # Framer Motion variants
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles and Tailwind directives
│   └── styles.js             # Reusable style constants
├── index.html                 # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind customization
├── postcss.config.js         # PostCSS configuration
└── README.md                 # Documentation
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
3. Import the image in `src/assets/index.js`
4. Update `src/constants/projects.js`:

```javascript
{
  name: "Project Name",
  description: "Detailed project description highlighting key features and impact...",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" },
    { name: "PostgreSQL", color: "pink-text-gradient" }
  ],
  image: projectScreenshot,
  source_code_link: "https://github.com/...", // or live demo URL
  demo_video: "/demo-videos/project-demo.mp4" // optional
}
```

**Available gradient colors**: `blue-text-gradient`, `green-text-gradient`, `pink-text-gradient`, `orange-text-gradient`, `purple-text-gradient`, `yellow-text-gradient`, `red-text-gradient`

### Adding Work Experience

1. Add company logo to `src/assets/company/`
2. Import in `src/assets/index.js`
3. Update `src/constants/experiences.js`:

```javascript
{
  title: "Job Title",
  company_name: "Company Name",
  company_url: "https://company-website.com/", // optional
  icon: companyLogo,
  iconBg: "#E6DEDD", // background color for timeline icon
  date: "Jan 2023 - Present",
  points: [
    "Key achievement or responsibility 1...",
    "Key achievement or responsibility 2...",
    "Impact-driven accomplishment with metrics..."
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

### Adding Testimonials

1. Add profile image to `public/profile/` or use external URL
2. Update `src/constants/testimonials.js`:

```javascript
{
  testimonial: "The testimonial text highlighting your work quality...",
  name: "Client Name",
  designation: "Job Title",
  company: "Company Name",
  image: "/profile/client-photo.jpg" // or external URL
}
```

### Updating Services

Edit `src/constants/services.js` to modify the services you offer:

```javascript
{
  title: "Service Name",
  icon: serviceIcon // from assets
}
```

### Customizing Social Links

Edit `src/components/ProfessionalCard.jsx` to update or add social media links:

```javascript
{
  name: "Platform Name",
  url: "https://profile-url.com",
  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/platform.svg",
  color: "#ffffff",
  bgColor: "#181717",
  borderColor: "#0077B5",
  hoverBg: "#005983",
  hoverBorder: "#ffffff"
}
```

## 🎯 Portfolio Highlights

### 💼 Professional Experience

- **5+ Years** in Full-Stack Development
- **Senior Software Developer** at Triple Bottom Line Enterprises (3BL)
- **Lead Frontend Developer** at Arifget
- **Technical Lead** at Dasesa (The Hinds' Feet Technologies)
- **Lead Web Developer** at AcademyTube
- **Freelance Developer** on Upwork (Rising Talent, 100% Job Success Score)

### 🚀 Featured Projects

#### 1. **Dasesa** - Survey & Research Platform

- Built from ground up serving **100+ researchers** and **10,000+ respondents**
- Technologies: ReactJS, Node.js, PostgreSQL, Firebase, Mantine UI, TypeScript
- Enabled **10+ published research papers**
- [Live Demo](https://dasesa.co/)

#### 2. **Arifget** - Digital Marketplace

- All-in-one platform for Ethiopian freelancers and entrepreneurs
- Combines freelancing, digital asset trading, and online learning
- Technologies: Next.js, Express.js, PostgreSQL, Laravel, Shadcn/UI, TypeScript
- [Visit Platform](https://arifget.com/)

#### 3. **AcademyTube** - Learning Management System

- Free LMS used by **500+ students** and **50+ instructors**
- Real-time course builder with progress tracking
- Technologies: Next.js, Express.js, PostgreSQL, Tailwind CSS, Shadcn/UI, TypeScript
- [Try it Live](https://academy-tube-web.vercel.app/)

#### 4. **Heaven's Echo** - Gospel Music Education

- Full-featured LMS with role-based access control
- Secure video streaming, quizzes, and analytics dashboards
- Group subscriptions and course management
- Technologies: Next.js, Express.js, PostgreSQL, Tailwind, Shadcn/UI, Firebase
- [View Platform](https://admin.heavensecho.org)

#### 5. **FeedFilterAI** - Content Filter Extension

- Browser extension for YouTube, X, Reddit, and LinkedIn
- AI-powered natural language content filtering
- Privacy-first: All processing stays local
- Technologies: Browser Extension APIs, AI/ML, JavaScript
- Vision: SaaS platform for attention management

### 🎓 Technical Expertise

**Frontend**: React, Next.js, TypeScript, Tailwind CSS, Shadcn/UI, Mantine UI, Three.js  
**Backend**: Node.js, Express.js, Python, Laravel  
**Databases**: PostgreSQL, MongoDB, Firebase  
**Tools & Platforms**: Git, Docker, Figma, Vite  
**Mobile**: Flutter  
**Specializations**: 3D Web Graphics, System Architecture, Team Leadership

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your project
3. Add environment variables in project settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy automatically on every push

### Netlify

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or use the Netlify web interface:

1. Drag and drop the `dist/` folder
2. Configure environment variables in site settings
3. Enable continuous deployment from GitHub

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Other Platforms

The built `dist/` folder is a static site that can be deployed to:

- **AWS S3** + CloudFront
- **Firebase Hosting**
- **Cloudflare Pages**
- **DigitalOcean App Platform**
- Any static hosting service

## 📸 Portfolio Sections

### 🎬 Hero Section

- Animated name reveal with gradient effects
- 3D computer model with interactive animations
- Starfield background with parallax scrolling
- Smooth scroll indicator

### 👨‍💻 About Section

- 4 service cards with tilt hover effects
- Professional overview and expertise
- Clean, modern layout

### 💼 Experience Section

- Interactive vertical timeline with 5 positions
- Company logos and detailed achievements
- Responsive design for all screen sizes
- Smooth scroll animations

### 🛠️ Tech Stack

- 14 technologies displayed as 3D rotating spheres
- Interactive ball canvas with WebGL
- Smooth rotation and hover effects
- Organized tech ecosystem display

### 🎨 Projects Portfolio

- 5 featured projects with detailed descriptions
- Interactive project cards with tilt effect
- Video demo modals for 4 projects
- Live demo and source code links
- Tech tags with custom gradient colors

### 💬 Testimonials

- 5 verified client and colleague reviews
- Profile images and professional details
- Smooth carousel animation
- Social proof from diverse projects

### 📧 Contact Section

- EmailJS-powered contact form with validation
- 3D animated Earth globe
- Real-time form feedback
- Starfield background animation

### 🔗 Professional Card

- Floating social media links (LinkedIn, GitHub)
- Smooth hover animations
- Fixed position for easy access
- Custom styled tooltips

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

## 🐛 Troubleshooting

### 3D Models Not Loading

**Problem**: 3D models (Earth, Computer, Tech Balls) don't render

**Solutions**:

- Ensure model files are in the `public/planet/` directory
- Check browser console for WebGL errors
- Verify browser supports WebGL (visit [webglreport.com](https://webglreport.com))
- Try a different browser (Chrome/Edge recommended)
- Update GPU drivers
- Disable browser extensions that might block WebGL

### Email Form Not Working

**Problem**: Contact form doesn't send emails

**Solutions**:

- Verify EmailJS credentials in `.env` file
- Check EmailJS service is active in your dashboard
- Ensure correct template ID is configured
- Check browser console for API errors
- Verify email template variables match form fields

### Slow Performance

**Problem**: Website feels laggy or slow

**Solutions**:

- Reduce particle count in `src/components/canvas/Stars.jsx`
- Optimize 3D model complexity in Ball and Earth components
- Build for production: `npm run build`
- Enable hardware acceleration in browser settings
- Check network speed (for video demos)
- Reduce video quality in `public/demo-videos/`

### Build Errors

**Problem**: `npm run build` fails

**Solutions**:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version (requires v16+)
node --version

# Update dependencies if needed
npm update
```

### Development Server Issues

**Problem**: `npm run dev` doesn't start

**Solutions**:

- Check if port 5173 is already in use
- Kill existing processes: `lsof -ti:5173 | xargs kill -9` (macOS/Linux)
- Try a different port: `npm run dev -- --port 3000`
- Check firewall settings

### Mobile Responsiveness Issues

**Problem**: Layout breaks on mobile devices

**Solutions**:

- Clear browser cache
- Test in Chrome DevTools mobile emulator
- Check Tailwind breakpoints in components
- Verify meta viewport tag in `index.html`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/daniel-bogale/my-3D-portfolio/issues).

### How to Contribute

1. **Fork the repository**

   ```bash
   # Click the 'Fork' button at the top right of this repository
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/my-3D-portfolio.git
   cd my-3D-portfolio
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your changes**

   - Write clean, documented code
   - Follow existing code style
   - Test your changes thoroughly

5. **Commit your changes**

   ```bash
   git add .
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your fork**

   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Describe your changes in detail

### Contribution Guidelines

- Ensure code passes ESLint checks: `npm run lint`
- Test in multiple browsers before submitting
- Update documentation for new features
- Keep commits atomic and well-described
- Be respectful and constructive in discussions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daniel Bogale**  
_Senior Full-Stack Developer | 3D Web Specialist | Team Leader_

With 5+ years of experience building scalable web applications and leading development teams, I specialize in creating immersive user experiences with modern web technologies. Passionate about clean code, performance optimization, and mentoring developers.

### 📫 Connect With Me

- 🌐 **Portfolio**: [danielbogale.com](https://danielbogale.com) _(Coming Soon)_
- 💼 **LinkedIn**: [@daniel-bogale](https://linkedin.com/in/daniel-bogale)
- 🐙 **GitHub**: [@daniel-bogale](https://github.com/daniel-bogale)
- 💻 **Upwork**: [Daniel Bogale](https://www.upwork.com/freelancers/~01581342a756dd8477) - Rising Talent, 100% Job Success Score
- 📧 **Email**: Available via portfolio contact form

### 🏆 Achievements

- 🎯 Built platforms serving **10,000+ users**
- 📊 Led technical teams to deliver **5+ major projects**
- ⭐ Maintained **100% Job Success Score** on Upwork
- 📚 Enabled **10+ published research papers** through Dasesa platform
- 🚀 Reduced deployment time by **40%** through CI/CD implementation
- 📈 Improved system performance by **20%** through optimization

## 🙏 Acknowledgments

Special thanks to the amazing open-source community and these incredible tools:

- **[Three.js](https://threejs.org/)** - Making WebGL accessible and powerful
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - Bringing React to 3D
- **[Framer Motion](https://www.framer.com/motion/)** - Beautiful, production-ready animations
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[EmailJS](https://www.emailjs.com/)** - Simple email service integration
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F
- **[React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)** - Timeline component

### 🎨 Design Inspiration

This portfolio was designed and built from scratch with a focus on:

- Immersive 3D user experiences
- Performance optimization
- Accessibility best practices
- Mobile-first responsive design

## 📝 Learning Resources

Built this portfolio and want to learn more? Check out:

- [Three.js Journey](https://threejs-journey.com/) - Comprehensive Three.js course
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber) - R3F documentation
- [Framer Motion Docs](https://www.framer.com/motion/) - Animation library guide
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Utility-first CSS

## 📊 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 15+
- **3D Models**: 3 (Computer, Earth, Tech Balls)
- **Featured Projects**: 5
- **Work Experiences**: 5 positions
- **Technologies Showcased**: 14
- **Client Testimonials**: 5
- **Development Time**: 2-3 weeks

## 📞 Support

Having issues or questions? Here's how to get help:

### 🐛 Bug Reports

- Open an issue on [GitHub Issues](https://github.com/daniel-bogale/my-3D-portfolio/issues)
- Include browser, OS, and steps to reproduce
- Add screenshots or error messages if applicable

### 💡 Feature Requests

- Check existing issues first to avoid duplicates
- Clearly describe the feature and its benefits
- Open a new issue with the `enhancement` label

### 💬 General Questions

- Use [GitHub Discussions](https://github.com/daniel-bogale/my-3D-portfolio/discussions)
- Contact via portfolio contact form
- Connect on [LinkedIn](https://linkedin.com/in/daniel-bogale)

### 🤝 Collaboration

Interested in collaborating on a project? Reach out through:

- Portfolio contact form
- LinkedIn direct message
- [Upwork](https://www.upwork.com/freelancers/~01581342a756dd8477)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Daniel Bogale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star!

**Made with ❤️ and ☕ by [Daniel Bogale](https://github.com/daniel-bogale)**

_Building the future, one line of code at a time._

[![GitHub followers](https://img.shields.io/github/followers/daniel-bogale?style=social)](https://github.com/daniel-bogale)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://linkedin.com/in/daniel-bogale)

**Last Updated**: November 2025

</div>
