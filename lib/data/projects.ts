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
  iconBgColor?: string;
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
      { name: "NestJS", icon: SiNestjs, iconBgColor: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, iconBgColor: "#336791" },
      { name: "Sequelize", icon: SiSequelize, iconBgColor: "#52B0E7" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
      { name: "Firebase", icon: SiFirebase, iconBgColor: "#FFCA28" },
      { name: "BigQuery", icon: SiGooglebigquery, iconBgColor: "#4285F4" },
      { name: "GCP", icon: SiGooglecloud, iconBgColor: "#4285F4" },
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
      { name: "NestJS", icon: SiNestjs, iconBgColor: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, iconBgColor: "#336791" },
      { name: "Socket.IO", icon: SiSocketdotio, iconBgColor: "#010101" },
      { name: "GCP Pub/Sub", icon: SiGooglecloud, iconBgColor: "#4285F4" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
      { name: "Square API", icon: SiSquare, iconBgColor: "#2D8CFF" },
      {
        name: "ModMed Integration",
        icon: SiGooglecloud,
        iconBgColor: "#0F172A",
      },
      { name: "Firebase", icon: SiFirebase, iconBgColor: "#FFCA28" },
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
      { name: "NestJS", icon: SiNestjs, iconBgColor: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, iconBgColor: "#336791" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
      { name: "Firebase", icon: SiFirebase, iconBgColor: "#FFCA28" },
      { name: "GCP", icon: SiGooglecloud, iconBgColor: "#4285F4" },
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
      { name: "Next.js", icon: SiNextdotjs, iconBgColor: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconBgColor: "#38BDF8" },
      { name: "Framer Motion", icon: SiFramer, iconBgColor: "#0055FF" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
    ],
    image: "/icon.png",
  },
  {
    name: "Prompt Nation",
    description:
      "A modern prompt directory and AI prompt fine-tuning hub. Built with Next.js and Tailwind CSS, it allows users to explore high-quality prompts, save favorites, and experiment with prompt fine-tuning using LLM-powered enhancements.",
    github: "https://github.com/itstheanurag/prompt-nation",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, iconBgColor: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconBgColor: "#38BDF8" },
      { name: "Framer Motion", icon: SiFramer, iconBgColor: "#0055FF" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
    ],
  },
  {
    name: "Konvo",
    description:
      "A small fun project, make fake Chat conversation images and fake post images for the the meme purposes",
    link: "https://konvo-seven.vercel.app",
    github: "https://github.com/itstheanurag/konvo",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, iconBgColor: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconBgColor: "#38BDF8" },
      { name: "TypeScript", icon: SiTypescript, iconBgColor: "#3178C6" },
    ],
    image: "/konvo.png",
  },
];
