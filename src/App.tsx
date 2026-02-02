import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import Download from './components/Download'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <Download />
      <Footer />
    </div>
  )
}

export default App
