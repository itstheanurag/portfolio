"use client";

import { useEffect } from "react";

/**
 * Browsers can leave a link or button focused after a pointer click, which
 * makes the :focus-visible ring linger around it. Keyboard activation still
 * keeps focus and its visible indicator; pointer activation clears it.
 */
export default function PointerFocusReset() {
  useEffect(() => {
    const resetFocus = (event: MouseEvent) => {
      // Keyboard-triggered clicks have detail === 0; leave those alone.
      if (event.detail === 0) return;

      const target = (event.target as Element | null)?.closest(
        "a, button, summary",
      );
      if (!target) return;

      window.setTimeout(() => {
        (target as HTMLElement).blur();
      }, 0);
    };

    document.addEventListener("click", resetFocus, true);
    return () => document.removeEventListener("click", resetFocus, true);
  }, []);

  return null;
}
