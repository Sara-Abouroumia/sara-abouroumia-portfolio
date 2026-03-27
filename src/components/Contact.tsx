import SectionLabel from './SectionLabel'
import { links } from '@/data/contact'

export default function Contact() {
  return (
    <section id="contact" className="px-12 py-16 border-b border-border">
      <SectionLabel text="Contact" />

      <h2 className="font-serif text-[32px] text-foreground mb-4">Let&apos;s Connect</h2>

      <p className="font-sans text-[14px] text-muted max-w-[480px] leading-[1.7] font-light mb-9">
        Open to remote positions, AI/ML research roles, and Master&apos;s programme opportunities.
        Based in Kayseri — available to relocate. Always happy to talk engineering, cloud, or AI.
      </p>

      <div className="flex gap-3 flex-wrap">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noreferrer"
            className="font-mono text-[11px] text-accent border border-accent-dim px-5 py-2.5 rounded tracking-[0.05em] no-underline hover:bg-accent hover:text-background transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-20 pt-6 border-t border-border flex justify-between items-center flex-wrap gap-2">
        <span className="font-mono text-[10px] text-muted">Sara Abouroumia © 2026</span>
        <span className="font-mono text-[10px] text-muted">Kayseri, Turkey · Open to Remote</span>
      </div>
    </section>
  )
}
