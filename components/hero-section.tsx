import { EDUCATION, SITE } from "@/lib/portfolio-data"
import { GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-muted/40 px-6 py-10 md:px-10 md:py-14">
        <p className="text-sm md:text-base text-muted-foreground italic max-w-2xl">
          {SITE.quote}
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {SITE.name}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">{SITE.tagline}</p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm md:text-base">
          {SITE.bio}
        </p>
      </div>

      <div className="flex items-start gap-4 rounded-xl border bg-card/50 p-4 md:p-5">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <GraduationCap size={18} className="text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-semibold">{EDUCATION.degree}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {EDUCATION.school} · {EDUCATION.location}
          </p>
          <p className="text-sm text-primary mt-1">
            {EDUCATION.period} · CGPA {EDUCATION.cgpa}
          </p>
        </div>
      </div>
    </section>
  )
}
