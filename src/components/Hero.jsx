import React from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <motion.header
      id="home"
      className="text-center mb-16 pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-800 border-4 border-sky-500 rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src="/Minha_foto.jpeg"
          alt="Eduardo Sato"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
      
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Eduardo Sato
      </motion.h1>
      
      <motion.h2
        className="mt-2 text-xl sm:text-2xl font-medium text-sky-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Desenvolvedor FullStack
      </motion.h2>
      
      <motion.p
        className="mt-4 max-w-2xl mx-auto text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Acredito que a excelência não é apenas um objetivo, mas uma filosofia
        de vida. Dedico-me a cada projeto, buscando sempre superar
        expectativas.
      </motion.p>
      
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
        >
          <Mail size={16} className="mr-2" />
          Entre em Contato
        </a>
        <Link
          to="/curriculo"
          className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
        >
          <FileText size={16} className="mr-2" />
          Ver Currículo
        </Link>
      </motion.div>
    </motion.header>
  )
}

export default Hero

