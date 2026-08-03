import { useCallback, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false)
    setContentReady(true)
  }, [])

  return (
    <ThemeProvider>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <Router>
        <div
          className={`min-h-screen bg-white dark:bg-gray-900 transition-[opacity,background-color,color] duration-700 flex flex-col ${
            contentReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
