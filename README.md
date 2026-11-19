# Mahad Baig — Developer Portfolio

A fast, responsive, single-page portfolio website built with **[Astro](https://astro.build)** and **[Tailwind CSS](https://tailwindcss.com)**. All content is managed from a single data file so you can update text, links, and projects without touching any component templates.

---

## 🚀 Getting Started

### Prerequisites

| Tool | Required version |
|------|-----------------|
| [Node.js](https://nodejs.org) | `>= 22.x` |
| npm | bundled with Node.js |

### 1 — Install dependencies

```bash
cd astro1
npm install
```

### 2 — Start the development server

```bash
npm run dev
```

Then open **[http://localhost:4321](http://localhost:4321)** in your browser.  
The page hot-reloads automatically whenever you save a file.

### 3 — Build for production

```bash
npm run build
```

Astro compiles everything into the `dist/` folder as static HTML + assets — ready to deploy to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

### 4 — Preview the production build locally

```bash
npm run preview
```

Opens a local server serving the contents of `dist/` so you can verify the build before deploying.

---

## 📁 Project Structure

```
astro1/
├── public/                       # Static assets (served as-is)
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
│       └── avatar.svg            # Default profile picture — replace with your own
│
├── src/
│   ├── components/               # One .astro file per page section
│   │   ├── Navbar.astro          # Sticky header, desktop + mobile nav, scroll-spy
│   │   ├── Hero.astro            # Landing section — name, title, tagline, avatar, CTAs
│   │   ├── About.astro           # Bio paragraph and skill-tag grid
│   │   ├── Projects.astro        # Project cards grid with links
│   │   ├── Contact.astro         # Contact channel cards (email, LinkedIn, GitHub)
│   │   └── Footer.astro          # Copyright line and social links
│   │
│   ├── data/
│   │   └── portfolio.ts          # ★ CENTRAL CONTENT FILE — edit this for all updates
│   │
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell: <head>, SEO meta, background blobs
│   │
│   ├── pages/
│   │   └── index.astro           # Assembles all components into the single page
│   │
│   └── styles/
│       └── global.css            # Tailwind import, smooth scroll, scrollbar, focus ring
│
├── astro.config.mjs              # Astro + Tailwind CSS (Vite plugin) configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✏️ How to Update Content

**All site content lives in one place:**

```
src/data/portfolio.ts
```

Open that file and edit the exported `portfolioData` object. Here is what each key controls:

| Key | What it drives |
|-----|---------------|
| `personal.name` | Your name (shown in navbar, hero heading, page title) |
| `personal.title` | Your role / job title |
| `personal.tagline` | Short motto shown in the hero |
| `personal.subtitle` | Longer description paragraph in the hero |
| `personal.avatar` | Path to your avatar image (relative to `/public/`) |
| `personal.email` | Contact email address |
| `personal.socials[]` | Social media links in the hero and footer |
| `navigation[]` | Navbar links — add, remove, or rename sections here |
| `about.summary` | Bio paragraph in the About section |
| `about.highlights[]` | The three highlight cards in the About section |
| `skills[]` | Skill categories and their tag lists |
| `projects[]` | Project cards — title, description, tags, demo URL, GitHub URL |
| `contact.*` | Heading, subheading, and contact links |

### Swapping your profile photo

1. Copy your photo into `public/images/` (e.g. `my-photo.jpg`).
2. In `portfolio.ts` set `personal.avatar` to `"/images/my-photo.jpg"`.
3. Save — the dev server will reload instantly.

### Adding a new project

In `portfolio.ts`, push a new entry to the `projects` array:

```ts
{
  title: "My New Project",
  description: "A short description of what it does.",
  tags: ["React", "TypeScript"],
  link: "https://live-demo-url.com",   // optional
  github: "https://github.com/you/repo", // optional
  featured: true,                       // shows a "Featured" badge if true
}
```

### Adding a new nav section

1. Add a new `<section id="my-section">` component.
2. Import and place it in `src/pages/index.astro`.
3. Add `{ name: "My Section", href: "#my-section" }` to `navigation[]` in `portfolio.ts`.

---

## 🌐 Deployment

Because Astro outputs pure static HTML, you can deploy to any static host:

| Platform | How |
|----------|-----|
| **GitHub Pages** | Push `dist/` or use the [Astro GitHub Actions guide](https://docs.astro.build/en/guides/deploy/github/) |
| **Netlify** | Connect your repo; set build command `npm run build`, publish dir `dist` |
| **Vercel** | Connect your repo; Vercel auto-detects Astro |
| **Cloudflare Pages** | Connect your repo; set build command `npm run build`, output dir `dist` |

---

## ⚙️ Tech Stack

| Technology | Role |
|-----------|------|
| [Astro 7](https://astro.build) | Static site framework — zero JS by default |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling via Vite plugin |
| TypeScript | Type-safe data file (`portfolio.ts`) |

---

## 📄 License

This project is for personal portfolio use. Feel free to adapt it for your own site.
