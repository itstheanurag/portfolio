"use client";

import { useState } from "react";
import useSWR from "swr";
import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";

interface GitHubContribution {
  date: string;
  contributionCount: number;
  contributionLevel: string;
}

interface GitHubGraphProps {
  username: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function GitHubGraph({ username }: GitHubGraphProps) {
  const [selectedDay, setSelectedDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  const { data, error, isLoading } = useSWR(
    `https://github-contributions-api.deno.dev/${username}.json`,
    fetcher
  );

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

  // Flatten the weeks array and format for react-calendar-heatmap
  const values = data.contributions.flat().map((day: GitHubContribution) => ({
    date: day.date,
    count: day.contributionCount,
  }));

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setDate(today.getDate() - 365);

  return (
    <div className="w-full space-y-6">
      <div className="w-full overflow-hidden heatmap-container max-w-4xl mx-auto">
        <CalendarHeatmap
          startDate={oneYearAgo}
          endDate={today}
          values={values} 
          classForValue={(value: any) => {
            if (!value || value.count === 0) {
              return "color-empty";
            }
            if (value.count < 3) return "color-scale-1";
            if (value.count < 6) return "color-scale-2";
            if (value.count < 10) return "color-scale-3";
            return "color-scale-4";
          }}
          onClick={(value: any) => {
            if (value) {
              setSelectedDay(value);
            }
          }}
          showWeekdayLabels={false}
        />
        <style jsx global>{`
          .heatmap-container .react-calendar-heatmap rect {
            rx: 2px;
            ry: 2px;
            cursor: pointer;
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
        `}</style>
      </div>

      {selectedDay && (
        <div className="flex items-center justify-center gap-3 py-2 px-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 text-xs animate-in fade-in slide-in-from-bottom-1 duration-300">
          <span className="font-medium text-orange-800 dark:text-orange-300">
            {new Date(selectedDay.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="w-1 h-1 rounded-full bg-orange-300 dark:bg-orange-700" />
          <span className="text-neutral-600 dark:text-neutral-400">
            {selectedDay.count} contribution{selectedDay.count !== 1 ? "s" : ""}
          </span>
          <button
            onClick={() => setSelectedDay(null)}
            className="ml-2 text-orange-400 hover:text-orange-600 dark:hover:text-orange-200"
          >
            ×
          </button>
        </div>
      )}
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

      <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/20 dark:bg-neutral-900/20 backdrop-blur-sm shadow-sm transition-all duration-300">
        <GitHubGraph username={username} />
        <div className="flex justify-end items-center gap-2 mt-4 text-[9px] text-neutral-500 dark:text-neutral-400 font-medium">
          <span className="uppercase tracking-wider opacity-70">Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-[1.5px] bg-neutral-200 dark:bg-neutral-800/80 transition-colors"></div>
            <div className="w-2 h-2 rounded-[1.5px] bg-orange-200 dark:bg-orange-900/40 transition-colors"></div>
            <div className="w-2 h-2 rounded-[1.5px] bg-orange-400 dark:bg-orange-700/60 transition-colors"></div>
            <div className="w-2 h-2 rounded-[1.5px] bg-orange-600 dark:bg-orange-500 transition-colors"></div>
            <div className="w-2 h-2 rounded-[1.5px] bg-orange-800 dark:bg-orange-300 transition-colors"></div>
          </div>
          <span className="uppercase tracking-wider opacity-70">More</span>
        </div>
      </div>
    </section>
  );
}
