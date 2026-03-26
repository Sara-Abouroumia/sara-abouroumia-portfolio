'use client'

import { useState } from 'react'

const links = ['home', 'projects', 'experience', 'skills', 'contact'] as const
type Link = typeof links[number]

export default function Navbar() {
  const [active, setActive] = useState<Link>('home')

  const handleClick = (link: Link) => {
    setActive(link)
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 48px',
      borderBottom: '1px solid #2a3245',
      backgroundColor: '#0c0f14',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: '#e8b84b',
        letterSpacing: '0.05em',
      }}>
        SA_
      </span>

      <div style={{ display: 'flex', gap: '28px' }}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleClick(link)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: active === link ? '#e8b84b' : '#8a94a8',
              transition: 'color 0.2s',
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  )
}