import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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

      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Hello! I'm a passionate developer and designer focused on creating clean, user-friendly experiences on the
          web. With a background in both design and development, I bring a unique perspective to every project.
        </p>

        <h2>My Journey</h2>
        <p>
          I started my journey in web development in [year], learning HTML and CSS to build simple websites. As my
          skills grew, I expanded into JavaScript and modern frameworks like React and Next.js. Today, I specialize in
          building performant, accessible, and visually appealing web applications.
        </p>

        <h2>What I Do</h2>
        <p>
          I work at the intersection of design and development, creating digital experiences that are both beautiful and
          functional. My approach combines technical expertise with an eye for design, ensuring that every project not
          only works flawlessly but also looks great.
        </p>

        <h2>My Skills</h2>
        <ul>
          <li>
            <strong>Frontend Development:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js
          </li>
          <li>
            <strong>Backend Development:</strong> Node.js, Express, REST APIs
          </li>
          <li>
            <strong>Design:</strong> UI/UX Design, Figma, Responsive Design
          </li>
          <li>
            <strong>Other:</strong> Git, GitHub, Performance Optimization, Accessibility
          </li>
        </ul>

        <h2>When I'm Not Coding</h2>
        <p>
          Outside of work, I enjoy [your hobbies or interests]. I believe that having diverse interests helps fuel
          creativity and brings fresh perspectives to my work.
        </p>

        <h2>Let's Connect</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
          free to reach out through any of the social links on the homepage.
        </p>
      </div>
    </div>
  )
}
