"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "personal", label: "Personal" },
  { id: "open-source", label: "Open source" },
  { id: "toolkit", label: "Toolkit" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndex() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );

    for (const section of SECTIONS) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 py-10 pr-3">
        <p className="eyebrow">Index</p>

        <nav aria-label="Section index" className="mt-5">
          <ol>
            {SECTIONS.map((section, index) => {
              const isActive = active === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-2.5 whitespace-nowrap py-2 text-[12px] font-medium transition-colors",
                      isActive ? "text-accent" : "text-muted hover:text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "h-px shrink-0 transition-all duration-300",
                        isActive
                          ? "w-5 bg-accent"
                          : "w-2.5 bg-line-strong group-hover:w-4",
                      )}
                    />
                    <span className="label-mono text-[10px] opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

      </div>
    </aside>
  );
}
