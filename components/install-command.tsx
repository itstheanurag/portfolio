"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access can be denied; the command is still readable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy install command: ${command}`}
      className="group inline-flex max-w-full items-center gap-2 overflow-hidden rounded-[3px] border border-line bg-raised px-3 py-1.5 text-left font-mono text-[11px] text-muted shadow-sm transition-colors hover:border-line-strong hover:text-ink"
    >
      <span className="text-faint">$</span>
      <span className="truncate">{command}</span>
      {copied ? (
        <Check className="size-3 shrink-0 text-accent" />
      ) : (
        <Copy className="size-3 shrink-0 text-faint transition-colors group-hover:text-ink" />
      )}
    </button>
  );
}
