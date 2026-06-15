import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const href = project.link ?? project.githubUrl

  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="rounded-xl border overflow-hidden bg-card transition-all hover:border-primary/40 hover:shadow-md">
        <div
          className={cn(
            "h-36 md:h-40 bg-gradient-to-br flex items-center justify-center text-4xl",
            project.gradient
          )}
        >
          {project.emoji}
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.link && <ArrowUpRight size={14} />}
              {project.githubUrl && <Github size={14} />}
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

export function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <section id="projects">
      <SectionHeader title="Proof of Work" viewAllHref="/projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
