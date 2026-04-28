import { NextResponse } from "next/server";
import { fetchJobs } from "@/lib/jobs";

export async function GET() {
  try {
    const jobs = await fetchJobs();

    return NextResponse.json(jobs, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return NextResponse.json(
      { error: "Impossible de charger les offres d'emploi." },
      { status: 500 }
    );
  }
}
