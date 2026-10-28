import { NextResponse } from "next/server";
import {
  getPageViews,
  isPageViewCounterConfigured,
} from "@/lib/pageviews";

export const dynamic = "force-dynamic";

export async function GET() {
  const pageviews = await getPageViews();

  return NextResponse.json(
    {
      pageviews,
      configured: isPageViewCounterConfigured(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
