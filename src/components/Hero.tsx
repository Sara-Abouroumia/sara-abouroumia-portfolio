'use client'
import SectionLabel from './SectionLabel'

export default function Hero() {
  return (
    <section id="home" className="px-12 pt-20 pb-16 border-b border-border">
      <SectionLabel text="Full Stack Engineer · Cloud · AI" />

      <h1 className="font-serif text-[clamp(48px,8vw,80px)] leading-[1.05] mt-5 mb-2 text-foreground">
        Sara
        <br />
        <em style={{ color: '#e8b84b' }}>Abouroumia</em>
      </h1>

      <p className="font-sans text-[15px] text-muted max-w-[480px] leading-[1.7] mt-5 mb-9 font-light">
        I build production-ready systems end-to-end — from backend APIs to cloud deployment.
        Currently at Nextarp B.V., based in Kayseri. Open to remote work & relocation.
      </p>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="bg-accent text-background border-none px-6 py-2.5 rounded font-mono text-[12px] tracking-[0.05em] cursor-pointer"
        >
          View Projects
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-transparent text-accent border border-accent-dim px-6 py-2.5 rounded font-mono text-[12px] tracking-[0.05em] cursor-pointer"
        >
          Get in Touch
        </button>
      </div>

      <div className="flex gap-10 mt-14 pt-8 border-t border-border">
        {(
          [
            { num: '3+', label: 'Years building' },
            { num: '5+', label: 'Tech stacks' },
          ] as const
        ).map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-[32px] text-foreground">{stat.num}</div>
            <div className="font-mono text-[10px] text-muted mt-1 tracking-[0.08em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
