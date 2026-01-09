import { WorkItem } from "../types/works";

export interface ProjectItem {
  name: string;
  description?: string | string[];
  longDescription?: string;
  image?: string;
  techStack?: string[];
  coreFeatures?: string[];
  github?: string;
  link?: string;
  npm?: string;
  previewImage?: string;
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
      "NestJS",
      "PostgreSQL",
      "Sequelize",
      "TypeScript",
      "Firebase",
      "BigQuery",
      "GCP",
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
      "NestJS",
      "PostgreSQL",
      "Socket.IO",
      "GCP Pub/Sub",
      "TypeScript",
      "SquareAPI",
      "ModMedIntegration",
      "Firebase",
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
    techStack: ["NestJS", "PostgreSQL", "TypeScript", "Firebase", "GCP"],
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

export const PERSONAL_PROJECTS: WorkItem[] = [
  {
    name: "Portfolio",
    description:
      "A minimal, high-performance portfolio website built with Next.js and TailwindCss.",
    link: "https://itstheanurag.vercel.app",
    github: "https://github.com/itstheanurag/portfolio",
    techStack: ["Nextjs", "TailwindCss", "FramerMotion", "TypeScript"],
    image: "/icon.png",
    category: "Personal Project",
    status: "On Maintenance",
  },
  {
    name: "Konvo",
    description:
      "A small fun project, make fake Chat conversation images and fake post images for the the meme purposes",
    link: "https://konvo-seven.vercel.app",
    github: "https://github.com/itstheanurag/konvo",
    techStack: ["Nextjs", "TailwindCss", "TypeScript"],
    image: "/konvo.png",
    category: "Personal Project",
    status: "Completed",
  },
  {
    name: "Prompt Nation",
    description:
      "A modern prompt directory and AI prompt fine-tuning hub. Built with Next.js and TailwindCss, it allows users to explore high-quality prompts, save favorites, and experiment with prompt fine-tuning using LLM-powered enhancements.",
    github: "https://github.com/itstheanurag/prompt-nation",
    techStack: ["Nextjs", "TailwindCss", "FramerMotion", "TypeScript"],
    category: "Personal Project",
    status: "Completed",
  },
];
