import type React from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavMenu } from "@/components/nav-menu"
import { CodingProfiles } from "@/components/coding-profiles"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 max-w-3xl border-b">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-medium">
              portfolio
            </Link>
            <div className="flex items-center gap-4">
              <NavMenu />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-3xl space-y-16 pt-12">
        <section className="py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            i'm <span className="text-primary">dhiraj laulkar</span>, engineer at the intersection of solving problems & building products.
          </h1>
          {/* <p className="text-muted-foreground max-w-xl mb-8">
            I write about things I'm learning,{" "}
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">reflections</span> and thoughts on life
            and <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">tech</span>.
          </p> */}
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View projects</Link>
            </Button>
          </div>
        </section>

        <div className="space-y-8">
          <section className="py-6">
            <h2 className="text-2xl font-semibold mb-6">coding profiles</h2>
            <CodingProfiles />
          </section>

          <section id="skills" className="py-6">
            <h2 className="text-2xl font-semibold mb-6">skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "PostgreSQL", "C++", "Python", "Node.js", "Data Structures", "Algorithms", "Next.js", "Typescript"].map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        <ContactSection />
      </main>

      <footer className="container mx-auto px-4 max-w-3xl py-8 mt-16 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} | Dhiraj Laulkar | All rights reserved.</p>
      </footer>
    </div>
  )
}







