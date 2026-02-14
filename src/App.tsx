import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
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
