"use client";
import { MediumPost } from "@/lib/data/blogs";
import BlogImage from "./BlobImage";
import Shimmer from "./blog-shimmer";
import Subheading from "./typography/subeading";
import Paragraph from "./typography/paragraph";
import Link from "next/link";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MediumBlogs({ count }: { count?: number }) {
  const { data, error, isLoading } = useSWR("/api/medium", fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 5 * 60 * 1000,
  });

  if (isLoading) return <Shimmer />;
  if (error) return <p>Failed to load posts</p>;

  const formattedPosts = data.posts
    .filter((post: MediumPost) =>
      /<img[^>]+src="([^">]+)"/.test(post.originalContent)
    )
    .map((post: MediumPost) => {
      const imgMatch = post.originalContent.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch![1];
      const snippet = post.contentSnippet
        ? post.contentSnippet.replace(/<[^>]+>/g, "").slice(0, 300) + "..."
        : "";
      const categories = Array.isArray(post.category)
        ? post.category
        : post.category
        ? [post.category]
        : [];
      return {
        ...post,
        thumbnail: imageUrl,
        contentSnippet: snippet,
        category: categories,
      };
    });

  const visiblePosts = count ? formattedPosts.slice(0, count) : formattedPosts;
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <Subheading className="pb-6">Medium Blog</Subheading>
      {count && (
        <Paragraph className="pb-4">
          I do like to share things on the internet and sometimes by some
          miracle they turn out interesting.
        </Paragraph>
      )}

      <>
        <div className="space-y-16">
          {visiblePosts?.map((post: MediumPost, idx: number) => (
            <div
              key={idx}
              className="group border-b border-neutral-700 pb-12 last:border-b-0 
                 px-4 sm:px-0" // <-- add horizontal padding on small screens
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Post Image */}
                  <div className="lg:col-span-5">
                    <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden">
                      <BlogImage src={post.thumbnail} alt="Image Not Found" />
                    </div>
                  </div>

                  {/* Post Details */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 mb-4 tracking-tight group-hover:text-white transition-colors">
                          {post.title}
                        </h3>
                        <Paragraph>{post.contentSnippet}</Paragraph>
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
                          {new Date(post.pubDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
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

        <div className="pt-12 border-t border-neutral-800">
          {count ? (
            <Link
              href="/blogs"
              className="inline-flex items-center text-neutral-300 hover:text-neutral-100 transition-colors group/link"
            >
              <span className="text-lg font-medium tracking-wide">
                View All Blogs
              </span>
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          ) : (
            <Link
              href="https://medium.com/@codecript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neutral-300 hover:text-neutral-100 transition-colors group/link mb-12"
            >
              <span className="text-lg font-medium tracking-wide">
                More on Medium
              </span>
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>
      </>
    </section>
  );
}
