import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-8xl font-bold text-sky-400 mb-4 font-mono"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Página não encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <Home size={16} className="mr-2" />
            Ir para o início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-gray-600 text-gray-400 hover:border-sky-500 hover:text-sky-400 px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <ArrowLeft size={16} className="mr-2" />
            Voltar
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
