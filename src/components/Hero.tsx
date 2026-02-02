import PhoneMockup from './PhoneMockup';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Conecta, Planea y <span className="highlight">Disfruta</span>
          </h1>
          <p className="hero-subtitle">
            HANG OUT es la app perfecta para organizar planes con amigos, 
            descubrir eventos cercanos y conocer gente nueva con intereses similares.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>📱</span> Descargar App
            </button>
            <button className="btn-secondary">
              Ver Demo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Usuarios</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Eventos</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-phones">
          <PhoneMockup screen="home" className="phone-left" />
          <PhoneMockup screen="events" className="phone-center" />
          <PhoneMockup screen="profile" className="phone-right" />
        </div>
      </div>
      <div className="hero-bg-decoration"></div>
    </section>
  );
};

export default Hero;
