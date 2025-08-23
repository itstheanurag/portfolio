"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  longDescription?: string;
  link?: string;
  techStack?: string[];
  image?: string;
  coreFeatures?: string[];
}

interface ProjectListProps {
  title: string;
  projects: Project[];
}

export default function ProjectList({ title, projects }: ProjectListProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Close modal when clicking backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-16 text-left tracking-tight">
        {title}
      </h2>

      <div className="space-y-16">
        {projects?.map((project, idx) => (
          <div
            key={idx}
            className="group border-b border-neutral-600 pb-12 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Project Image */}
              {project.image && (
                <div className="lg:col-span-5">
                  <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div
                className={`${
                  project.image ? "lg:col-span-7" : "lg:col-span-12"
                } flex flex-col justify-center`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 mb-4 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Features Preview */}
                  {project.coreFeatures && (
                    <ul className="list-disc list-inside text-neutral-400 space-y-1">
                      {project.coreFeatures.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  {/* "View More" button if modal details exist */}
                  {(project.longDescription ||
                    (project.coreFeatures &&
                      project.coreFeatures.length > 3)) && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
                    >
                      View More →
                    </button>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full hover:border-neutral-600 hover:text-neutral-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Clean Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 "
          onClick={handleBackdropClick}
        >
          <div className="bg-transparent backdrop-blur-md border border-neutral-700 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-medium text-neutral-100 mb-4 tracking-tight pr-8">
                {selectedProject.name}
              </h3>

              {/* Image */}
              {selectedProject.image && (
                <div className="mb-6">
                  <div className="aspect-video bg-neutral-800 rounded-sm overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Long Description */}
              {selectedProject.longDescription && (
                <div className="mb-6">
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
              )}

              {/* Core Features */}
              {selectedProject.coreFeatures && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-200 mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.coreFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-neutral-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {selectedProject.techStack && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-neutral-200 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-neutral-400 border border-neutral-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Link */}
              {selectedProject.link && (
                <div className="pt-4 border-t border-neutral-700">
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
