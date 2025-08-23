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
              "I Got Laid Off After 2 Years and 10 Months at a Tech Job — Here's My Story"
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
          .slice(0, 4);

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
    <div className="space-y-16">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="group border-b border-neutral-800 pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="aspect-video bg-neutral-900 rounded-sm animate-pulse"></div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="h-8 bg-neutral-800 rounded animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-neutral-800 rounded animate-pulse"></div>
                  <div className="h-5 bg-neutral-800 rounded w-4/5 animate-pulse"></div>
                  <div className="h-5 bg-neutral-800 rounded w-3/5 animate-pulse"></div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-6 w-16 bg-neutral-800 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-neutral-800 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-4 text-left tracking-tight">
        My Blog
      </h2>
      <p className="text-lg text-neutral-400 mb-16 leading-relaxed max-w-2xl">
        I do like to share things on the internet and sometimes by some
        miracle they turn out interesting.
      </p>

      {loading ? (
        shimmer
      ) : (
        <>
          <div className="space-y-16">
            {posts?.map((post, idx) => (
              <div
                key={idx}
                className="group border-b border-neutral-800 pb-12 last:border-b-0"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
                    {/* Post Image */}
                    <div className="lg:col-span-5">
                      <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                      </div>
                    </div>
                    
                    {/* Post Details */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 mb-4 tracking-tight group-hover:text-white transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-lg text-neutral-400 leading-relaxed">
                            {post.snippet}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                          {post.category.map((cat, i) => (
                            <span
                              key={i}
                              className="text-sm text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full hover:border-neutral-600 hover:text-neutral-400 transition-colors"
                            >
                              {cat}
                            </span>
                          ))}
                          <span className="text-sm text-neutral-300 bg-neutral-800 px-3 py-1 rounded-full font-medium">
                            by {post.creator}
                          </span>
                          <span className="text-sm text-neutral-500 ml-auto">
                            {new Date(post.pubDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* More on Medium */}
          <div className="pt-12 mt-16 border-t border-neutral-800">
            <a
              href="https://medium.com/@codecript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neutral-300 hover:text-neutral-100 transition-colors group/link"
            >
              <span className="text-lg font-medium tracking-wide">More on Medium</span>
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </>
      )}
    </section>
  );
}