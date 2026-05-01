#  Developer Portfolio

A top-tier, production-quality developer portfolio built with **React**, **Three.js**, and modern CSS.

---

##  Features

- **Interactive 3D hero** — Wireframe icosahedron + particle field, mouse-reactive camera
- **Smooth scroll reveals** — CSS + IntersectionObserver animations
- **Modular architecture** — Each section is a standalone component
- **Dark theme** — Deep black palette with teal accent
- **Responsive** — Mobile-first layout
- **Lazy loading** — Below-fold sections code-split with React.lazy
- **Easy customization** — One config file (`src/config.js`) controls all content

---

##  Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── resume.pdf          ← Place your PDF resume here
└── src/
    ├── App.jsx              ← Root component (assembles all sections)
    ├── main.jsx             ← Entry point
    ├── config.js            ← All editable content (name, projects, skills...)
    ├── components/
    │   ├── Navbar.jsx       ← Fixed top navigation
    │   ├── HeroCanvas.jsx   ← Three.js 3D scene
    │   ├── ProjectCard.jsx  ← Reusable project card
    │   ├── SkillBar.jsx     ← Animated skill bar
    │   └── SectionDivider.jsx
    ├── pages/
    │   ├── Hero.jsx         ← Hero section with 3D background
    │   ├── About.jsx        ← Bio + experience timeline
    │   ├── Projects.jsx     ← Project grid with filter
    │   ├── Skills.jsx       ← Categorized skill bars
    │   ├── Resume.jsx       ← Download + inline preview
    │   └── Contact.jsx      ← Email form + social links
    ├── hooks/
    │   ├── useThreeScene.js ← Three.js lifecycle management
    │   └── useScrollReveal.js ← Scroll-triggered animations
    ├── utils/
    │   └── helpers.js       ← Shared utility functions
    └── styles/
        └── globals.css      ← CSS variables + global styles
```

---

##  Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# 1. Navigate to project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in /dist — deploy to Vercel, Netlify, GitHub Pages, etc.
```

---

## ✏️ Customizing Your Portfolio

**All content lives in `src/config.js`** — open it and edit:

### Personal Info
```js
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",   // place PDF in /public/resume.pdf
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/you",
  },
};
```

### Add / Edit Projects
```js
export const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description: "What it does and why it's impressive.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/you/project",
    live: "https://yourproject.com",
    featured: true,
    year: "2024",
  },
  // ... add more
];
```

### Edit Skills
```js
export const SKILLS = {
  Frontend: [
    { name: "React", level: 95 },
    // ...
  ],
  Backend: [...],
  Tools: [...],
};
```

### Add Resume PDF
Place your resume at `public/resume.pdf`.

---

## 🎨 Theming

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent-primary: #64ffda;   /* Teal accent — change to your color */
  --accent-secondary: #7b61ff; /* Purple accent */
  --bg-primary: #080a0f;       /* Main background */
  --font-display: 'Syne', sans-serif;
  /* ... */
}
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| 3D Graphics | Three.js |
| Styling | CSS Modules + CSS Variables |
| Animations | CSS + IntersectionObserver |
| Fonts | Google Fonts (Syne + DM Mono + Outfit) |

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag /dist folder to Netlify dashboard
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Deploy /dist to gh-pages branch
```

---

## 📬 Contact Form

The contact form is UI-only by default. To make it functional:

**Option A — Formspree**
```js
// In pages/Contact.jsx handleSubmit:
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' },
});
```

**Option B — EmailJS**
Install `emailjs-com` and use `emailjs.send()` in `handleSubmit`.

---

Made with ❤️ using React + Three.js
