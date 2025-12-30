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
  SiAmazonwebservices,
  SiBun,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiMongodb,
  SiPostman,
  SiPrisma,
  SiRedis,
  SiRust,
  SiVercel,
  SiJavascript,
  SiVite,
  SiGithub,
  SiNpm,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export interface Technology {
  name: string;
  icon: IconType;
  color: {
    light: string;
    dark: string;
  };
}

export const TECHNOLOGIES: Record<string, Technology> = {
  /* --------------------------------------------
   * LANGUAGES
   * -------------------------------------------- */
  TypeScript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: { light: "text-[#3178C6]", dark: "dark:text-[#3178C6]" },
  },
  JavaScript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: { light: "text-yellow-400", dark: "dark:text-yellow-600" },
  },
  Golang: {
    name: "Golang",
    icon: SiGo,
    color: { light: "text-sky-500", dark: "dark:text-sky-500" },
  },
  Rust: {
    name: "Rust",
    icon: SiRust,
    color: { light: "text-orange-400", dark: "dark:text-orange-400" },
  },

  /* --------------------------------------------
   * FRAMEWORKS / RUNTIMES
   * -------------------------------------------- */
  Nodejs: {
    name: "Node.js",
    icon: SiNodedotjs,
    color: { light: "text-[#339933]", dark: "dark:text-[#339933]" },
  },
  Expressjs: {
    name: "Express.js",
    icon: SiExpress,
    color: { light: "text-[#000000]", dark: "dark:text-[#FFFFFF]" },
  },
  BunRuntime: {
    name: "Bun",
    icon: SiBun,
    color: { light: "text-[#FBF0DF]", dark: "dark:text-[#FBF0DF]" },
  },
  React: {
    name: "React",
    icon: SiReact,
    color: { light: "text-[#61DAFB]", dark: "dark:text-[#61DAFB]" },
  },
  Nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: { light: "text-[#000000]", dark: "dark:text-[#FFFFFF]" },
  },
  Vitejs: {
    name: "Vite.js",
    icon: SiVite,
    color: { light: "text-[#646CFF]", dark: "dark:text-[#646CFF]" },
  },
  TailwindCss: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: { light: "text-[#38BDF8]", dark: "dark:text-[#38BDF8]" },
  },
  Npm: {
    name: "npm",
    icon: SiNpm,
    color: { light: "text-[#38BDF8]", dark: "dark:text-[#38BDF8]" },
  },

  /* --------------------------------------------
   * ORMS / DATABASE MODELLING
   * -------------------------------------------- */
  Sequelize: {
    name: "Sequelize",
    icon: SiSequelize,
    color: { light: "text-[#52B0E7]", dark: "dark:text-[#52B0E7]" },
  },
  Prisma: {
    name: "Prisma",
    icon: SiPrisma,
    color: { light: "text-[#2D3748]", dark: "dark:text-[#2D3748]" },
  },
  Drizzle: {
    name: "Drizzle",
    icon: SiDrizzle,
    color: { light: "text-[#0FA958]", dark: "dark:text-[#0FA958]" },
  },

  /* --------------------------------------------
   * DATABASES / CACHE
   * -------------------------------------------- */
  MongoDB: {
    name: "MongoDB",
    icon: SiMongodb,
    color: { light: "text-[#47A248]", dark: "dark:text-[#47A248]" },
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: { light: "text-[#336791]", dark: "dark:text-[#336791]" },
  },
  Redis: {
    name: "Redis",
    icon: SiRedis,
    color: { light: "text-[#DC382D]", dark: "dark:text-[#DC382D]" },
  },

  /* --------------------------------------------
   * DEVOPS / TOOLS
   * -------------------------------------------- */
  AWS: {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: { light: "text-[#FF9900]", dark: "dark:text-[#FF9900]" },
  },
  Docker: {
    name: "Docker",
    icon: SiDocker,
    color: { light: "text-[#2496ED]", dark: "dark:text-[#2496ED]" },
  },
  Git: {
    name: "Git",
    icon: SiGit,
    color: { light: "text-[#F05032]", dark: "dark:text-[#F05032]" },
  },
  GitHub: {
    name: "GitHub",
    icon: SiGithub,
    color: { light: "text-[#24292E]", dark: "dark:text-[#24292E]" },
  },
  Postman: {
    name: "Postman",
    icon: SiPostman,
    color: { light: "text-[#FF6C37]", dark: "dark:text-[#FF6C37]" },
  },
  VSCode: {
    name: "VS Code",
    icon: VscCode,
    color: { light: "text-[#007ACC]", dark: "dark:text-[#007ACC]" },
  },
  Vercel: {
    name: "Vercel",
    icon: SiVercel,
    color: { light: "text-[#000000]", dark: "dark:text-[#FFFFFF]" },
  },
  Figma: {
    name: "Figma",
    icon: SiFigma,
    color: { light: "text-[#A259FF]", dark: "dark:text-[#A259FF]" },
  },
  FramerMotion: {
    name: "Framer Motion",
    icon: SiFramer,
    color: { light: "text-[#0055FF]", dark: "dark:text-[#0055FF]" },
  },
  ShadcnUI: {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: { light: "text-[#111827]", dark: "dark:text-[#111827]" },
  },
  NestJS: {
    name: "NestJS",
    icon: SiNestjs,
    color: { light: "text-[#E0234E]", dark: "dark:text-[#E0234E]" },
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
  SocketIO: {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: { light: "text-[#010101]", dark: "dark:text-[#FFFFFF]" },
  },
  SquareAPI: {
    name: "Square API",
    icon: SiSquare,
    color: { light: "text-[#2D8CFF]", dark: "dark:text-[#2D8CFF]" },
  },
  ModMedIntegration: {
    name: "ModMed Integration",
    icon: SiGooglecloud,
    color: { light: "text-[#0F172A]", dark: "dark:text-[#0F172A]" },
  },
  BetterAuth: {
    name: "Better Auth",
    icon: SiBetterstack,
    color: { light: "text-[#5AC2F0]", dark: "dark:text-[#5AC2F0]" },
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
