"use client";

interface Project {
  name: string;
  description: string;
  link?: string;
  techStack?: string[];
  image?: string;
}

interface ProjectListProps {
  title: string;
  projects: Project[];
}

export default function ProjectList({ title, projects }: ProjectListProps) {
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
              <div className={`${project.image ? 'lg:col-span-7' : 'lg:col-span-12'} flex flex-col justify-center`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 mb-4 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

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

                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-neutral-300 hover:text-neutral-100 transition-colors group/link"
                      >
                        <span className="text-lg font-medium tracking-wide">View Project</span>
                        <svg 
                          className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}