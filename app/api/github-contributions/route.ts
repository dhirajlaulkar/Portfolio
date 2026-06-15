import { NextResponse } from "next/server"
import { SITE } from "@/lib/portfolio-data"

type ContributionDay = {
  date: string
  count: number
  level: number
}

export async function GET() {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${SITE.githubUsername}?y=last`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error(`GitHub contributions API returned ${response.status}`)
    }

    const data = await response.json()
    const contributions: ContributionDay[] = data.contributions ?? []

    return NextResponse.json(
      { contributions, total: data.total?.[SITE.githubUsername] ?? 0 },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    )
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    )
  }
}
