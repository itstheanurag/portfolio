import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return getPostSlugs().map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const params = await props.params;
    const { meta } = getPostBySlug(params.slug);
    return {
      title: `${meta.title} | Anurag's Blog`,
      description: meta.snippet,
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-24">
      <div className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-4">
          {post.meta.title}
        </h1>
        <div className="flex items-center gap-x-4 text-sm text-neutral-500">
          <time dateTime={post.meta.date}>
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {post.meta.category?.map((cat) => (
            <Badge key={cat} variant="neutral" className="font-medium">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl 
          prose-a:text-blue-600 hover:prose-a:text-blue-500 dark:prose-a:text-blue-400
          prose-p:leading-relaxed prose-li:marker:text-neutral-400"
      >
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
