"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PageViewRow from "@/components/pageviews";

const elsewhere = [
  { href: "https://github.com/itstheanurag", label: "GitHub" },
  { href: "https://linkedin.com/in/itstheanurag", label: "LinkedIn" },
  { href: "https://x.com/itstheanurag", label: "X" },
  { href: "mailto:gauravanurag36@gmail.com", label: "Email" },
];

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };

    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"} IST</span>;
}

export default function StatusRail() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 py-10 pl-6">
        <p className="eyebrow">Status</p>

        <p className="eyebrow mt-4 flex items-center gap-2 text-status">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-status opacity-40" />
            <span className="relative inline-flex size-1.5 rounded-full bg-status" />
          </span>
          Open to work
        </p>

        <dl className="mt-5 border-t border-line">
          <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
            <dt className="eyebrow">Based</dt>
            <dd className="label-mono text-ink">India</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
            <dt className="eyebrow">Local</dt>
            <dd className="label-mono text-ink">
              <LocalTime />
            </dd>
          </div>
          <PageViewRow />
        </dl>

        <p className="mt-5 text-[12.5px] leading-relaxed text-muted">
          Open to full-time backend roles and select freelance work.
        </p>

        <div className="mt-6 border-t border-line pt-4">
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-2">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between border-b border-line py-2 text-[12.5px] font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <ArrowUpRight className="size-3 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="/gaurav-resume.pdf"
          download="gaurav-resume.pdf"
          className="btn btn-outline btn-sm mt-6 w-full"
        >
          Download CV ↓
        </a>
      </div>
    </aside>
  );
}
