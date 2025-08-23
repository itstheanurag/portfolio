"use client";
import { HOME_PAGE_SKILL_I_DO, InterestTypeArray } from "@/lib/data/thingsiDo";
import { MouseEvent } from "react";

const ThingsIDo = ({ elements }: { elements?: InterestTypeArray }) => {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.borderColor = "rgb(115 115 115)"; // neutral-500
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "rgb(64 64 64)"; // neutral-700
  };

  const elementsToShow = elements?.length ? elements : HOME_PAGE_SKILL_I_DO;

  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-4 text-left tracking-tight">
        Things I Do
      </h2>
      <p className="text-lg text-neutral-400 mb-16 leading-relaxed max-w-2xl">
        A collection of technologies and practices that make up my development
        workflow.
      </p>

      <div className="space-y-16">
        {elementsToShow?.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={idx}
              className="group border-b border-neutral-700 pb-12 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Icon and Title Section */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-700 group-hover:border-neutral-600 transition-colors">
                        <IconComponent className="h-6 w-6 text-neutral-300" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 tracking-tight">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Code Section */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div
                    className="bg-tr border border-neutral-800 rounded-sm p-6 transition-all duration-300 cursor-pointer overflow-x-auto"
                    style={{
                      transform: "translateY(0)",
                      borderColor: "rgb(64 64 64)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <pre className="text-sm">
                      {skill.code.map((line, i) => (
                        <code
                          key={i}
                          className="block text-neutral-200 leading-relaxed font-mono"
                        >
                          {line}
                        </code>
                      ))}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <MoreSkillsButton hasMore={elements?.length ? true : false} />
    </section>
  );
};

export default ThingsIDo;

import Link from "next/link";

interface Props {
  hasMore?: boolean;
}

function MoreSkillsButton({ hasMore }: Props) {
  if (hasMore) return null;

  return (
    <div className="pt-12 mt-16 border-t border-neutral-800">
      <Link
        href="/interests"
        className="inline-flex items-center text-neutral-300 hover:text-neutral-100 transition-colors group/link"
      >
        <span className="text-lg font-medium tracking-wide">
          <span className="mr-2">👀</span>
          Curious as to what else I do?
        </span>
        <svg
          className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
