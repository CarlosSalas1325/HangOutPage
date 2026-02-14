import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] py-2 transition-all duration-[400ms]">
      <div className={`absolute inset-0 backdrop-blur-[20px] border-b transition-all duration-[400ms] ${
        isScrolled 
          ? 'bg-white/95 border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-white/5 border-white/10'
      }`} />
      
      <div className="max-w-[1200px] mx-auto px-8 py-3 flex items-center justify-between relative z-10">
        <div className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src={logo} 
            alt="Hangout!" 
            className="h-[45px] w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:drop-shadow-[0_6px_20px_rgba(139,92,246,0.5)]" 
          />
        </div>
        
        <button 
          className={`md:hidden flex flex-col gap-1.5 p-2 z-50 ${isMobileMenuOpen ? 'fixed right-8' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <ul className={`flex list-none gap-8 m-0 p-0 max-md:fixed max-md:inset-0 max-md:bg-bg-dark/95 max-md:backdrop-blur-2xl max-md:flex-col max-md:items-center max-md:justify-center max-md:transition-all max-md:duration-300 ${
          isMobileMenuOpen ? 'max-md:opacity-100 max-md:visible' : 'max-md:opacity-0 max-md:invisible'
        }`}>
          <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-[1.15rem] tracking-wide relative py-2 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-purple after:to-primary-pink after:rounded after:transition-all after:duration-300 hover:after:w-full ${
            isScrolled ? 'text-text-dark hover:text-primary-purple' : 'text-white'
          }`}>Inicio</a></li>
          <li><a href="#caracteristicas" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-[1.15rem] tracking-wide relative py-2 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-purple after:to-primary-pink after:rounded after:transition-all after:duration-300 hover:after:w-full ${
            isScrolled ? 'text-text-dark hover:text-primary-purple' : 'text-white'
          }`}>Características</a></li>
          <li><a href="#app" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-[1.15rem] tracking-wide relative py-2 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-purple after:to-primary-pink after:rounded after:transition-all after:duration-300 hover:after:w-full ${
            isScrolled ? 'text-text-dark hover:text-primary-purple' : 'text-white'
          }`}>La App</a></li>
          <li><a href="#descargar" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-[1.15rem] tracking-wide relative py-2 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-purple after:to-primary-pink after:rounded after:transition-all after:duration-300 hover:after:w-full ${
            isScrolled ? 'text-text-dark hover:text-primary-purple' : 'text-white'
          }`}>Descargar</a></li>
        </ul>
        
        <button className="flex items-center gap-2 bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan text-white px-6 py-3 rounded-full font-bold text-[0.9rem] transition-all duration-300 shadow-[0_4px_20px_rgba(168,85,247,0.5)] overflow-hidden relative group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.7)] hover:scale-105 max-md:hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-primary-cyan via-primary-pink to-primary-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10">Únete Ahora</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
