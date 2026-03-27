export const navLinks = ['home', 'projects', 'experience', 'skills', 'contact'] as const
export type NavLink = (typeof navLinks)[number]
