"use client";

import { ALL_WORKS } from "@/lib/data/works";
import { ProjectCard } from "./projects";

export default function CurrentlyWorkingOn() {
  return (
    <div className="space-y-16">
      {ALL_WORKS.map((work, i) => (
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
            npm: work.npm,
          }}
          showPreview={true}
        />
      ))}
    </div>
  );
}
