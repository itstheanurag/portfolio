import Parser from "rss-parser";

const parser = new Parser();

// // Simple in-memory cache
// let cachedPosts: any[] = [];
// let cacheTime = 0;
// const CACHE_DURATION = 1000 * 60 * 10; // 10 minutes

export async function GET() {
  try {
    const res = await fetch("https://medium.com/feed/@codecript", {
      next: { revalidate: 600 },
    });
    const text = await res.text();

    const feed = await parser.parseString(text);
    const posts = feed.items.map((item) => ({
      title: item.title || "",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      originalContent: item["content:encoded"] || "",
      contentSnippet:
        item.contentSnippet || item["content:encodedSnippet"] || "",
      creator: item.creator || "Unknown",
      category: item.categories || [],
    }));

    return new Response(JSON.stringify({ posts }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Medium posts" }),
      {
        status: 500,
      }
    );
  }
}
