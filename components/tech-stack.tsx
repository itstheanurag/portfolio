"use client";

import { Badge } from "@/components/ui/badge";
import {
  languages,
  frameworks,
  tools,
  databases,
  orms,
} from "@/lib/data/tech-stack";

export default function StackSection() {
  const categories = [
    { title: "Languages", items: languages },
    { title: "Frameworks", items: frameworks },
    { title: "Tools", items: tools },
    { title: "Databases & Orms", items: [...databases, ...orms] },
  ];

  return (
    <section id="stack" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        Technologies & Tools
      </h2>

      {categories.map((cat) => (
        <div key={cat.title} className="mb-6">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
            {cat.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {cat.items.map((tech) => {
              const Icon = tech.icon;
              return (
                <Badge
                  key={tech.name}
                  variant="neutral"
                  className="px-3 py-1.5 text-sm flex items-center rounded-md"
                >
                  <Icon className={`mr-2 ${tech.color ?? ""}`} />
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
