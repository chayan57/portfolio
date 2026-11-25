
import connectDB from "@/lib/connectDB";
import Visit from "@/models/Visit";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "portfolio_visit";
const VISIT_ID = "portfolio_total_visits";

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://chayanbiswas.vercel.app",
];

function getCorsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin)
      ? origin
      : "https://chayanbiswas.vercel.app",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Vary: "Origin",
  };
}

// OPTIONS: Handle CORS preflight
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
      {
        error: "Failed to fetch visits",
      },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}

// POST: Increment visits once per 24 hours per browser
export async function POST(request) {
  const origin = request.headers.get("origin") || "";

  try {
    await connectDB();

    const cookieStore = await cookies();
    const hasVisited = cookieStore.get(COOKIE_NAME);

    if (!hasVisited) {
      await Visit.findByIdAndUpdate(
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
    }

    const visit = await Visit.findById(VISIT_ID).lean();

    const response = NextResponse.json(
      {
        total: visit?.total ?? 0,
      },
      {
        headers: getCorsHeaders(origin),
      }
    );

    if (!hasVisited) {
      response.cookies.set(COOKIE_NAME, "1", {
        maxAge: 60 * 60 * 24,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } catch (error) {
    console.error("Visit POST Error:", error);

    return NextResponse.json(
      {
        error: "Failed to update visits",
      },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}
