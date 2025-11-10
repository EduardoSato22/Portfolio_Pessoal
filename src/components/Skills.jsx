import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'Python', percentage: 90 },
    { name: 'HTML & CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Power Automate', percentage: 95 },
    { name: 'N8N (Automação)', percentage: 90 },
    { name: 'Hardware e Robótica', percentage: 80 },
    { name: 'Microsoft Office 365', percentage: 90 },
    { name: 'Redes de Computadores', percentage: 70 },
    { name: 'Sistemas Operacionais', percentage: 85 }
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
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-sky-400 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills