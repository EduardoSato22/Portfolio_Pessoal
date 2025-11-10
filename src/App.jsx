import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import Footer from './components/Footer'

function AppContent() {
  const { theme } = useTheme()

  return (
    <Router>
      <div className={`gradient-bg text-gray-200 antialiased smooth-scroll ${theme === 'light' ? 'light' : ''}`}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo" element={<Curriculum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

