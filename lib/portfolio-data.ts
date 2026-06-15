export const SITE = {
  name: "Dhiraj Laulkar",
  tagline: "SWE intern • full-stack developer • problem solver",
  quote: "The best way to predict the future is to build it.",
  bio: "Currently a Software Engineering Intern at Yardi Software, building enterprise features with ASP.NET Core and Angular. B.Tech Computer Science student (2026) at Government College of Engineering, Aurangabad — I work across frontend, backend, and data layers, from REST APIs and SQL optimization to AI-driven systems, and care most about shipping reliable software that solves real problems.",
  githubUsername: "dhirajlaulkar",
  email: "dhirajlaulkar101@gmail.com",
  phone: "7620957998",
  resumeUrl: "/Dhiraj_Laulkar_SWE.pdf",
} as const

export const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "Government College of Engineering, Aurangabad",
  location: "Chh. Sambhajinagar, Maharashtra",
  period: "2022 – 2026",
  cgpa: "8.05",
} as const

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Yardi Software India",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Present",
    location: "Pune, Maharashtra",
    highlights: [
      "Built enterprise features in ASP.NET Core/VB.NET and responsive UI components using Angular and TypeScript for the Import Manager product.",
      "Integrated RESTful APIs between the .NET backend and Angular frontend for multiple tracking requests.",
      "Optimized SQL queries for large financial datasets and contributed to code reviews and quality assurance processes.",
    ],
  },
  {
    company: "Infosys Springboard",
    role: "Software Development Intern",
    period: "Nov 2024 – Feb 2025",
    location: "Remote",
    highlights: [
      "Built FastAPI-based backend services for an AI-driven patient follow-up system, leveraging NLP and sentiment analysis to achieve 97% accuracy in high-risk patient detection.",
      "Developed REST APIs and integrated Google Calendar for automated appointment scheduling, reducing booking time by 60%.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  githubUrl?: string
  emoji: string
  gradient: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    title: "JobView",
    description:
      "Job aggregation platform with secure auth, role-based access, and real-time listings from third-party APIs.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    link: "https://jobview-chi.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/jobview",
    emoji: "💼",
    gradient: "from-sky-500/20 to-blue-600/20",
    featured: true,
  },
  {
    title: "TradeLab",
    description:
      "Vectorized backtesting engine processing 5+ years of market data with sub-second execution via FastAPI.",
    stack: ["Python", "FastAPI", "Pandas", "NumPy"],
    link: "https://trade-lab-five.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/trade-lab",
    emoji: "📈",
    gradient: "from-emerald-500/20 to-green-600/20",
    featured: true,
  },
  {
    title: "Booker",
    description:
      "Layered Spring Boot REST app with validation, exception handling, and Swagger/OpenAPI documentation.",
    stack: ["Java", "Spring Boot", "JUnit", "Mockito"],
    githubUrl: "https://github.com/dhirajlaulkar/booker",
    emoji: "📚",
    gradient: "from-orange-500/20 to-amber-600/20",
    featured: true,
  },
  {
    title: "Collab Editor",
    description:
      "Real-time collaborative text editor for simultaneous multi-user editing.",
    stack: ["React", "Node.js", "WebSockets"],
    link: "https://collab-editor-production-fee3.up.railway.app/",
    githubUrl: "https://github.com/dhirajlaulkar/collab-editor",
    emoji: "🖊️",
    gradient: "from-violet-500/20 to-purple-600/20",
    featured: true,
  },
  {
    title: "QuickCart",
    description: "E-commerce platform for buying and selling products.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    link: "https://quick-cart-e-com.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/quick-cart",
    emoji: "🛒",
    gradient: "from-teal-500/20 to-cyan-600/20",
    featured: true,
  },
  {
    title: "EasyBuy AI",
    description:
      "E-commerce assistant to discover, compare, and analyze products with Gemini AI.",
    stack: ["Python", "Streamlit", "Gemini AI"],
    link: "https://easybuy.streamlit.app/",
    githubUrl: "https://github.com/dhirajlaulkar/easybuy-ai",
    emoji: "🤖",
    gradient: "from-blue-500/20 to-indigo-600/20",
    featured: true,
  },
  {
    title: "Falling Stars",
    description: "A browser-based falling stars game.",
    stack: ["JavaScript", "Canvas"],
    link: "https://fallstar.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/falling-stars-game",
    emoji: "🌟",
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "On The Beat",
    description: "Music visualizer that displays audio in a visual way.",
    stack: ["JavaScript", "Web Audio API"],
    link: "https://onthebeat.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/audio-visualizer",
    emoji: "🎵",
    gradient: "from-pink-500/20 to-rose-600/20",
  },
  {
    title: "Random Meme Generator",
    description: "An app that entertains you with random memes.",
    stack: ["React", "API"],
    link: "https://random-meme-xi.vercel.app/",
    githubUrl: "https://github.com/dhirajlaulkar/random-meme-generator",
    emoji: "🤣",
    gradient: "from-lime-500/20 to-green-600/20",
  },
]

export const ACHIEVEMENTS = [
  {
    title: "750+ DSA Problems",
    description: "Solved across LeetCode, CodeChef, and Codeforces.",
  },
  {
    title: "CodeChef Global Rank 40",
    description: "Starters 186 contest performance.",
  },
  {
    title: "LeetCode Rating 1626",
    description: "Competitive programming on LeetCode.",
  },
  {
    title: "CodeChef 3-Star",
    description: "Peak rating of 1668 on CodeChef.",
  },
  {
    title: "Hacktoberfest 2025",
    description: "Super Contributor — contributions to 6+ open-source projects.",
  },
] as const

export const TECH_STACK = [
  "Java",
  "TypeScript",
  "Python",
  "C++",
  "SQL",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Spring Boot",
  "ASP.NET Core",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
] as const

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/dhirajlaulkar",
    icon: "github" as const,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Dhiraj_twts",
    icon: "twitter" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dhiraj-laulkar",
    icon: "linkedin" as const,
  },
  {
    label: "Mail",
    href: "mailto:dhirajlaulkar101@gmail.com",
    icon: "mail" as const,
  },
  {
    label: "Resume",
    href: "/Dhiraj_Laulkar_SWE.pdf",
    icon: "resume" as const,
  },
] as const

export const CODING_PROFILES = [
  {
    platform: "Codeforces",
    username: "dhiraj101",
    link: "https://codeforces.com/profile/dhiraj101",
  },
  {
    platform: "LeetCode",
    username: "dhiraj101",
    link: "https://leetcode.com/dhiraj101/",
    staticRating: 1626,
  },
  {
    platform: "CodeChef",
    username: "dhiraj11",
    link: "https://www.codechef.com/users/dhiraj11",
    staticRating: 1668,
  },
] as const
