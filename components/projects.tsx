"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/lib/data/projects";
import type { ProjectItem, TechItem } from "@/lib/data/projects";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { TECH_ICON_COLORS } from "@/lib/tech-color";


function TechBadge({ tech }: { tech: TechItem }) {
 const c = TECH_ICON_COLORS[tech.name];

  return (
    <Badge className="flex items-center gap-1 text-xs p-1.5 border border-neutral-300 dark:border-neutral-700 rounded-md">
      <tech.icon
        className={`
          size-4 
          ${c?.light ?? ""}
          ${c?.dark ?? ""}
        `}
      />
      {tech.name}
    </Badge>
  );
}



function ProjectLogo({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-neutral-200 dark:border-neutral-700 object-cover bg-white p-1"
      />
    );
  }

  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
      <span className="text-xs font-bold text-neutral-500">{name[0]}</span>
    </div>
  );
}

/* -------------------------------------------------------
   Component: ProjectCard
------------------------------------------------------- */

function ProjectCard({ project }: { project: ProjectItem }) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded
    ? project.coreFeatures
    : project.coreFeatures?.slice(0, 4);

  const hasMore =
    project.coreFeatures && project.coreFeatures.length > 4;

  return (
    <div className="flex gap-4 sm:gap-6 group">
      <div className="flex-shrink-0 mt-1">
        <ProjectLogo name={project.name} image={project.image} />
      </div>

      <div className="flex-grow space-y-2">
        {/* Title + Links */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>

          <div className="flex items-center gap-3">
            {!project.github ? (
              <span className="text-xs px-2 py-0.5 font-medium rounded-sm border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                Nda On Code
              </span>
            ) : (
              <Link
                href={project.github}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                <SiGithub className="w-4 h-4" />
              </Link>
            )}

            {(project.live || project.link) && (
              <Link
                href={project.live || project.link!}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                <FiExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          {typeof project.description === "string"
            ? project.description
            : project.description?.[0]}
        </p>

        {/* Features */}
        {visible && (
          <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1 pt-2">
            {visible.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        )}

        {hasMore && (
          <button
            className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-1"
            onClick={() => setExpanded((x) => !x)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

        {/* Tech badges */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <TechBadge key={i} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Component: ProjectsSection (default export)
------------------------------------------------------- */

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Work */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
          Work Projects
        </h2>

        <div className="space-y-12">
          {WORK_PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>

      {/* Personal */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
          Personal Projects
        </h2>

        <div className="space-y-12">
          {PERSONAL_PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
