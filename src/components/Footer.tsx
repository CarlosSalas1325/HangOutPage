import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-bg-dark via-bg-darker to-[#1E0B3E] text-white py-16 px-8 border-t border-primary-purple/20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Hangout!" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Conectando personas, creando momentos inolvidables.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-purple rounded-xl text-xl transition-all duration-300 hover:-translate-y-1">📘</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-pink rounded-xl text-xl transition-all duration-300 hover:-translate-y-1">📸</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-cyan rounded-xl text-xl transition-all duration-300 hover:-translate-y-1">🐦</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary-yellow rounded-xl text-xl transition-all duration-300 hover:-translate-y-1">💼</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-2">Producto</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Características</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Precios</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Descargar</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Actualizaciones</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-2">Compañía</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Sobre nosotros</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Blog</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Carreras</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Prensa</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold mb-2">Soporte</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Centro de ayuda</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Contacto</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Privacidad</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Términos</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            © 2026 HANG OUT. Todos los derechos reservados.
          </p>
          <p>
            Hecho con ❤️ para conectar personas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
