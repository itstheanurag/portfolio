import Section from "./section";

const GROUPS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "SQL"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "Express", "Hono", "Bun"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "BigQuery"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "GCP", "Firebase", "Cloudflare", "Vercel"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Practice",
    items: [
      "System design",
      "API design",
      "Multi-tenant architecture",
      "CI/CD",
    ],
  },
];

export default function Toolkit() {
  return (
    <Section
      id="toolkit"
      index="05"
      title="Toolkit"
      note="The tools I reach for, grouped by the job they do. Technology is a means, not a personality."
    >
      <div className="border-t border-line">
        {GROUPS.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[138px_minmax(0,1fr)] sm:gap-6"
          >
            <h3 className="label-mono pt-0.5">{group.label}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
