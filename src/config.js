// ============================================================
// PORTFOLIO CONFIG — Edit this file to customize your portfolio
// ============================================================

export const PERSONAL_INFO = {
  name: "Vikram Mishra",
  title: "Frontend Developer",
  tagline: "Building digital experiences that matter.",
  bio: `I'm a frontend developer with 5+ years of experience crafting 
    high-performance web applications. I thrive at the intersection of clean 
    engineering and thoughtful design — shipping products that are fast, 
    accessible, and genuinely delightful to use.`,
  email: "ervikrammishra@gmail.com",
  location: "Noida, India",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public/resume.pdf
  social: {
    
    github: "https://github.com/ervikrammishra-work",
    linkedin: "https://linkedin.com/in/vikram-mishra-811903367/",
    twitter: "https://twitter.com/vikrammishra",
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: "NeuralCart",
    description:
      "AI-powered e-commerce platform with real-time personalization, dynamic pricing engine, and sub-100ms search powered by a custom vector database.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "OpenAI"],
    github: "https://github.com/alexrivera/neuralcart",
    live: "https://neuralcart.vercel.app",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Orbit CMS",
    description:
      "Headless CMS with a visual block editor, multi-tenant architecture, and CDN-first delivery. Supports 10+ content types and real-time collaboration.",
    tags: ["Next.js", "TypeScript", "Prisma", "S3", "WebSocket"],
    github: "https://github.com/alexrivera/orbit-cms",
    live: "https://orbitcms.io",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "PulseBoard",
    description:
      "Real-time analytics dashboard processing 1M+ events/day. Interactive charts, custom alert engine, and embeddable widget system.",
    tags: ["Vue.js", "FastAPI", "ClickHouse", "Kafka", "D3.js"],
    github: "https://github.com/alexrivera/pulseboard",
    live: "https://pulseboard.dev",
    featured: false,
    year: "2023",
  },
  {
    id: 4,
    title: "Threadline",
    description:
      "Social reading app with annotation layers, reading streak tracking, and AI-generated discussion prompts. 8k+ active users.",
    tags: ["React Native", "Supabase", "Expo", "GPT-4"],
    github: "https://github.com/alexrivera/threadline",
    live: "https://threadline.app",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    title: "DevVault CLI",
    description:
      "Terminal tool for managing dev environments, secrets, and dotfiles across machines. 2k+ GitHub stars.",
    tags: ["Go", "Docker", "Cobra", "AWS Secrets Manager"],
    github: "https://github.com/alexrivera/devvault",
    live: "https://devvault.sh",
    featured: false,
    year: "2022",
  },
  {
    id: 6,
    title: "FrameForge",
    description:
      "Browser-based video editor with timeline controls, AI scene detection, and export to multiple formats via WASM-compiled FFmpeg.",
    tags: ["React", "WebAssembly", "FFmpeg", "Canvas API"],
    github: "https://github.com/alexrivera/frameforge",
    live: "https://frameforge.app",
    featured: false,
    year: "2022",
  },
];

export const SKILLS = {
  Frontend: [
    { name: "React / Next.js", level: 55 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Three.js / WebGL", level: 60 },
    { name: "CSS / Tailwind", level: 92 }
    
  ],
  Backend: [
    { name: " ExpressJS", level: 70  },
    { name: "Node.js ", level: 40 },
    { name: "MySQL", level: 40 },
    
    { name: "MongoDB", level: 40 },
    { name: "Redis", level: 20 }
    
  ],
  Tools: [
    { name: "Docker / Kubernetes", level: 83 },
    { name: "AWS ", level: 80 },
    { name: "Git / GitHub Actions", level: 90 },
    
    
  ],
};

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Vercel",
    period: "2023 — Present",
    description: "Core team on the Edge Runtime and developer tooling ecosystem.",
  },
  {
    role: "Full Stack Engineer",
    company: "Stripe",
    period: "2021 — 2023",
    description: "Built merchant dashboard features serving 2M+ businesses globally.",
  },
  {
    role: "Frontend Engineer",
    company: "Figma",
    period: "2019 — 2021",
    description: "Contributed to the multiplayer engine and plugin API surface.",
  },
];

export const NAV_LINKS = ["About", "Projects", "Skills", "Resume", "Contact"];
