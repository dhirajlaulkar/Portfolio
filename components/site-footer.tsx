import { SITE } from "@/lib/portfolio-data"

const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="container mx-auto px-4 max-w-5xl py-10 mt-8 border-t text-center text-sm text-muted-foreground">
      <p>
        © {CURRENT_YEAR} {SITE.name}.
      </p>
    </footer>
  )
}
