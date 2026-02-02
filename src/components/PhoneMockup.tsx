import './PhoneMockup.css';

interface PhoneMockupProps {
  screen: 'home' | 'events' | 'profile' | 'chat' | 'discover';
  className?: string;
}

const PhoneMockup = ({ screen, className = '' }: PhoneMockupProps) => {
  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HomeScreen />;
      case 'events':
        return <EventsScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'discover':
        return <DiscoverScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          {renderScreen()}
        </div>
        <div className="phone-home-indicator"></div>
      </div>
    </div>
  );
};

const HomeScreen = () => (
  <div className="screen home-screen">
    <div className="screen-header">
      <div className="header-greeting">
        <span className="greeting-text">¡Hola, María! 👋</span>
        <span className="greeting-sub">¿Qué planes tienes hoy?</span>
      </div>
      <div className="header-avatar">M</div>
    </div>
    
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <span className="search-placeholder">Buscar eventos o amigos...</span>
    </div>
    
    <div className="section-title">Planes para hoy</div>
    
    <div className="event-card featured">
      <div className="event-image" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
        <span className="event-emoji">🎸</span>
      </div>
      <div className="event-info">
        <span className="event-name">Concierto en el parque</span>
        <span className="event-time">📍 Parque Central • 7:00 PM</span>
        <div className="event-attendees">
          <div className="attendee">J</div>
          <div className="attendee">P</div>
          <div className="attendee">+5</div>
        </div>
      </div>
    </div>
    
    <div className="event-card">
      <div className="event-image" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
        <span className="event-emoji">☕</span>
      </div>
      <div className="event-info">
        <span className="event-name">Coffee & Chat</span>
        <span className="event-time">📍 Café Central • 4:00 PM</span>
      </div>
    </div>
    
    <div className="bottom-nav">
      <div className="nav-item active">🏠</div>
      <div className="nav-item">🔍</div>
      <div className="nav-item add">+</div>
      <div className="nav-item">💬</div>
      <div className="nav-item">👤</div>
    </div>
  </div>
);

const EventsScreen = () => (
  <div className="screen events-screen">
    <div className="screen-header-simple">
      <span className="header-title">Descubre Eventos</span>
    </div>
    
    <div className="category-pills">
      <div className="pill active">🎉 Todos</div>
      <div className="pill">🎵 Música</div>
      <div className="pill">🍕 Comida</div>
      <div className="pill">⚽ Deportes</div>
    </div>
    
    <div className="events-list">
      <div className="event-large-card">
        <div className="event-large-image" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
          <span className="event-large-emoji">🏃‍♂️</span>
          <div className="event-badge">HOY</div>
        </div>
        <div className="event-large-info">
          <span className="event-large-name">Maratón Urbana</span>
          <span className="event-large-details">📍 Centro • 6:00 AM</span>
          <span className="event-large-people">👥 128 asistirán</span>
        </div>
      </div>
      
      <div className="event-large-card">
        <div className="event-large-image" style={{ background: 'linear-gradient(135deg, #fa709a, #fee140)' }}>
          <span className="event-large-emoji">🎨</span>
          <div className="event-badge">MAÑANA</div>
        </div>
        <div className="event-large-info">
          <span className="event-large-name">Taller de Arte</span>
          <span className="event-large-details">📍 Galería Norte • 3:00 PM</span>
          <span className="event-large-people">👥 24 asistirán</span>
        </div>
      </div>
      
      <div className="event-large-card">
        <div className="event-large-image" style={{ background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' }}>
          <span className="event-large-emoji">🎤</span>
        </div>
        <div className="event-large-info">
          <span className="event-large-name">Karaoke Night</span>
          <span className="event-large-details">📍 Bar Luna • 9:00 PM</span>
          <span className="event-large-people">👥 45 asistirán</span>
        </div>
      </div>
    </div>
    
    <div className="bottom-nav">
      <div className="nav-item">🏠</div>
      <div className="nav-item active">🔍</div>
      <div className="nav-item add">+</div>
      <div className="nav-item">💬</div>
      <div className="nav-item">👤</div>
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="screen profile-screen">
    <div className="profile-header">
      <div className="profile-cover" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}></div>
      <div className="profile-avatar-large">M</div>
      <span className="profile-name">María García</span>
      <span className="profile-bio">Amante de la música y los buenos momentos ✨</span>
    </div>
    
    <div className="profile-stats">
      <div className="profile-stat">
        <span className="profile-stat-num">156</span>
        <span className="profile-stat-label">Amigos</span>
      </div>
      <div className="profile-stat">
        <span className="profile-stat-num">48</span>
        <span className="profile-stat-label">Eventos</span>
      </div>
      <div className="profile-stat">
        <span className="profile-stat-num">12</span>
        <span className="profile-stat-label">Creados</span>
      </div>
    </div>
    
    <div className="profile-section">
      <span className="profile-section-title">Intereses</span>
      <div className="interest-tags">
        <span className="tag">🎵 Música</span>
        <span className="tag">☕ Café</span>
        <span className="tag">🎨 Arte</span>
        <span className="tag">📚 Lectura</span>
      </div>
    </div>
    
    <div className="profile-section">
      <span className="profile-section-title">Próximos eventos</span>
      <div className="mini-event">
        <span>🎸 Concierto Jazz</span>
        <span className="mini-event-date">Hoy</span>
      </div>
      <div className="mini-event">
        <span>🍕 Pizza Night</span>
        <span className="mini-event-date">Mañana</span>
      </div>
    </div>
    
    <div className="bottom-nav">
      <div className="nav-item">🏠</div>
      <div className="nav-item">🔍</div>
      <div className="nav-item add">+</div>
      <div className="nav-item">💬</div>
      <div className="nav-item active">👤</div>
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="screen chat-screen">
    <div className="screen-header-simple">
      <span className="header-title">Mensajes</span>
    </div>
    
    <div className="chat-list">
      <div className="chat-item">
        <div className="chat-avatar">G</div>
        <div className="chat-info">
          <span className="chat-name">Grupo: Concierto 🎸</span>
          <span className="chat-preview">Juan: ¿A qué hora nos vemos?</span>
        </div>
        <div className="chat-meta">
          <span className="chat-time">2min</span>
          <span className="chat-badge">3</span>
        </div>
      </div>
      
      <div className="chat-item">
        <div className="chat-avatar">P</div>
        <div className="chat-info">
          <span className="chat-name">Pablo Ruiz</span>
          <span className="chat-preview">¡Nos vemos ahí! 🙌</span>
        </div>
        <div className="chat-meta">
          <span className="chat-time">15min</span>
        </div>
      </div>
      
      <div className="chat-item">
        <div className="chat-avatar">L</div>
        <div className="chat-info">
          <span className="chat-name">Laura Méndez</span>
          <span className="chat-preview">El evento estuvo increíble</span>
        </div>
        <div className="chat-meta">
          <span className="chat-time">1h</span>
        </div>
      </div>
      
      <div className="chat-item">
        <div className="chat-avatar">C</div>
        <div className="chat-info">
          <span className="chat-name">Grupo: Coffee Lovers ☕</span>
          <span className="chat-preview">Ana: Nueva cafetería abierta!</span>
        </div>
        <div className="chat-meta">
          <span className="chat-time">3h</span>
          <span className="chat-badge">8</span>
        </div>
      </div>
    </div>
    
    <div className="bottom-nav">
      <div className="nav-item">🏠</div>
      <div className="nav-item">🔍</div>
      <div className="nav-item add">+</div>
      <div className="nav-item active">💬</div>
      <div className="nav-item">👤</div>
    </div>
  </div>
);

const DiscoverScreen = () => (
  <div className="screen discover-screen">
    <div className="screen-header-simple">
      <span className="header-title">Conoce Gente</span>
    </div>
    
    <div className="discover-card">
      <div className="discover-image" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
        <span className="discover-initial">A</span>
      </div>
      <div className="discover-info">
        <span className="discover-name">Ana, 28</span>
        <span className="discover-location">📍 A 2 km de ti</span>
        <div className="discover-interests">
          <span className="mini-tag">🎵 Música</span>
          <span className="mini-tag">🎨 Arte</span>
          <span className="mini-tag">☕ Café</span>
        </div>
      </div>
      <div className="discover-actions">
        <button className="action-btn skip">✕</button>
        <button className="action-btn connect">💬</button>
        <button className="action-btn like">❤️</button>
      </div>
    </div>
    
    <div className="bottom-nav">
      <div className="nav-item">🏠</div>
      <div className="nav-item active">🔍</div>
      <div className="nav-item add">+</div>
      <div className="nav-item">💬</div>
      <div className="nav-item">👤</div>
    </div>
  </div>
);

export default PhoneMockup;
