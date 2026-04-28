import { NextResponse } from "next/server";
import { fetchJobs } from "@/lib/jobs";

export const dynamic = "force-static";

export async function GET() {
  try {
    const jobs = await fetchJobs();

    return NextResponse.json(jobs, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return NextResponse.json([]);
  }
}
