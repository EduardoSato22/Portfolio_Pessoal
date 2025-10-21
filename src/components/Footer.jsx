import React from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="text-center border-t border-gray-800 pt-8">
      <h3 className="text-2xl font-bold text-white mb-4">Eduardo Sato</h3>
      <p className="text-gray-400 mb-6">Desenvolvedor FullStack</p>
      <div className="flex justify-center items-center gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/edsato"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/EduardoSato22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="mailto:contato@eduardosato.com"
          className="text-gray-400 hover:text-sky-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={28} />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; 2025 Eduardo Sato. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
