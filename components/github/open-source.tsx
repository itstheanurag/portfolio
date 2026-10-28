"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { VscGitMerge, VscGitPullRequest, VscIssues } from "react-icons/vsc";
import { GithubContribution } from "@/lib/types/works";
import { cn } from "@/lib/utils";

interface GithubContributionsProps {
  contributions: GithubContribution[];
}

type FilterStatus = "all" | "merged" | "open";

const FILTERS: FilterStatus[] = ["all", "merged", "open"];

export default function OpenSourceContributions({
  contributions,
}: GithubContributionsProps) {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredContributions = useMemo(() => {
    if (filter === "all") return contributions;
    return contributions.filter((item) => item.status === filter);
  }, [contributions, filter]);

  const groupedContributions = useMemo(() => {
    const groups: Record<string, GithubContribution[]> = {};

    for (const contribution of filteredContributions) {
      groups[contribution.repo] ??= [];
      groups[contribution.repo].push(contribution);
    }

    return groups;
  }, [filteredContributions]);

  if (contributions.length === 0) return null;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <p className="label-mono">
          {filteredContributions.length} public contribution
          {filteredContributions.length === 1 ? "" : "s"}
        </p>

        <div
          role="group"
          aria-label="Filter contributions by status"
          className="flex items-center gap-1"
        >
          {FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              aria-pressed={filter === status}
              className={cn(
                "rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
                filter === status
                  ? "border-ink bg-ink text-[var(--base)]"
                  : "border-line text-muted hover:border-line-strong hover:text-ink",
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(groupedContributions).length === 0 ? (
        <p className="border-b border-line py-8 text-sm text-muted">
          Nothing matches that filter yet.
        </p>
      ) : (
        Object.entries(groupedContributions).map(([repo, items], index) => (
          <details
            key={repo}
            open={index === 0}
            className="group border-b border-line"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span className="flex min-w-0 items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.1em]">
                <span className="truncate text-muted">{repo}</span>
                <span className="text-faint">({items.length})</span>
              </span>
              <ChevronDown className="size-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180" />
            </summary>

            <div className="space-y-2 pb-5">
              {items.map((contribution) => (
                <Link
                  key={contribution.id}
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item grid grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-3 rounded-sm border border-line bg-raised px-3.5 py-3 transition-colors hover:border-line-strong hover:bg-base sm:px-4"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-7 items-center justify-center rounded-sm",
                      contribution.type === "PullRequest"
                        ? "bg-accent-soft text-accent"
                        : "border border-line text-muted",
                    )}
                  >
                    {contribution.type === "PullRequest" ? (
                      contribution.status === "merged" ? (
                        <VscGitMerge size={14} />
                      ) : (
                        <VscGitPullRequest size={14} />
                      )
                    ) : (
                      <VscIssues size={14} />
                    )}
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-[14px] leading-snug text-ink transition-colors group-hover/item:text-accent">
                      {contribution.title}
                    </span>
                    <span className="mt-1 flex items-center gap-2.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-faint">
                      <span
                        className={cn(
                          contribution.status === "merged" && "text-accent",
                        )}
                      >
                        {contribution.status}
                      </span>
                      <span aria-hidden>·</span>
                      <span>
                        {contribution.type === "PullRequest"
                          ? "Pull request"
                          : "Issue"}
                      </span>
                    </span>
                  </span>

                  <span className="mt-0.5 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                    {new Date(contribution.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </details>
        ))
      )}
    </div>
  );
}
