import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
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

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-white hover:text-sky-400 transition-colors">
            Eduardo Sato
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href + (item.hash || '')}
                className={`transition-colors ${
                  location.pathname === item.href && !item.hash
                    ? 'text-sky-400 font-medium'
                    : 'text-gray-300 hover:text-sky-400'
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-sky-400"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-gray-800 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href + (item.hash || '')}
                className={`transition-colors ${
                  location.pathname === item.href && !item.hash
                    ? 'text-sky-400 font-medium'
                    : 'text-gray-300 hover:text-sky-400'
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
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
