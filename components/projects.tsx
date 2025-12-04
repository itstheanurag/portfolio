"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/lib/data/projects";
import type { ProjectItem } from "@/lib/data/projects";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }: { project: ProjectItem }) {
  // NEW: Feature toggle
  const [expanded, setExpanded] = useState(false);

  const visibleFeatures = expanded
    ? project.coreFeatures
    : project.coreFeatures?.slice(0, 4);

  const hasMoreFeatures =
    project.coreFeatures && project.coreFeatures.length > 4;

  return (
    <div className="flex gap-4 sm:gap-6 group">
      {/* Project Logo */}
      <div className="flex-shrink-0 mt-1">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-neutral-200 dark:border-neutral-700 object-cover bg-white p-1"
          />
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
            <span className="text-xs font-bold text-neutral-500">
              {project.name[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow space-y-2">
        {/* Title + Links or NDA */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>

          <div className="flex items-center gap-3">
            {/* NEW RULE: Show NDA if NO github */}
            {!project.github ? (
              <span className="text-[10px] px-2 py-0.5 font-medium rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                code not shareable (nda)
              </span>
            ) : (
              <Link
                href={project.github}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <SiGithub className="w-4 h-4" />
              </Link>
            )}

            {/* Live link always shown if present */}
            {(project.live || project.link) && (
              <Link
                href={project.live || project.link!}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
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

        {/* Core Features */}
        {visibleFeatures && (
          <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1 pt-2">
            {visibleFeatures.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        )}

        {/* Show More / Less Button */}
        {hasMoreFeatures && (
          <button
            className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-1"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

        {/* FIXED: Tech Stack badges now wrap properly */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="neutral"
                className="flex items-center gap-1 text-[10px] px-2 py-0.5 font-medium border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-md w-fit"
              >
                <tech.icon className="w-3 h-3" />
                {tech.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Work Projects */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
          Work Projects
        </h2>
        <div className="space-y-12">
          {WORK_PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>

      {/* Personal Projects */}
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
          Personal Projects
        </h2>
        <div className="space-y-12">
          {PERSONAL_PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
