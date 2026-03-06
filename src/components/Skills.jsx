import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const techSkills = [
    { name: 'Java & Spring Boot', level: 'Intermediário', percentage: 78 },
    { name: 'React & TypeScript', level: 'Intermediário', percentage: 78 },
    { name: 'Node.js & Express', level: 'Intermediário', percentage: 74 },
    { name: 'Flutter & Dart', level: 'Intermediário', percentage: 70 },
    { name: 'Python (dados e scripts)', level: 'Avançado', percentage: 90 },
    { name: 'PostgreSQL & Docker', level: 'Intermediário', percentage: 72 },
    { name: 'Power Automate / n8n', level: 'Avançado', percentage: 95 },
    { name: 'HTML, CSS & UI', level: 'Avançado', percentage: 85 },
  ]

  const softSkills = [
    'Tradução de linguagem técnica para o negócio, facilitando a comunicação com áreas não técnicas',
    'Visão de processos: foco em ganho de eficiência, padronização e redução de erros manuais',
    'Perfil colaborativo, acostumado a trabalhar em times multidisciplinares',
    'Organização e documentação clara de requisitos, fluxos e regras de negócio',
    'Compromisso com entrega e melhoria contínua, sempre buscando feedback'
  ]

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
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-transparent">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Como atuo em projetos
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Além do código, meu foco está em entender o problema de negócio, organizar informações
              e entregar soluções que realmente facilitem o dia a dia das pessoas usuárias.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              {softSkills.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Competências técnicas principais
            </h4>
            <div className="space-y-4">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white block">
                        {skill.name}
                      </span>
                      <span className="text-xs text-sky-500 dark:text-sky-300">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-sky-400 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ delay: index * 0.08 + 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills