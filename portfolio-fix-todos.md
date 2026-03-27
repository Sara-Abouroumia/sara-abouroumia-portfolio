# Portfolio Code Review — Fix Checklist

> Ordered from highest to lowest impact. Tick each sub-task off as you go.

---

## 🔴 CRITICAL

### 1. Remove `'use client'` from `page.tsx`

- [ ] Open `app/page.tsx`
- [ ] Delete the `'use client'` directive on line 1
- [ ] Verify the file has no hooks, browser APIs, or event handlers directly in it (it shouldn't — they all live in child components)
- [ ] Confirm the build still passes: `npm run build`
- [ ] Confirm `Navbar.tsx` and `Hero.tsx` still have their own `'use client'` directives (they do — leave those)

---

### 2. Stop using inline `style={{}}` — migrate everything to Tailwind

> Do this one component at a time. Start with the simplest (`Navbar`) and work outward.

#### Set up Tailwind CSS variables first (globals.css)

- [ ] Open `app/globals.css`
- [ ] Add your design tokens inside a `@theme` block so Tailwind knows about them:

  ```css
  @import 'tailwindcss';

  @theme {
    --color-background: #0c0f14;
    --color-text-primary: #e8e4d9;
    --color-text-muted: #8a94a8;
    --color-accent: #e8b84b;
    --color-accent-dim: #a07e2a;
    --color-border: #2a3245;
    --color-card: #141820;
    --color-tag: #1f2a3a;

    --font-serif: var(--font-serif);
    --font-mono: var(--font-mono);
    --font-sans: var(--font-sans);
  }
  ```

- [ ] Remove the raw CSS variable block (`:root { --background: ... }`) — those are now handled by Tailwind's `@theme`
- [ ] Remove the `* { margin: 0; padding: 0; box-sizing: border-box }` reset — Tailwind's preflight handles this
- [ ] Keep `html { scroll-behavior: smooth }` and `body { background: ... min-height: 100vh }`
- [ ] Run `npm run dev` and confirm the page still renders

#### Migrate `Navbar.tsx`

- [ ] Replace `style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 48px', ... }}` on `<nav>` with:
      `className="flex items-center justify-between px-12 py-4 border-b border-border bg-background sticky top-0 z-[100]"`
- [ ] Replace logo `<span>` inline styles with: `className="font-mono text-[13px] text-accent tracking-[0.05em]"`
- [ ] Replace nav link `<button>` inline styles with a conditional className using a helper:
  ```tsx
  className={`bg-none border-none cursor-pointer font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-200 ${
    active === link ? 'text-accent' : 'text-muted'
  }`}
  ```
- [ ] Delete all `style={{}}` props from the file
- [ ] Visually confirm the navbar looks identical

#### Migrate `Hero.tsx`

- [ ] Replace section `style` with: `className="px-12 pt-20 pb-16 border-b border-border"`
- [ ] Replace eyebrow `<div>` (flex + line) with: `className="flex items-center gap-2 mb-5"`
- [ ] Replace the gold line `<div>` with: `className="w-6 h-px bg-accent"`
- [ ] Replace eyebrow `<span>` with: `className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase"`
- [ ] Replace `<h1>` with: `className="font-serif text-[clamp(48px,8vw,80px)] leading-[1.05] mb-2 text-text-primary"`
- [ ] Replace `<em>` with: `className="text-accent not-italic"`
- [ ] Replace paragraph with: `className="font-sans text-[15px] text-muted max-w-[480px] leading-[1.7] my-5 mb-9 font-light"`
- [ ] Replace "View Projects" button: `className="bg-accent text-background border-none px-6 py-[10px] rounded font-mono text-[12px] tracking-[0.05em] cursor-pointer"`
- [ ] Replace "Get in Touch" button: `className="bg-transparent text-accent border border-accent-dim px-6 py-[10px] rounded font-mono text-[12px] tracking-[0.05em] cursor-pointer"`
- [ ] Replace stats row wrapper: `className="flex gap-10 mt-14 pt-8 border-t border-border"`
- [ ] Replace stat number `<div>`: `className="font-serif text-[32px] text-text-primary"`
- [ ] Replace stat label `<div>`: `className="font-mono text-[10px] text-muted mt-1 tracking-[0.08em]"`
- [ ] Delete all `style={{}}` props

#### Migrate `Projects.tsx`

- [ ] Replace section styles with: `className="px-12 py-16 border-b border-border"`
- [ ] Reuse the eyebrow pattern (gold line + mono label) — extract it into a shared component at this point (see task #6)
- [ ] Replace `<h2>` with: `className="font-serif text-[32px] text-text-primary mb-8"`
- [ ] Replace grid `<div>` with: `className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4"`
- [ ] Replace card `<div>`:
  ```
  className={`bg-card rounded-lg p-6 transition-colors duration-200 ${
    project.coming
      ? 'border border-dashed border-border opacity-50'
      : 'border border-solid border-border hover:border-accent-dim'
  }`}
  ```
- [ ] **Remove `onMouseEnter` / `onMouseLeave` handlers entirely** — the hover effect is now handled by the `hover:border-accent-dim` class above. Delete both handlers.
- [ ] Replace project number span: `className="font-mono text-[11px] text-accent mb-3"`
- [ ] Replace project title: `className="font-sans text-[14px] font-medium text-text-primary mb-2"`
- [ ] Replace project desc: `className="font-sans text-[12px] text-muted leading-[1.6]"`
- [ ] Replace tags wrapper: `className="flex flex-wrap gap-1.5 mt-4"`
- [ ] Replace tag `<span>`: `className="font-mono text-[10px] text-muted bg-tag px-2 py-0.5 rounded-[3px]"`
- [ ] Delete all `style={{}}` props

#### Migrate `Experience.tsx`

- [ ] Replace section styles
- [ ] Replace timeline grid `<div>`: `className="grid gap-x-7"` with `gridTemplateColumns: '1px 1fr'` remaining as an inline style (Tailwind can't do arbitrary grid columns without a config extension — keep this one inline or add it to `tailwind.config`)
- [ ] Replace all other inline styles with Tailwind equivalents
- [ ] Replace `key={index}` — see task #7

#### Migrate `Skills.tsx`

- [ ] Follow the same pattern as `Projects.tsx`
- [ ] Replace all inline styles with Tailwind classes

#### Migrate `Contact.tsx`

- [ ] Replace section, heading, paragraph, link, and footer styles
- [ ] Replace gold line `<div>` with: `className="w-6 h-px bg-accent"`

---

### 3. Remove manual DOM manipulation in `Projects.tsx`

- [ ] Open `app/components/Projects.tsx`
- [ ] Find the `onMouseEnter` and `onMouseLeave` handlers on the card `<div>`
- [ ] Delete both handlers completely:
  ```tsx
  // DELETE THESE:
  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#a07e2a' }}
  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#2a3245' }}
  ```
- [ ] The `hover:border-accent-dim` Tailwind class (added in task #2) handles this — confirm visually

---

### 4. Delete all commented-out boilerplate

#### `app/page.tsx`

- [ ] Delete the entire `/* import Image ... export default function Home() { ... } */` block at the bottom (lines ~18–71)
- [ ] The file should end after the closing `}` of the real `Home` component

#### `app/layout.tsx`

- [ ] Delete the `/* import type { Metadata } ... */` comment block at the top
- [ ] Delete the `/* const geistSans = ... const geistMono = ... export const metadata = ... */` comment block
- [ ] Delete the `/* */` comment around the Geist fonts — replace with the actual fonts you use (DM Serif, Space Mono, DM Sans are already defined below the comments)
- [ ] The final file should have no `/* */` blocks at all

---

## 🟡 HIGH PRIORITY

### 5. Move `components/` out of `app/`

- [ ] Create a new `src/` directory at the repo root (optional but recommended — see task #14)
- [ ] **If using `src/`:** Move `app/` → `src/app/` and create `src/components/`
- [ ] **If keeping root-level layout:** Create `components/` at the repo root (same level as `app/`)
- [ ] Move all 6 component files:
  - `app/components/Contact.tsx` → `src/components/Contact.tsx`
  - `app/components/Experience.tsx` → `src/components/Experience.tsx`
  - `app/components/Hero.tsx` → `src/components/Hero.tsx`
  - `app/components/Navbar.tsx` → `src/components/Navbar.tsx`
  - `app/components/Projects.tsx` → `src/components/Projects.tsx`
  - `app/components/Skills.tsx` → `src/components/Skills.tsx`
- [ ] Delete the now-empty `app/components/` directory
- [ ] Open `app/page.tsx` and update all imports:
  ```tsx
  // Change from:
  import Navbar from '@/app/components/Navbar'
  // Change to:
  import Navbar from '@/components/Navbar'
  ```
  Repeat for all 6 imports
- [ ] Update `tsconfig.json` paths if needed (if using `src/`, update `"@/*": ["./src/*"]`)
- [ ] Run `npm run build` to confirm no broken imports

---

### 6. Extract repeated eyebrow pattern into a shared component

> Every section has the same gold-line + mono-label pattern. It's copied 5 times.

- [ ] Create `src/components/SectionLabel.tsx`:

  ```tsx
  interface SectionLabelProps {
    text: string
  }

  export default function SectionLabel({ text }: SectionLabelProps) {
    return (
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-px bg-accent" />
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase">
          {text}
        </span>
      </div>
    )
  }
  ```

- [ ] Replace the copy-pasted eyebrow block in every component with `<SectionLabel text="Experience" />` etc.
- [ ] Delete the 5 duplicated blocks

---

### 7. Move data arrays out of component files

- [ ] Create `src/data/` directory
- [ ] Create `src/data/experience.ts`:

  ```ts
  export type Role = {
    company: string
    role: string
    date: string
    location: string
    bullets: string[]
  }

  export const roles: Role[] = [
    /* move array here */
  ]
  ```

- [ ] Create `src/data/projects.ts`:

  ```ts
  export type Project = {
    num: string
    title: string
    desc: string
    tags: string[]
    coming?: boolean
  }

  export const projects: Project[] = [
    /* move array here */
  ]
  ```

- [ ] Create `src/data/skills.ts`:

  ```ts
  export type SkillGroup = {
    category: string
    skills: string[]
  }

  export const skillGroups: SkillGroup[] = [
    /* move array here */
  ]
  ```

- [ ] Create `src/data/navigation.ts`:
  ```ts
  export const navLinks = ['home', 'projects', 'experience', 'skills', 'contact'] as const
  export type NavLink = (typeof navLinks)[number]
  ```
- [ ] Move the `links` array from `Contact.tsx` into `src/data/contact.ts`
- [ ] Update each component to import from its data file instead of defining inline
- [ ] Delete the local type and array definitions from each component file

---

### 8. Add `Metadata` type to `layout.tsx`

- [ ] Open `src/app/layout.tsx`
- [ ] Add the import at the top:
  ```tsx
  import type { Metadata } from 'next'
  ```
- [ ] Add the type annotation:
  ```tsx
  export const metadata: Metadata = {
    title: 'Sara Abouroumia — Full Stack Engineer',
    description:
      'Full stack software engineer specialising in cloud, deployment, and production systems.',
  }
  ```

---

### 9. Fix `key={index}` in `Experience.tsx`

- [ ] Open `src/components/Experience.tsx`
- [ ] Find: `{roles.map((role, index) => (`
- [ ] Change `key={index}` to `key={role.company}` on the outer `<div>`
- [ ] Remove `index` from the `.map()` callback if it's only used for the key (replace with just `(role)`)
- [ ] Also check the bullet list: `{role.bullets.map((bullet, i) => (<li key={i}...`
  - Change to `key={bullet}` (bullet text is unique enough here) or `key={`${role.company}-${i}`}`

---

### 10. Remove the `@next/font` package

- [ ] Open `package.json`
- [ ] Remove `"@next/font": "^14.2.15"` from `dependencies`
- [ ] Run: `npm uninstall @next/font`
- [ ] Confirm `next/font/google` imports in `layout.tsx` still work (they will — that's the correct package)
- [ ] Run `npm run build` to confirm

---

### 11. Fix indentation — add Prettier

- [ ] Install Prettier: `npm install --save-dev prettier`
- [ ] Create `.prettierrc` at the repo root:
  ```json
  {
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 100
  }
  ```
- [ ] Create `.prettierignore`:
  ```
  .next
  node_modules
  public
  ```
- [ ] Add a format script to `package.json`:
  ```json
  "format": "prettier --write ."
  ```
- [ ] Run `npm run format` to auto-fix all files
- [ ] Commit the result: `git add -A && git commit -m "chore: add prettier, format all files"`
- [ ] (Optional) Add a lint-staged + husky pre-commit hook so formatting is enforced going forward:
  ```
  npm install --save-dev lint-staged husky
  npx husky init
  echo 'npx lint-staged' > .husky/pre-commit
  ```
  Add to `package.json`:
  ```json
  "lint-staged": {
    "*.{ts,tsx,json,md}": ["prettier --write"]
  }
  ```

---

## 🔵 MEDIUM / POLISH

### 12. Fix navbar: replace `<button>` with proper anchor elements

- [ ] Open `src/components/Navbar.tsx`
- [ ] Replace the `<button onClick={() => handleClick(link)}>` elements with `<a>` tags:
  ```tsx
  <a
    href={`#${link}`}
    onClick={(e) => { e.preventDefault(); handleClick(link) }}
    className={...}
  >
    {link}
  </a>
  ```
- [ ] The `href` attribute means keyboard users and screen readers understand these as navigation links
- [ ] The `e.preventDefault()` prevents the default jump so your smooth scroll logic still fires
- [ ] Alternatively use `next/link` with `scroll={false}` and handle the smooth scroll separately

---

### 13. Rename the resume file

- [ ] Rename `public/sara_abouroumia_resume_24032026.pdf` → `public/sara-abouroumia-resume.pdf`
  - Use kebab-case (URL-friendly, no underscores, no date)
- [ ] Open `src/data/contact.ts` (or wherever the links array lives after task #7)
- [ ] Update the href: `href: '/sara-abouroumia-resume.pdf'`
- [ ] Commit: going forward, just replace the file at the same path when you update your CV — the URL stays stable

---

### 14. Clean up `/public`

- [ ] Delete `public/file.svg` — unused Next.js placeholder
- [ ] Delete `public/globe.svg` — unused
- [ ] Delete `public/next.svg` — unused
- [ ] Delete `public/vercel.svg` — unused
- [ ] Delete `public/window.svg` — unused
- [ ] Keep only `public/sara-abouroumia-resume.pdf` (after rename above)
- [ ] (Future) Add a real `public/og-image.png` (1200×630) for Open Graph

---

### 15. Expand SEO metadata

- [ ] Open `src/app/layout.tsx`
- [ ] Replace the minimal metadata with:
  ```tsx
  export const metadata: Metadata = {
    title: 'Sara Abouroumia — Full Stack Engineer',
    description:
      'Full stack software engineer specialising in cloud, deployment, and production systems. Currently at Nextarp B.V. Open to remote work and relocation.',
    metadataBase: new URL('https://sara-abouroumia-portfolio.vercel.app'),
    openGraph: {
      title: 'Sara Abouroumia — Full Stack Engineer',
      description:
        'Full stack software engineer specialising in cloud, deployment, and production systems.',
      url: 'https://sara-abouroumia-portfolio.vercel.app',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: 'Sara Abouroumia — Full Stack Engineer',
      description:
        'Full stack software engineer specialising in cloud, deployment, and production systems.',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
  ```
- [ ] (Optional but recommended) Create a 1200×630 PNG and add `openGraph: { images: ['/og-image.png'] }` and `twitter: { images: ['/og-image.png'] }`
- [ ] Test with [opengraph.xyz](https://www.opengraph.xyz) after deploying

---

### 16. Set up `src/` directory layout

> Only do this if you haven't already done it in task #5. This is the modern Next.js convention.

- [ ] Create `src/` at the repo root
- [ ] Move `app/` → `src/app/`
- [ ] Move `components/` → `src/components/` (already done in task #5 if you chose this path)
- [ ] Move `data/` → `src/data/` (created in task #7)
- [ ] Update `tsconfig.json`:
  ```json
  "paths": {
    "@/*": ["./src/*"]
  }
  ```
- [ ] Update `next.config.ts` if it references any paths
- [ ] Run `npm run build` to confirm everything resolves
- [ ] Run `npm run dev` and smoke-test the site

---

## ✅ FINAL CHECKS (do these last)

- [ ] Run `npm run lint` — fix any ESLint warnings
- [ ] Run `npm run build` — confirm zero errors
- [ ] Run `npm run dev` — visually check every section looks correct
- [ ] Open DevTools → Network tab → confirm no 404s for assets
- [ ] Open DevTools → Console tab → confirm zero errors or warnings
- [ ] Check the live Vercel deploy after pushing — confirm it builds successfully
- [ ] Test on mobile (375px) — confirm sections don't overflow (Tailwind responsive utilities will help here)
- [ ] Test keyboard navigation — Tab through the page and confirm focus order makes sense
- [ ] Check the resume PDF link works in production

---

## 📌 Commit strategy (suggested order)

```
1. chore: add prettier, format all files
2. refactor: move components out of app/, set up src/ structure
3. refactor: extract data arrays into src/data/
4. feat: migrate all inline styles to Tailwind classes
5. fix: remove 'use client' from page.tsx
6. fix: remove onMouseEnter/Leave DOM manipulation in Projects
7. fix: replace index keys with stable keys
8. fix: rename resume PDF, clean public/ dir
9. feat: expand OG/SEO metadata in layout
10. chore: remove @next/font, update package.json
```
