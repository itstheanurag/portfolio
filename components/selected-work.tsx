import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WORK_PROJECTS } from "@/lib/data/projects";
import Section from "./section";
import ProjectRow from "./project-row";

const META: Record<string, { meta: string; image: string }> = {
  Cadence: { meta: "Healthcare · Research", image: "/cadence.webp" },
  "Schweiger Allergy": {
    meta: "Healthcare · Patient engagement",
    image: "/sdg.webp",
  },
  MedLinks: { meta: "Healthcare · Patient care", image: "/medlinks.webp" },
};

export default function SelectedWork() {
  return (
    <Section
      id="work"
      index="01"
      title="Company work"
      note="Client products, 2022–2025. Healthcare systems that shipped and stayed shipped."
      action={
        <Link
          href="/works"
          className="group inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
        >
          All work
          <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      }
    >
      <div>
        {WORK_PROJECTS.map((project) => {
          const info = META[project.name];

          return (
            <ProjectRow
              key={project.name}
              name={project.name}
              meta={info?.meta ?? "Healthcare"}
              description={project.description ?? ""}
              image={info?.image}
              tech={project.techStack}
              details={project.coreFeatures}
              links={
                project.link
                  ? [{ href: project.link, label: "Play Store" }]
                  : undefined
              }
            />
          );
        })}
      </div>
    </Section>
  );
}
