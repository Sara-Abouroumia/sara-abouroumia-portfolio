export type SkillGroup = {
     category: string
     skills: string[]
}

export const skillGroups: SkillGroup[] = [
     {
          category: 'Backend',
          skills: ['Spring Boot', '.NET Framework', 'Node.js', 'REST APIs', 'JWT', 'Databases', 'Redis'],
     },
     {
          category: 'Frontend',
          skills: ['React.js', 'Next.js', 'Blazor WebAssembly', 'HTML/CSS', 'Bootstrap', 'Ant Design', 'Tailwind CSS'],
     },
     {
          category: 'Mobile',
          skills: ['React Native', 'EAS Build', 'Play Store', 'App Store', 'Flutter'],
     },
     {
          category: 'Cloud & DevOps',
          skills: ['Microsoft Azure', 'Google Cloud Platform', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Microsoft Partner Center'],
     },
     {
          category: 'ML / AI',
          skills: ['TensorFlow', 'Scikit-learn', 'Computer Vision', 'Regression Models', 'TPU Acceleration'],
     },
     {
          category: 'Tools & Platforms',
          skills: ['ERPNext/Frappe', 'Git/GitHub', 'Postman', 'Figma', 'Stripe API'],
     },
     {
          category: 'Languages',
          skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Dart', 'SQL'],
     },
]