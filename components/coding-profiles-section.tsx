"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CODING_PROFILES } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"

const CACHE_TTL = 60 * 60 * 1000
const CACHE_KEY_PREFIX = "coding_profile_"

function getCachedData(key: string): unknown | null {
  if (typeof window === "undefined") return null
  try {
    const cached = localStorage.getItem(CACHE_KEY_PREFIX + key)
    if (cached) {
      const { data, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < CACHE_TTL) return data
      localStorage.removeItem(CACHE_KEY_PREFIX + key)
    }
  } catch {
    return null
  }
  return null
}

function setCachedData(key: string, data: unknown): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(
      CACHE_KEY_PREFIX + key,
      JSON.stringify({ data, timestamp: Date.now() })
    )
  } catch {
    /* ignore */
  }
}

async function fetchCodeforcesRating(handle: string) {
  const cacheKey = `codeforces_${handle}`
  const cached = getCachedData(cacheKey)
  if (cached) return cached

  try {
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`
    )
    const data = await response.json()
    if (data.status === "OK" && data.result[0]) {
      const result = { rating: data.result[0].rating as number }
      setCachedData(cacheKey, result)
      return result
    }
  } catch {
    return null
  }
  return null
}

function CodingProfile({
  platform,
  username,
  link,
  staticRating,
}: (typeof CODING_PROFILES)[number]) {
  const [rating, setRating] = useState<string | number>(
    staticRating ?? "…"
  )

  useEffect(() => {
    if (staticRating) {
      setRating(staticRating)
      return
    }

    async function load() {
      if (platform === "Codeforces") {
        const data = (await fetchCodeforcesRating(username)) as {
          rating?: number
        } | null
        setRating(data?.rating ?? "N/A")
      }
    }
    load()
  }, [platform, username, staticRating])

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-4 border rounded-xl hover:bg-muted/50 transition-colors bg-card/50"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="live-dot" />
        <span className="font-medium">{platform}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">@{username}</span>
        <span className="text-sm font-medium text-primary">{rating}</span>
      </div>
    </Link>
  )
}

export function CodingProfilesSection() {
  return (
    <section id="coding">
      <SectionHeader title="Coding Profiles" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CODING_PROFILES.map((profile) => (
          <CodingProfile key={profile.platform} {...profile} />
        ))}
      </div>
    </section>
  )
}
