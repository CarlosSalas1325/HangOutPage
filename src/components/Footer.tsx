import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Hangout!" className="footer-logo-image" />
            </div>
            <p className="footer-description">
              Conectando personas, creando momentos inolvidables.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Producto</h4>
              <a href="#" className="footer-link">Características</a>
              <a href="#" className="footer-link">Precios</a>
              <a href="#" className="footer-link">Descargar</a>
              <a href="#" className="footer-link">Actualizaciones</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Compañía</h4>
              <a href="#" className="footer-link">Sobre nosotros</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Carreras</a>
              <a href="#" className="footer-link">Prensa</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Soporte</h4>
              <a href="#" className="footer-link">Centro de ayuda</a>
              <a href="#" className="footer-link">Contacto</a>
              <a href="#" className="footer-link">Privacidad</a>
              <a href="#" className="footer-link">Términos</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 HANG OUT. Todos los derechos reservados.
          </p>
          <p className="footer-made">
            Hecho con ❤️ para conectar personas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
