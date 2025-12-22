import { WorkItem } from "../types/works";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiReact,
  SiShadcnui,
} from "react-icons/si";

export const CURRENTLY_WORKING_ON: WorkItem[] = [
  {
    name: "Hanma",
    description:
      "A CLI tool for generating full-stack boilerplates and snippets with a focus on speed and developer experience.",
    category: "Open Source",
    status: "In Progress",
    techStack: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/itstheanurag/hanma",
    longDescription:
      "Hanma is designed to streamline the project initialization process by providing modular snippets and templates. It supports various frameworks and databases, allowing developers to scaffold complex applications in minutes.",
    progressItems: [
      "Core CLI architecture designed and implemented",
      "Added support for Express and NestJS snippets",
      "Implementing registry system for dynamic updates",
      "Drafting documentation for public release",
    ],
  },
  {
    name: "Bits&Pieces",
    description:
      "A collection of high-quality Next.js components built with Tailwind CSS and Framer Motion.",
    category: "Open Source",
    status: "In Progress",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React", icon: SiReact },
    ],
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
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Shadcn UI", icon: SiShadcnui },
    ],
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
];
