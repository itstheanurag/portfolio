import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiReact,
  SiShadcnui,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiFirebase,
  SiGooglecloud,
  SiGooglebigquery,
  SiSocketdotio,
  SiSquare,
  SiBetterstack,
  SiDrizzle,
  SiHono,
} from "react-icons/si";

export interface Technology {
  name: string;
  icon: IconType;
  color: {
    light: string;
    dark: string;
  };
}

export const TECHNOLOGIES: Record<string, Technology> = {
  "Next.js": {
    name: "Next.js",
    icon: SiNextdotjs,
    color: { light: "text-[#000000]", dark: "dark:text-[#FFFFFF]" },
  },
  TypeScript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: { light: "text-[#3178C6]", dark: "dark:text-[#3178C6]" },
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: { light: "text-[#38BDF8]", dark: "dark:text-[#38BDF8]" },
  },
  "Node.js": {
    name: "Node.js",
    icon: SiNodedotjs,
    color: { light: "text-[#339933]", dark: "dark:text-[#339933]" },
  },
  "Framer Motion": {
    name: "Framer Motion",
    icon: SiFramer,
    color: { light: "text-[#0055FF]", dark: "dark:text-[#0055FF]" },
  },
  React: {
    name: "React",
    icon: SiReact,
    color: { light: "text-[#61DAFB]", dark: "dark:text-[#61DAFB]" },
  },
  "Shadcn UI": {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: { light: "text-[#111827]", dark: "dark:text-[#111827]" },
  },
  NestJS: {
    name: "NestJS",
    icon: SiNestjs,
    color: { light: "text-[#E0234E]", dark: "dark:text-[#E0234E]" },
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: { light: "text-[#336791]", dark: "dark:text-[#336791]" },
  },
  Sequelize: {
    name: "Sequelize",
    icon: SiSequelize,
    color: { light: "text-[#52B0E7]", dark: "dark:text-[#52B0E7]" },
  },
  Firebase: {
    name: "Firebase",
    icon: SiFirebase,
    color: { light: "text-[#FFCA28]", dark: "dark:text-[#FFCA28]" },
  },
  BigQuery: {
    name: "BigQuery",
    icon: SiGooglebigquery,
    color: { light: "text-[#4285F4]", dark: "dark:text-[#4285F4]" },
  },
  GCP: {
    name: "GCP",
    icon: SiGooglecloud,
    color: { light: "text-[#4285F4]", dark: "dark:text-[#4285F4]" },
  },
  "GCP Pub/Sub": {
    name: "GCP Pub/Sub",
    icon: SiGooglecloud,
    color: { light: "text-[#4285F4]", dark: "dark:text-[#4285F4]" },
  },
  "Socket.IO": {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: { light: "text-[#010101]", dark: "dark:text-[#FFFFFF]" },
  },
  "Square API": {
    name: "Square API",
    icon: SiSquare,
    color: { light: "text-[#2D8CFF]", dark: "dark:text-[#2D8CFF]" },
  },
  "ModMed Integration": {
    name: "ModMed Integration",
    icon: SiGooglecloud,
    color: { light: "text-[#0F172A]", dark: "dark:text-[#0F172A]" },
  },
  "Better Auth": {
    name: "Better Auth",
    icon: SiBetterstack,
    color: { light: "text-[#5AC2F0]", dark: "dark:text-[#5AC2F0]" },
  },
  Drizzle: {
    name: "Drizzle",
    icon: SiDrizzle,
    color: { light: "text-[#0FA958]", dark: "dark:text-[#0FA958]" },
  },
  Hono: {
    name: "Hono",
    icon: SiHono,
    color: { light: "text-[#E36002]", dark: "dark:text-[#E36002]" },
  },
};

export const getTech = (name: string): Technology => {
  return (
    TECHNOLOGIES[name] || {
      name,
      icon: () => null,
      color: { light: "text-neutral-500", dark: "dark:text-neutral-400" },
    }
  );
};
