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
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Sobre Mim
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              Minha abordagem é pautada pela paixão e pelo compromisso com a
              qualidade. Acredito que a verdadeira excelência vem da
              combinação de habilidades técnicas e interpessoais.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              Busco constantemente aprimorar ambas para entregar resultados
              que realmente fazem a diferença. Atualmente trabalho como
              Analista de Suporte Técnico JR na Laticínios Verde Campo, em
              Lavras, MG.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span className="text-gray-300">Lavras, Minas Gerais, Brasil</span>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-sky-400" />
              <span className="text-gray-300">Laticínios Verde Campo</span>
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