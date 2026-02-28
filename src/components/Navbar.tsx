import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-hangout-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">DoPlans</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-hangout-500 transition-colors">Funciones</a>
          <a href="#screens" className="text-sm font-medium text-gray-600 hover:text-hangout-500 transition-colors">La App</a>
          <a href="#how" className="text-sm font-medium text-gray-600 hover:text-hangout-500 transition-colors">Cómo funciona</a>
          <a href="#organizers" className="text-sm font-medium text-gray-600 hover:text-hangout-500 transition-colors">Organizadores</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="px-5 py-2.5 rounded-full bg-hangout-500 text-white text-sm font-semibold hover:bg-hangout-600 transition-colors shadow-lg shadow-hangout-500/25"
          >
            Descargar gratis
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Funciones</a>
          <a href="#screens" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>La App</a>
          <a href="#how" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Cómo funciona</a>
          <a href="#organizers" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Organizadores</a>
          <a href="#download" className="block w-full text-center px-5 py-2.5 rounded-full bg-hangout-500 text-white text-sm font-semibold" onClick={() => setMobileOpen(false)}>
            Descargar gratis
          </a>
        </div>
      )}
    </nav>
  )
}
