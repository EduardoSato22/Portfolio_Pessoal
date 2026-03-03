import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, MapPin, Zap, Globe, Github, X, FileJson, ExternalLink } from 'lucide-react'

const SWAGGER_URL = 'http://app-full-stack-crm.onrender.com/swagger-ui/index.html'

const projectsData = [
  {
    id: 1,
    title: 'RetailFlow · CRM de Clientes e Catálogo de Produtos',
    shortDescription: 'CRM full stack (Frameworks Web II). Backend Spring Boot, frontend React, documentação Swagger, deploy Render + Vercel.',
    technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    previewUrl: 'https://retailflow-front.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22?tab=repositories&q=retailflow',
    swaggerUrl: SWAGGER_URL,
    icon: Server,
    image: null,
    detail: {
      context: 'Projeto final da disciplina Frameworks Web II (Unilavras). CRM acadêmico completo para gestão de clientes e catálogo de produtos.',
      features: [
        'CRUD completo de clientes e produtos, com relacionamento por usuário',
        'Autenticação e autorização com JWT e Spring Security',
        'Documentação viva da API via Swagger/OpenAPI (springdoc-openapi)',
        'Backend: Java 17, Spring Boot, Spring Data JPA, PostgreSQL/H2, Maven',
        'Frontend: React 18, TypeScript, Vite, React Router DOM, Material UI, Axios',
        'Deploy: backend no Render, frontend na Vercel; scripts e Docker Compose para ambiente local',
        'Senhas com BCrypt; tokens JWT com expiração configurável; CORS e variáveis de ambiente para produção',
      ],
      architecture: 'retailflow/ → backend/ (API REST Java/Spring), frontend/ (SPA React), docker-compose.yml. Endpoints: POST /api/auth/register e /login; GET/POST/PUT/DELETE /api/customers e /api/products (rotas protegidas com Bearer token).',
      links: [
        { label: 'Aplicação (Frontend)', url: 'https://retailflow-front.vercel.app/' },
        { label: 'Documentação Swagger (API)', url: SWAGGER_URL },
        { label: 'Repositórios no GitHub', url: 'https://github.com/EduardoSato22?tab=repositories&q=retailflow' },
      ],
    },
  },
  {
    id: 2,
    title: 'RetailFlow Mobile · App Flutter',
    shortDescription: 'Desafio final de Desenvolvimento Mobile II. App Flutter consumindo o backend RetailFlow no Render.',
    technologies: ['Flutter', 'Dart', 'Provider', 'REST API', 'JWT'],
    previewUrl: 'https://retailflow-front.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22?tab=repositories&q=retailflow',
    swaggerUrl: SWAGGER_URL,
    icon: Zap,
    image: null,
    detail: {
      context: 'Aplicativo Flutter (mobile/web/desktop) para consumo do backend CRM RetailFlow hospedado no Render, com banco PostgreSQL (Aiven). Atende ao desafio final da disciplina Desenvolvimento Mobile II.',
      features: [
        'Arquitetura em camadas: Views → Components → Providers → Services → DAO → Models',
        'Estado global com Provider; comunicação HTTP com token JWT em shared_preferences',
        'Internacionalização com intl para valores e datas',
        'Telas: Login, Dashboard, listas e formulários de clientes e produtos (RefreshIndicator, FAB, validação)',
        'Drawer global para navegação e logout',
        'Mesmo contrato da API do backend (auth/login, clientes, produtos)',
      ],
      architecture: 'lib/main.dart (bootstrap e tema Material 3); config/constants.dart (baseUrl do backend); models, services, providers, views e components. Usuário demo: demo@retailflow.com / demo123.',
      links: [
        { label: 'Backend (API)', url: 'http://app-full-stack-crm.onrender.com' },
        { label: 'Documentação Swagger', url: SWAGGER_URL },
        { label: 'Repositórios RetailFlow', url: 'https://github.com/EduardoSato22?tab=repositories&q=retailflow' },
      ],
    },
  },
  {
    id: 3,
    title: 'API REST Full com Cache e JWT',
    shortDescription: 'API RESTful com autenticação JWT, estratégias de cache e interface web, focada em performance e segurança.',
    technologies: ['Node.js', 'Express', 'JWT', 'Cache'],
    previewUrl: 'https://backend-api-rest-full-cache-jwt.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22/Backend_API_RestFull_Cache_JWT',
    swaggerUrl: null,
    icon: Server,
    image: '/images/api-rest-cache-jwt.jpg',
    detail: {
      context: 'API REST completa com sistema de cache, autenticação JWT e interface web para interação com recursos. Inclui monitoramento de cache em tempo real.',
      features: [
        'Autenticação JWT para rotas protegidas',
        'Estratégias de cache para melhor performance',
        'Interface web para testes e demonstração',
        'Boas práticas de segurança e organização de código',
      ],
      architecture: 'Backend Node.js com Express; camada de cache; rotas protegidas e públicas.',
      links: [
        { label: 'Ver aplicação', url: 'https://backend-api-rest-full-cache-jwt.vercel.app/' },
        { label: 'Código no GitHub', url: 'https://github.com/EduardoSato22/Backend_API_RestFull_Cache_JWT' },
      ],
    },
  },
  {
    id: 4,
    title: 'CEP Fácil - API Correios',
    shortDescription: 'Ferramenta web para consulta de CEP e endereços no Brasil, com integração à API ViaCEP.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    previewUrl: 'https://cepapicorreios.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22/CEP_API_Correios',
    swaggerUrl: null,
    icon: MapPin,
    image: '/images/cep-api-correios.jpg',
    detail: {
      context: 'Projeto web para consulta de CEP e endereços em todo o Brasil. Interface intuitiva com busca por CEP ou por endereço (logradouro, cidade, UF), utilizando a API ViaCEP.',
      features: [
        'Busca por CEP (digitação formatada ou livre)',
        'Busca reversa por endereço (rua, cidade, estado)',
        'Interface responsiva e acessível',
        'Feedback visual de carregamento e erros',
      ],
      architecture: 'Front-end estático (HTML, CSS, JavaScript) consumindo a API pública ViaCEP.',
      links: [
        { label: 'Abrir aplicação', url: 'https://cepapicorreios.vercel.app/' },
        { label: 'Código no GitHub', url: 'https://github.com/EduardoSato22/CEP_API_Correios' },
      ],
    },
  },
  {
    id: 5,
    title: 'API Pokémon',
    shortDescription: 'Aplicação React para consulta de informações de Pokémon, com listagem e integração a API pública.',
    technologies: ['React', 'JavaScript', 'API'],
    previewUrl: 'https://api-pokemon-taupe.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22/Api_Pokemon',
    swaggerUrl: null,
    icon: Zap,
    image: '/images/api-pokemon.jpg',
    detail: {
      context: 'Aplicação React que consome API pública de Pokémon para exibir dados detalhados, estatísticas e imagens. Interface responsiva e moderna.',
      features: [
        'Listagem de Pokémon com paginação ou scroll',
        'Detalhes por Pokémon (tipos, estatísticas, imagens)',
        'Integração com API pública (PokeAPI ou similar)',
        'UI responsiva e feedback de carregamento',
      ],
      architecture: 'Single Page Application em React; chamadas HTTP à API; estado local ou hooks para listagem e detalhes.',
      links: [
        { label: 'Ver aplicação', url: 'https://api-pokemon-taupe.vercel.app/' },
        { label: 'Código no GitHub', url: 'https://github.com/EduardoSato22/Api_Pokemon' },
      ],
    },
  },
]

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null
  const { detail, title, technologies, previewUrl, githubUrl, swaggerUrl, image, id } = project
  const imageSrc = image || `https://picsum.photos/seed/${id}/800/450`

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-4">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>
        <div className="w-full flex-shrink-0 h-44 sm:h-52 max-h-[220px] bg-gray-100 dark:bg-gray-700/80 overflow-hidden border-b border-gray-200 dark:border-gray-700">
          <img
            src={imageSrc}
            alt={`Preview do projeto ${title}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="overflow-y-auto flex-1 min-h-0 p-4 sm:p-6 space-y-5">
          {detail.context && (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{detail.context}</p>
          )}
          {detail.features && detail.features.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Principais recursos</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                {detail.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          {detail.architecture && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Arquitetura / Estrutura</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-900 rounded-lg p-3 whitespace-pre-wrap">
                {detail.architecture}
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-sky-900/40 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          {detail.links && detail.links.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Links</h4>
              <div className="flex flex-wrap gap-2">
                {detail.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 text-sm"
                  >
                    <ExternalLink size={14} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <Globe size={16} />
            Ver projeto
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <Github size={16} />
            Código
          </a>
          {swaggerUrl && (
            <a
              href={swaggerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-amber-500/70 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <FileJson size={16} />
              Swagger (API)
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.section
      id="projects"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Meus Projetos
      </h3>
      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover-lift border border-gray-200 dark:border-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-600 mb-4" style={{ paddingTop: '56.25%' }}>
                <img
                  src={project.image || `https://picsum.photos/seed/${project.id}/800/450`}
                  alt={`Preview do projeto ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 rounded text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe size={14} />
                  Ver projeto
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-1.5 rounded text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                  Código
                </a>
                {project.swaggerUrl && (
                  <a
                    href={project.swaggerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-amber-500/70 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white px-3 py-1.5 rounded text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileJson size={14} />
                    Swagger
                  </a>
                )}
              </div>
              <p className="mt-3 text-xs text-sky-500 dark:text-sky-400">Clique no card para mais detalhes</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Projects
