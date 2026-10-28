export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  highlights: string[];
  details: string[];
  skills?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "CognitiveClouds / Mahalo",
    role: "Associate Software Engineer",
    period: "Nov 2022 — Aug 2025",
    location: "Remote · India",
    logo: "/mahalo.webp",
    highlights: [
      "Led backend development for multiple client products using NestJS, TypeScript, and PostgreSQL.",
      "Built and maintained services for 5+ healthcare platforms used by hospitals, universities, and independent health businesses.",
      "Worked directly with clients to turn product requirements into technical specifications and production-ready systems.",
    ],
    details: [
      "Designed core modules including appointment booking, video consultations via SDK integrations, transcription pipelines, LMS flows, and health tracking.",
      "Implemented integrations for wearables, payment gateways, and third-party services to support sleep, food, and activity tracking.",
      "Built scalable notification systems across SMS, email, and push, with advanced PostgreSQL aggregation queries for analytics and reporting.",
      "Designed APIs for admin dashboards, clinician-participant workflows, and multi-tenant healthcare platforms.",
      "Collaborated with frontend teams on API integration and with QA on end-to-end feature validation.",
      "Contributed to internal healthcare products built on multi-tenant architecture.",
      "Built proof-of-concepts for automation bots and experimental features to improve internal workflows.",
      "Maintained live client systems by resolving production issues and improving reliability and performance.",
    ],
    skills: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    company: "FunctionUp",
    role: "Teaching Assistant",
    period: "Mar 2022 — Oct 2022",
    location: "Remote · India",
    logo: "/functionup.jpeg",
    highlights: [
      "Took teaching-assistant sessions on Node.js, JavaScript, and data structures.",
      "Reviewed student projects and gave implementation feedback.",
      "Built practical backend projects alongside mentors and peers.",
    ],
    details: [
      "Strengthened core coding fundamentals while working through guided learning tracks.",
      "Helped explain Node.js, JavaScript, and DSA concepts to students.",
      "Reviewed code and suggested improvements to student projects.",
    ],
    skills: ["JavaScript", "Node.js", "DSA"],
  },
];
