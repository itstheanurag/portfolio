const GIST_ID = process.env.VISITORS_GIST_ID?.trim();
const GIST_TOKEN = process.env.VISITORS_GIST_TOKEN?.trim();
const FILE_NAME = process.env.VISITORS_GIST_FILE?.trim() || "visitors.json";
const COUNTER_BASE = "https://abacus.jasoncameron.dev";
const COUNTER_NAMESPACE =
  process.env.VISITORS_COUNTER_NAMESPACE?.trim() || "itsanurag-portfolio";
const COUNTER_KEY = process.env.VISITORS_COUNTER_KEY?.trim() || "visits";

interface VisitorFile {
  count?: number;
  since?: string;
  updatedAt?: string;
}

interface GistResponse {
  files?: Record<string, { content?: string }>;
}

export function isVisitorCounterConfigured() {
  return Boolean(GIST_ID && GIST_TOKEN) || COUNTER_KEY.length > 0;
}

async function publicCounter(mode: "get" | "hit"): Promise<number> {
  const response = await fetch(
    `${COUNTER_BASE}/${mode}/${encodeURIComponent(
      COUNTER_NAMESPACE,
    )}/${encodeURIComponent(COUNTER_KEY)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Counter request failed with ${response.status}`);
  }

  const data = (await response.json()) as { value?: number };
  if (typeof data.value !== "number") {
    throw new Error("Counter response did not include a value");
  }

  return data.value;
}

async function github(path: string, init?: RequestInit) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GIST_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "itsanurag-portfolio-visitors",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with ${response.status}`);
  }

  return response;
}

function parseVisitorFile(raw: string | undefined): VisitorFile {
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw) as VisitorFile;
    return {
      count:
        typeof parsed.count === "number" && Number.isFinite(parsed.count)
          ? Math.max(0, Math.floor(parsed.count))
          : 0,
      since: parsed.since,
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return { count: 0 };
  }
}

async function readVisitorFile(): Promise<VisitorFile> {
  if (!GIST_ID) throw new Error("VISITORS_GIST_ID is not set");

  const response = await github(`/gists/${GIST_ID}`);
  const gist = (await response.json()) as GistResponse;

  return parseVisitorFile(gist.files?.[FILE_NAME]?.content);
}

async function writeVisitorFile(data: VisitorFile) {
  if (!GIST_ID) throw new Error("VISITORS_GIST_ID is not set");

  await github(`/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: {
        [FILE_NAME]: {
          content: `${JSON.stringify(data, null, 2)}\n`,
        },
      },
    }),
  });
}

export async function getVisitorCount(): Promise<number | null> {
  if (!isVisitorCounterConfigured()) return null;

  try {
    if (GIST_ID && GIST_TOKEN) {
      const data = await readVisitorFile();
      return data.count ?? 0;
    }

    return await publicCounter("get");
  } catch (error) {
    console.error("[visitors] Could not read the visitor count:", error);
    return null;
  }
}

/**
 * GitHub Gists do not offer atomic increments, so writes are serialized per
 * server instance. Two requests hitting different instances at the same
 * instant can still occasionally read the same value. For a portfolio counter
 * that is an acceptable trade-off; the store stays durable across deploys.
 */
let writeQueue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(task, task);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export async function incrementVisitorCount(): Promise<number | null> {
  if (!isVisitorCounterConfigured()) return null;

  try {
    if (!GIST_ID || !GIST_TOKEN) {
      return await publicCounter("hit");
    }

    return await enqueue(async () => {
      const previous = await readVisitorFile();
      const count = (previous.count ?? 0) + 1;
      const next: VisitorFile = {
        ...previous,
        count,
        updatedAt: new Date().toISOString(),
      };

      await writeVisitorFile(next);
      return count;
    });
  } catch (error) {
    console.error("[visitors] Could not update the visitor count:", error);
    return null;
  }
}
