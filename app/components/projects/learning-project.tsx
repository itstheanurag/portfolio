"use client";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import Heading from "../typography/heading";
import Paragraph from "../typography/paragraph";
import Image from "next/image";

const LEARNING_PROJECTS = [
  {
    name: "Personal Portfolio",
    description:
      "My first Next.js project exploring server-side rendering and modern React patterns.",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    live: "https://itstheanurag.vercel.app",
    repo: "https://github.com/itstheanurag/portfolio",
    // Better screenshot API alternatives
    preview:
      "https://v1.screenshot.11ty.dev/https%3A%2F%2Fitstheanurag.vercel.app%2F/opengraph/",
    fallbackGradient: "from-blue-500 to-purple-600",
  },
  {
    name: "YogaSoul",
    description:
      "A yoga-themed landing page exploring responsive layouts and static site deployment.",
    tech: ["Next.js", "TailwindCSS", "GitHub Pages"],
    live: "https://itstheanurag.github.io/yogasoul/",
    repo: "https://github.com/itstheanurag/yogasoul",
    preview:
      "https://v1.screenshot.11ty.dev/https%3A%2F%2Fitstheanurag.github.io%2Fyogasoul%2F/opengraph/",
    fallbackGradient: "from-green-500 to-teal-600",
  },
];

function ProjectCard({ project }: { project: (typeof LEARNING_PROJECTS)[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col border border-neutral-600 rounded-xl overflow-hidden ">
      <div className="relative h-64 overflow-hidden bg-neutral-800">
        {!imageError ? (
          <Image
            src={project.preview}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
            onError={() => setImageError(true)}
            priority={false}
            unoptimized
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`}
          >
            <span className="text-white/80 text-sm font-medium">
              Preview Unavailable
            </span>
          </div>
        )}

        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-900/80 backdrop-blur-sm rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
              aria-label="View repository"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-900/80 backdrop-blur-sm rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
              aria-label="View live site"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white transition-colors mb-3">
          {project.name}
        </h3>

        {/* Description */}
        <Paragraph className="text-neutral-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </Paragraph>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium text-neutral-300 bg-neutral-800/80 border border-neutral-700/50 px-3 py-1.5 rounded-full hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LearningProjects() {
  return (
    <section className="my-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-6">
      <Heading>Learning Projects</Heading>

      <Paragraph className="pb-6">
        These projects were stepping stones in my journey — small experiments
        where I explored new tools, frameworks, and concepts to sharpen my
        skills as a developer.
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {LEARNING_PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project}  />
        ))}
      </div>
    </section>
  );
}
