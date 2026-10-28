"use client";

import { useEffect, useState } from "react";

interface VisitorResponse {
  count: number | null;
  configured?: boolean;
}

const SESSION_KEY = "portfolio-counted-visit";
let pendingRequest: Promise<VisitorResponse> | null = null;

function requestCount(): Promise<VisitorResponse> {
  if (pendingRequest) return pendingRequest;

  let alreadyCounted = false;
  try {
    alreadyCounted = window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    // Storage can be unavailable in private modes; count the visit anyway.
  }

  if (!alreadyCounted) {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Ignore storage failures.
    }
  }

  pendingRequest = fetch("/api/visitors", {
    method: alreadyCounted ? "GET" : "POST",
    cache: "no-store",
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return (await response.json()) as VisitorResponse;
    })
    .catch(() => {
      if (!alreadyCounted) {
        try {
          window.sessionStorage.removeItem(SESSION_KEY);
        } catch {
          // Ignore storage failures.
        }
      }
      return { count: null, configured: false } satisfies VisitorResponse;
    });

  return pendingRequest;
}

export function useVisitorCount() {
  const [count, setCount] = useState<number | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    requestCount().then((data) => {
      if (cancelled) return;
      setCount(typeof data.count === "number" ? data.count : null);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}

export function VisitorCount({
  className,
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const count = useVisitorCount();

  if (count === null) return null;

  return (
    <span className={className}>
      {showLabel && <span className="text-faint">Visits </span>}
      {count === undefined ? (
        <span
          className="inline-block h-3 w-10 animate-pulse bg-line align-middle"
          aria-label="Loading visitor count"
        />
      ) : (
        <span aria-live="polite" className="tabular-nums">
          {new Intl.NumberFormat("en-US").format(count)}
        </span>
      )}
    </span>
  );
}

export default function VisitorRow() {
  const count = useVisitorCount();

  if (count === null) return null;

  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
      <dt className="label-mono">Visits</dt>
      <dd className="font-mono text-[11px] tabular-nums text-ink">
        {count === undefined ? (
          <span
            className="inline-block h-3 w-9 animate-pulse bg-line align-middle"
            aria-label="Loading visitor count"
          />
        ) : (
          <span aria-live="polite">
            {new Intl.NumberFormat("en-US").format(count)}
          </span>
        )}
      </dd>
    </div>
  );
}
