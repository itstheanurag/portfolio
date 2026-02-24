import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Badge } from "./ui/badge";
import { BsArrowUpRight } from "react-icons/bs";
import { SectionHeader } from "./section-header";

export default function MediumBlogs() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section id="blogs" className="max-w-4xl mx-auto px-6 py-8">
      <SectionHeader title="Latest Blogs" />

      <div className="grid gap-4">
        {posts.map((post, idx) => (
          <Link
            key={idx}
            href={`/blog/${post.slug}`}
            className="group block p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors line-clamp-2 sm:line-clamp-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge
                    variant="neutral"
                    className="rounded-md text-[10px] h-5 px-1.5 font-normal"
                  >
                    Anurag
                  </Badge>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 sm:line-clamp-2 leading-relaxed">
                {post.snippet}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                {post.category?.slice(0, 4).map((cat: string, i: number) => (
                  <Badge
                    variant="neutral"
                    className="rounded-md text-neutral-600 dark:text-neutral-400"
                    key={i}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-neutral-500 text-sm text-center">
            No posts found.
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <span>View all posts</span>
          <BsArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
