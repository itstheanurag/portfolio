"use client";

import { useMemo, useState, useEffect } from "react";
import { GithubContribution } from "@/lib/types/works";
import { VscGitMerge, VscGitPullRequest, VscIssues } from "react-icons/vsc";
import { FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GithubContributionsProps {
  contributions: GithubContribution[];
}

type FilterStatus = "all" | "merged" | "open";

export default function OpenSourceContributions({ contributions }: GithubContributionsProps) {
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const filteredContributions = useMemo(() => {
    if (filter === "all") return contributions;
    return contributions.filter((c) => c.status === filter);
  }, [contributions, filter]);

  const groupedContributions = useMemo(() => {
    const groups: Record<string, GithubContribution[]> = {};
    filteredContributions.forEach((c) => {
      if (!groups[c.repo]) {
        groups[c.repo] = [];
      }
      groups[c.repo].push(c);
    });
    return groups;
  }, [filteredContributions]);

  // Initialize expanded groups: first one open, others closed by default
  useEffect(() => {
    const repos = Object.keys(groupedContributions);
    if (repos.length > 0) {
      const initial: Record<string, boolean> = {};
      repos.forEach((repo, idx) => {
        initial[repo] = idx === 0;
      });
      setExpandedGroups(initial);
    }
  }, [groupedContributions]);

  const toggleGroup = (repo: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [repo]: !prev[repo],
    }));
  };

  if (contributions.length === 0) {
    return null;
  }

  const statuses: FilterStatus[] = ["all", "merged", "open"];

  return (
    <section className="space-y-12 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-x-auto pb-2 sm:pb-0">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 flex-shrink-0">
          Open Source Contributions
        </h2>

        <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800/50 p-1 rounded-lg self-start sm:self-auto">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md capitalize transition-all",
                filter === s
                  ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedContributions).length > 0 ? (
          Object.entries(groupedContributions).map(([repo, repoContributions]) => (
            <div key={repo} className="space-y-6">
              <button
                onClick={() => toggleGroup(repo)}
                className="w-full flex items-center justify-between group/header"
              >
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-px bg-neutral-200 dark:bg-neutral-800" />
                  {repo}
                  <span className="ml-2 text-[10px] lowercase font-normal opacity-50">
                    ({repoContributions.length})
                  </span>
                </h3>
                <div className="text-neutral-400 group-hover/header:text-neutral-900 dark:group-hover/header:text-neutral-100 transition-colors">
                  {expandedGroups[repo] ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {expandedGroups[repo] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-4 pt-1">
                      {repoContributions.map((contribution) => (
                        <Link
                          key={contribution.id}
                          href={contribution.url}
                          target="_blank"
                          className="block group p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className={cn(
                              "mt-1 size-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                              contribution.type === "PullRequest" 
                                ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                : "bg-orange-100/50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-300"
                            )}>
                              {contribution.type === "PullRequest" ? (
                                contribution.status === "merged" ? <VscGitMerge size={16} /> : <VscGitPullRequest size={16} />
                              ) : (
                                <VscIssues size={16} />
                              )}
                            </div>

                            <div className="flex-grow min-w-0 space-y-1">
                              <div className="flex justify-between items-start gap-4">
                                <h4 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 transition-colors truncate">
                                  {contribution.title}
                                </h4>
                                <span className="flex-shrink-0 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 mt-1">
                                  <FiClock size={12} />
                                  {new Date(contribution.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <span className={cn(
                                  "text-xs uppercase font-bold tracking-wider",
                                  contribution.status === "merged" 
                                    ? "text-neutral-900 dark:text-neutral-100" 
                                    : "text-neutral-500 dark:text-neutral-500"
                                )}>
                                  {contribution.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="text-center py-12 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              No contributions found for the selected status.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
