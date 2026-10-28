import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubContribution } from "@/lib/types/works";
import { cn } from "@/lib/utils";
import Section from "./section";
import GithubActivity from "@/components/github/github";

export default function OpenSourceContributions({
  contributions,
}: {
  contributions: GithubContribution[];
}) {
  const items = contributions.slice(0, 4);

  return (
    <Section
      id="open-source"
      index="04"
      title="Open source"
      note="A few pull requests in projects I don't own. Fixes, features, and the occasional refactor."
      action={
        <Link
          href="/contributions"
          className="group inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
        >
          All contributions
          <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      }
    >
      {items.length === 0 ? (
        <p className="border-t border-line py-5 text-[13px] text-muted">
          Contributions are temporarily unavailable.{" "}
          <Link
            href="/contributions"
            className="border-b border-line-strong text-ink hover:border-accent hover:text-accent"
          >
            View the contributions page
          </Link>
          .
        </p>
      ) : (
        <div className="border-t border-line">
          {items.map((contribution) => (
            <a
              key={contribution.id}
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1.5 border-b border-line py-4 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="font-mono text-[9px] tracking-[0.08em] text-faint">
                    {contribution.repo}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[8px] uppercase tracking-[0.1em]",
                      contribution.status === "merged"
                        ? "text-status"
                        : "text-faint",
                    )}
                  >
                    {contribution.status}
                  </span>
                </div>

                <h3 className="mt-1 font-serif text-[17px] leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
                  {contribution.title}
                </h3>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                {new Date(contribution.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year:
                    new Date(contribution.date).getFullYear() ===
                    new Date().getFullYear()
                      ? undefined
                      : "numeric",
                })}
              </span>
            </a>
          ))}
        </div>
      )}

      <div className="mt-10 border-t border-line pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="label-mono">GitHub activity</p>
          <Link
            href="/contributions"
            className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-ink"
          >
            Full profile
            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-5">
          <GithubActivity username="itstheanurag" />
        </div>
      </div>
    </Section>
  );
}
