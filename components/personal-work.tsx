import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ALL_WORKS } from "@/lib/data/works";
import { NPM_PACKAGES } from "@/lib/data/packages";
import Section from "./section";
import ProjectRow from "./project-row";
import InstallCommand from "./install-command";

const SHORT: Record<string, string> = {
  Republ:
    "A marketplace for independent talent and product launches — rate cards, direct briefs, and 0% commission.",
  Hanma:
    "A registry and CLI for production-ready backend snippets — shadcn/ui, but for the server side.",
  Scaffoldor:
    "Find and clone open-source starter templates without the commit history.",
  Keyway:
    "Peer-to-peer file sharing in the browser, end-to-end encrypted, with no server-side storage.",
  CodeCript:
    "An open-source learning hub for JavaScript, TypeScript, Go, data structures, and system design.",
};

const KIND: Record<string, string> = {
  Republ: "Marketplace",
  Hanma: "Developer tool",
  Scaffoldor: "Developer tool",
  Keyway: "Web app",
  CodeCript: "Learning platform",
};

export default function PersonalWork() {
  return (
    <Section
      id="personal"
      index="03"
      title="Personal work"
      note="Products, tools, and packages built for myself. Code is public where I can share it."
      action={
        <Link
          href="/works"
          className="group inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
        >
          All projects
          <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      }
    >
      <div>
        {ALL_WORKS.slice(0, 4).map((work) => {
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
              description={SHORT[work.name] ?? work.description}
              image={work.image}
              tech={work.techStack}
              details={work.progressItems}
              note={work.status === "In Progress" ? "In progress" : undefined}
              links={links}
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
  );
}
