"use client";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaDocker, FaJava, FaJs } from "react-icons/fa";
import { 
  SiNestjs, SiPostgresql, SiFirebase, SiTypescript, SiMongodb, SiExpress, 
  SiPostman, SiSequelize, SiPrisma, SiGraphql, SiRedux, SiTailwindcss, SiHono, SiGo
} from "react-icons/si";

const TOOLS_STACK = [
  { name: "React", icon: FaReact },
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
];

const LANGUAGES = [
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML", icon: FaJs },
  { name: "CSS", icon: FaJs },
  { name: "Go", icon: SiGo },
  { name: "Java", icon: FaJava },
];

export default function TechStackMarquee() {
  const renderItems = (items: typeof TOOLS_STACK | typeof LANGUAGES, repeat = 3) =>
    Array.from({ length: repeat }).flatMap((_, rIdx) =>
      items.map((tech, idx) => {
        const Icon = tech.icon;
        return (
          <div key={`${tech.name}-${rIdx}-${idx}`} className="flex">
            <div className="flex items-center gap-2 px-4 py-2 m-2 border border-neutral-700 rounded-lg">
              <Icon className="text-cyan-400" />
              <span className="text-neutral-200 font-medium">{tech.name}</span>
            </div>
          </div>
        );
      })
    );

  return (
    <section className="m-12 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-4 tracking-tight">
        Skills and Interests
      </h2>

      {/* Tools Marquee */}
      <Marquee gradient={false} speed={50}>
        {renderItems(TOOLS_STACK, 3)}
      </Marquee>

      {/* Languages Marquee */}
      <Marquee gradient={false} speed={50} direction="right">
        {renderItems(LANGUAGES, 5)}
      </Marquee>
    </section>
  );
}
