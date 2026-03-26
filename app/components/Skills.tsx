type SkillGroup = {
     category: string
     skills: string[]
   }
   
   const skillGroups: SkillGroup[] = [
     {
       category: 'Backend',
       skills: ['Spring Boot', '.NET Framework', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'MySQL', 'Redis'],
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
   
   export default function Skills() {
     return (
       <section id="skills" style={{
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
             Technical Skills
           </span>
         </div>
   
         <h2 style={{
           fontFamily: 'var(--font-serif)',
           fontSize: '32px',
           color: '#e8e4d9',
           marginBottom: '40px',
         }}>
           What I Work With
         </h2>
   
         <div style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
           gap: '16px',
         }}>
           {skillGroups.map((group) => (
             <div
               key={group.category}
               style={{
                 background: '#141820',
                 border: '1px solid #2a3245',
                 borderRadius: '8px',
                 padding: '20px',
               }}
             >
               <div style={{
                 fontFamily: 'var(--font-mono)',
                 fontSize: '10px',
                 color: '#e8b84b',
                 letterSpacing: '0.1em',
                 textTransform: 'uppercase',
                 marginBottom: '14px',
               }}>
                 {group.category}
               </div>
   
               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                 {group.skills.map((skill) => (
                   <span
                     key={skill}
                     style={{
                       fontFamily: 'var(--font-sans)',
                       fontSize: '11px',
                       color: '#8a94a8',
                       background: '#1f2a3a',
                       padding: '4px 10px',
                       borderRadius: '3px',
                     }}
                   >
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </section>
     )
   }