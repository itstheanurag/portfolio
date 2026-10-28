import { cn } from "@/lib/utils";
import SectionDivider from "./section-divider";

export default function Section({
  id,
  index,
  title,
  note,
  tone = "base",
  action,
  children,
  className,
}: {
  id?: string;
  index: string;
  title: string;
  note?: string;
  tone?: "base" | "surface";
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <SectionDivider />
      <section
        id={id}
        className={cn(
          "scroll-mt-24",
          tone === "surface" && "bg-surface",
          className,
        )}
      >
      <div className="px-6 py-12 sm:px-8 md:py-16 lg:px-10">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[9px] tracking-[0.18em] text-accent">
              {index}
            </span>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.4rem)] leading-none tracking-[-0.02em] text-ink">
              {title}
            </h2>
          </div>

          {(note || action) && (
            <div className="flex flex-col gap-2 sm:items-end sm:text-right">
              {note && (
                <p className="max-w-[34ch] text-[12.5px] leading-relaxed text-muted">
                  {note}
                </p>
              )}
              {action}
            </div>
          )}
        </header>

        <div className="mt-7">{children}</div>
      </div>
      </section>
    </>
  );
}
