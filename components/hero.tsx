import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Typewriter from "./typewriter";

const ROLES = [
  "Backend developer",
  "Software engineer",
  "Content creator",
  "Open-source builder",
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14 lg:px-10">
        <div className="flex items-center gap-3.5 border-b border-line pb-6">
          <span className="block size-11 shrink-0 overflow-hidden border border-line-strong bg-raised">
            <Image
              src="/icon.png"
              alt="Portrait illustration of Gaurav Kumar"
              width={88}
              height={88}
              priority
              className="size-full object-cover"
            />
          </span>
          <div>
            <p className="font-serif text-[19px] leading-none tracking-[-0.01em]">
              Gaurav Kumar
            </p>
            <p className="label-mono mt-1.5 flex items-baseline">
              <Typewriter
                words={ROLES}
                className="min-w-[8.5rem] text-muted sm:min-w-[9rem]"
              />
            </p>
          </div>

          <p className="ml-auto hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-status sm:flex xl:hidden">
            <span className="size-1.5 rounded-full bg-status" />
            Open to work
          </p>
        </div>

        <h1
          className="rise-in mt-10 max-w-[18ch] text-balance font-serif text-[clamp(2.65rem,6.8vw,4.9rem)] font-normal leading-[0.98] tracking-[-0.035em] text-ink"
          style={{ animationDelay: "40ms" }}
        >
          I build the parts you{" "}
          <em className="italic text-accent">never notice</em>.
        </h1>

        <p
          className="rise-in mt-6 max-w-[58ch] text-[15.5px] leading-[1.75] text-muted"
          style={{ animationDelay: "110ms" }}
        >
          For three years I&apos;ve shipped APIs, data models, and
          infrastructure for healthcare products used by hospitals,
          universities, and clinics. I care about systems that are correct,
          easy to operate, and quiet in production.
        </p>

        <div
          className="rise-in mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-accent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-fg transition-colors hover:bg-accent-strong"
          >
            Selected work
            <ArrowDownRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="/gaurav-resume.pdf"
            download="gaurav-resume.pdf"
            className="group inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
            <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div
          className="rise-in mt-10 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "250ms" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            NestJS / PostgreSQL / TypeScript / Go
          </p>
          <p className="label-mono text-muted">
            Open to backend roles &amp; select freelance work
          </p>
        </div>
      </div>
    </section>
  );
}
