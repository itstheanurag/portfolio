import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@codecript");

    const posts = feed.items.map((item) => ({
      title: item.title || "",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      originalContent: item["content:encoded"] || "",
      contentSnippet: item.contentSnippet || item["content:encodedSnippet"],
      creator: item.creator,
      category: item.categories,
    }));

    console.log(posts.length)
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Medium posts" }),
      { status: 500 }
    );
  }
}
