import { WorkItem } from "../types/works";
import { PERSONAL_PROJECTS } from "./projects";

export const ALL_WORKS: WorkItem[] = [
  {
    name: "Rebupl",
    description:
      "Rebupl is a weekly product launch board and creator directory. Products launch on Monday drops with a permanent page each, creators claim verified folios and take briefs direct, and a set of free launch tools helps makers ship and get discovered.",
    category: "Personal Project",
    status: "Completed",
    techStack: ["Nextjs", "TypeScript", "TailwindCss", "React"],
    link: "https://rebupl.fun",
    progressItems: [
      "Weekly product launch board with Monday drops",
      "Permanent product pages with dofollow links",
      "Verified creator folios and direct briefs",
      "Editorial coverage and cross-posts for premium launches",
      "Free launch tools — name, tagline, slug, meta, and domain checks",
    ],
    image: "/rebupl.png",
  },
  {
    name: "Utils",
    description:
      "Utils (utils.sbs) is a local-first collection of 584 browser-based tools across 29 shelves — image, video, audio, PDF, text, developer, SEO, and more. Everything runs on-device with no sign-in, no uploads, and no installs.",
    category: "Personal Project",
    status: "Completed",
    techStack: ["Nextjs", "TypeScript", "TailwindCss", "React"],
    link: "https://utils.sbs",
    progressItems: [
      "584 tools organised across 29 job-based shelves",
      "Image, video, audio, and PDF processing in the browser",
      "Developer, text, data, and SEO utilities",
      "No accounts, no uploads — files never leave the device",
      "Full-text search and category filtering across the catalogue",
    ],
    image: "/utils.png",
  },
  {
    name: "CodeCript",
    description:
      "CodeCript is an open-source learning hub for software engineering, covering JavaScript, TypeScript, Go, data structures, algorithms, and system design in one organized place.",
    category: "Open Source",
    status: "In Progress",
    techStack: [
      "Vitejs",
      "TailwindCss",
      "Cloudflare",
      "TypeScript",
      "Npm",
      "Git",
    ],
    github: "https://github.com/itstheanurag/codecript",
    link: "https://codecript.pages.dev/",
    progressItems: [
      "Core documentation structure for languages, DSA, and system design",
      "JavaScript fundamentals and deep-dive guides",
      "Technical blog section for software engineering concepts",
      "Open-source contribution workflow for community additions",
      "Deployment on Cloudflare Pages with fast global delivery",
    ],
    image: "/codecript.png",
  },
  {
    name: "Scaffoldor",
    description:
      "Scaffoldor is a directory of open-source project templates collected from GitHub. Developers can browse registered templates and download them instantly through the Scaffoldor CLI, eliminating the need to start projects from scratch. It acts as a fast discovery and scaffolding tool for launching new applications using community-maintained starter repositories.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    github: "https://github.com/itstheanurag/scaffoldor",
    link: "https://scaffoldor.vercel.app/",
    npm: "https://www.npmjs.com/package/scaffoldor",
    image: "/scaffoldor.png",
    progressItems: [
      "A public schema so anyone can share templates",
      "Core CLI architecture designed and implemented",
      "Built for more than just node based system",
      "Supporting gitlab and github",
      "Supporting any package manager",
    ],
  },
  {
    name: "Hanma",
    description:
      "Hanma is a backend tooling platform for the Node.js and Bun ecosystem, inspired by shadcn/ui but focused on server-side development. It provides a registry of production-ready backend snippets such as logging, monitoring, middleware, and CORS configurations that can be installed directly via the Hanma CLI. Developers can bootstrap projects from Hanma templates or integrate individual snippets into existing backend applications without rewriting common infrastructure.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    github: "https://github.com/itstheanurag/hanma",
    link: "https://hanma-a2n.pages.dev/",
    npm: "https://www.npmjs.com/package/hanma",
    progressItems: [
      "Core CLI architecture designed and implemented",
      "Added support for Express and NestJS snippets",
      "Implementing registry system for dynamic updates",
      "Drafting documentation for public release",
    ],
    image: "/hanma-logo.png",
  },
  {
    name: "Keyway",
    description:
      "Keyway is a secure, browser-based peer-to-peer file sharing tool that lets you send files directly between devices with end-to-end encryption. No uploads, no storage, and no data ever touching a server.",
    category: "Open Source",
    status: "In Progress",
    techStack: [
      "Nextjs",
      "TailwindCss",
      "WebRtc",
      "TypeScript",
      "Nodejs",
      "Npm",
      "Git",
    ],
    github: "https://github.com/itstheanurag/keyway",
    link: "https://keyway.onrender.com/",
    progressItems: [
      "Client-side encryption with browser-generated keys",
      "Direct peer-to-peer file transfer using WebRTC",
      "No server-side storage or file persistence",
      "Open-source and auditable codebase",
      "Simple link-based sharing with optional protections",
    ],
    image: "/keyway.png",
  },
  {
    name: "Bits&Pieces",
    description:
      "A component library focusing on clean aesthetics and smooth micro-interactions. Each component is designed to be drop-in ready for modern web applications.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Nextjs", "TailwindCss", "React"],
    github: "https://github.com/itstheanurag/bitsandpieces",
    progressItems: [
      "Implemented 'Navbar Morph' and 'Dock' components",
      "Optimized animations for mobile devices",
      "Adding more complex layout patterns",
      "Started working on dark mode variants",
    ],
    image: "/bitsandpieces.png",
  },
  {
    name: "Docusage",
    description:
      "An all-in-one document management system that handles everything from simple forms to complex code snippets and invoices with ease.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Nextjs", "TypeScript", "ShadcnUI"],
    github: "https://github.com/itstheanurag/docusage",
    progressItems: [
      "Initial database schema designed with Drizzle",
      "Implemented basic form builder",
      "Unified toolbar system integrated",
      "Researching secure document sharing",
    ],
  },
  ...PERSONAL_PROJECTS,
];
