"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Typewriter({
  words,
  className,
  typingSpeed = 55,
  deletingSpeed = 28,
  holdTime = 1900,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0] ?? "");
      return;
    }

    const word = words[wordIndex % words.length] ?? "";
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === word) delay = holdTime;
    else if (deleting && text === "") delay = 300;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText(
        deleting
          ? word.slice(0, Math.max(0, text.length - 1))
          : word.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, deletingSpeed, holdTime, text, typingSpeed, wordIndex, words]);

  return (
    <span
      className={cn("inline-flex items-baseline", className)}
      aria-label={words.join(", ")}
    >
      <span aria-hidden>{text}</span>
      <span
        aria-hidden
        className="typewriter-cursor ml-0.5 inline-block h-[0.95em] w-px translate-y-[0.08em] bg-accent"
      />
    </span>
  );
}
