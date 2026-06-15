import { TECH_STACK } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"

export function TechStackMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <section id="stack">
      <SectionHeader
        title="Stack I use"
        subtitle="Technologies I work with to build products that solve real problems"
      />
      <div className="relative overflow-hidden rounded-xl border bg-card/30 py-6">
        <div className="marquee-track">
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground mx-2 shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track-reverse mt-3">
          {[...items].reverse().map((tech, index) => (
            <span
              key={`rev-${tech}-${index}`}
              className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground mx-2 shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
