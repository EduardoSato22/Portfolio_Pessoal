import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Linkedin, Github, Mail, Globe, BookOpen } from 'lucide-react'

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
      <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Disponível para oportunidades
              </span>
              <span className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
                <Globe size={11} />
                Aberto a trabalho remoto
              </span>
            </div>

            <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              Sou desenvolvedor full stack com foco em construir soluções que gerem impacto real para
              o negócio — unindo backend sólido em Java/Spring Boot, frontend moderno em React e
              automação inteligente com Power Automate e n8n.
            </p>
            <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              Atualmente atuo como Analista de Suporte Técnico JR na Laticínios Verde Campo, onde
              conecto infraestrutura e desenvolvimento: automatizo processos internos, integro sistemas
              e desenvolvimento soluções que aumentam a eficiência da operação.
            </p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Busco uma vaga como desenvolvedor onde possa aplicar e evoluir minhas habilidades em
              Java, React ou Flutter — presencialmente em Lavras/MG ou remotamente.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Lavras, Minas Gerais, Brasil</span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Laticínios Verde Campo</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-sky-400 flex-shrink-0" />
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
              <Github className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <a
                href="https://github.com/EduardoSato22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                github.com/EduardoSato22
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <a
                href="mailto:eduardosato22@gmail.com"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                eduardosato22@gmail.com
              </a>
            </div>

            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-2">
                Áreas de interesse
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Backend Java', 'Frontend React', 'Full Stack', 'Mobile Flutter', 'Automação'].map((tag) => (
                  <span key={tag} className="text-xs bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-violet-500/30 dark:border-violet-500/20"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-violet-400 flex-shrink-0" />
          <h4 className="text-base font-semibold text-gray-900 dark:text-white">
            Atualmente aprendendo
          </h4>
          <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
            MBA Engenharia de Software · Descomplica
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            'Arquitetura de Software',
            'Design Patterns',
            'Clean Architecture',
            'Metodologias Ágeis',
            'Engenharia de Requisitos',
            'Qualidade & Testes',
            'Gestão de Projetos de TI',
          ].map((topic) => (
            <span
              key={topic}
              className="text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-1 rounded-full font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </motion.div>
      </div>
    </motion.section>
  )
}

export default About
