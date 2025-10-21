import React from 'react'
import { motion } from 'framer-motion'
import { Server, MapPin, Zap, Globe, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "API REST Full com Cache e JWT",
      description: "API RESTful completa com sistema de cache, autenticação JWT, e interface web para interação com recursos. Inclui monitoramento de cache em tempo real.",
      technologies: ["Node.js", "Express", "JWT", "Cache"],
      previewUrl: "https://backend-api-rest-full-cache-jwt.vercel.app/",
      githubUrl: "https://github.com/EduardoSato22/Backend_API_RestFull_Cache_JWT",
      icon: Server,
      color: "blue"
    },
    {
      id: 2,
      title: "CEP Fácil - API Correios",
      description: "Ferramenta web para consulta de CEP e endereços em todo o Brasil. Interface intuitiva com busca por CEP ou endereço, utilizando API ViaCEP.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      previewUrl: "https://cepapicorreios.vercel.app/",
      githubUrl: "https://github.com/EduardoSato22/CEP_API_Correios",
      icon: MapPin,
      color: "blue"
    },
    {
      id: 3,
      title: "API Pokemon",
      description: "API para consulta de informações sobre Pokémon, incluindo dados detalhados, estatísticas e imagens. Interface responsiva e moderna.",
      technologies: ["React", "API", "JavaScript"],
      previewUrl: "https://api-pokemon-taupe.vercel.app/",
      githubUrl: "https://github.com/EduardoSato22/Api_Pokemon",
      icon: Zap,
      color: "blue"
    }
  ]

  return (
    <motion.section
      id="projects"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Meus Projetos
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <p className="text-lg text-gray-300 mb-8 text-center">
          Uma seleção dos projetos que desenvolvi, demonstrando minhas
          habilidades técnicas e criatividade.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-700 rounded-lg p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-6 h-6 text-sky-400 mr-3" />
                <h4 className="text-xl font-bold text-white">
                  {project.title}
                </h4>
              </div>
              
              <div className="mb-4">
                <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={project.previewUrl}
                    title={`Preview ${project.title}`}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition-colors inline-flex items-center"
                >
                  <Globe size={16} className="mr-2" />
                  Ver Projeto
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded transition-colors inline-flex items-center"
                >
                  <Github size={16} className="mr-2" />
                  Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects