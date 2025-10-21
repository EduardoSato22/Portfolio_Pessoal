import React from 'react'
import { motion } from 'framer-motion'
import { ZoomOut, ZoomIn, RefreshCw, Download, Maximize, Briefcase, GraduationCap, MapPin } from 'lucide-react'

const Curriculum = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <motion.header
        className="text-center mb-12 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-24 h-24 mx-auto bg-gray-800 border-4 border-sky-500 rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden"
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
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Eduardo Sato
        </motion.h1>
        
        <motion.h2
          className="mt-2 text-lg sm:text-xl font-medium text-sky-400"
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
          Currículo interativo com experiência em TI, desenvolvimento e
          automação
        </motion.p>
      </motion.header>

      {/* Canvas Embed Section */}
      <motion.section
        id="curriculo"
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">
                Currículo Interativo
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-2 rounded-lg transition-colors inline-flex items-center"
                  title="Diminuir zoom"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-2 rounded-lg transition-colors inline-flex items-center"
                  title="Aumentar zoom"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-2 rounded-lg transition-colors inline-flex items-center"
                  title="Resetar zoom"
                >
                  <RefreshCw size={16} />
                </button>
                <a
                  href="/Curriculo_Eduardo_Sato.pdf"
                  download
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </a>
                <button
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                >
                  <Maximize size={16} className="mr-2" />
                  Tela Cheia
                </button>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Visualize meu currículo de forma interativa. Use os controles para
              navegar, zoom e explorar todos os detalhes.
            </p>
          </div>

          {/* Canvas Container */}
          <div className="canvas-container bg-white rounded-xl overflow-hidden">
            <div className="canva-embed-container">
              <iframe
                loading="lazy"
                className="canva-iframe"
                src="https://www.canva.com/design/DAGz140kiGQ/-qnu9Hdqm-w3I5SNaSq0_w/view?embed"
                allowFullScreen
                title="Currículo de Eduardo Sato"
              />
            </div>
            
            <div className="mt-4 text-center">
              <a
                href="https://www.canva.com/design/DAGz140kiGQ/-qnu9Hdqm-w3I5SNaSq0_w/view?utm_content=DAGz140kiGQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors text-sm"
              >
                Curriculo Analista de Requisitos
              </a>
              <span className="text-gray-500 text-sm ml-2">de Eduardosato22</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Info Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-sky-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Experiência</h4>
              <p className="text-gray-300 text-sm">3+ anos em TI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-sky-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Formação</h4>
              <p className="text-gray-300 text-sm">
                Análise e Desenvolvimento de Sistemas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-sky-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Localização</h4>
              <p className="text-gray-300 text-sm">Lavras, MG</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Curriculum