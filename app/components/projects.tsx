"use client";

import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string; // Short description for the card
  longDescription?: string; // Full description for the modal
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
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-neutral-950 rounded-lg p-6 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold text-white mb-4">
              {selectedProject.name}
            </h3>

            {/* Long Description */}
            {selectedProject.longDescription && (
              <p className="text-neutral-300 mb-4 leading-relaxed">
                {selectedProject.longDescription}
              </p>
            )}

            {/* Core Features */}
            {selectedProject.coreFeatures && (
              <ul className="list-disc list-inside text-neutral-400 space-y-1 mb-4">
                {selectedProject.coreFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            {selectedProject.techStack && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
