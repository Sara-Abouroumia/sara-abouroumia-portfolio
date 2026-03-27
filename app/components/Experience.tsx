import SectionLabel from './SectionLabel'

type Role = {
     company: string
     role: string
     date: string
     location: string
     bullets: string[]
   }
   
   const roles: Role[] = [
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
       bullets: [
         'Built a full-stack authentication system using React, Node.js, and JWT',
       ],
     },
   ]
   
   export default function Experience() {
     return (
       <section id="experience" className="px-12 py-16 border-b border-border">
         <SectionLabel text="Experience" />
         
   
         <h2 className="font-serif text-[32px] text-foreground mb-10">
           Where I&apos;ve Worked
         </h2>
   
         <div className="flex flex-col">
           {roles.map((role, index) => (
             <div
               key={index}
               className="grid [grid-template-columns:1px_1fr] gap-x-7"
             >
               {/* Timeline line + dot ?  + connecting line  */}
               <div className="flex flex-col items-center">
                 <div className="w-[7px] h-[7px] rounded-full bg-accent -ml-[3px] mt-1 shrink-0" />
                 {index < roles.length - 1 && (
                   <div className="w-px flex-1 bg-border mt-1.5"/>
                 )}
               </div>
   
               {/* Content */}
               <div className={index < roles.length - 1 ? 'pb-9' : ''}>
                 <div className="font-sans text-[15px] font-medium text-foreground">
                   {role.company}
                 </div>
   
                 <div className="font-mono text-[11px] text-accent my-[3px]">
                   {role.role}
                 </div>
   
                 <div className="font-mono text-[10px] text-muted mb-3">
                   {role.date} · {role.location}
                 </div>
   
                 <ul className="list-none p-0 m-0">
                   {role.bullets.map((bullet, i) => (
                     <li
                       key={i}
                       className="font-sans text-[13px] text-muted leading-[1.7] pl-3.5 relative mb-0.5"
                     >
                       <span className="absolute left-0 text-accent-dim">—</span>
                       {bullet}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           ))}
         </div>
       </section>
     )
   }