"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SITE } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

type ContributionDay = {
  date: string
  count: number
  level: number
}

const LEVEL_COLORS = [
  "bg-muted",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary",
]

export function GitHubContributions() {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [total, setTotal] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github-contributions")
        const data = await res.json()
        if (data.contributions) {
          setContributions(data.contributions)
          setTotal(data.total)
        }
      } catch {
        /* ignore */
      } finally {
        setLoading(false)
      }
    }
    fetchContributions()
  }, [])

  const weeks: ContributionDay[][] = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  return (
    <section id="github">
      <SectionHeader
        title={`GitHub Contributions ● @${SITE.githubUsername}`}
        viewAllHref={`https://github.com/${SITE.githubUsername}`}
        viewAllExternal
      />
      <div className="rounded-xl border p-4 md:p-6 bg-card/50 overflow-x-auto">
        {loading ? (
          <div className="h-28 flex items-center justify-center text-sm text-muted-foreground">
            Loading contributions…
          </div>
        ) : contributions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Could not load contributions.{" "}
            <Link
              href={`https://github.com/${SITE.githubUsername}`}
              className="text-primary hover:underline"
              target="_blank"
            >
              View on GitHub
            </Link>
          </p>
        ) : (
          <div>
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.count} contributions`}
                      className={cn(
                        "w-3 h-3 rounded-sm",
                        LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
            {total !== null && (
              <p className="text-xs text-muted-foreground mt-4">
                {total.toLocaleString()} contributions in the last year
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
