import { GithubContribution } from "./types/works";

const GITHUB_USERNAME = "itstheanurag";

export async function getGithubActivity(): Promise<GithubContribution[]> {
  try {
    const response = await fetch(
      `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+is:pr+is:public+-user:${GITHUB_USERNAME}&sort=created&order=desc&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 7200 }, // Cache for 2 hours
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub activity");
    }

    const data = await response.json();

    return data.items.map((item: any) => ({
      id: item.node_id,
      type: item.pull_request ? "PullRequest" : "Issue",
      title: item.title,
      repo: item.repository_url.split("/").slice(-2).join("/"),
      url: item.html_url,
      date: item.created_at,
      status:
        item.state === "open"
          ? "open"
          : item.pull_request && item.state === "closed"
          ? "merged"
          : "closed",
    }));
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return [];
  }
}
