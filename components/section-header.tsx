"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const CHARS = "abcdefghijklmnopqrstuvwxyz";

interface SectionHeaderProps {
  title: string;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  title,
  className = "",
  wrapperClassName = "",
  children,
}: SectionHeaderProps) {
  const [displayText, setDisplayText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const duration = 1; // seconds
    const fps = 20;
    const totalIterations = duration * fps;
    const intervalTime = 1000 / fps;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        title
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iteration > (index / title.length) * totalIterations) {
              return title[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(title);
      }

      iteration += 1;
    }, intervalTime);

    return () => clearInterval(interval);
  }, [title]);

  useEffect(() => {
    if (isHovered) {
      const cleanup = scramble();
      return cleanup;
    } else {
      setDisplayText(title);
    }
  }, [isHovered, scramble, title]);

  return (
    <div className={cn("flex items-center gap-3 mb-8", wrapperClassName)}>
      <motion.h2
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "text-xl font-semibold text-neutral-700 dark:text-neutral-200 cursor-default inline-block mb-0",
          className,
        )}
      >
        {displayText.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="inline-block min-w-[0.5ch]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      {children}
    </div>
  );
}
