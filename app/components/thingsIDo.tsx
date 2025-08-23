"use client";
import { HOME_PAGE_SKILL_I_DO } from "@/lib/data/thingsiDo";
import {
  Code2,
  Server,
  Database,
  Cloud,
  GitPullRequest,
  Terminal,
} from "lucide-react";
import { MouseEvent } from "react";

const ThingsIDo = () => {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow =
      "0 0 30px 5px rgba(168, 85, 247, 0.7), 0 0 30px 5px rgba(59, 130, 246, 0.7)";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = "0 0 0px transparent";
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-200">
        Things I Do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {HOME_PAGE_SKILL_I_DO.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={idx}
              className="bg-black/20 backdrop-blur-md border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:scale-102 relative cursor-pointer"
              style={{
                boxShadow: "0 0 0px transparent",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-2 mb-3">
                <IconComponent className="h-6 w-6 text-pink-400" />
                <h3 className="text-neutral-200 font-semibold">
                  {skill.title}
                </h3>
              </div>
              <pre className="bg-black/40 p-3 rounded text-sm whitespace-pre-wrap break-words overflow-x-auto">
                {skill.code.map((line, i) => (
                  <code key={i} className="block text-gray-300 leading-relaxed">
                    {line}
                  </code>
                ))}
              </pre>
            </div>
          );
        })}
      </div>

      <h3
        className="mt-12 text-gray-400 text-xl md:text-base hover:cursor-pointer inline-flex items-center gap-2"
        onClick={() => {
          console.log("Clicked to show more skills");
        }}
      >
        <span className="text-gray-500">👀</span> Curious as to what else I do?
      </h3>
    </section>
  );
};

export default ThingsIDo;
