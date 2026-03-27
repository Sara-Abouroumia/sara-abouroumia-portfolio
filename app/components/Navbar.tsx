'use client'

import { useState } from 'react'

const links = ['home', 'projects', 'experience', 'skills', 'contact'] as const
type NavLink = typeof links[number]

export default function Navbar() {
  const [active, setActive] = useState<NavLink>('home')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    e.preventDefault()
    setActive(link)
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex items-center justify-between px-12 py-4 border-b border-border bg-background sticky top-0 z-[100]">
      <span className="font-mono text-[13px] text-accent tracking-[0.05em]">
        SA_
      </span>

      <div className="flex gap-7">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={(e) => handleClick(e, link)}
            className={`font-mono text-[11px] tracking-[0.08em] uppercase hover:text-accent transition-colors duration-200 cursor-pointer no-underline ${
              active === link ? 'text-accent' : 'text-muted'
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}