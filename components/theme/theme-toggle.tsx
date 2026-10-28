"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const startViewTransition = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      switchTheme();
    });

    transition.ready.then(() => {
      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    });
  };

  if (!mounted) return <div className="size-9" aria-hidden />;

  return (
    <button
      type="button"
      onClick={startViewTransition}
      className="inline-flex size-9 items-center justify-center text-muted transition-colors hover:text-ink"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? (
        <Sun className="size-[17px]" strokeWidth={1.6} />
      ) : (
        <Moon className="size-[17px]" strokeWidth={1.6} />
      )}
    </button>
  );
}
