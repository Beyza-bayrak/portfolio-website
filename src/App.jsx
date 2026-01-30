import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Consulting from './components/Consulting'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkinda" element={<About />} />
            <Route path="/sertifikalar" element={<Certificates />} />
            <Route path="/egitim" element={<Education />} />
            <Route path="/yetenekler" element={<Skills />} />
            <Route path="/ilgi-alanlari" element={<Interests />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/danismanlik" element={<Consulting />} />
          </Routes>
        </main>
        
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
