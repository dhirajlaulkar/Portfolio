import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="group">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center text-xl shrink-0",
            project.gradient
          )}
        >
          {project.emoji}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium">{project.title}</h3>
            <div className="flex items-center gap-1">
              {project.link && (
                <Link
                  href={project.link}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-primary"
                  target="_blank"
                  title="Live Demo"
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-primary"
                  target="_blank"
                  title="View Code"
                >
                  <Github size={16} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-muted-foreground text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const featured = PROJECTS.filter((p) => p.featured)
  const hobby = PROJECTS.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-12">projects</h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-8">featured projects</h2>
          <div className="space-y-8">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">fun/hobby projects</h2>
          <div className="space-y-8">
            {hobby.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
