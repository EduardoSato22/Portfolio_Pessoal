import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Linkedin, Github, ExternalLink, Loader2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mvgwngje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Falha no envio da rede')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Entre em Contato
      </h3>
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-transparent">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Estou sempre aberto a novas oportunidades e colaborações. Vamos
          conversar sobre como posso contribuir para o seu projeto!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Localização</h4>
                  <p className="text-gray-700 dark:text-gray-300">Lavras, Minas Gerais, Brasil</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/edsato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors flex items-center"
                  >
                    linkedin.com/in/edsato
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center">
                  <Github className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <a
                    href="https://github.com/EduardoSato22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors flex items-center"
                  >
                    github.com/EduardoSato22
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-transparent"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Envie uma Mensagem
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Preencha o formulário abaixo e entrarei em contato em breve.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Sua mensagem..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>

            {submitStatus === 'success' && (
              <motion.div
                className="mt-4 p-4 bg-green-900/50 text-green-300 border border-green-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mt-4 p-4 bg-red-900/50 text-red-300 border border-red-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Erro ao enviar mensagem. Tente novamente mais tarde.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
