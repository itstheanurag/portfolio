import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { EXPERIENCES } from "@/lib/data/experience";
import Section from "./section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      tone="surface"
      note="Production work, mostly in healthcare. Small teams, real users, and systems that had to keep running."
    >
      <div>
        {EXPERIENCES.map((experience) => (
          <article
            key={experience.company}
            className="grid gap-4 border-b border-line py-7 last:border-b-0 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-6"
          >
            <div>
              <p className="label-mono text-[10.5px] leading-relaxed">
                {experience.period}
              </p>
              <p className="label-mono mt-1 uppercase text-faint">
                {experience.location}
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex items-start gap-3">
                {experience.logo ? (
                  <span className="thumb mt-0.5 block size-9 shrink-0 bg-white">
                    <Image
                      src={experience.logo}
                      alt=""
                      width={72}
                      height={72}
                      className="size-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="thumb mt-0.5 flex size-9 shrink-0 items-center justify-center bg-raised font-serif text-base">
                    {experience.company.charAt(0)}
                  </span>
                )}

                <div>
                  <h3 className="font-serif text-[20px] leading-tight tracking-[-0.01em] text-ink">
                    {experience.company}
                  </h3>
                  <p className="eyebrow mt-1.5 text-muted">
                    {experience.role}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {experience.highlights.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[12px_minmax(0,1fr)] gap-2.5 text-[13px] leading-[1.7] text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.72em] h-px w-3 bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {experience.details.length > 0 && (
                <details className="group/details mt-4">
                  <summary className="inline-flex list-none items-center gap-2 text-[12.5px] font-medium text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                    Full responsibilities
                    <span className="label-mono text-[10px] text-faint">
                      {String(experience.details.length).padStart(2, "0")}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className="size-3 text-faint transition-transform duration-200 group-open/details:rotate-180"
                    />
                  </summary>
                  <ul className="mt-3 overflow-hidden rounded-[3px] border border-line bg-base/60">
                    {experience.details.map((item, index) => (
                      <li
                        key={item}
                        className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 border-b border-line px-4 py-2.5 last:border-b-0"
                      >
                        <span className="label-mono pt-px text-[10px] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[12.5px] leading-[1.65] text-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              {experience.skills && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {experience.skills.map((skill) => (
                    <li
                      key={skill}
                      className="chip"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
