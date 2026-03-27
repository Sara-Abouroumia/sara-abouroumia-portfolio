export type Project = {
  num: string
  title: string
  desc: string
  tags: string[]
  coming?: boolean
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'ERP Deployment System',
    desc: 'Custom ERPNext modules with Frappe framework. REST APIs and production deployment on GCP.',
    tags: ['ERPNext', 'Spring Boot', 'GCP'],
  },
  {
    num: '02',
    title: 'Mobile Release Pipeline',
    desc: 'End-to-end React Native app with EAS Build, Play Store & App Store deployment automation.',
    tags: ['React Native', 'EAS', 'Azure'],
  },
  {
    num: '03',
    title: 'Kaggle CV Research',
    desc: 'Computer vision models with TensorFlow, TPU acceleration, and custom preprocessing pipelines.',
    tags: ['TensorFlow', 'TPU', 'Python'],
  },
  {
    num: '04',
    title: 'Coming Soon',
    desc: 'Next project drops here. Building in public.',
    tags: ['TBD'],
    coming: true,
  },
]