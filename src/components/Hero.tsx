import PhoneMockup from './PhoneMockup';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      {/* Animated background elements */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-mesh-gradient"></div>
      <div className="hero-floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">La mejor app social de 2026</span>
          </div>
          
          <h1 className="hero-title">
            Conecta, Planea y
            <span className="highlight-wrapper">
              <span className="highlight">Disfruta</span>
              <svg className="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 9c30-4 60-7 100-7s70 3 100 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="hero-subtitle">
            HANG OUT es la app perfecta para organizar planes con amigos, 
            descubrir eventos cercanos y conocer gente nueva con intereses similares.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <span className="btn-content">
                <span className="btn-icon">📱</span>
                <span>Descargar App</span>
              </span>
              <span className="btn-shine"></span>
            </button>
            <button className="btn-secondary">
              <span className="btn-play">▶</span>
              <span>Ver Demo</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Usuarios activos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Eventos creados</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">⭐ Rating</span>
            </div>
          </div>
        </div>
        
        <div className="hero-phones">
          <div className="phones-glow"></div>
          <PhoneMockup screen="home" className="phone-left" />
          <PhoneMockup screen="events" className="phone-center" />
          <PhoneMockup screen="profile" className="phone-right" />
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
