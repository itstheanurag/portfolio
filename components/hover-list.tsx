"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function HoverList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [rect, setRect] = useState({ top: 0, height: 0 });
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);
  const visibleRef = useRef(false);
  const currentRow = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const observer = container
      ? new ResizeObserver(() => {
          const row = currentRow.current;
          if (!row) return;

          setRect({ top: row.offsetTop, height: row.offsetHeight });
        })
      : null;

    if (container && observer) observer.observe(container);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      observer?.disconnect();
    };
  }, []);

  function handleMouseOver(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const row = target.closest<HTMLElement>("[data-hover-row]");
    if (!row || row === currentRow.current) return;

    currentRow.current = row;
    setRect({ top: row.offsetTop, height: row.offsetHeight });

    if (!visibleRef.current) {
      visibleRef.current = true;
      setInstant(true);
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        frame.current = requestAnimationFrame(() => setInstant(false));
      });
    }

    setVisible(true);
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative isolate", className)}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => {
        currentRow.current = null;
        visibleRef.current = false;
        setVisible(false);
      }}
    >
      <div
        aria-hidden
        data-instant={instant ? "true" : undefined}
        className="row-follower"
        style={{
          height: rect.height,
          transform: `translateY(${rect.top}px)`,
          opacity: visible ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}
