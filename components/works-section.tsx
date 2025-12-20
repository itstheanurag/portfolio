"use client";

import { useState } from "react";
import { WorkItem } from "@/lib/types/works";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CURRENTLY_WORKING_ON } from "@/lib/data/works";
import { TECH_ICON_COLORS } from "@/lib/tech-color";
import type { TechItem } from "@/lib/data/projects";

function TechBadge({ tech }: { tech: TechItem }) {
  const c = TECH_ICON_COLORS[tech.name];

  return (
    <Badge className="flex items-center gap-1.5 text-xs p-1.5 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent text-neutral-600 dark:text-neutral-400">
      <tech.icon
        className={`
          size-3.5 
          ${c?.light ?? ""}
          ${c?.dark ?? ""}
        `}
      />
      {tech.name}
    </Badge>
  );
}

function WorkItemComponent({ work }: { work: WorkItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4 sm:gap-6 group">
      {/* Icon Column */}
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
          <span className="text-xs font-bold text-neutral-500">{work.name[0]}</span>
        </div>
      </div>

      <div className="flex-grow space-y-3">
        {/* Title + Links */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
              {work.name}
            </h3>
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
          </div>

          <div className="flex items-center gap-3">
            {work.github && (
              <Link
                href={work.github}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                <SiGithub className="size-4" />
              </Link>
            )}
            {work.link && (
              <Link
                href={work.link}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                <FiExternalLink className="size-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Category / Status Row */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <span className="font-mono">{work.status}</span>
          <span className="opacity-50">•</span>
          <span>{work.category}</span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {work.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {work.techStack.map((tech, i) => (
            <TechBadge key={i} tech={tech} />
          ))}
        </div>

        {/* Progress Summary Toggle */}
        {work.progressItems && (
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {isExpanded ? (
                <>
                  <FaChevronUp className="size-3" />
                  Hide Progress
                </>
              ) : (
                <>
                  <FaChevronDown className="size-3" />
                  Show Progress Summary
                </>
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 border-l border-neutral-200 dark:border-neutral-800 ml-1.5 pl-4">
                    {work.progressItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="mt-2 size-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorksSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        Currently Working On
      </h2>
      
      <div className="space-y-16">
        {CURRENTLY_WORKING_ON.map((work, i) => (
          <WorkItemComponent key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
