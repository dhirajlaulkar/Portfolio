import Link from "next/link"
import { ArrowRight } from "lucide-react"

type SectionHeaderProps = {
  title: string
  subtitle?: string
  viewAllHref?: string
  viewAllExternal?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllExternal,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-2 text-sm md:text-base">{subtitle}</p>
        )}
      </div>
      {viewAllHref &&
        (viewAllExternal ? (
          <a
            href={viewAllHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 shrink-0"
          >
            View All
            <ArrowRight size={14} />
          </a>
        ) : (
          <Link
            href={viewAllHref}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 shrink-0"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        ))}
    </div>
  )
}
