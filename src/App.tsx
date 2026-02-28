import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import MapSection from './components/MapSection'
import HowItWorks from './components/HowItWorks'
import Organizers from './components/Organizers'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <MapSection />
      <HowItWorks />
      <Organizers />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}

export default App
