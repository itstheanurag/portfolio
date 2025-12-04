import React from "react";

const ProjectShimmer = () => {
  return (
    <section className="space-y-16 max-w-4xl mx-auto">
      <div className="h-10 bg-neutral-800 rounded w-1/4 mb-12 animate-pulse"></div>

      <div className="space-y-16">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="group border-b border-neutral-600 pb-12 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Project Image Shimmer */}
              <div className="lg:col-span-5">
                <div className="aspect-video bg-neutral-900 rounded-sm animate-pulse"></div>
              </div>

              {/* Project Details Shimmer */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <div className="h-8 bg-neutral-800 rounded w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-neutral-800 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-800 rounded w-5/6 mt-2 animate-pulse"></div>
                  </div>

                  {/* Core Features Shimmer */}
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-800 rounded w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-neutral-800 rounded w-3/5 animate-pulse"></div>
                  </div>

                  {/* "View More" button shimmer */}
                  <div className="h-6 w-24 bg-neutral-800 rounded mt-2 animate-pulse"></div>

                  {/* Tech Stack Shimmer */}
                  <div className="flex flex-wrap gap-3">
                    <div className="h-8 w-20 bg-neutral-800 rounded-full animate-pulse"></div>
                    <div className="h-8 w-24 bg-neutral-800 rounded-full animate-pulse"></div>
                    <div className="h-8 w-16 bg-neutral-800 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShimmer;
