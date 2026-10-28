import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WORK_PROJECTS } from "@/lib/data/projects";
import { ALL_WORKS } from "@/lib/data/works";
import { NPM_PACKAGES } from "@/lib/data/packages";
import Section from "@/components/section";
import ProjectRow from "@/components/project-row";
import InstallCommand from "@/components/install-command";

export const metadata: Metadata = {
  title: "Works & Projects",
  description:
    "Company platforms, personal developer tools, and backend applications built by Gaurav Kumar.",
  alternates: {
    canonical: "https://itsanurag.in/works",
  },
  openGraph: {
    title: "Works & Projects | Gaurav Kumar",
    description:
      "Company platforms, personal developer tools, and backend applications built by Gaurav Kumar.",
    url: "https://itsanurag.in/works",
    type: "website",
  },
};

const PRODUCTION_META: Record<string, { meta: string; image: string }> = {
  Cadence: { meta: "Healthcare · Research", image: "/cadence.webp" },
  "Schweiger Allergy": {
    meta: "Healthcare · Patient engagement",
    image: "/sdg.webp",
  },
  MedLinks: { meta: "Healthcare · Patient care", image: "/medlinks.webp" },
};

const KIND: Record<string, string> = {
  Republ: "Marketplace",
  Hanma: "Developer tool",
  Scaffoldor: "Developer tool",
  Keyway: "Web app",
  CodeCript: "Learning platform",
};

export default function WorksPage() {
  return (
    <main id="main-content">
      <div className="mx-auto w-full max-w-[980px] lg:border-x lg:border-line">
        <header className="px-6 py-14 sm:px-8 md:py-20 lg:px-10">
          <p className="label-mono">Work index</p>
          <h1 className="mt-5 max-w-[16ch] text-balance font-serif text-[clamp(2.7rem,6.5vw,4.9rem)] leading-[0.97] tracking-[-0.035em] text-ink">
            Things I&apos;ve made.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[14.5px] leading-[1.75] text-muted">
            Company products and personal tools. Some of it runs in
            hospitals; some of it runs on my laptop. All of it taught me
            something.
          </p>
          <p className="mt-6 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
            3 company systems / 5+ personal projects / 2 npm packages / open-source PRs
          </p>
        </header>

        <Section
          index="01"
          title="Company work"
          note="Client products shipped between 2022 and 2025. Backend engineering, integrations, and the unglamorous parts that keep products alive."
        >
          <div>
            {WORK_PROJECTS.map((project) => {
              const info = PRODUCTION_META[project.name];

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

        <Section
          index="02"
          title="Personal work"
          note="Products, tools, and experiments I build for myself. Some are live products; most are open source."
        >
          <div>
            {ALL_WORKS.map((work) => {
              const links = [
                work.github ? { href: work.github, label: "Source" } : null,
                work.link ? { href: work.link, label: "Live" } : null,
                work.npm ? { href: work.npm, label: "npm" } : null,
              ].filter((link): link is { href: string; label: string } =>
                Boolean(link),
              );

              return (
                <ProjectRow
                  key={work.name}
                  name={work.name}
                  meta={KIND[work.name] ?? "Personal"}
                  description={work.description}
                  image={work.image}
                  tech={work.techStack}
                  details={work.progressItems}
                  links={links}
                  note={work.status === "In Progress" ? "In progress" : undefined}
                />
              );
            })}
          </div>

          <div className="mt-9">
            <p className="label-mono">On npm</p>
            <div className="mt-3 border-t border-line">
              {NPM_PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className="grid gap-3 border-b border-line py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <h3 className="font-serif text-[16px] leading-tight text-ink">
                        {pkg.name}
                      </h3>
                      {pkg.version && (
                        <span className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-faint">
                          v{pkg.version}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 max-w-[58ch] text-[12px] leading-relaxed text-muted">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                    {pkg.installCommand && (
                      <InstallCommand command={pkg.installCommand} />
                    )}
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-ink"
                    >
                      npm ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <section className="border-t border-line">
          <div className="flex flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <div>
              <p className="label-mono">03 / Open source</p>
              <p className="mt-2 max-w-[58ch] text-[13px] leading-relaxed text-muted">
                A few pull requests in projects I don&apos;t own — fixes,
                features, and the occasional refactor.
              </p>
            </div>
            <Link
              href="/contributions"
              className="group inline-flex w-fit items-center gap-2 border border-line-strong px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              View contributions
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="flex flex-col gap-6 px-6 py-12 sm:px-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div>
              <p className="label-mono">Next</p>
              <p className="mt-2 font-serif text-2xl leading-tight tracking-[-0.02em] text-ink">
                Have something worth building?
              </p>
            </div>
            <a
              href="mailto:gauravanurag36@gmail.com"
              className="inline-flex w-fit items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-fg transition-colors hover:bg-accent-strong"
            >
              Get in touch
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
