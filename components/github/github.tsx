"use client";

import { Tooltip } from "react-tooltip";
import useSWR from "swr";
import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface GitHubGraphProps {
  username: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function GitHubGraph({ username }: GitHubGraphProps) {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isYearOpen, setIsYearOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const isCurrentYear = selectedYear === currentYear;

  const { data, error, isLoading } = useSWR(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`,
    fetcher,
    isCurrentYear
      ? {
          revalidateOnFocus: true,
          revalidateOnReconnect: true,
          revalidateIfStale: true,
          dedupingInterval: 0,
          keepPreviousData: false,
        }
      : {
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          revalidateIfStale: false,
          dedupingInterval: 24 * 60 * 60 * 1000 * 30,
        }
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsYearOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-32 animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-xl" />
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-8 text-neutral-500">
        Failed to load activity data
      </div>
    );
  }

  const values = data.contributions;
  const totalContributions = data.total?.[selectedYear] || 0;

  // Generate years from 2022 to current year
  const years = Array.from(
    { length: currentYear - 2021 },
    (_, i) => currentYear - i
  );

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          {totalContributions} contributions in {selectedYear}
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsYearOpen(!isYearOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            {selectedYear}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isYearOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isYearOpen && (
            <div className="absolute right-0 top-full mt-2 w-24 p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl z-50 flex flex-col gap-0.5 overflow-hidden ring-1 ring-black/5">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsYearOpen(false);
                  }}
                  className={`w-full text-center px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    selectedYear === year
                      ? "bg-orange-500 text-white font-medium"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden heatmap-container max-w-4xl mx-auto">
        <CalendarHeatmap
          startDate={new Date(selectedYear, 0, 0)}
          endDate={new Date(selectedYear, 11, 31)}
          values={values}
          classForValue={(value: any) => {
            if (!value || value.count === 0) {
              return "color-empty";
            }
            if (value.count < 4) return "color-scale-1";
            if (value.count < 8) return "color-scale-2";
            if (value.count < 12) return "color-scale-3";
            if (value.count < 16) return "color-scale-4";
            return "color-scale-5";
          }}
          tooltipDataAttrs={(value: any) => {
            if (!value || !value.date) {
              return {} as any;
            }
            const date = new Date(value.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            return {
              "data-tooltip-id": "github-tooltip",
              "data-tooltip-content": `${date}: ${value.count} contribution${
                value.count !== 1 ? "s" : ""
              }`,
            } as any;
          }}
          showWeekdayLabels={false}
        />
        <Tooltip
          id="github-tooltip"
          style={{
            backgroundColor: "rgb(23 23 23)",
            color: "rgb(250 250 250)",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <style jsx global>{`
          .heatmap-container .react-calendar-heatmap rect {
            rx: 2px;
            ry: 2px;
            transition: opacity 0.2s ease;
          }
          .heatmap-container .react-calendar-heatmap rect:hover {
            opacity: 0.7;
          }
          .heatmap-container .react-calendar-heatmap .color-empty {
            fill: var(--heatmap-empty);
          }
          .heatmap-container .react-calendar-heatmap .color-scale-1 {
            fill: var(--heatmap-scale-1);
          }
          .heatmap-container .react-calendar-heatmap .color-scale-2 {
            fill: var(--heatmap-scale-2);
          }
          .heatmap-container .react-calendar-heatmap .color-scale-3 {
            fill: var(--heatmap-scale-3);
          }
          .heatmap-container .react-calendar-heatmap .color-scale-4 {
            fill: var(--heatmap-scale-4);
          }
          .heatmap-container .react-calendar-heatmap .color-scale-5 {
            fill: var(--heatmap-scale-5);
          }
        `}</style>
      </div>
    </div>
  );
}

export default function GithubProfiles({ username }: { username: string }) {
  return (
    <section id="github" className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Featured GitHub Activity
          </h2>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-[10px] font-medium text-orange-700 dark:text-orange-400 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Live
          </span>
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          Activity
        </div>
      </div>

      <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/20 dark:bg-neutral-900/20 backdrop-blur-sm transition-all duration-300">
        <GitHubGraph username={username} />
        <div className="flex justify-end items-center gap-2 mt-4 text-[9px] text-neutral-500 dark:text-neutral-400 font-medium">
          <span className="uppercase tracking-wider opacity-70">Less</span>
          <div className="flex gap-1">
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-empty)" }}
            />
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-scale-1)" }}
            />
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-scale-2)" }}
            />
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-scale-3)" }}
            />
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-scale-4)" }}
            />
            <div
              className="w-2 h-2 rounded-[1.5px]"
              style={{ backgroundColor: "var(--heatmap-scale-5)" }}
            />
          </div>

          <span className="uppercase tracking-wider opacity-70">More</span>
        </div>
      </div>
    </section>
  );
}
