import { RiDrizzleFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiVercel,
  SiAmazonwebservices,
  SiPostman,
  SiBun,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiGit,
  SiRust,
  SiExpress,
  SiGo,
  SiPrisma,
  SiSequelize,
} from "react-icons/si";

/* --------------------------------------------
 * LANGUAGES (Backend-Oriented)
 * -------------------------------------------- */
export const languages = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript (Node.js)", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Golang", icon: SiGo, color: "text-sky-500" },
  { name: "Rust", icon: SiRust, color: "text-orange-400" },
];

/* --------------------------------------------
 * BACKEND FRAMEWORKS / RUNTIMES
 * -------------------------------------------- */
export const frameworks = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js (Fullstack)", icon: SiNextdotjs },
  { name: "Bun Runtime", icon: SiBun },
];

/* --------------------------------------------
 * ORMs / DATABASE MODELLING
 * -------------------------------------------- */
export const orms = [
  {
    name: "Sequelize",
    icon: SiSequelize, // placeholder
    color: "text-yellow-500",
  },
  {
    name: "Drizzle ORM",
    icon: RiDrizzleFill, // clean minimal placeholder
    color: "text-orange-400",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-blue-500",
  },
];

/* --------------------------------------------
 * DEVOPS / CLOUD / TOOLS
 * -------------------------------------------- */
export const tools = [
  { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma, color: "text-purple-400" },
];

/* --------------------------------------------
 * DATABASES / STORAGE / CACHE
 * -------------------------------------------- */
export const databases = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
];
