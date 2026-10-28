import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLink {
  href: string;
  label: string;
}

interface ProjectRowProps {
  name: string;
  meta: string;
  description: string;
  image?: string;
  tech?: string[];
  links?: ProjectLink[];
  details?: string[];
  note?: string;
}

export default function ProjectRow({
  name,
  meta,
  description,
  image,
  tech,
  links,
  details,
  note,
}: ProjectRowProps) {
  const primaryLink = links?.[0]?.href;

  return (
    <article className="group -mx-3 grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-line px-3 py-6 transition-colors hover:bg-surface sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-x-5">
      <div className="mt-0.5">
        {image ? (
          <span className="block size-10 overflow-hidden border border-line bg-white sm:size-12">
            <Image
              src={image}
              alt=""
              width={96}
              height={96}
              className="size-full object-contain p-0.5"
            />
          </span>
        ) : (
          <span className="flex size-10 items-center justify-center border border-line bg-raised font-serif text-lg text-accent sm:size-12 sm:text-xl">
            {name.charAt(0)}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[21px] leading-tight tracking-[-0.015em] text-ink">
            {primaryLink ? (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors group-hover:text-accent"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            {meta}
          </span>
          {note && (
            <span className="border border-line px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
              {note}
            </span>
          )}
        </div>

        <p className="mt-1.5 max-w-[62ch] text-[13px] leading-[1.7] text-muted">
          {description}
        </p>

        {tech && tech.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
            {tech.slice(0, 5).map((item) => (
              <li
                key={item}
                className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-faint"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {details && details.length > 0 && (
          <details className="group/notes mt-2.5">
            <summary className="inline-flex list-none items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
              Engineering notes
              <span
                aria-hidden
                className="text-[12px] transition-transform duration-200 group-open/notes:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="mt-2 space-y-1.5 border-l border-line pl-3.5">
              {details.map((item) => (
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
      </div>

      <div className="col-span-2 flex flex-wrap items-center gap-x-4 gap-y-1 sm:col-span-1 sm:flex-col sm:items-end sm:gap-1.5 sm:self-center">
        {links?.map((link) => (
          <a
            key={`${link.href}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group/link inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent",
            )}
          >
            {link.label}
            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}
