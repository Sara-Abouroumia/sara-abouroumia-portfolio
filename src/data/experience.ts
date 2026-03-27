export type Role = {
  company: string
  role: string
  date: string
  location: string
  bullets: string[]
}

export const roles: Role[] = [
  {
    company: 'Nextarp B.V.',
    role: 'Full Stack Software Engineer (Cloud & DevOps)',
    date: 'Jul 2024 — Present',
    location: 'Remote, Netherlands',
    bullets: [
      'Production deployments on Azure, GCP, and Microsoft Partner Center',
      'Spring Boot microservices, React web apps, React Native mobile apps',
      'Full app store release lifecycle on Play Store & App Store via EAS Build',
      'ERPNext/Frappe customisation with custom modules and REST API integrations',
      'CI/CD pipelines with Docker and GitHub Actions for zero-downtime deployments',
      'Contributing to .NET Word Add-in solutions',
    ],
  },
  {
    company: 'Mazaka Yazilim',
    role: 'React Web Developer (Part-Time)',
    date: 'Sep 2022 — Dec 2023',
    location: 'Kayseri, Turkey',
    bullets: [
      'Developed responsive React UIs and modernised legacy codebases',
      'Delivered client-aligned features collaborating cross-functionally',
    ],
  },
  {
    company: 'Mazaka Yazilim',
    role: 'Web Developer Intern',
    date: 'Jun 2022 — Aug 2022',
    location: 'Kayseri, Turkey',
    bullets: ['Built a full-stack authentication system using React, Node.js, and JWT'],
  },
]
