import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎉',
      title: 'Crea Eventos',
      description: 'Organiza planes increíbles con tus amigos. Desde una cena hasta una fiesta épica.',
    },
    {
      icon: '🔍',
      title: 'Descubre',
      description: 'Encuentra eventos cerca de ti que coincidan con tus intereses y pasiones.',
    },
    {
      icon: '👥',
      title: 'Conecta',
      description: 'Conoce gente nueva con gustos similares y amplía tu círculo social.',
    },
    {
      icon: '💬',
      title: 'Chat Grupal',
      description: 'Comunícate fácilmente con tu grupo para coordinar todos los detalles.',
    },
    {
      icon: '📍',
      title: 'Ubicación',
      description: 'Comparte tu ubicación en tiempo real para que nadie se pierda.',
    },
    {
      icon: '🔔',
      title: 'Notificaciones',
      description: 'Recibe alertas de nuevos eventos y mensajes de tus amigos.',
    },
  ];

  return (
    <section className="features" id="caracteristicas">
      <div className="features-container">
        <div className="features-header">
          <span className="features-label">Características</span>
          <h2 className="features-title">
            Todo lo que necesitas para <span className="highlight">pasarla bien</span>
          </h2>
          <p className="features-subtitle">
            HANG OUT te ofrece todas las herramientas para organizar planes increíbles
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
