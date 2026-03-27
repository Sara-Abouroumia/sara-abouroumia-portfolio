'use client'
import SectionLabel from './SectionLabel'
import { projects } from '@/data/projects'


export default function
  Projects() {
  return (
    <section id="projects" className="px-12 py-16 border-b border-border">
      <SectionLabel text="Work & Projects" />

      <h2 className="font-serif text-[32px] text-foreground mb-8">
        Things I&apos;ve Built
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {projects.map((project) => (
          <div
            key={project.num}
            className={`bg-card rounded-lg p-6 transition-colors duration-200 ${project.coming
                ? 'border border-dashed border-border opacity-50'
                : 'border border-solid border-border hover:border-accent-dim cursor-pointer'
              }`}
          >
            <div className="font-mono text-[11px] text-accent mb-3">
              {project.num}
            </div>

            <div className="font-sans text-[14px] font-medium text-foreground mb-2">
              {project.title}
            </div>

            <div className="font-sans text-[12px] text-muted leading-[1.6]">
              {project.desc}
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-muted bg-tag px-2 py-0.5 rounded-[3px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}