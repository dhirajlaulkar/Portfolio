import Link from "next/link"
import { Mail, Twitter, Github, Linkedin, FileText } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"

const ICONS = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  resume: FileText,
} as const

export function ConnectSection() {
  return (
    <section id="contact">
      <SectionHeader
        title="Let's connect"
        subtitle="Find me on these platforms"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {SOCIAL_LINKS.map((link) => {
          const Icon = ICONS[link.icon]
          const isEmail = link.href.startsWith("mailto:")
          return (
            <Link
              key={link.label}
              href={link.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card/50 hover:bg-muted/50 hover:border-primary/30 transition-all text-sm"
              {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon size={20} className="text-muted-foreground" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
