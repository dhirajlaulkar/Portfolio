import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { CodingProfilesSection } from "@/components/coding-profiles-section"
import { GitHubContributions } from "@/components/github-contributions"
import { TechStackMarquee } from "@/components/tech-stack-marquee"
import { ConnectSection } from "@/components/connect-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="container mx-auto px-4 max-w-5xl space-y-20 md:space-y-28 pt-10 md:pt-16 pb-8">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <CodingProfilesSection />
        <GitHubContributions />
        <TechStackMarquee />

        <section className="rounded-2xl border bg-muted/30 px-6 py-8 text-center space-y-3">
          <p className="text-muted-foreground text-sm md:text-base">
            If you&apos;ve read this far, you might be interested in what I do.
          </p>
          <p className="text-xs text-muted-foreground">
            Hacktoberfest 2025 Super Contributor · 750+ DSA problems solved
          </p>
        </section>

        <ConnectSection />
      </main>

      <SiteFooter />
    </div>
  )
}
