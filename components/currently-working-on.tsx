"use client";

import { CURRENTLY_WORKING_ON } from "@/lib/data/works";
import { ProjectCard } from "./projects";

export default function CurrentlyWorkingOn() {
  return (
    <div className="space-y-16">
      {CURRENTLY_WORKING_ON.map((work, i) => (
        <ProjectCard 
          key={i} 
          project={{
            ...work,
            description: work.description,
            coreFeatures: work.progressItems,
            live: work.link
          } as any} 
        />
      ))}
    </div>
  );
}
