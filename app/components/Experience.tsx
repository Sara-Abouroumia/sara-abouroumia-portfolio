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
       <section id="experience" style={{
         padding: '64px 48px',
         borderBottom: '1px solid #2a3245',
       }}>
   
         <div style={{
           display: 'flex',
           alignItems: 'center',
           gap: '8px',
           marginBottom: '8px',
         }}>
           <div style={{ width: '24px', height: '1px', background: '#e8b84b' }} />
           <span style={{
             fontFamily: 'var(--font-mono)',
             fontSize: '11px',
             color: '#e8b84b',
             letterSpacing: '0.12em',
             textTransform: 'uppercase',
           }}>
             Experience
           </span>
         </div>
   
         <h2 style={{
           fontFamily: 'var(--font-serif)',
           fontSize: '32px',
           color: '#e8e4d9',
           marginBottom: '40px',
         }}>
           Where I&apos;ve Worked
         </h2>
   
         <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
           {roles.map((role, index) => (
             <div
               key={index}
               style={{
                 display: 'grid',
                 gridTemplateColumns: '1px 1fr',
                 gap: '0 28px',
               }}
             >
               {/* Timeline line + dot */}
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <div style={{
                   width: '7px',
                   height: '7px',
                   borderRadius: '50%',
                   background: '#e8b84b',
                   marginLeft: '-3px',
                   marginTop: '4px',
                   flexShrink: 0,
                 }} />
                 {index < roles.length - 1 && (
                   <div style={{
                     width: '1px',
                     flex: 1,
                     background: '#2a3245',
                     marginTop: '6px',
                     marginBottom: '0',
                   }} />
                 )}
               </div>
   
               {/* Content */}
               <div style={{ paddingBottom: index < roles.length - 1 ? '36px' : '0' }}>
                 <div style={{
                   fontFamily: 'var(--font-sans)',
                   fontSize: '15px',
                   fontWeight: 500,
                   color: '#e8e4d9',
                 }}>
                   {role.company}
                 </div>
   
                 <div style={{
                   fontFamily: 'var(--font-mono)',
                   fontSize: '11px',
                   color: '#e8b84b',
                   margin: '3px 0',
                 }}>
                   {role.role}
                 </div>
   
                 <div style={{
                   fontFamily: 'var(--font-mono)',
                   fontSize: '10px',
                   color: '#8a94a8',
                   marginBottom: '12px',
                 }}>
                   {role.date} · {role.location}
                 </div>
   
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                   {role.bullets.map((bullet, i) => (
                     <li
                       key={i}
                       style={{
                         fontFamily: 'var(--font-sans)',
                         fontSize: '13px',
                         color: '#8a94a8',
                         lineHeight: 1.7,
                         paddingLeft: '14px',
                         position: 'relative',
                         marginBottom: '2px',
                       }}
                     >
                       <span style={{
                         position: 'absolute',
                         left: 0,
                         color: '#a07e2a',
                       }}>—</span>
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