import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Backend',
    color: 'sky',
    skills: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Node.js', 'Express', 'REST APIs', 'JWT', 'Maven'],
  },
  {
    category: 'Frontend',
    color: 'violet',
    skills: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'React Router', 'Framer Motion'],
  },
  {
    category: 'Mobile',
    color: 'emerald',
    skills: ['Flutter', 'Dart'],
  },
  {
    category: 'Banco de Dados',
    color: 'amber',
    skills: ['PostgreSQL', 'MySQL', 'H2', 'Spring Data JPA'],
  },
  {
    category: 'DevOps & Infra',
    color: 'rose',
    skills: ['Docker', 'Docker Compose', 'Vercel', 'Render', 'Git', 'GitHub', 'Linux', 'Active Directory', 'Office 365'],
  },
  {
    category: 'Automação & Dados',
    color: 'orange',
    skills: ['Power Automate', 'n8n', 'Python', 'Pandas', 'OpenAPI / Swagger'],
  },
]

const colorMap = {
  sky:     { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',     header: 'text-sky-400',    dot: 'bg-sky-500' },
  violet:  { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', header: 'text-violet-400', dot: 'bg-violet-500' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', header: 'text-emerald-400', dot: 'bg-emerald-500' },
  amber:   { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', header: 'text-amber-400',  dot: 'bg-amber-500' },
  rose:    { badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',   header: 'text-rose-400',   dot: 'bg-rose-500' },
  orange:  { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', header: 'text-orange-400', dot: 'bg-orange-500' },
}

const softSkills = [
  'Comunicação técnica clara com áreas de negócio',
  'Visão de processos e foco em eficiência operacional',
  'Trabalho em times multidisciplinares',
  'Documentação de requisitos e fluxos',
  'Entrega contínua com foco em qualidade',
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Habilidades e Competências
      </h3>
      <div className="w-full max-w-3xl mx-auto space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-transparent">
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => {
              const c = colorMap[group.color]
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h4 className={`text-sm font-semibold uppercase tracking-wide ${c.header}`}>
                      {group.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-full border font-medium ${c.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-transparent"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Como atuo em projetos
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
            {softSkills.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
