"use client";

import { FaReact, FaNodeJs, FaDocker, FaJava, FaJs } from "react-icons/fa";
import {
  SiNestjs,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiSequelize,
  SiPrisma,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiHono,
  SiGo,
} from "react-icons/si";
import Heading from "./typography/heading";
import Paragraph from "./typography/paragraph";

const TOOLS_STACK = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "Hono", icon: SiHono },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Postman", icon: SiPostman },
  { name: "Sequelize", icon: SiSequelize },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redux", icon: SiRedux },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Docker", icon: FaDocker },
  { name: "React", icon: FaReact },
];

const LANGUAGES = [
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Go", icon: SiGo },
  { name: "Java", icon: FaJava },
];

export default function SkillsAndInterests() {
  const renderGrid = (items: typeof TOOLS_STACK) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {items.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className="flex items-center justify-start gap-2 rounded-lg border border-neutral-600 px-4 py-3 hover:bg-base-100 hover:shadow-md transition"
          >
            <Icon className="text-primary w-5 h-5" />
            <span className="text-base-content font-medium">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <section className="m-12 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <Heading>Skills</Heading>

        <Paragraph className="pb-6">
          I love exploring new technologies, building scalable solutions, and
          solving real-world problems with code. My interests span full-stack
          development, backend architectures, and creating products that make an
          impact.
        </Paragraph>

        <h3 className="text-xl font-semibold text-base-content mt-10 mb-4">
          Tools & Frameworks
        </h3>
        {renderGrid(TOOLS_STACK)}

        <h3 className="text-xl font-semibold text-base-content mt-10 mb-4">
          Programming Languages
        </h3>
        {renderGrid(LANGUAGES)}
      </section>

      <div className="border-b border-neutral-800 pb-12 last:border-b-0 max-w-6xl mx-auto"></div>
    </>
  );
}
