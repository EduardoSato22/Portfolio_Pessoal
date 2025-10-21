import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Verificar tema salvo no localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }
    // Se não há tema salvo, usar preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    // Aplicar tema ao documento
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Salvar tema no localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
