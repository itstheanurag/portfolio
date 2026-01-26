import { WorkItem } from "../types/works";
import { PERSONAL_PROJECTS } from "./projects";
export const ALL_WORKS: WorkItem[] = [
  {
    name: "Hanma UI",
    description:
      "The web interface for the Hanma ecosystem. Allows users to browse snippets, view documentation, and manage their profile.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    github: "https://github.com/itstheanurag/hanma",
    link: "https://hanma-a2n.pages.dev/",
    npm: "https://www.npmjs.com/package/hanma",
    longDescription:
      "Hanma UI is the central hub for the Hanma platform. It provides a visual interface for exploring the registry, reading detailed documentation, and managing user accounts. It works in tandem with the Hanma CLI to deliver a seamless developer experience.",
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
      "The web registry along with a customized cli to share github and gitlab based public templates across peers without any messy commit history. with a preferred package manager so it always belongs to you.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Vitejs", "TailwindCss", "TypeScript", "Nodejs", "Npm", "Git"],
    github: "https://github.com/itstheanurag/scaffoldor",
    link: "https://scaffoldor.vercel.app/",
    npm: "https://www.npmjs.com/package/scaffoldor",
    longDescription:
      "Scaffoldor is the central hub for the Scaffoldor platform. It provides a visual interface for exploring the registry, reading detailed documentation, and managing user accounts. It works in tandem with the Scaffoldor CLI to deliver a seamless developer experience.",
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
    longDescription:
      "Keyway is a privacy-first file sharing platform built around the idea that servers should never see your data. Files are encrypted client-side in the browser using strong cryptography before they ever leave your device. Using WebRTC, Keyway establishes a direct peer-to-peer connection between sender and receiver, allowing files to stream securely between devices without being uploaded, stored, or logged on a central server.\n\nThe server is used only for signaling and connection setup. Once the handshake is complete, all file transfers happen directly between browsers with end-to-end encryption. This approach eliminates storage limits, reduces latency, and ensures that no trace of your data is left behind.\n\nKeyway is designed to be simple, fast, and secure by default. Share a file, send a link, and transfer directly, without accounts, uploads, or trust in infrastructure you don’t control.",
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
      "A collection of high-quality Next.js components built with Tailwind CSS and Framer Motion.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Nextjs", "TailwindCss", "FramerMotion", "React"],
    github: "https://github.com/itstheanurag/bitsandpieces",
    link: "https://itstheanurag.github.io/bitsandpieces/",
    longDescription:
      "A component library focusing on clean aesthetics and smooth micro-interactions. Each component is designed to be drop-in ready for modern web applications.",
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
      "Multi-purpose platform for forms, contracts, invoices and code management.",
    category: "Open Source",
    status: "In Progress",
    techStack: ["Nextjs", "TypeScript", "ShadcnUI"],
    github: "https://github.com/itstheanurag/docusage",
    longDescription:
      "An all-in-one document management system that handles everything from simple forms to complex code snippets and invoices with ease.",
    progressItems: [
      "Initial database schema designed with Drizzle",
      "Implemented basic form builder",
      "Unified toolbar system integrated",
      "Researching secure document sharing",
    ],
  },
  ...PERSONAL_PROJECTS,
];
