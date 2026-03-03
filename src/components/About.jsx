import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Linkedin, Github } from 'lucide-react'

const About = () => {
  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Sobre Mim
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Atuo como desenvolvedor full stack com foco em construir soluções que gerem impacto real para o negócio,
              unindo uma base sólida de TI, suporte corporativo e desenvolvimento de software.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Trabalho com Java Spring Boot, React, Flutter, automação com Power Automate/N8N e bancos de dados
              relacionais como PostgreSQL. Minha abordagem combina excelência técnica, comunicação clara e visão de
              produto para entregar resultados previsíveis e de alta qualidade.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Atualmente atuo como Analista de Suporte Técnico JR na Laticínios Verde Campo, em Lavras (MG), onde
              conecto a prática de infraestrutura e suporte ao desenvolvimento de soluções que aumentam a eficiência da
              operação.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span className="text-gray-700 dark:text-gray-300">Lavras, Minas Gerais, Brasil</span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-sky-400" />
              <span className="text-gray-700 dark:text-gray-300">Laticínios Verde Campo</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-sky-400" />
              <a
                href="https://www.linkedin.com/in/edsato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                linkedin.com/in/edsato
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-sky-400" />
              <a
                href="https://github.com/EduardoSato22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                github.com/EduardoSato22
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About