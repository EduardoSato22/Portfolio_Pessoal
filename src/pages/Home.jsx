import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const ROLES = [
  'Desenvolvedor Full Stack',
  'Java · Spring Boot · React',
  'Automação · Power Automate · n8n',
]

function useTypewriter(texts, speed = 45, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const current = texts[roleIdx]
    let timeout

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2)
      } else {
        setRoleIdx((i) => (i + 1) % texts.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [display, phase, roleIdx, texts, speed, pause])

  return display
}

const Home = () => {
  const roleText = useTypewriter(ROLES)

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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

        <motion.div
          className="flex justify-center mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponível para novas oportunidades
          </span>
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
          className="mt-2 text-xl sm:text-2xl font-medium text-sky-500 dark:text-sky-400 font-mono flex items-center justify-center min-h-[2rem]"
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
          Desenvolvo sistemas completos — do backend em Java/Spring Boot ao frontend em React e apps
          mobile com Flutter. Especialista em automação de processos com Power Automate e n8n,
          reduzindo trabalho manual e aumentando eficiência operacional.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-2 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          {['Java', 'Spring Boot', 'React', 'Flutter', 'PostgreSQL', 'Docker', 'Power Automate', 'n8n'].map((tag) => (
            <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-0.5 rounded-full text-xs border border-gray-200 dark:border-gray-700">
              {tag}
            </span>
          ))}
        </motion.div>

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
          <a
            href="https://www.linkedin.com/in/edsato"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-400 hover:border-sky-500 hover:text-sky-400 px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <Linkedin size={16} className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/EduardoSato22"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-400 hover:border-sky-500 hover:text-sky-400 px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
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
