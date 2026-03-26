'use client'

export default function Hero() {
  return (
    <section id="home" style={{
      padding: '80px 48px 64px',
      borderBottom: '1px solid #2a3245',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '20px',
      }}>
        <div style={{ width: '24px', height: '1px', background: '#e8b84b' }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: '#e8b84b',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          Full Stack Engineer · Cloud · AI
        </span>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(48px, 8vw, 80px)',
        lineHeight: 1.05,
        marginBottom: '8px',
        color: '#e8e4d9',
      }}>
        Sara<br />
        <em style={{ color: '#e8b84b' }}>Abouroumia</em>
      </h1>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        color: '#8a94a8',
        maxWidth: '480px',
        lineHeight: 1.7,
        margin: '20px 0 36px',
        fontWeight: 300,
      }}>
        I build production-ready systems end-to-end — from backend APIs
        to cloud deployment. Currently at Nextarp B.V., based in Kayseri.
        Open to remote work & relocation.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: '#e8b84b',
            color: '#0c0f14',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.05em',
            cursor: 'pointer',
          }}>
          View Projects
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'transparent',
            color: '#e8b84b',
            border: '1px solid #a07e2a',
            padding: '10px 24px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.05em',
            cursor: 'pointer',
          }}>
          Get in Touch
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '40px',
        marginTop: '56px',
        paddingTop: '32px',
        borderTop: '1px solid #2a3245',
      }}>
        {([
          { num: '3+', label: 'Years building' },
          { num: '2',  label: 'Countries worked' },
          { num: '5+', label: 'Tech stacks' },
        ] as const).map((stat) => (
          <div key={stat.label}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '32px',
              color: '#e8e4d9',
            }}>{stat.num}</div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: '#8a94a8',
              marginTop: '4px',
              letterSpacing: '0.08em',
            }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}