
import connectDB from "@/lib/connectDB";
import Visit from "@/models/Visit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const VISIT_ID = "portfolio_total_visits";

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://chayanbiswas.vercel.app",
];

function getCorsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Vary: "Origin",
  };

  if (ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

// OPTIONS
export async function OPTIONS(request) {
  const origin = request.headers.get("origin") || "";

  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

// GET: Fetch total visits
export async function GET(request) {
  const origin = request.headers.get("origin") || "";

  try {
    await connectDB();

    const visit = await Visit.findById(VISIT_ID).lean();

    return NextResponse.json(
      {
        total: visit?.total ?? 0,
      },
      {
        headers: getCorsHeaders(origin),
      }
    );
  } catch (error) {
    console.error("Visit GET Error:", error);

    return NextResponse.json(
      { error: "Failed to fetch visits" },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}

// POST: Increment total visits
export async function POST(request) {
  const origin = request.headers.get("origin") || "";

  try {
    await connectDB();

    const visit = await Visit.findByIdAndUpdate(
      VISIT_ID,
      {
        $inc: { total: 1 },
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    return NextResponse.json(
      {
        total: visit.total,
      },
      {
        headers: getCorsHeaders(origin),
      }
    );
  } catch (error) {
    console.error("Visit POST Error:", error);

    return NextResponse.json(
      { error: "Failed to update visits" },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}
