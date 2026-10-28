import Image from "next/image";
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
            className="grid gap-4 border-b border-line py-7 last:border-b-0 sm:grid-cols-[132px_minmax(0,1fr)] sm:gap-6"
          >
            <div>
              <p className="font-mono text-[10px] leading-relaxed tracking-[0.04em] text-muted">
                {experience.period}
              </p>
              <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
                {experience.location}
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex items-start gap-3">
                {experience.logo ? (
                  <span className="mt-0.5 block size-9 shrink-0 overflow-hidden border border-line bg-white">
                    <Image
                      src={experience.logo}
                      alt=""
                      width={72}
                      height={72}
                      className="size-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-line font-serif text-base">
                    {experience.company.charAt(0)}
                  </span>
                )}

                <div>
                  <h3 className="font-serif text-[20px] leading-tight tracking-[-0.01em] text-ink">
                    {experience.company}
                  </h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    {experience.role}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {experience.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] leading-[1.7] text-muted"
                  >
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {experience.details.length > 0 && (
                <details className="group/details mt-3">
                  <summary className="inline-flex list-none items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                    Full responsibilities
                    <span
                      aria-hidden
                      className="text-[12px] transition-transform duration-200 group-open/details:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="mt-2.5 space-y-1.5 border-l border-line pl-3.5">
                    {experience.details.map((item) => (
                      <li
                        key={item}
                        className="text-[12px] leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              {experience.skills && (
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {experience.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint"
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
