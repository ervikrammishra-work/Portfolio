// ============================================================
// PORTFOLIO CONFIG — Edit this file to customize your portfolio
// ============================================================

export const PERSONAL_INFO = {
  name: "Vikram Mishra",
  title: "Frontend Developer",
  tagline: "Building digital experiences that matter.",
  bio: `I'm a frontend developer focused on building clean and interactive web
    applications. I enjoy turning ideas into responsive, user-friendly
    projects using modern frontend technologies and continuous learning.`,
  email: "ervikrammishra@gmail.com",
  location: "Noida, India",
  resumeUrl: "/Vikram_site_resume.pdf", // Place your resume PDF in /public/resume.pdf
  social: {
    
    github: "https://github.com/ervikrammishra-work",
    linkedin: "https://linkedin.com/in/vikram-mishra-811903367/",
    twitter: "https://x.com/VikramMishra911",
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: "SayHello",
    description:
      "Say Hello is a real-time chat app for instant, secure, and seamless conversations anytime, anywhere.",
    tags: ["React", "Node.js", "expressjs", "socket.io" , "mongodb"],
    github: "https://github.com/ervikrammishra-work/Chat-app",
    live: "yet to be deployed",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "easyMath",
    description:
      "A fun and interactive learning app built with Three.js that helps children explore and understand 3D shapes through colorful visualizations and playful interactions.",
    tags: ["Three.js", "React", "Node.js", "expressjs", "TailwindCSS"],
    github: "https://github.com/ervikrammishra-work/easyMath",
    live: "yet to be deployed",
    featured: true,
    year: "2026",
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
    { name: "Docker / Kubernetes", level: 30 },
    { name: "AWS ", level: 80 },
    { name: "Git / GitHub Actions", level: 40 },
    
    
  ],
};

export const EXPERIENCE = [
  {
    role: "Project Developer",
    company: "Self-Initiated Project — SayHello",
    period: "2026",
    description:
      "Built a real-time chat application using React, Node.js, Express, Socket.IO, and MongoDB for instant and secure messaging.",
  },
  {
    role: "Project Developer",
    company: "Self-Initiated Project — easyMath",
    period: "2026",
    description:
      "Developed an interactive Three.js-based learning app to help children visualize 3D shapes through playful and engaging experiences.",
  },
  {
    role: "Speaker",
    company: "CESTA Technical Club",
    period: "2026",
    description:
      "Delivered a speech on emerging technologies in the market and shared practical insights with student peers.",
  },
];

export const NAV_LINKS = ["About", "Projects", "Skills", "Resume", "Contact"];
