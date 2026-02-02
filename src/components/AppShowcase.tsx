import { useState } from 'react';
import PhoneMockup from './PhoneMockup';
import './AppShowcase.css';

type ScreenType = 'home' | 'events' | 'profile' | 'chat' | 'discover';

const AppShowcase = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('home');

  const screens = [
    { id: 'home' as ScreenType, label: 'Inicio', description: 'Tu feed personalizado con los planes de tus amigos y recomendaciones basadas en tus intereses.' },
    { id: 'events' as ScreenType, label: 'Eventos', description: 'Descubre eventos increíbles cerca de ti. Filtra por categoría, fecha y distancia.' },
    { id: 'chat' as ScreenType, label: 'Chat', description: 'Mantente conectado con tus amigos. Chats individuales y grupales para coordinar planes.' },
    { id: 'profile' as ScreenType, label: 'Perfil', description: 'Tu espacio personal. Muestra tus intereses, eventos y conecta con personas afines.' },
    { id: 'discover' as ScreenType, label: 'Descubrir', description: 'Conoce gente nueva con intereses similares. Expande tu círculo social.' },
  ];

  return (
    <section className="app-showcase" id="app">
      <div className="showcase-container">
        <div className="showcase-header">
          <span className="showcase-label">La Aplicación</span>
          <h2 className="showcase-title">
            Explora todas las <span className="highlight">vistas</span>
          </h2>
          <p className="showcase-subtitle">
            Una interfaz intuitiva diseñada para que disfrutes cada momento
          </p>
        </div>

        <div className="showcase-content">
          <div className="showcase-tabs">
            {screens.map((screen) => (
              <button
                key={screen.id}
                className={`showcase-tab ${activeScreen === screen.id ? 'active' : ''}`}
                onClick={() => setActiveScreen(screen.id)}
              >
                {screen.label}
              </button>
            ))}
          </div>

          <div className="showcase-main">
            <div className="showcase-phone">
              <PhoneMockup screen={activeScreen} />
            </div>
            
            <div className="showcase-info">
              <h3 className="showcase-info-title">
                {screens.find(s => s.id === activeScreen)?.label}
              </h3>
              <p className="showcase-info-description">
                {screens.find(s => s.id === activeScreen)?.description}
              </p>
              
              <div className="showcase-features-list">
                {activeScreen === 'home' && (
                  <>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Feed personalizado</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Planes del día</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Búsqueda rápida</span>
                    </div>
                  </>
                )}
                {activeScreen === 'events' && (
                  <>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Filtros por categoría</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Eventos cercanos</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Asistentes confirmados</span>
                    </div>
                  </>
                )}
                {activeScreen === 'chat' && (
                  <>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Chats grupales</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Mensajes directos</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Notificaciones en tiempo real</span>
                    </div>
                  </>
                )}
                {activeScreen === 'profile' && (
                  <>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Estadísticas personales</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Intereses y hobbies</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Historial de eventos</span>
                    </div>
                  </>
                )}
                {activeScreen === 'discover' && (
                  <>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Match por intereses</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Personas cercanas</span>
                    </div>
                    <div className="showcase-feature-item">
                      <span className="feature-check">✓</span>
                      <span>Conexiones seguras</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
