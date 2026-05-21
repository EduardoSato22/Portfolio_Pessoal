import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Analista de Suporte Técnico JR',
      company: 'Laticínios Verde Campo',
      period: 'Abr 2025 – Atual',
      location: 'Lavras, MG',
      isCurrent: true,
      highlights: [
        'Suporte técnico N1/N2 para ~500 usuários, reduzindo tempo médio de resolução de chamados',
        'Automatizei fluxos de onboarding/offboarding com Power Automate, eliminando processos manuais recorrentes',
        'Criei integrações entre sistemas internos usando n8n, conectando ERP, e-mail e ferramentas Microsoft 365',
        'Gerencio Active Directory, Office 365 e infraestrutura de rede corporativa',
        'Apoio ao deploy e manutenção de sistemas ERP, atuando como ponte entre TI e áreas de negócio',
      ],
    },
    {
      id: 2,
      title: 'Assistente de TI',
      company: 'Laticínios Verde Campo',
      period: 'Ago 2024 – Mar 2025',
      location: 'Lavras, MG',
      isCurrent: false,
      highlights: [
        'Atendimento a chamados de hardware e software, com foco em resolução rápida e documentação',
        'Realizei inventário e controle de ativos de TI, organizando base de dados de equipamentos',
        'Configuração de estações de trabalho, impressoras e periféricos para usuários corporativos',
        'Suporte a ferramentas Microsoft 365 (Teams, SharePoint, Outlook, OneDrive)',
      ],
    },
    {
      id: 3,
      title: 'Encarregado de Depósito',
      company: 'Lojas REDE',
      period: 'Nov 2022 – Jul 2024',
      location: '',
      isCurrent: false,
      highlights: [
        'Liderança de equipe de 4 pessoas, com foco em organização e cumprimento de metas',
        'Controle de estoque via sistema ERP, reduzindo divergências por inventário',
        'Organização logística de recebimento, armazenagem e expedição de produtos',
        'Experiência com liderança e gestão de processos, base para atuação em projetos de TI',
      ],
    },
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
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Experiência Profissional
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`border-l-4 pl-6 ${exp.isCurrent ? 'border-sky-500' : 'border-gray-300 dark:border-gray-600'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-sky-400 font-medium mt-0.5">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0 md:text-right shrink-0">
                  <div>{exp.period}</div>
                  {exp.location && <div>{exp.location}</div>}
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500/70 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
