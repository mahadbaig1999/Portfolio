export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

/** Shape of the about block in portfolioData */
export interface AboutData {
  /** Array of bio paragraphs — each renders as its own <p> in the About section */
  bio: string[];
  highlights: { label: string; desc: string }[];
}

export const portfolioData = {
  personal: {
    name: "Mahad Baig",
    title: "DevOPS",
    tagline: "Think Fast",
    subtitle: "Turning ambitious ideas into fast, elegant, and accessible web experiences.",
    avatar: "/images/avatar.svg",
    location: "Global / Remote",
    email: "mahadbaig@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter / X", url: "https://twitter.com", icon: "twitter" }
    ]
  },
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],
  about: {
    /**
     * Bio paragraphs — add, remove, or edit entries freely.
     * Each string renders as its own <p> tag in the About section.
     * Keep paragraphs concise (2–5 sentences) for best readability.
     */
    bio: [
      "Hi, I'm Mahad Baig — a software developer with a passion for building things that live on the internet. I enjoy turning complex problems into simple, elegant, and accessible digital experiences. My motto, \"Dream Big\", isn't just a tagline — it's the lens through which I approach every project.",
      "My journey in web development started with curiosity about how websites worked and quickly evolved into a deep love for the craft. I focus on writing clean, maintainable code that is as enjoyable to read as it is to use. I care deeply about the small details — from pixel-perfect layouts to smooth interactions — because those details are what separate a good product from a great one.",
      "I thrive at the intersection of design and engineering. Whether I'm building a performant static site with Astro, crafting responsive layouts with Tailwind CSS, or structuring scalable TypeScript logic, my goal is always the same: deliver fast, accessible, user-centered experiences across every device.",
      "When I'm not coding, I'm exploring new frameworks, contributing to open-source, and always looking for the next exciting project to sink my teeth into. If you have an idea you'd like to bring to life — let's connect."
    ],
    highlights: [
      { label: "Clean Code",    desc: "Writing readable, maintainable, and well-structured codebases." },
      { label: "Performance",   desc: "Optimizing for ultra-fast load times and smooth responsiveness." },
      { label: "User Centered", desc: "Crafting accessible experiences tailored to user needs across all devices." }
    ]
  },
  skills: [
    {
      category: "Frontend & UI",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Astro", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Tools & Ecosystem",
      items: ["Git & GitHub", "npm", "Vite", "VS Code", "Command Line", "CI/CD Basics"]
    },
    {
      category: "Best Practices",
      items: ["Web Accessibility (a11y)", "Cross-Browser Compatibility", "Performance Optimization", "Clean Architecture"]
    }
  ] as SkillCategory[],
  /**
   * ─── PROJECTS ────────────────────────────────────────────────────────────
   * To add a new project, copy one of the objects below and paste it at the
   * end of the array (before the closing `]`). Fill in your own values.
   *
   * Fields:
   *   title       — Project name shown as the card heading.
   *   description — One or two sentences explaining what the project does.
   *   tags        — Tech stack / tools used (shown as small badges).
   *   link        — URL to a live demo or deployed site. Omit if none.
   *   github      — URL to the GitHub repository. Omit if private / none.
   *   featured    — Set true to show a "Featured" badge on the card.
   * ─────────────────────────────────────────────────────────────────────── */
  projects: [
    // ── Project 1 ──────────────────────────────────────────────────────────
    {
      title: "E-Commerce Storefront",
      description:
        "A fully responsive online storefront with real-time product search, category filtering, and an accessible checkout flow. Optimised for Core Web Vitals and sub-second load times.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
      link: "https://example.com/demo1",
      github: "https://github.com/mahadbaig/ecommerce-demo",
      featured: true,
    },
    // ── Project 2 ──────────────────────────────────────────────────────────
    {
      title: "Analytics Dashboard",
      description:
        "An interactive data-visualization dashboard with live-updating charts, dark mode, and exportable metrics reports. Built with vanilla JS and Chart.js — zero framework overhead.",
      tags: ["JavaScript", "Chart.js", "HTML5", "CSS3"],
      link: "https://example.com/demo2",
      github: "https://github.com/mahadbaig/analytics-dashboard",
      featured: true,
    },
    // ── Project 3 ──────────────────────────────────────────────────────────
    {
      title: "Developer Utility Toolkit",
      description:
        "A collection of browser-based productivity tools — JSON formatter, colour picker, regex tester, and more — built for everyday developer workflows with keyboard-first navigation.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
      link: "https://example.com/demo3",
      github: "https://github.com/mahadbaig/dev-tools",
      featured: false,
    },
    // ── Add more projects below this line ──────────────────────────────────
    // {
    //   title: "My New Project",
    //   description: "A short description of what it does and why it is interesting.",
    //   tags: ["React", "Node.js"],
    //   link: "https://live-url.com",    // optional — delete line if no demo
    //   github: "https://github.com/…", // optional — delete line if private
    //   featured: false,
    // },
  ] as Project[],
  contact: {
    heading: "Let's Connect",
    subheading: "Have a project in mind, a collaboration idea, or just want to say hi? Feel free to reach out directly.",
    email: "mahadbaig@example.com",
    linkedin: "https://linkedin.com/in/mahadbaig",
    github: "https://github.com/mahadbaig1999"
  }
};
