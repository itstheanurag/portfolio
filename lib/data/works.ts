import { WorkItem } from "../types/works";
import { PERSONAL_PROJECTS } from "./projects";
export const ALL_WORKS: WorkItem[] = [
  {
    name: "Hanma UI",
    description:
      "Hanma UI is the central hub for the Hanma platform. It provides a visual interface for exploring the registry, reading detailed documentation, and managing user accounts. It works in tandem with the Hanma CLI to deliver a seamless developer experience.",
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
    name: "Scaffoldor",
    description:
      "Scaffoldor is the central hub for the Scaffoldor platform. It provides a visual interface for exploring the registry, reading detailed documentation, and managing user accounts. It works in tandem with the Scaffoldor CLI to deliver a seamless developer experience.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    github: "https://github.com/itstheanurag/scaffoldor",
    link: "https://scaffoldor.vercel.app/",
    npm: "https://www.npmjs.com/package/scaffoldor",
    progressItems: [
      "A public schema so anyone can share templates",
      "Core CLI architecture designed and implemented",
      "Built for more than just node based system",
      "Supporting gitlab and github",
      "Supporting any package manager",
    ],
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
    name: "Bits&Pieces",
    description:
      "A component library focusing on clean aesthetics and smooth micro-interactions. Each component is designed to be drop-in ready for modern web applications.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Nextjs", "TailwindCss", "FramerMotion", "React"],
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
