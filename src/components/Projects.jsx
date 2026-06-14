import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, Globe, Github, X, FileJson, ExternalLink, Clock, Lock, ShoppingBag, Building2 } from 'lucide-react'

const SWAGGER_URL = 'http://app-full-stack-crm.onrender.com/swagger-ui/index.html'

const projectsData = [
  {
    id: 2,
    featured: true,
    title: 'Delicatto · E-commerce Full Stack',
    shortDescription:
      'A Doceria Delicatto precisava vender online com pagamentos reais. Desenvolvi o e-commerce completo — do checkout com PIX/cartão via Mercado Pago ao painel admin com pedidos em tempo real via Socket.IO. Cliente real, em produção.',
    technologies: ['React 18', 'Node.js', 'Express', 'Socket.IO', 'Prisma', 'PostgreSQL', 'Mercado Pago', 'JWT'],
    previewUrl: 'https://www.doceriadelicatto.com.br/',
    githubUrl: null,
    swaggerUrl: null,
    isPrivate: true,
    isProduction: true,
    renderColdStart: false,
    icon: ShoppingBag,
    image: '/images/delicatto-ecommerce.jpeg',
    detail: {
      context:
        'A Doceria Delicatto precisava de mais do que um site vitrine — precisava de uma loja funcional. Fui responsável por todo o desenvolvimento: da modelagem do banco (15 modelos Prisma/PostgreSQL) ao painel admin com kanban em tempo real. Resultado: e-commerce em produção com PIX, cartão de crédito e acompanhamento de pedidos ao vivo.',
      features: [
        'Pagamentos PIX e cartão de crédito via Mercado Pago (integração completa com webhooks)',
        'Tempo real via Socket.IO: status do pedido atualizado ao vivo para cliente e admin',
        'Painel admin kanban (arrastar e soltar) para gestão de pedidos em tempo real',
        'Autenticação dupla JWT: admin e cliente separados com httpOnly cookies',
        'Upload e otimização de imagens de produtos via Cloudinary',
        'E-mails transacionais (confirmação de pedido, notificações) com Resend',
        'Backend: Node.js, Express, Prisma ORM, PostgreSQL (Supabase) — 15 modelos',
        'Frontend: React 18, Vite, Zustand (estado global); Admin: HTML + JS vanilla',
        'Deploy: backend no Render, frontend e admin na Vercel',
      ],
      architecture:
        'dellicato/\n├── backend/   → Node.js + Express + Prisma + Socket.IO\n├── frontend/  → React 18 + Vite + Zustand\n└── admin/     → Kanban HTML + JS + Socket.IO\n\nIntegrações externas:\n  Mercado Pago  → PIX + cartão + webhooks\n  Cloudinary    → storage de imagens\n  Resend        → e-mails transacionais\n  Supabase      → PostgreSQL em produção',
      links: [
        { label: 'Ver e-commerce', url: 'https://www.doceriadelicatto.com.br/' },
      ],
    },
  },
  {
    id: 1,
    featured: false,
    title: 'RetailFlow · CRM Full Stack',
    shortDescription:
      'Para demonstrar arquitetura enterprise full stack, construí um CRM completo com JWT + Spring Security, CRUD protegido, documentação Swagger interativa, Docker Compose e deploy independente de backend e frontend em produção.',
    technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    previewUrl: 'https://retailflow-front.vercel.app/',
    githubUrl: 'https://github.com/EduardoSato22/APP_Full_Stack_CRM',
    swaggerUrl: SWAGGER_URL,
    isPrivate: false,
    isProduction: false,
    renderColdStart: true,
    icon: Server,
    image: '/images/retailflow-crm.jpg',
    detail: {
      context:
        'Projeto que demonstra domínio de arquitetura full stack enterprise: autenticação JWT com Spring Security, CRUD completo com relacionamento por usuário autenticado, documentação Swagger interativa e ambientes de dev/prod isolados com Docker Compose.',
      features: [
        'Autenticação e autorização com JWT + Spring Security (BCrypt, tokens com expiração)',
        'CRUD completo de clientes e produtos com relacionamento por usuário autenticado',
        'Documentação interativa da API via Swagger/OpenAPI (springdoc-openapi)',
        'Backend: Java 17, Spring Boot, Spring Data JPA, PostgreSQL (prod) / H2 (dev), Maven',
        'Frontend: React 18, TypeScript, Vite, React Router DOM, Material UI, Axios',
        'Docker Compose para ambiente local; backend no Render, frontend na Vercel',
        'CORS configurado por ambiente, variáveis de ambiente separadas para dev/prod',
      ],
      architecture:
        'retailflow/\n├── backend/   → API REST Java/Spring Boot\n├── frontend/  → SPA React + TypeScript\n└── docker-compose.yml\n\nEndpoints principais:\n  POST /api/auth/register | /api/auth/login\n  GET/POST/PUT/DELETE /api/customers (protegido)\n  GET/POST/PUT/DELETE /api/products  (protegido)',
      links: [
        { label: 'Aplicação (Frontend)', url: 'https://retailflow-front.vercel.app/' },
        { label: 'Documentação Swagger (API)', url: SWAGGER_URL },
        { label: 'Repositório no GitHub', url: 'https://github.com/EduardoSato22/APP_Full_Stack_CRM' },
      ],
    },
  },
  {
    id: 3,
    featured: false,
    title: 'LR Móveis · Site Institucional',
    shortDescription:
      'LR Móveis precisava de um site que transmitisse a qualidade premium dos seus produtos. Entregamos um site institucional com scroll scrubbing via canvas frame-sequence (zero jank), animações GSAP e cobertura de testes E2E. Cliente real, em produção.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vitest', 'Playwright'],
    previewUrl: 'https://lr-moveis-planejados.vercel.app/',
    githubUrl: null,
    swaggerUrl: null,
    isPrivate: true,
    isProduction: true,
    renderColdStart: false,
    icon: Building2,
    image: '/images/lr-moveis.jpeg',
    detail: {
      context:
        'LR Móveis Planejados queria um site que transmitisse qualidade premium. A solução técnica central: scroll scrubbing com canvas frame-sequence — vídeo de apresentação dos produtos animado pelo scroll do usuário, sem travamentos. Construído com Next.js 15, TypeScript estrito e cobertura de testes E2E com Playwright.',
      features: [
        'Scroll scrubbing via canvas frame-sequence: frames pré-extraídos de vídeo renderizados em canvas conforme o scroll — zero jank',
        'Canvas desabilitado em mobile com fallback para imagem estática (performance em dispositivos touch)',
        'Animações de alta performance com GSAP + scroll suave com Lenis',
        'TypeScript estrito em 91.4% do código-base',
        'Testes unitários com Vitest + testes E2E com Playwright',
        'Next.js 15 com Turbopack para build ultrarrápido em desenvolvimento',
        'Tailwind CSS com Framer Motion para transições de componentes',
      ],
      architecture:
        'Next.js 15 (App Router) + TypeScript\n\nDestaques técnicos:\n  canvas frame-sequence → scroll scrubbing zero jank\n  GSAP + Lenis         → animações e scroll suave\n  Vitest + Playwright  → testes unit + E2E\n  Turbopack            → dev build ultrarrápido\n\nDeploy: Vercel (produção)',
      links: [
        { label: 'Ver site', url: 'https://lr-moveis-planejados.vercel.app/' },
      ],
    },
  },
]

function ProductionBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] bg-green-500/15 border border-green-500/30 text-green-400 px-2.5 py-0.5 rounded-full font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Em produção
    </span>
  )
}

function PrivateBadge() {
  return (
    <span className="inline-flex items-center gap-1 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded text-sm cursor-default select-none">
      <Lock size={13} />
      Repositório Privado
    </span>
  )
}

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null
  const { detail, title, technologies, previewUrl, githubUrl, swaggerUrl, image, id, renderColdStart, isPrivate, isProduction } = project
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
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl sm:max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3 pr-4 flex-wrap">
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            {isProduction && <ProductionBadge />}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 sm:p-6 space-y-5">
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700/80 aspect-video border border-gray-300 dark:border-gray-600">
            <img
              src={imageSrc}
              alt={`Preview do projeto ${title}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 text-center">
            Role para ver a descrição completa, recursos e links do projeto.
          </p>
          {renderColdStart && (
            <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs rounded-lg px-3 py-2">
              <Clock size={13} className="mt-0.5 flex-shrink-0" />
              <span>O backend roda no Render (plano gratuito) e pode levar <strong>até 30 segundos</strong> para acordar na primeira requisição. Aguarde o carregamento inicial.</span>
            </div>
          )}
          {isPrivate && (
            <div className="flex items-center gap-2 bg-gray-500/10 border border-gray-400/30 text-gray-600 dark:text-gray-400 text-xs rounded-lg px-3 py-2">
              <Lock size={13} className="flex-shrink-0" />
              <span>Repositório privado — projeto desenvolvido para cliente.</span>
            </div>
          )}
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
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Github size={16} />
              Código
            </a>
          ) : (
            <PrivateBadge />
          )}
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
      <h3 className="font-display text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Meus Projetos
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-transparent">
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              className={`bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover-lift border border-gray-200 dark:border-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800${project.featured ? ' md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <project.icon className="w-6 h-6 text-sky-400 mr-3 flex-shrink-0" />
                <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                {project.isPrivate && (
                  <span className="ml-auto flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                    <Lock size={11} />
                    privado
                  </span>
                )}
              </div>
              {project.isProduction && (
                <div className="mb-3">
                  <ProductionBadge />
                </div>
              )}
              <div className="relative w-full overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-600 mb-4 aspect-video group border border-gray-300 dark:border-gray-600">
                <img
                  src={project.image || `https://picsum.photos/seed/${project.id}/800/450`}
                  alt={`Preview do projeto ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
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
                {project.githubUrl ? (
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
                ) : null}
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
              {project.renderColdStart && (
                <p className="mt-2 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                  <Clock size={11} />
                  Backend pode levar ~30s para iniciar (Render free tier)
                </p>
              )}
              <p className="mt-2 text-xs text-sky-500 dark:text-sky-400">Clique no card para mais detalhes</p>
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
