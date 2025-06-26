import type React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
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
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">fun/hobby projects</h2>
          <div className="space-y-8">
            {hobbyProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-md shrink-0">{project.icon}</div>
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
        </div>
      </div>
    </div>
  )
}

type Project = {
  title: string
  description: string
  link?: string
  githubUrl?: string
  icon: React.ReactNode
}

const featuredProjects: Project[] = [
  {
    title: "quickcart e-commerce ",
    description: "A e-commerce platform for buying and selling products.",
    link: "https://quick-cart-sable-two.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/E-commerce-Application",
    icon: <span className="text-lg">🛒</span>,
  },
  {
    title: "collab editor",
    description: "A real-time collaborative text editor that allows multiple users to edit the same document simultaneously.",
    link: "https://collab-editor-production-fee3.up.railway.app/",
    githubUrl: "https://github.com/dhirajlaulkar/collab-editor",
    icon: <span className="text-lg">🖊️</span>,
  },
  {
    title: "easybuy AI",
    description: "An Ecommerce Assistant to Discover, compare, and analyze products with the power of Gemini AI",
    link: "https://easybuy.streamlit.app/",
    githubUrl: "https://github.com/dhirajlaulkar/easybuy-ai",
    icon: <span className="text-lg">🤖</span>,
  },
  
]

const hobbyProjects: Project[] = [
  {
    title: "falling stars game",
    description: "A falling stars game that you can play in your browser.",
    link: "https://fallstar.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/falling-stars-game",
    icon: <span className="text-lg">🌟</span>,
  },
  {
    title: "on the beat",
    description: "A music visualizer that displays the music in a visual way.",
    link: "https://onthebeat.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/audio-visualizer",
    icon: <span className="text-lg">🎵</span>,
  },
  {
    title: "random meme generator",
    description: "A app that entertains you with random memes.",
    link: "https://random-meme-xi.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/random-meme-generator",
    icon: <span className="text-lg">🤣</span>,
  }
]