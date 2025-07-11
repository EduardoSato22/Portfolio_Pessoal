import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import minhaFoto from './public/Minha_foto.jpeg'

// Assumindo que seus componentes de UI estão neste caminho
import { Button } from './src/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './src/components/ui/card.jsx'
import { Badge } from './src/components/ui/badge.jsx'

import { 
  Mail, 
  Download,
  User,
  Briefcase,
  GraduationCap,
  Award,
  MapPin, 
  Linkedin,
  Github,  
  ExternalLink,
  Menu,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import './App.css'

// DADOS DO PORTFÓLIO (centralizados para facilitar a edição)
const portfolioData = {
  navItems: [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'education', label: 'Formação' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contato' },
  ],
  experiences: [
    {
      title: 'Analista de Suporte Técnico JR',
      company: 'Laticínios Verde Campo',
      period: 'Maio 2024 - Atual',
      location: 'Lavras, MG',
      description: 'Responsável pelo suporte técnico, manutenção de sistemas de TI e gestão de infraestrutura para garantir a continuidade das operações da empresa',
      current: true
    },
    {
      title: 'Assistente de TI',
      company: 'Laticínios Verde Campo',
      period: 'Ago 2023 - Abr 2024',
      location: 'Lavras, MG',
      description: 'Suporte técnico a usuários, manutenção de hardware e software, e assistência em projetos de tecnologia da informação'
    },
    {
      title: 'Encarregado de Depósito',
      company: 'Lojas REDE',
      period: 'Mar 2022 - Fev 2023',
      description: 'Gestão de estoque, coordenação de equipe e otimização de processos logísticos do depósito'
    },
  ],
  skills: [
    { name: 'Python', level: 90 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Power Automate', level: 95 },
    { name: 'N8N (Automação)', level: 90 },
    { name: 'Hardware e Robótica', level: 80 },
    { name: 'Microsoft Office 365', level: 90 },
    { name: 'Redes de Computadores', level: 70 },
    { name: 'Sistemas Operacionais (Windows/Linux)', level: 85 },
  ],
  education: [
      {
          institution: 'Unilavras Centro Universitário',
          course: 'Análise e Desenvolvimento de Sistemas',
          type: 'Ensino Superior',
      },
      {
          institution: 'Microcamp',
          course: 'Curso Técnico - Hardware e Robótica',
          type: 'Curso Técnico',
      }
  ],
  certifications: [
    {
        name: 'Construindo Cultura de Respeito: Livre de Assédio e Discriminação',
        issuer: 'Trillio',
    },
    // Adicione mais certificações aqui
  ]
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('') // '', 'sending', 'success', 'error'

  // Efeito para monitorar a seção visível na tela (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      for (const item of portfolioData.navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para rolagem suave ao clicar no menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  // Funções para o formulário de contato
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }
    setFormStatus('sending')
    try {
      // IMPORTANTE: Substitua pela sua URL do Formspree
      const response = await fetch('https://formspree.io/f/manjrjge', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('A resposta da rede não foi OK.')
      }
    } catch (error) {
      console.error('Erro no envio do formulário:', error)
      setFormStatus('error')
    }
  }

  // RENDERIZAÇÃO DO COMPONENTE PRINCIPAL
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-700">
      
      {/* SEÇÃO HEADER (CABEÇALHO E NAVEGAÇÃO) */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-bold text-xl text-slate-800">
              Eduardo Sato
            </motion.div>

            {/* Navegação Desktop */}
            <div className="hidden md:flex space-x-2">
              {portfolioData.navItems.map((item) => (
                <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'}`}>
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Botão Menu Mobile */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {portfolioData.navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item.id ? 'text-blue-600 bg-blue-100' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* SEÇÃO HERO (INÍCIO) */}
        <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">Eduardo Sato</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">Analista de Suporte Técnico JR em TI</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Acredito que a excelência não é apenas um objetivo, mas uma filosofia de vida. Dedico-me a cada projeto, buscando sempre superar expectativas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => scrollToSection('contact')}>
                    <Mail className="mr-2 h-4 w-4" /> Entre em Contato
                  </Button>
                  {/* Para o Download funcionar, coloque o CV na pasta /public */}
                  <Button as="a" href="./public/Curriculo_Eduardo_Sato.pdf" download variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img src={minhaFoto}alt="Foto de perfil de Eduardo Sato" className="w-full h-full object-cover"/>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* SEÇÃO ABOUT (SOBRE MIM) */}
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sobre Mim</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:col-span-3">
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Minha abordagem é pautada pela paixão e pelo compromisso com a qualidade. Acredito que a verdadeira excelência vem da combinação de habilidades técnicas e interpessoais.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Busco constantemente aprimorar ambas para entregar resultados que realmente fazem a diferença. Atualmente trabalho como Analista de Suporte Técnico JR na Laticínios Verde Campo, em Lavras, MG.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
                        <div className="flex items-center space-x-3"> <MapPin className="text-blue-600" size={20} /> <span className="text-slate-600">Lavras, Minas Gerais, Brasil</span></div>
                        <div className="flex items-center space-x-3"> <Briefcase className="text-blue-600" size={20} /> <span className="text-slate-600">Laticínios Verde Campo</span></div>
                        <div className="flex items-center space-x-3"> <Linkedin className="text-blue-600" size={20} /> <a href="https://www.linkedin.com/in/esato-" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/esato-</a></div>
                        <div className="flex items-center space-x-3"> <Github className="text-blue-600" size={20} /> <a href="https://github.com/EduardoSato22" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/EduardoSato22</a></div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* SEÇÃO EXPERIENCE (EXPERIÊNCIA) */}
        <section id="experience" className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experiência Profissional</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>
            <div className="relative border-l-2 border-slate-200 space-y-12 pl-8">
              {portfolioData.experiences.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-50"></div>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <CardTitle className="text-xl text-slate-800 flex items-center"> {exp.title} {exp.current && <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">Atual</Badge>} </CardTitle>
                          <CardDescription className="text-blue-600 font-medium mt-1"> {exp.company} </CardDescription>
                        </div>
                        <div className="text-sm text-slate-500 mt-2 md:mt-0 md:text-right"> <div>{exp.period}</div> {exp.location && <div>{exp.location}</div>} </div>
                      </div>
                    </CardHeader>
                    <CardContent> <p className="text-slate-600">{exp.description}</p> </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* SEÇÃO EDUCATION (FORMAÇÃO) */}
        <section id="education" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Formação e Certificações</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <Card className="h-full">
                            <CardHeader> <CardTitle className="flex items-center"> <GraduationCap className="mr-2 text-blue-600" /> Formação Acadêmica </CardTitle> </CardHeader>
                            <CardContent className="space-y-4">
                                {portfolioData.education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-slate-800">{edu.institution}</h3>
                                        <p className="text-slate-600">{edu.course} - <span className="text-sm text-slate-500">{edu.type}</span></p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <Card className="h-full">
                            <CardHeader> <CardTitle className="flex items-center"> <Award className="mr-2 text-blue-600" /> Certificações </CardTitle> </CardHeader>
                            <CardContent className="space-y-3">
                                {portfolioData.certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                                        <div>
                                            <p className="font-medium text-slate-800">{cert.name}</p>
                                            <p className="text-sm text-slate-600">{cert.issuer}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* SEÇÃO SKILLS (HABILIDADES) */}
        <section id="skills" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Habilidades e Competências</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.05 }} viewport={{ once: true }} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-slate-800">{skill.name}</span>
                                <span className="text-sm text-slate-600">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2.5">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.05 + 0.2 }} viewport={{ once: true }} className="bg-blue-600 h-2.5 rounded-full"></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* SEÇÃO CONTACT (CONTATO) */}
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Entre em Contato</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar sobre como posso contribuir para o seu projeto!
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
                        <Card><CardContent className="p-6"> <div className="flex items-center space-x-4"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"> <MapPin className="text-blue-600" size={24} /> </div> <div> <h3 className="font-semibold text-slate-800">Localização</h3> <p className="text-slate-600">Lavras, Minas Gerais, Brasil</p> </div> </div> </CardContent></Card>
                        <Card><CardContent className="p-6"> <div className="flex items-center space-x-4"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"> <Linkedin className="text-blue-600" size={24} /> </div> <div> <h3 className="font-semibold text-slate-800">LinkedIn</h3> <a href="https://www.linkedin.com/in/esato-" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center"> linkedin.com/in/esato- <ExternalLink size={16} className="ml-1" /> </a> </div> </div> </CardContent></Card>
                        <Card><CardContent className="p-6"> <div className="flex items-center space-x-4"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"> <Github className="text-blue-600" size={24} /> </div> <div> <h3 className="font-semibold text-slate-800">GitHub</h3><a href="https://github.com/EduardoSato22" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center"> github.com/EduardoSato22 <ExternalLink size={16} className="ml-1" /></a> </div> </div> </CardContent></Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <Card>
                            <CardHeader> <CardTitle>Envie uma Mensagem</CardTitle> <CardDescription> Preencha o formulário abaixo e entrarei em contato em breve. </CardDescription> </CardHeader>
                            <CardContent>
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                                        <input id="name" name="name" type="text" value={formData.name} onChange={handleFormChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Seu nome" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input id="email" name="email" type="email" value={formData.email} onChange={handleFormChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="seu@email.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleFormChange} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Sua mensagem..."></textarea>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={formStatus === 'sending'}>
                                                                                 {formStatus === 'sending' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Enviar Mensagem
                                    </Button>
                                    {formStatus === 'success' && <p className="text-green-600 text-sm flex items-center gap-2 mt-2"><CheckCircle size={16}/> Mensagem enviada com sucesso!</p>}
                                    {formStatus === 'error' && <p className="text-red-600 text-sm flex items-center gap-2 mt-2"><AlertTriangle size={16}/> Ocorreu um erro. Verifique os campos e tente novamente.</p>}
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
      </main>

      {/* SEÇÃO FOOTER (RODAPÉ) */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Eduardo Sato</h3>
          <p className="text-slate-300 mb-6">Analista de Suporte Técnico JR em TI</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/esato-" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn"> <Linkedin size={24} /> </a>
            <a href="https://github.com/EduardoSato22" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors" aria-label="GitHub"> <Github size={24} /> </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm"> &copy; {new Date().getFullYear()} Eduardo Sato. Todos os direitos reservados. </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
