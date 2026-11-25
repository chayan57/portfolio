
import connectDB from "@/lib/connectDB";
import Visit from "@/models/Visit";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "portfolio_visit";
const VISIT_ID = "portfolio_total_visits";

// GET: Fetch total visits
export async function GET() {
  try {
    await connectDB();

    const visit = await Visit.findById(VISIT_ID).lean();

    console.log("Visit GET:", {
      database: Visit.db.name,
      collection: Visit.collection.name,
      data: visit,
    });

    return NextResponse.json(
      {
        total: visit?.total ?? 0,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Visit GET Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch visits",
        details:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}

// POST: Increment visits once per 24 hours per browser
export async function POST() {
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
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
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
        details:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
