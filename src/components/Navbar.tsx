import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Hangout!" className="logo-image" />
        </div>
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#app">La App</a></li>
          <li><a href="#descargar">Descargar</a></li>
        </ul>
        <button className="navbar-cta">Únete Ahora</button>
      </div>
    </nav>
  );
};

export default Navbar;
