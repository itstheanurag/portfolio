"use client";

import { Badge } from "@/components/ui/badge";
import { getTech, TECHNOLOGIES } from "@/lib/data/technologies";

export default function StackSection() {
  return (
    <section id="stack" className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        Technologies & Tools
      </h2>

      <div className="flex flex-wrap gap-2">
        {Array.from(Object.keys(TECHNOLOGIES)).map((name) => {
          const tech = getTech(name);
          const Icon = tech.icon;

          return (
            <Badge
              key={tech.name}
              variant="outline"
              className="flex items-center gap-2 sm:text-sm md:text-[14px] py-1 px-2 border border-neutral-20 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400
              font-medium rounded-sm font-semibold"
            >
              <Icon
                className={`size-4 ${tech.color.light} ${tech.color.dark}`}
              />
              {tech.name}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
