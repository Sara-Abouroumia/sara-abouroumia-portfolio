import SectionLabel from './SectionLabel'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="px-12 py-16 border-b border-border">
      <SectionLabel text="Technical Skills" />

      <h2 className="font-serif text-[32px] text-foreground mb-10">What I Work With</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-card border border-border rounded-lg p-5">
            <div className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase mb-3.5">
              {group.category}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-sans text-[11px] text-muted bg-tag px-2.5 py-1 rounded-[3px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
