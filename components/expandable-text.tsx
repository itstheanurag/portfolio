"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function truncate(text: string, limit: number) {
  if (text.length <= limit) return text;

  const slice = text.slice(0, limit);
  const lastSpace = slice.lastIndexOf(" ");
  const clipped =
    lastSpace > limit * 0.6 ? slice.slice(0, lastSpace) : slice;

  return `${clipped.replace(/[.,;:!?—–-]\s*$/, "")}…`;
}

export default function ExpandableText({
  text,
  limit,
  className,
}: {
  text: string;
  limit?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const isLong = typeof limit === "number" && text.length > limit;
  const content = isLong && !expanded ? truncate(text, limit) : text;

  return (
    <>
      <p id={contentId} className={className}>
        {content}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors hover:text-accent"
        >
          {expanded ? "Show less" : "Show more"}
          <ChevronDown
            aria-hidden
            className={cn(
              "size-3 transition-transform duration-200",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}
    </>
  );
}
