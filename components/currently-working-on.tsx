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
            name: work.name,
            description: work.description,
            image: work.image,
            techStack: work.techStack,
            coreFeatures: work.progressItems,
            link: work.link,
            github: work.github,
          }}
          showPreview={true}
        />
      ))}
    </div>
  );
}
