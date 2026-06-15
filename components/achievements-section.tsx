import { ACHIEVEMENTS } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"
import { Trophy } from "lucide-react"

export function AchievementsSection() {
  return (
    <section id="achievements">
      <SectionHeader title="Achievements" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border bg-card/50 p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
