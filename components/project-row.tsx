import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ExpandableText from "./expandable-text";

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
  descriptionLimit?: number;
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
  descriptionLimit,
}: ProjectRowProps) {
  const primaryLink = links?.[0]?.href;

  return (
    <article
      data-hover-row
      className="project-row group relative z-10 -mx-4 grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-line px-4 py-6 last:border-b-0 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-x-5"
    >
      <div className="mt-0.5">
        {image ? (
          <span className="thumb block size-10 bg-white sm:size-12">
            <Image
              src={image}
              alt=""
              width={96}
              height={96}
              className="size-full object-contain p-0.5"
            />
          </span>
        ) : (
          <span className="thumb flex size-10 items-center justify-center bg-raised font-serif text-lg text-accent sm:size-12 sm:text-xl">
            {name.charAt(0)}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[21px] leading-tight tracking-[-0.015em] text-ink transition-colors duration-200 group-hover:text-accent">
            {primaryLink ? (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <span className="eyebrow text-muted">
            {meta}
          </span>
          {note && (
            <span className="eyebrow border border-line px-2 py-0.5 text-[10px] text-faint">
              {note}
            </span>
          )}
        </div>

        <ExpandableText
          text={description}
          limit={descriptionLimit}
          className="mt-1.5 max-w-[62ch] text-[13px] leading-[1.7] text-muted"
        />

        {tech && tech.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {tech.slice(0, 5).map((item) => (
              <li
                key={item}
                className="chip"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {details && details.length > 0 && (
          <details className="group/notes mt-2.5">
            <summary className="inline-flex list-none items-center gap-1.5 text-[12.5px] font-medium text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
              Engineering notes
              <span
                aria-hidden
                className="text-[13px] transition-transform duration-200 group-open/notes:rotate-45"
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
            className="group/link inline-flex items-center gap-1 text-[12px] font-medium text-muted transition duration-200 group-hover:translate-x-0.5 hover:text-accent"
          >
            {link.label}
            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}
