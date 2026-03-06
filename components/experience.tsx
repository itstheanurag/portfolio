"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "./section-header";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string; // Path to logo
  description?: string[];
  skills?: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "CognitiveClouds / Mahalo",
    role: "Associate Software Engineer",
    period: "Nov 2022 – Aug 2025",
    location: "India (Remote)",
    logo: "/mahalo.webp",
    description: [
      "Led backend development for multiple client products using NestJS, TypeScript, and PostgreSQL.",
      "Worked directly with clients to convert product requirements into technical specs and production-ready backend systems.",
      "Built and maintained backend services for 5+ healthcare and wellness platforms used by hospitals, universities, and independent health businesses.",
      "Designed core modules including appointment booking, video consultations via SDK integrations, transcription pipelines, LMS flows, and health tracking.",
      "Implemented integrations for wearables, payment gateways, and third-party services to support sleep, food, and activity tracking.",
      "Built scalable notification systems (SMS, email, push) and wrote advanced PostgreSQL aggregation queries for analytics and reporting.",
      "Designed APIs for admin dashboards, clinician-participant workflows, and multi-tenant healthcare platforms.",
      "Collaborated closely with frontend teams for reliable API integration and with QA teams for end-to-end feature validation.",
      "Contributed to internal healthcare products built on multi-tenant architecture.",
      "Built proof-of-concepts for automation bots and experimental features to improve internal workflows.",
      "Maintained and extended live client systems by resolving production issues and improving reliability and performance.",
    ],
    skills: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    company: "FunctionUp",
    role: "Teaching Assistant",
    period: "Mar 2022 – Oct 2022",
    location: "India (Remote)",
    logo: "/functionup.jpeg",
    description: [
      "Learned and strengthened core coding fundamentals while working with mentors and peers.",
      "Built practical backend projects as part of guided learning tracks.",
      "Took TA session and helped explain Node.js, JavaScript, and DSA concepts.",
      "Reviewed student projects and provided implementation feedback and improvements.",
    ],
    skills: ["JavaScript", "Node.js", "DSA"],
  },
];

export default function ExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState<
    Record<number, boolean>
  >({});

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-8">
      <SectionHeader title="Experience" />

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-6 group">
            {/* Company Logo */}
            <div className="flex-shrink-0 mt-1">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-neutral-200 dark:border-neutral-700 object-cover bg-white p-1"
                />
              ) : (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                  <span className="text-xs font-bold text-neutral-500">
                    {exp.company[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-grow space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {exp.company}
                </h3>
                <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                  {exp.role}
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-500">
                  {exp.location}
                </span>
              </div>

              {exp.description && (
                <>
                  <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 pt-2 space-y-1">
                    {(expandedIndices[idx]
                      ? exp.description
                      : exp.description.slice(0, 2)
                    ).map((desc, i) => (
                      <li
                        key={i}
                        className="transition-all duration-300 ease-out opacity-90 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {exp.description.length > 2 && (
                    <button
                      className="mt-2 text-xs font-semibold transition-colors text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                      onClick={() =>
                        setExpandedIndices((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }))
                      }
                    >
                      {expandedIndices[idx] ? "Show less" : "Show more"}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
