import connectDB from "@/lib/connectDB";
import Visit from "@/models/Visit";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "portfolio_visit";

export async function GET() {
  try {
    await connectDB();

    const visit = await Visit.findById("portfolio_total_visits").lean();

    return NextResponse.json(
      { total: visit?.total ?? 0 },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Visit GET error:", error);

    return NextResponse.json({ total: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const hasVisited = cookieStore.get(COOKIE_NAME);

    if (!hasVisited) {
      await Visit.findByIdAndUpdate(
        "portfolio_total_visits",
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

    const visit = await Visit.findById("portfolio_total_visits").lean();

    const response = NextResponse.json(
      { total: visit?.total ?? 0 },
      {
        headers: {
          "Cache-Control": "no-store",
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
    console.error("Visit POST error:", error);

    return NextResponse.json({ total: 0 }, { status: 500 });
  }
}