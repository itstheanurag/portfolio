import { IconType } from "react-icons";
import {
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiTypescript,
  SiFirebase,
  SiGooglecloud,
  SiGooglebigquery,
  SiSocketdotio,
  SiSquare,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiBetterstack,
  SiDrizzle,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface ProjectItem {
  name: string;
  description?: string | string[];
  longDescription?: string;
  image?: string;
  techStack?: TechItem[];
  coreFeatures?: string[];
  github?: string;
  live?: string;
  link?: string;
}

export const WORK_PROJECTS: ProjectItem[] = [
  {
    name: "Cadence",
    description:
      "A research app for NTU (Singapore) to study heart health with real-time chat and activity tracking.",
    longDescription:
      "Cadence is a research-focused health app developed with NTU to monitor heart health. It includes real-time patient-coach chat, sleep and step tracking, action scores, automated questionnaires, and analytics dashboards for researchers.",
    link: "https://play.google.com/store/apps/details?id=com.ntu.cadence&hl=en_IN",
    techStack: [
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Sequelize", icon: SiSequelize },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
      { name: "BigQuery", icon: SiGooglebigquery },
      { name: "GCP", icon: SiGooglecloud },
    ],
    coreFeatures: [
      "Real-time patient-coach chat",
      "Sleep and step tracking",
      "Daily and weekly action scores",
      "Medication tracker",
      "Detailed analytics for researchers",
      "Big Query + Firebase integrations",
    ],
    image: "/cadence.webp",
  },
  {
    name: "Schweiger Allergy",
    description:
      "A healthcare platform for patient engagement, payments, and medical record integrations.",
    longDescription:
      "SDG is a healthcare platform enhancing patient engagement with real-time doctor-patient chat, medication reminders, subscription-based programs, secure payments via Square, EMR integration with ModMed, and scalable event-driven architecture using GCP Pub/Sub.",
    link: "https://play.google.com/store/apps/details?id=com.mahalo.Schweiger",
    techStack: [
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "GCP Pub/Sub", icon: SiGooglecloud },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Square API", icon: SiSquare },
      { name: "ModMed Integration", icon: SiGooglecloud },
      { name: "Firebase", icon: SiFirebase },
    ],
    coreFeatures: [
      "Subscription-based payments",
      "Secure payment processing via Square",
      "Integration with ModMed EMR",
      "Medication adherence tracking",
      "Event-driven architecture with GCP Pub/Sub",
      "Reminders & notifications",
      "Insurance activity tracking",
    ],
    image: "/sdg.webp",
  },
  {
    name: "MedLinks",
    description:
      "A patient-care platform with personalized programs and health metric tracking.",
    longDescription:
      "MedLinks empowers patients with personalized health programs and tracking of metrics like weight, blood pressure, and glucose...",
    link: "https://play.google.com/store/apps/details?id=com.mahalo.medlinksclinician",
    techStack: [
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
      { name: "GCP", icon: SiGooglecloud },
    ],
    coreFeatures: [
      "Custom health programs",
      "Health metric tracking",
      "Provider dashboards",
      "Notifications & reminders",
      "Progress insights",
    ],
    image: "/medlinks.webp",
  },
];

export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    name: "Portfolio",
    description:
      "A minimal, high-performance portfolio website built with Next.js and Tailwind CSS.",
    link: "https://itstheanurag.vercel.app",
    github: "https://github.com/itstheanurag/portfolio",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Bits&Pieces",
    description:
      "A collection of nextjs components built with tailwindcss and framer motion for rapid prototyping and development.",
    link: "https://itstheanurag.github.io/bitsandpieces/",
    github: "https://github.com/itstheanurag/bitsandpieces",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Shadcn UI", icon: SiShadcnui },
    ],
  },
  {
    name: "Prompt Nation",
    description:
      "A modern prompt directory and AI prompt fine-tuning hub. Built with Next.js and Tailwind CSS, it allows users to explore high-quality prompts, save favorites, and experiment with prompt fine-tuning using LLM-powered enhancements.",
    link: "https://prompt-nation.vercel.app",
    github: "https://github.com/itstheanurag/prompt-nation",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Docusage",
    description:
      "A platform for dealing with any kind of documents, may it be forms, contracts, code, invoices and many more.",

    techStack: [
      { name: "Nextjs", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Better Auth", icon: SiBetterstack },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Shadcn Ui", icon: SiShadcnui },
    ],
  },
];
