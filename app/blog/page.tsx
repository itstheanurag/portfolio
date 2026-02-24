import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog | Anurag",
  description: "Read my latest thoughts on software engineering and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
          Thoughts, learnings, and tutorials about software development and the
          tools I use.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col items-start justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-neutral-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              {post.category?.slice(0, 2).map((cat) => (
                <Badge
                  key={cat}
                  variant="neutral"
                  className="font-medium text-neutral-600"
                >
                  {cat}
                </Badge>
              ))}
            </div>
            <div className="group relative mt-3">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                {post.title}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {post.snippet}
              </p>
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-neutral-500 text-center py-10">
            No posts published yet.
          </p>
        )}
      </div>
    </section>
  );
}
