import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="gradient-bg text-gray-200 antialiased smooth-scroll">
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

export default App
