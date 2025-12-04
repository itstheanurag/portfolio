"use client";

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
      "Developed backend services using NestJS, TypeScript, and PostgreSQL.",
      "Built and maintained APIs across CognitiveClouds and Mahalo (parent company).",
      "Owned critical backend modules and collaborated with FE + QA teams for smooth releases.",
      "Improved service performance through query optimization and caching strategies.",
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
      "Mentored students in backend development fundamentals.",
      "Taught Node.js, JavaScript, and DSA concepts.",
      "Supported learners in building REST APIs and full-stack projects.",
    ],
    skills: ["JavaScript", "Node.js", "DSA"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        Experience
      </h2>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-6 group">
            {/* Company Logo */}
            <div className="flex-shrink-0 mt-1">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
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
                <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 pt-2 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
