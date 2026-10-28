import { NextRequest, NextResponse } from "next/server";
import {
  getVisitorCount,
  incrementVisitorCount,
  isVisitorCounterConfigured,
} from "@/lib/visitors";

export const dynamic = "force-dynamic";

const NO_STORE = {
  "Cache-Control": "no-store, max-age=0",
};

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const originUrl = new URL(origin);
    const host = request.headers.get("host");

    if (host && originUrl.host === host) return true;

    if (
      process.env.NODE_ENV !== "production" &&
      (originUrl.hostname === "localhost" ||
        originUrl.hostname === "127.0.0.1")
    ) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

function response(count: number | null, configured: boolean) {
  return NextResponse.json({ count, configured }, { headers: NO_STORE });
}

export async function GET() {
  const configured = isVisitorCounterConfigured();
  const count = await getVisitorCount();
  return response(count, configured);
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403, headers: NO_STORE },
    );
  }

  const configured = isVisitorCounterConfigured();
  const count = await incrementVisitorCount();
  return response(count, configured);
}
