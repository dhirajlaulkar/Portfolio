'use client'

import { Mail, Twitter, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"

type SocialLinkProps = {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  const isEmail = href.startsWith('mailto:')
  return (
    <Link
      href={href}
      className="px-4 py-2 border rounded-md text-sm flex items-center gap-2 hover:bg-muted transition-colors"
      {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold mb-8">contact</h2>
      <div className="flex flex-wrap gap-4">        <SocialLink href="https://twitter.com/Dhiraj_twts" icon={<Twitter size={18} />} label="twitter/X" />
        <SocialLink href="https://github.com/dhirajlaulkar" icon={<Github size={18} />} label="github" />
        <SocialLink href="https://linkedin.com/in/dhiraj-laulkar" icon={<Linkedin size={18} />} label="linkedin" />
        <SocialLink href="mailto:dhirajlaulkar101@gmail.com" icon={<Mail size={18} />} label="say hello" />
      </div>
    </section>
  )
}
