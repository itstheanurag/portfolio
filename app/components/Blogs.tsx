"use client";

import { useEffect, useState } from "react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  category: string[];
  snippet: string;
  thumbnail: string;
}

export default function MediumBlogs() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();

        const formatted = data
          .filter((post: any) => {
            if (
              post.title ===
              "I Got Laid Off After 2 Years and 10 Months at a Tech Job — Here’s My Story"
            )
              return false;

            const imgMatch = post.originalContent?.match(
              /<img[^>]+src="([^">]+)"/
            );
            return !!imgMatch?.[1];
          })
          .map((post: any) => {
            const imgMatch = post.originalContent?.match(
              /<img[^>]+src="([^">]+)"/
            );
            const imageUrl = imgMatch![1];

            if (imageUrl){
              const snippet = post.contentSnippet
                ? post.contentSnippet.replace(/<[^>]+>/g, "").slice(0, 300) +
                  "..."
                : "";

              const categories = Array.isArray(post.category)
                ? post.category
                : post.category
                ? [post.category]
                : [];

              return {
                title: post.title,
                link: post.link,
                pubDate: post.pubDate,
                creator: post.creator || "Unknown",
                category: categories,
                snippet,
                thumbnail: imageUrl,
              };
            }
          })
          .slice(0, 5);

        setPosts(formatted as MediumPost[]);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const shimmer = (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse flex flex-col border-b border-gray-700 pb-6 gap-4"
        >
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="flex gap-4">
            <div className="w-48 h-32 bg-gray-700 rounded-md flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto  px-4 space-y-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">My Blog</h2>
        <p className="text-gray-400 mt-2 sm:text-base">
          I do like to share things on the internet and sometimes by some
          miracle they turn out interesting.
        </p>
      </div>

      {/* Shimmer while loading */}
      {loading ? (
        shimmer
      ) : (
        <>
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              className="block border-b border-gray-700 pb-6 transition-colors rounded-lg"
            >
              {/* Title + Author */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {post.title}
                </h3>
                <span className="text-neutral-400 ml-auto bg-neutral-900 rounded-lg px-2 py-1 text-sm sm:text-xs font:bold">
                  {post.creator}
                </span>
              </div>

              {/* Content + Image */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full md:w-48 h-32 md:h-36 object-cover rounded-md flex-shrink-0"
                />
                <p className="text-gray-400 text-sm sm:text-base line-clamp-5">
                  {post.snippet}
                </p>
              </div>

              {/* Categories + Published Date */}
              <div className="mt-4 flex flex-wrap gap-2 items-center text-xs sm:text-sm text-gray-500">
                {post.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="text-neutral-400 font-bold bg-neutral-900 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-neutral-400 ml-auto bg-neutral-900 rounded-lg px-2 py-1 text-xs sm:text-sm">
                  {new Date(post.pubDate).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}

          {/* More on Medium */}
          <div className="text-center mt-8">
            <a
              href="https://medium.com/@codecript"
              target="_blank"
              className="text-neutral-400 font-semibold hover:underline"
            >
              More on Medium →
            </a>
          </div>
        </>
      )}
    </div>
  );
}
