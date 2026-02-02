"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SectionHeader } from "./section-header";
import { SOCIALS } from "@/lib/data/socials";

export default function SocialsSection() {
  return (
    <section id="socials" className="max-w-4xl mx-auto px-6 py-8">
      <SectionHeader title="Socials & Coding Profiles" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SOCIALS.map((social, idx) => {
          const Icon = social.icon;
          return (
            <Link
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-colors">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    social.color,
                    social.hover,
                  )}
                />
              </div>

              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  social.hover,
                )}
              >
                {social.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
