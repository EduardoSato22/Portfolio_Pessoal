import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

const Curriculum = lazy(() => import('./pages/Curriculum'))
const NotFound = lazy(() => import('./pages/NotFound'))

function AppContent() {
  const { theme } = useTheme()

  return (
    <Router>
      <div className={`gradient-bg text-gray-200 antialiased smooth-scroll ${theme === 'light' ? 'light' : ''}`}>
        <ScrollProgress />
        <Navigation />
        <main>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/curriculo" element={<Curriculum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
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

