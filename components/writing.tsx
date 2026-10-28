"use client";

import useSWR from "swr";
import { ArrowUpRight } from "lucide-react";
import Section from "./section";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

interface MediumResponse {
  posts: MediumPost[];
}

export default function Writing() {
  const { data, error, isLoading } = useSWR<MediumResponse>(
    "/api/medium",
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 5 * 60 * 1000,
    },
  );

  const posts = (data?.posts ?? []).slice(0, 4);

  return (
    <Section
      id="writing"
      index="06"
      title="Writing"
      note="Occasional notes on backend systems, tooling, and the things I break while learning."
      action={
        <a
          href="https://medium.com/@codecript"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
        >
          Medium
          <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      }
    >
      {isLoading ? (
        <div className="border-t border-line" aria-hidden>
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between gap-6 border-b border-line py-5"
            >
              <div className="w-full max-w-md space-y-2">
                <div className="h-4 w-3/4 animate-pulse bg-line" />
                <div className="h-2.5 w-1/2 animate-pulse bg-line/70" />
              </div>
              <div className="h-2.5 w-14 animate-pulse bg-line" />
            </div>
          ))}
        </div>
      ) : error || posts.length === 0 ? (
        <p className="border-t border-line py-5 text-[13px] text-muted">
          The feed is unavailable right now.{" "}
          <a
            href="https://medium.com/@codecript"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Read the posts on Medium
          </a>
          .
        </p>
      ) : (
        <div className="border-t border-line">
          {posts.map((post) => {
            const snippet = post.contentSnippet
              ? post.contentSnippet.replace(/<[^>]+>/g, "").slice(0, 170)
              : "";

            return (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1.5 border-b border-line py-4 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-[18px] leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  {snippet && (
                    <p className="mt-1 line-clamp-2 max-w-[70ch] text-[12px] leading-relaxed text-muted">
                      {snippet}
                    </p>
                  )}
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </Section>
  );
}
