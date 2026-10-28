import { ArrowUpRight } from "lucide-react";
import SectionDivider from "./section-divider";

export default function Contact() {
  return (
    <>
      <SectionDivider />
      <section id="contact" className="scroll-mt-24">
      <div className="px-6 py-14 sm:px-8 md:py-20 lg:px-10">
        <p className="eyebrow">07 / Contact</p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_212px] lg:gap-12">
          <div>
            <h2 className="max-w-[12ch] text-balance font-serif text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.98] tracking-[-0.03em] text-ink">
              Have something to{" "}
              <em className="italic text-accent">build</em>?
            </h2>

            <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.75] text-muted">
              I&apos;m open to full-time backend roles and select freelance
              work. Tell me what you&apos;re building and what keeps breaking —
              I&apos;ll reply within a day.
            </p>

            <a
              href="mailto:gauravanurag36@gmail.com?subject=Let%27s%20build%20something"
              className="group mt-8 inline-flex max-w-full items-start gap-2 border-b border-line-strong pb-1.5 font-serif text-[clamp(1.05rem,3.8vw,1.9rem)] leading-tight tracking-[-0.02em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <span className="break-all">gauravanurag36@gmail.com</span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/gaurav-resume.pdf"
                download="gaurav-resume.pdf"
                className="btn btn-outline btn-sm"
              >
                Download CV ↓
              </a>
              <a
                href="https://x.com/itstheanurag"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm group"
              >
                DM on X
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <dl className="border-t border-line">
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
              <dt className="eyebrow">Availability</dt>
              <dd className="label-mono text-ink">
                Full-time / freelance
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
              <dt className="eyebrow">Timezone</dt>
              <dd className="label-mono text-ink">IST · UTC+5:30</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
              <dt className="eyebrow">Reply</dt>
              <dd className="label-mono text-ink">Within a day</dd>
            </div>
          </dl>
        </div>
      </div>
      </section>
    </>
  );
}
