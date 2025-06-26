"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code } from "lucide-react"
import { cn } from "@/lib/utils"

type ProfileProps = {
  platform: string
  username: string
  link: string
  icon?: React.ReactNode
  className?: string
  rating: string
}

export function CodingProfile({ platform, username, link, icon, className, rating }: ProfileProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state for demonstration
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false)
      },
      Math.random() * 2000 + 1000,
    ) // Random time between 1-3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col p-4 border rounded-md hover:bg-muted/50 transition-colors relative overflow-hidden group",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-2 mb-2">
        {icon || <Code size={18} className="text-primary" />}
        <span className="font-medium">{platform}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">@{username}</span>
        {isLoading ? (
          <span className="text-xs text-muted-foreground animate-pulse">Loading...</span>
        ) : (
          <span className="text-sm font-medium text-primary">{rating}</span>
        )}
      </div>

      {/* Progress bar animation */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 h-[2px] bg-primary/30 w-full">
          <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      )}
    </Link>
  )
}
