type ContactLink = {
     label: string
     href: string
}

const links: ContactLink[] = [
     { label: 'Email', href: 'mailto:saraabouroumia@gmail.com' },
     { label: 'LinkedIn', href: 'https://linkedin.com/in/sara-abouroumia-7b5665210' },
     { label: 'GitHub', href: 'https://github.com/Sara-Abouroumia' },
     { label: 'Resume', href: '/sara_abouroumia_resume_24032026.pdf' },
]

export default function Contact() {
     return (
          <section id="contact" style={{ padding: '64px 48px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '24px', height: '1px', background: '#e8b84b' }} />
                    <span style={{
                         fontFamily: 'var(--font-mono)',
                         fontSize: '11px',
                         color: '#e8b84b',
                         letterSpacing: '0.12em',
                         textTransform: 'uppercase',
                    }}>
                         Contact
                    </span>
               </div>

               <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '32px',
                    color: '#e8e4d9',
                    marginBottom: '16px',
               }}>
                    Let&apos;s Connect
               </h2>

               <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: '#8a94a8',
                    maxWidth: '480px',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '36px',
               }}>
                    Open to remote positions, AI/ML research roles, and Master&apos;s
                    programme opportunities. Based in Kayseri — available to relocate.
                    Always happy to talk engineering, cloud, or AI.
               </p>

               <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {links.map((link) => (
                         <a
                              key={link.label}
                              href={link.href}
                              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                              rel="noreferrer"
                              style={{
                                   fontFamily: 'var(--font-mono)',
                                   fontSize: '11px',
                                   color: '#e8b84b',
                                   border: '1px solid #a07e2a',
                                   padding: '10px 20px',
                                   borderRadius: '4px',
                                   textDecoration: 'none',
                                   letterSpacing: '0.05em',
                              }}
                         >
                              {link.label}
                         </a>
                    ))}
               </div>


               <div style={{
                    marginTop: '80px',
                    paddingTop: '24px',
                    borderTop: '1px solid #2a3245',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
               }}>
                    <span style={{
                         fontFamily: 'var(--font-mono)',
                         fontSize: '10px',
                         color: '#8a94a8',
                    }}>
                         Sara Abouroumia © 2026
                    </span>
                    <span style={{
                         fontFamily: 'var(--font-mono)',
                         fontSize: '10px',
                         color: '#8a94a8',
                    }}>
                         Kayseri, Turkey · Open to Remote
                    </span>
               </div>
          </section>
     )
}