'use client'

type Project = {
     num: string
     title: string
     desc: string
     tags: string[]
     coming?: boolean
   }
   
   const projects: Project[] = [
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
   
   export default function 
   Projects() {
     return (
       <section id="projects" style={{
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
             Work & Projects
           </span>
         </div>
   
         <h2 style={{
           fontFamily: 'var(--font-serif)',
           fontSize: '32px',
           color: '#e8e4d9',
           marginBottom: '32px',
         }}>
           Things I&apos;ve Built
         </h2>
   
         <div style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
           gap: '16px',
         }}>
           {projects.map((project) => (
             <div
               key={project.num}
               style={{
                 background: '#141820',
                 border: `1px ${project.coming ? 'dashed' : 'solid'} #2a3245`,
                 borderRadius: '8px',
                 padding: '24px',
                 opacity: project.coming ? 0.5 : 1,
                 transition: 'border-color 0.2s',
               }}
               onMouseEnter={e => {
                 if (!project.coming) {
                   (e.currentTarget as HTMLDivElement).style.borderColor = '#a07e2a'
                 }
               }}
               onMouseLeave={e => {
                 (e.currentTarget as HTMLDivElement).style.borderColor = '#2a3245'
               }}
             >
               <div style={{
                 fontFamily: 'var(--font-mono)',
                 fontSize: '11px',
                 color: '#e8b84b',
                 marginBottom: '12px',
               }}>
                 {project.num}
               </div>
   
               <div style={{
                 fontFamily: 'var(--font-sans)',
                 fontSize: '14px',
                 fontWeight: 500,
                 color: '#e8e4d9',
                 marginBottom: '8px',
               }}>
                 {project.title}
               </div>
   
               <div style={{
                 fontFamily: 'var(--font-sans)',
                 fontSize: '12px',
                 color: '#8a94a8',
                 lineHeight: 1.6,
               }}>
                 {project.desc}
               </div>
   
               <div style={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 gap: '6px',
                 marginTop: '16px',
               }}>
                 {project.tags.map((tag) => (
                   <span key={tag} style={{
                     fontFamily: 'var(--font-mono)',
                     fontSize: '10px',
                     color: '#8a94a8',
                     background: '#1f2a3a',
                     padding: '3px 8px',
                     borderRadius: '3px',
                   }}>
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </section>
     )
   }