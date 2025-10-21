import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, Award, ChevronDown, ChevronUp, Calendar, Eye, 
  Cloud, Code, Server, FileCode, Network, Shield, Cog, Terminal, 
  BarChart2, Layout, BrainCircuit, MessageSquare, Brain, BookOpen, 
  Rocket, HeartHandshake, Users 
} from 'lucide-react'

const Education = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  const certifications = [
    // --- CERTIFICAÇÕES PRINCIPAIS (VISÍVEIS POR PADRÃO) ---
    {
      id: 1,
      title: "Crie um site simples usando HTML, CSS e Javascript",
      institution: "Fundação Bradesco",
      year: "2024",
      icon: FileCode,
      color: "pink",
      file: "/Certificados/Certificado Bradesco.pdf"
    },
    {
      id: 2,
      title: "Python Fundamental 1",
      institution: "IFSC",
      year: "2024",
      icon: Code,
      color: "yellow",
      file: "/Certificados/Python Fundamental 1.pdf"
    },
    {
      id: 3,
      title: "Projeto de Sistemas Web",
      institution: "IFRS",
      year: "2024",
      icon: Layout,
      color: "indigo",
      file: "/Certificados/Projeto de Sistemas Web.pdf"
    },
    {
      id: 4,
      title: "Lógica de Programação com JavaScript",
      institution: "Alura",
      year: "2024",
      icon: Code,
      color: "yellow",
      file: "/Certificados/Curso Lógica de programação_ mergulhe em programação com JavaScript.pdf"
    },
    {
      id: 5,
      title: "AI-900: Fundamentos de IA no Azure",
      institution: "Fundação Bradesco",
      year: "2025",
      icon: Cloud,
      color: "blue",
      file: "/Certificados/Certificado IA-900 Microsoft.pdf"
    },
    {
      id: 6,
      title: "Curso Windows Server",
      institution: "Alura",
      year: "2024",
      icon: Server,
      color: "blue",
      file: "/Certificados/Eduardo Henrique Silva Sato - Curso Windows Server - Alura.pdf"
    },
    {
      id: 7,
      title: "Introdução ao Pentest na Prática",
      institution: "Solyd",
      year: "2024",
      icon: Shield,
      color: "red",
      file: "/Certificados/certificado-introducao-pentest.pdf"
    },
    {
      id: 8,
      title: "Cabeamento Estruturado em Redes",
      institution: "UNILAVRAS",
      year: "2024",
      icon: Network,
      color: "green",
      file: "/Certificados/Cabeamento Estruturado em Redes de Computadores (UNILAVRAS) .pdf"
    },
    
    // --- CERTIFICAÇÕES ADICIONAIS (OCULTAS INICIALMENTE) ---
    {
      id: 9,
      title: "Análise de Negócios em Soluções de Dados",
      institution: "Enap",
      year: "2025",
      icon: BarChart2,
      color: "teal",
      file: "/Certificados/Certificado analise_de_negocios_no_desenvolvimento_de_solucoes_baseadas_em_dados.pdf",
      isExtra: true
    },
    {
      id: 10,
      title: "Automação de Sistemas",
      institution: "IFRS",
      year: "2024",
      icon: Cog,
      color: "purple",
      file: "/Certificados/Automação de Sistemas.pdf",
      isExtra: true
    },
    {
      id: 11,
      title: "Palestra - IA para Todos",
      institution: "UNILAVRAS",
      year: "2023",
      icon: BrainCircuit,
      color: "gray",
      file: "/Certificados/Palestra - IA para Todos.pdf",
      isExtra: true
    },
    {
      id: 12,
      title: "Comunicação Empresarial",
      institution: "IFRS",
      year: "2024",
      icon: MessageSquare,
      color: "green",
      file: "/Certificados/Comunicação Empresarial.pdf",
      isExtra: true
    },
    {
      id: 13,
      title: "Inteligência Emocional",
      institution: "Verde Campo",
      year: "2024",
      icon: Brain,
      color: "pink",
      file: "/Certificados/Inteligência Emocional.pdf",
      isExtra: true
    },
    {
      id: 14,
      title: "Bootcamps DIO: Educação e Empregabilidade",
      institution: "DIO",
      year: "2023",
      icon: Terminal,
      color: "gray",
      file: "/Certificados/BootCamp.pdf",
      isExtra: true
    },
    {
      id: 15,
      title: "Aula Inaugural - Santander Bootcamps",
      institution: "Santander / DIO",
      year: "2023",
      icon: BookOpen,
      color: "red",
      file: "/Certificados/Aula Inaugural Santander.pdf",
      isExtra: true
    },
    {
      id: 16,
      title: "Prepare-se Para a Jornada (Onboarding)",
      institution: "DIO",
      year: "2023",
      icon: Rocket,
      color: "purple",
      file: "/Certificados/Preparesse Jornada Onboarding.pdf",
      isExtra: true
    },
    {
      id: 17,
      title: "Saúde Mental",
      institution: "Verde Campo",
      year: "2025",
      icon: HeartHandshake,
      color: "blue",
      file: "/Certificados/Certificado de participação Saúde Mental.pdf",
      isExtra: true
    },
    {
      id: 18,
      title: "Diversidade, Inclusão e Viés Inconsciente",
      institution: "Verde Campo",
      year: "2024",
      icon: Users,
      color: "teal",
      file: "/Certificados/Diversidade, Inclusão e Viés Inconsciente.pdf",
      isExtra: true
    }
  ]

  const visibleCertifications = showAllCertifications 
    ? certifications 
    : certifications.filter(cert => !cert.isExtra)

  const toggleCertifications = () => {
    setShowAllCertifications(!showAllCertifications)
  }

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-900/50 text-blue-400",
      yellow: "bg-yellow-900/50 text-yellow-400",
      green: "bg-green-900/50 text-green-400",
      red: "bg-red-900/50 text-red-400",
      purple: "bg-purple-900/50 text-purple-400",
      gray: "bg-gray-700/50 text-gray-300",
      teal: "bg-teal-900/50 text-teal-400",
      indigo: "bg-indigo-900/50 text-indigo-400",
      pink: "bg-pink-900/50 text-pink-400"
    }
    return colorMap[color] || "bg-gray-700/50 text-gray-300"
  }

  return (
    <motion.section
      id="education"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Formação e Certificações
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="mb-8">
          <h4 className="text-2xl font-semibold text-white mb-6">
            Formação Acadêmica
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gray-700 rounded-lg p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-sky-400 mr-3" />
                <h5 className="text-lg font-semibold text-white">
                  Ensino Superior
                </h5>
              </div>
              <h6 className="font-semibold text-white mb-2">
                Unilavras Centro Universitário
              </h6>
              <p className="text-gray-300">
                Análise e Desenvolvimento de Sistemas
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-700 rounded-lg p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-sky-400 mr-3" />
                <h5 className="text-lg font-semibold text-white">
                  Curso Técnico
                </h5>
              </div>
              <h6 className="font-semibold text-white mb-2">Microcamp</h6>
              <p className="text-gray-300">
                Curso Técnico - Hardware e Robótica
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-semibold text-white">
              Certificações Principais
            </h4>
            <button
              onClick={toggleCertifications}
              className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              {showAllCertifications ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
              <span>{showAllCertifications ? 'Ver Menos' : 'Ver Todas'}</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-gray-700 rounded-lg p-4 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(cert.color)}`}>
                    <cert.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-sm text-white mb-1">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-gray-300 mb-2">{cert.institution}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {cert.year}
                      </span>
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300 transition-colors flex items-center"
                      >
                        <Eye size={12} className="mr-1" />
                        Ver
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Education
