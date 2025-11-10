import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (e, item) => {
    e.preventDefault()
    closeMobileMenu()
    
    if (item.hash) {
      // Se estamos na mesma página, apenas faz scroll
      if (location.pathname === item.href) {
        const element = document.querySelector(item.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Se estamos em outra página, navega e depois faz scroll
        navigate(item.href)
        setTimeout(() => {
          const element = document.querySelector(item.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    } else {
      // Navegação normal sem hash
      navigate(item.href)
    }
  }

  const navItems = [
    { name: 'Início', href: '/', hash: '#home' },
    { name: 'Projetos', href: '/', hash: '#projects' },
    { name: 'Sobre', href: '/', hash: '#about' },
    { name: 'Experiência', href: '/', hash: '#experience' },
    { name: 'Formação', href: '/', hash: '#education' },
    { name: 'Habilidades', href: '/', hash: '#skills' },
    { name: 'Currículo', href: '/curriculo' },
    { name: 'Contato', href: '/', hash: '#contact' },
  ]

  // Função para verificar se um item de navegação está ativo
  const isActive = (item) => {
    // Verificar se o pathname corresponde
    if (location.pathname !== item.href) {
      return false
    }

    // Se o item tem hash, verificar se o hash atual corresponde
    if (item.hash) {
      return location.hash === item.hash
    }

    // Se o item não tem hash, verificar se não há hash na URL atual
    return !location.hash || location.hash === ''
  }

  // Scroll suave quando a rota muda
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white hover:text-sky-400 transition-colors">
            Eduardo Sato
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href + (item.hash || '')}
                onClick={(e) => handleNavClick(e, item)}
                className={`transition-colors cursor-pointer ${
                  isActive(item)
                    ? 'text-sky-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-sky-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-sky-400"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-gray-200 dark:border-gray-800 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href + (item.hash || '')}
                onClick={(e) => handleNavClick(e, item)}
                className={`transition-colors cursor-pointer ${
                  isActive(item)
                    ? 'text-sky-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-sky-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle className="w-full justify-center" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

