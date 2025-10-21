import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = React.useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    // Aplicar tema ao documento
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Salvar tema no localStorage
    localStorage.setItem('theme', newTheme)
  }

  React.useEffect(() => {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      const root = document.documentElement
      if (savedTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [])

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
