import { useState, useEffect } from 'react';
import './Navbar.css';
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Hangout!" className="logo-image" />
        </div>
        
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#caracteristicas" onClick={() => setIsMobileMenuOpen(false)}>Características</a></li>
          <li><a href="#app" onClick={() => setIsMobileMenuOpen(false)}>La App</a></li>
          <li><a href="#descargar" onClick={() => setIsMobileMenuOpen(false)}>Descargar</a></li>
        </ul>
        
        <button className="navbar-cta">
          <span className="cta-text">Únete Ahora</span>
          <span className="cta-icon">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
