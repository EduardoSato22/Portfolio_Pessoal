import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Analista de Suporte Técnico JR",
      company: "Laticínios Verde Campo",
      period: "Abr 2025 - Atual",
      location: "Lavras, MG",
      description: "Responsável pelo suporte técnico, manutenção de sistemas de TI e gestão de infraestrutura para garantir a continuidade das operações da empresa.",
      isCurrent: true
    },
    {
      id: 2,
      title: "Assistente de TI",
      company: "Laticínios Verde Campo",
      period: "Ago 2024 – Mar 2025",
      location: "Lavras, MG",
      description: "Suporte técnico a usuários, manutenção de hardware e software, e assistência em projetos de tecnologia da informação.",
      isCurrent: false
    },
    {
      id: 3,
      title: "Encarregado de Depósito",
      company: "Lojas REDE",
      period: "Nov 2022 – Jul 2024",
      location: "",
      description: "Gestão de estoque, coordenação de equipe e otimização de processos logísticos do depósito.",
      isCurrent: false
    }
  ]

  return (
    <motion.section
      id="experience"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Experiência Profissional
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`border-l-4 pl-6 ${exp.isCurrent ? 'border-sky-500' : 'border-gray-600'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {exp.title}
                  </h4>
                  <p className="text-sky-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-gray-400 mt-1 md:mt-0">
                  <div>{exp.period}</div>
                  {exp.location && <div>{exp.location}</div>}
                </div>
              </div>
              <p className="text-gray-300">
                {exp.description}
              </p>
              {exp.isCurrent && (
                <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs mt-2">
                  Atual
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience