import React from "react";
import Paragraph from "../typography/paragraph";
import Heading from "../typography/heading";

const ThingsIDoShimmer = () => {
  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <Heading>Things I Do</Heading>
      <Paragraph className="pb-4">
        A collection of technologies and practices that make up my development
        workflow.
      </Paragraph>

      <div className="space-y-16">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="group border-b border-neutral-700 pb-12 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Icon and Title Shimmer */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-700 h-12 w-12 animate-pulse"></div>
                    <div className="h-8 bg-neutral-800 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Code Section Shimmer */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="bg-tr border border-neutral-800 rounded-sm p-6 animate-pulse">
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-800 rounded w-full"></div>
                    <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
                    <div className="h-4 bg-neutral-800 rounded w-full"></div>
                    <div className="h-4 bg-neutral-800 rounded w-4/6"></div>
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

export default ThingsIDoShimmer;
