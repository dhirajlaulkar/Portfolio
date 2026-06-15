"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EXPERIENCE } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/section-header"
import { Building2 } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader title="Professional Experience" />
      <Accordion type="single" collapsible className="space-y-3">
        {EXPERIENCE.map((job, index) => (
          <AccordionItem
            key={`${job.company}-${index}`}
            value={`job-${index}`}
            className="border rounded-xl px-4 md:px-6 bg-card/50 data-[state=open]:bg-card"
          >
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">{job.company}</h3>
                  <p className="text-sm text-primary font-medium">{job.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {job.period}
                    {job.location && ` · ${job.location}`}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5 pl-14">
              <ul className="space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
