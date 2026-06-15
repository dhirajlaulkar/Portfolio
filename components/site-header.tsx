import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavMenu } from "@/components/nav-menu"
import { SITE } from "@/lib/portfolio-data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {SITE.name.split(" ")[0].toLowerCase()}
          </Link>
          <div className="flex items-center gap-4">
            <NavMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
