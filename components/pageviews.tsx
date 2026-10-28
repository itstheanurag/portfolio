"use client";

import { useEffect, useState } from "react";

interface PageViewResponse {
  pageviews: number | null;
  configured?: boolean;
}

let pendingRequest: Promise<PageViewResponse> | null = null;

function requestPageViews(): Promise<PageViewResponse> {
  if (pendingRequest) return pendingRequest;

  pendingRequest = fetch("/api/pageviews", { cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return (await response.json()) as PageViewResponse;
    })
    .catch(() => ({ pageviews: null, configured: false }));

  return pendingRequest;
}

export function usePageViews() {
  const [pageviews, setPageviews] = useState<number | null | undefined>(
    undefined,
  );

  useEffect(() => {
    let cancelled = false;

    requestPageViews().then((data) => {
      if (cancelled) return;
      setPageviews(typeof data.pageviews === "number" ? data.pageviews : null);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return pageviews;
}

export function PageViewCount({
  className,
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const pageviews = usePageViews();

  if (pageviews === null) return null;

  return (
    <span className={className}>
      {showLabel && <span className="text-faint">Page views </span>}
      {pageviews === undefined ? (
        <span
          className="inline-block h-3 w-10 animate-pulse bg-line align-middle"
          aria-label="Loading page view count"
        />
      ) : (
        <span aria-live="polite" className="tabular-nums">
          {new Intl.NumberFormat("en-US").format(pageviews)}
        </span>
      )}
    </span>
  );
}

export default function PageViewRow() {
  const pageviews = usePageViews();

  if (pageviews === null) return null;

  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
      <dt className="label-mono">Page views</dt>
      <dd className="font-mono text-[11px] tabular-nums text-ink">
        {pageviews === undefined ? (
          <span
            className="inline-block h-3 w-9 animate-pulse bg-line align-middle"
            aria-label="Loading page view count"
          />
        ) : (
          <span aria-live="polite">
            {new Intl.NumberFormat("en-US").format(pageviews)}
          </span>
        )}
      </dd>
    </div>
  );
}
