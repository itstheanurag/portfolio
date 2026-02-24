import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  snippet: string;
  category: string[];
}

export function getPostSlugs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  return fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: {
      title: data.title || "Untitled",
      date: data.date || "",
      snippet: data.snippet || "",
      category: data.category || [],
    } as Omit<BlogPost, "slug">,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const { meta } = getPostBySlug(slug);
      return {
        slug: slug.replace(/\.mdx$/, ""),
        ...meta,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
