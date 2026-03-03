import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const ROLE = 'Desenvolvedor FullStack'

function useTypewriter(text, speed = 50, startDelay = 300, pauseAtEnd = 2200) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!text) return

    let index = 0
    let timerId = null

    const clearTimer = () => {
      if (timerId != null) {
        clearTimeout(timerId)
        timerId = null
      }
    }

    const type = () => {
      setDisplay(text.slice(0, index + 1))
      index += 1
      if (index < text.length) {
        timerId = setTimeout(type, speed)
      } else {
        timerId = setTimeout(restart, pauseAtEnd)
      }
    }

    const restart = () => {
      setDisplay('')
      index = 0
      timerId = setTimeout(type, speed)
    }

    timerId = setTimeout(type, startDelay)

    return () => clearTimer()
  }, [text, speed, startDelay, pauseAtEnd])

  return display
}

const Home = () => {
  const roleText = useTypewriter(ROLE, 45, 400, 2500)

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section com visual de terminal */}
      <motion.header
        id="home"
        className="mb-16 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-200 dark:bg-gray-800 border-4 border-sky-500 rounded-full flex items-center justify-center mb-6 shadow-lg overflow-hidden"
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
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Eduardo Sato
        </motion.h1>

        <motion.h2
          className="mt-2 text-xl sm:text-2xl font-medium text-sky-500 dark:text-sky-400 font-mono flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <span>{roleText}</span>
          <span className="terminal-cursor-blink ml-0.5" aria-hidden="true" />
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Especialista em desenvolvimento full stack com foco em Java Spring Boot, React, Flutter e bancos de dados
          relacionais. Transformo requisitos de negócio em soluções robustas, seguras e bem documentadas, prontas para
          produção.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
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

      <Projects />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
