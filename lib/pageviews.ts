const TOKEN = process.env.VERCEL_TOKEN?.trim();
const PROJECT_ID = process.env.VERCEL_PROJECT_ID?.trim();
const TEAM_ID = process.env.VERCEL_TEAM_ID?.trim();

interface CountResponse {
  data?: {
    pageviews?: number;
  };
}

const CACHE_TTL = 5 * 60 * 1000;
let cache: { value: number; expiresAt: number } | null = null;

export function isPageViewCounterConfigured() {
  return Boolean(TOKEN && PROJECT_ID);
}

export async function getPageViews(): Promise<number | null> {
  if (!TOKEN || !PROJECT_ID) return null;
  if (cache && cache.expiresAt > Date.now()) return cache.value;

  try {
    const params = new URLSearchParams({ projectId: PROJECT_ID });
    if (TEAM_ID) params.set("teamId", TEAM_ID);

    const response = await fetch(
      `https://api.vercel.com/v1/query/web-analytics/visits/count?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        next: { revalidate: 300 },
      },
    );

    if (!response.ok) {
      throw new Error(`Vercel Analytics request failed with ${response.status}`);
    }

    const data = (await response.json()) as CountResponse;
    const pageviews = data.data?.pageviews;

    if (typeof pageviews !== "number" || !Number.isFinite(pageviews)) {
      return cache?.value ?? null;
    }

    const value = Math.max(0, Math.floor(pageviews));
    cache = { value, expiresAt: Date.now() + CACHE_TTL };
    return value;
  } catch (error) {
    console.error("[pageviews] Could not read Vercel Analytics:", error);
    return cache?.value ?? null;
  }
}
