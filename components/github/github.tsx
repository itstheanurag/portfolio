"use client";

import useSWR from "swr";
import CalendarHeatmap, {
  ReactCalendarHeatmapValue,
} from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import "react-calendar-heatmap/dist/styles.css";

interface ContributionItem extends ReactCalendarHeatmapValue<string> {
  date: string;
  count: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GithubActivity({ username }: { username: string }) {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [isYearOpen, setIsYearOpen] = useState(false);
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isYearOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setIsYearOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsYearOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isYearOpen]);

  const { data, error, isLoading } = useSWR(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      dedupingInterval: 3600000,
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return (
      <div className="h-36 animate-pulse rounded-sm border border-line bg-raised" />
    );
  }

  if (error || !data) {
    return (
      <p className="border-y border-line py-6 text-sm text-muted">
        Activity data is unavailable right now.{" "}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-line-strong text-ink hover:border-ink"
        >
          View the profile on GitHub
        </a>
        .
      </p>
    );
  }

  const values: ContributionItem[] = data.contributions || [];
  const totalContributions = data.total?.[selectedYear] || 0;

  const years = Object.keys(data.total || {})
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-3">
        <p className="font-mono text-[11px] tracking-[0.03em] text-muted">
          <span className="text-ink">
            {new Intl.NumberFormat("en-US").format(totalContributions)}
          </span>{" "}
          contributions in {selectedYear}
        </p>

        <div className="relative" ref={yearRef}>
          <button
            type="button"
            onClick={() => setIsYearOpen((value) => !value)}
            aria-haspopup="listbox"
            aria-expanded={isYearOpen}
            aria-label={`Select contribution year, currently ${selectedYear}`}
            className="flex cursor-pointer items-center gap-2 border border-line bg-raised px-2.5 py-1.5 font-mono text-[10px] text-ink transition-colors hover:border-line-strong"
          >
            <span className="label-mono">Year</span>
            <span className="tabular-nums">{selectedYear}</span>
            <ChevronDown
              className={cn(
                "size-3 text-faint transition-transform duration-200",
                isYearOpen && "rotate-180",
              )}
            />
          </button>

          {isYearOpen && (
            <ul
              role="listbox"
              aria-label="Contribution year"
              className="absolute right-0 top-full z-30 mt-1 min-w-[108px] border border-line bg-raised py-1 shadow-2xl shadow-black/40"
            >
              {years.map((year) => {
                const isSelected = year === selectedYear;

                return (
                  <li key={year} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedYear(year);
                        setIsYearOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 px-3 py-1.5 text-left font-mono text-[10px] tabular-nums transition-colors",
                        isSelected
                          ? "bg-accent-soft text-accent"
                          : "text-muted hover:bg-surface hover:text-ink",
                      )}
                    >
                      {year}
                      {isSelected && <Check className="size-3" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="heatmap-container mt-6 overflow-x-auto">
        <div className="w-full max-w-[760px]">
          <CalendarHeatmap<string>
            startDate={new Date(selectedYear, 0, 0)}
            endDate={new Date(selectedYear, 11, 31)}
            values={values}
            classForValue={(value?: ReactCalendarHeatmapValue<string>) => {
              if (!value || !value.count) return "color-empty";
              if (value.count < 4) return "color-scale-1";
              if (value.count < 8) return "color-scale-2";
              if (value.count < 12) return "color-scale-3";
              if (value.count < 16) return "color-scale-4";
              return "color-scale-5";
            }}
            tooltipDataAttrs={
              ((value?: ReactCalendarHeatmapValue<string>) => {
                if (!value || !value.date) {
                  return {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": "",
                  };
                }

                const date = new Date(value.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return {
                  "data-tooltip-id": "github-tooltip",
                  "data-tooltip-content": `${date}: ${value.count ?? 0} contribution${
                    value.count !== 1 ? "s" : ""
                  }`,
                };
              }) as (
                value?: ReactCalendarHeatmapValue<string>,
              ) => Record<string, string>
            }
            showWeekdayLabels={false}
          />

          <Tooltip
            id="github-tooltip"
            style={{
              backgroundColor: "#152019",
              color: "#f1efe7",
              padding: "6px 10px",
              borderRadius: "3px",
              fontSize: "11px",
              fontFamily: "var(--font-ibm-mono)",
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
        <span>Less</span>
        <div className="flex gap-1">
          {[
            "--heatmap-empty",
            "--heatmap-scale-1",
            "--heatmap-scale-2",
            "--heatmap-scale-3",
            "--heatmap-scale-4",
            "--heatmap-scale-5",
          ].map((token) => (
            <span
              key={token}
              className="size-2 rounded-[1px]"
              style={{ backgroundColor: `var(${token})` }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
