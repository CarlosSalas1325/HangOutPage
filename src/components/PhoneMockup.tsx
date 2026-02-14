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
    <div className={`relative ${className}`}>
      <div className="relative w-[300px] h-[600px] bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 rounded-[50px] shadow-[0_30px_80px_rgba(168,85,247,0.4)] p-3 border-[10px] border-black/50 backdrop-blur-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black/80 rounded-b-3xl z-20 backdrop-blur-xl" />
        <div className="relative w-full h-full bg-gradient-to-br from-white via-purple-50/30 to-cyan-50/30 rounded-[42px] overflow-hidden shadow-inner">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-purple-50/50 via-white to-cyan-50/50 overflow-y-auto scrollbar-hide">
    <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-primary-purple/10 via-primary-pink/10 to-primary-cyan/10 backdrop-blur-xl border-b border-white/50">
      <div className="flex-1">
        <span className="block text-base font-bold bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent">¡Hola, María! 👋</span>
        <span className="block text-xs text-gray-600 font-medium">Descubre planes increíbles</span>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-purple via-primary-pink to-primary-cyan flex items-center justify-center text-white font-bold text-base shadow-lg shadow-primary-purple/30">M</div>
    </div>
    
    <div className="px-4 py-4">
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-primary-purple/20 shadow-lg shadow-primary-purple/10">
        <span className="text-base">🔍</span>
        <span className="text-sm text-gray-500 font-medium">Buscar eventos o amigos...</span>
      </div>
    </div>
    
    <div className="px-4 py-2">
      <span className="text-xs font-bold bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent uppercase tracking-wider">✨ Planes destacados</span>
    </div>
    
    <div className="px-4 pb-24 space-y-4">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-purple-500/20 overflow-hidden border-2 border-purple-100 hover:scale-105 transition-transform duration-300">
        <div className="relative h-24 flex items-center justify-center text-5xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899, #06B6D4)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 drop-shadow-lg">🎸</span>
        </div>
        <div className="p-4">
          <span className="block text-base font-bold text-gray-900 mb-1.5">Concierto en el parque</span>
          <span className="block text-xs text-gray-500 mb-3 font-medium">📍 Parque Central • Hoy 7:00 PM</span>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md">J</div>
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xs font-bold shadow-md">P</div>
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">+5</div>
            </div>
            <button className="px-4 py-1.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white text-xs font-bold rounded-full shadow-md hover:scale-105 transition-transform">
              Unirse
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-pink-500/20 overflow-hidden border-2 border-pink-100 hover:scale-105 transition-transform duration-300">
        <div className="relative h-20 flex items-center justify-center text-4xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #F472B6, #FBBF24)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 drop-shadow-lg">☕</span>
        </div>
        <div className="p-4">
          <span className="block text-base font-bold text-gray-900 mb-1.5">Coffee & Chat</span>
          <span className="block text-xs text-gray-500 font-medium">📍 Café Central • 4:00 PM</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-2xl border-t-2 border-primary-purple/10 flex items-center justify-around px-6 shadow-2xl">
      <div className="text-2xl opacity-100 transform hover:scale-125 transition-transform">🏠</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🔍</div>
      <div className="w-14 h-14 -mt-3 rounded-full bg-primary-purple flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-purple/50 hover:scale-110 transition-transform">+</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">💬</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">👤</div>
    </div>
  </div>
);

const EventsScreen = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-cyan-50/50 via-white to-purple-50/50 overflow-y-auto scrollbar-hide">
    <div className="flex items-center justify-center p-5 bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 backdrop-blur-xl border-b border-white/50">
      <span className="text-lg font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent">Descubre Eventos</span>
    </div>
    
    <div className="flex items-center gap-2 px-3 py-3 overflow-x-auto scrollbar-hide">
      <div className="px-3 py-1.5 bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan text-white rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-primary-purple/30 flex-shrink-0">🎉 Todos</div>
      <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 rounded-full text-xs font-bold whitespace-nowrap hover:border-primary-purple/50 transition-colors flex-shrink-0">🎵 Música</div>
      <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 rounded-full text-xs font-bold whitespace-nowrap hover:border-primary-pink/50 transition-colors flex-shrink-0">🍕 Comida</div>
      <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 rounded-full text-xs font-bold whitespace-nowrap hover:border-primary-cyan/50 transition-colors flex-shrink-0">⚽ Deportes</div>
      <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 rounded-full text-xs font-bold whitespace-nowrap hover:border-primary-yellow/50 transition-colors flex-shrink-0">🎬 Cine</div>
      <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 rounded-full text-xs font-bold whitespace-nowrap hover:border-primary-orange/50 transition-colors flex-shrink-0">🎨 Arte</div>
    </div>
    
    <div className="px-4 pb-24 space-y-4">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/20 overflow-hidden border-2 border-cyan-100">
        <div className="relative h-32 flex items-center justify-center text-6xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #22D3EE, #06B6D4, #0891B2)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 drop-shadow-lg">🏃‍♂️</span>
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-xl rounded-full text-xs font-black text-cyan-600 shadow-lg border-2 border-cyan-200">HOY</div>
        </div>
        <div className="p-4">
          <span className="block text-base font-bold text-gray-900 mb-1">Maratón Urbana</span>
          <span className="block text-xs text-gray-500 mb-2 font-medium">📍 Centro • 6:00 AM</span>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 font-semibold">👥 128 asistirán</span>
            <button className="px-4 py-1.5 bg-gradient-to-r from-primary-cyan to-primary-purple text-white text-xs font-bold rounded-full shadow-md">Ver más</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-orange-500/20 overflow-hidden border-2 border-orange-100">
        <div className="relative h-32 flex items-center justify-center text-6xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #FB923C, #F59E0B, #D97706)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 drop-shadow-lg">🎨</span>
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-xl rounded-full text-xs font-black text-orange-600 shadow-lg border-2 border-orange-200">MAÑANA</div>
        </div>
        <div className="p-4">
          <span className="block text-base font-bold text-gray-900 mb-1">Taller de Arte</span>
          <span className="block text-xs text-gray-500 mb-2 font-medium">📍 Galería Norte • 3:00 PM</span>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 font-semibold">👥 24 asistirán</span>
            <button className="px-4 py-1.5 bg-gradient-to-r from-primary-orange to-primary-yellow text-white text-xs font-bold rounded-full shadow-md">Ver más</button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-2xl border-t-2 border-primary-cyan/10 flex items-center justify-around px-6 shadow-2xl">
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🏠</div>
      <div className="text-2xl opacity-100 transform hover:scale-125 transition-transform">🔍</div>
      <div className="w-14 h-14 -mt-3 rounded-full bg-primary-purple flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-purple/50 hover:scale-110 transition-transform">+</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">💬</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">👤</div>
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50 overflow-y-auto scrollbar-hide">
    <div className="relative">
      <div className="h-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899, #F472B6)' }}>
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-purple via-primary-pink to-primary-cyan flex items-center justify-center text-white font-bold text-3xl border-4 border-white shadow-2xl shadow-primary-purple/50">M</div>
    </div>
    <div className="text-center pt-16 px-4">
      <span className="block text-lg font-bold bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent">María García</span>
      <span className="block text-xs text-gray-600 mt-1.5 font-medium">Amante de la música y los buenos momentos ✨</span>
    </div>
    
    <div className="flex items-center justify-around px-6 py-5">
      <div className="text-center">
        <span className="block text-xl font-black bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">156</span>
        <span className="block text-xs text-gray-600 font-semibold mt-1">Amigos</span>
      </div>
      <div className="w-px h-10 bg-gradient-to-b from-primary-purple to-primary-pink opacity-30" />
      <div className="text-center">
        <span className="block text-xl font-black bg-gradient-to-r from-primary-pink to-primary-cyan bg-clip-text text-transparent">48</span>
        <span className="block text-xs text-gray-600 font-semibold mt-1">Eventos</span>
      </div>
      <div className="w-px h-10 bg-gradient-to-b from-primary-pink to-primary-cyan opacity-30" />
      <div className="text-center">
        <span className="block text-xl font-black bg-gradient-to-r from-primary-cyan to-primary-purple bg-clip-text text-transparent">12</span>
        <span className="block text-xs text-gray-600 font-semibold mt-1">Creados</span>
      </div>
    </div>
    
    <div className="px-4 pb-24">
      <span className="block text-xs font-bold bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent uppercase tracking-wider mb-3">✨ Intereses</span>
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-4 py-2 bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 backdrop-blur-xl text-primary-purple rounded-2xl text-xs font-bold border-2 border-primary-purple/30 shadow-lg">🎵 Música</span>
        <span className="px-4 py-2 bg-gradient-to-r from-primary-pink/20 to-primary-cyan/20 backdrop-blur-xl text-primary-pink rounded-2xl text-xs font-bold border-2 border-primary-pink/30 shadow-lg">☕ Café</span>
        <span className="px-4 py-2 bg-gradient-to-r from-primary-cyan/20 to-primary-purple/20 backdrop-blur-xl text-primary-cyan rounded-2xl text-xs font-bold border-2 border-primary-cyan/30 shadow-lg">🎨 Arte</span>
        <span className="px-4 py-2 bg-gradient-to-r from-primary-yellow/20 to-primary-orange/20 backdrop-blur-xl text-primary-orange rounded-2xl text-xs font-bold border-2 border-primary-orange/30 shadow-lg">📚 Lectura</span>
      </div>
      
      <span className="block text-xs font-bold bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent uppercase tracking-wider mb-3">🎉 Próximos eventos</span>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-purple-100 shadow-lg shadow-purple-500/10">
          <span className="text-sm text-gray-800 font-bold">🎸 Concierto Jazz</span>
          <span className="text-xs bg-gradient-to-r from-primary-purple to-primary-pink text-white font-bold px-3 py-1.5 rounded-full shadow-md">Hoy</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-pink-100 shadow-lg shadow-pink-500/10">
          <span className="text-sm text-gray-800 font-bold">🍕 Pizza Night</span>
          <span className="text-xs bg-gradient-to-r from-primary-pink to-primary-cyan text-white font-bold px-3 py-1.5 rounded-full shadow-md">Mañana</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-2xl border-t-2 border-primary-pink/10 flex items-center justify-around px-6 shadow-2xl">
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🏠</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🔍</div>
      <div className="w-14 h-14 -mt-3 rounded-full bg-primary-purple flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-purple/50 hover:scale-110 transition-transform">+</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">💬</div>
      <div className="text-2xl opacity-100 transform hover:scale-125 transition-transform">👤</div>
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 overflow-y-auto scrollbar-hide">
    <div className="flex items-center justify-center p-5 bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 backdrop-blur-xl border-b border-white/50">
      <span className="text-lg font-bold bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent">Mensajes</span>
    </div>
    
    <div className="flex-1 px-4 py-3 pb-24 space-y-3">
      <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-purple-100 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-purple-500/30">G</div>
        <div className="flex-1 min-w-0">
          <span className="block text-sm font-bold text-gray-900 truncate">Grupo: Concierto 🎸</span>
          <span className="block text-xs text-gray-600 truncate font-medium">Juan: ¿A qué hora nos vemos?</span>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="text-[10px] text-gray-400 font-semibold">2min</span>
          <span className="w-6 h-6 rounded-xl bg-gradient-to-br from-primary-purple to-primary-pink text-white text-xs font-black flex items-center justify-center shadow-md">3</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-blue-100 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-blue-500/30">P</div>
        <div className="flex-1 min-w-0">
          <span className="block text-sm font-bold text-gray-900 truncate">Pablo Ruiz</span>
          <span className="block text-xs text-gray-600 truncate font-medium">¡Nos vemos ahí! 🙌</span>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="text-[10px] text-gray-400 font-semibold">15min</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-pink-100 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-pink-500/30">L</div>
        <div className="flex-1 min-w-0">
          <span className="block text-sm font-bold text-gray-900 truncate">Laura Méndez</span>
          <span className="block text-xs text-gray-600 truncate font-medium">El evento estuvo increíble</span>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="text-[10px] text-gray-400 font-semibold">1h</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border-2 border-yellow-100 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-orange-500/30">C</div>
        <div className="flex-1 min-w-0">
          <span className="block text-sm font-bold text-gray-900 truncate">Grupo: Coffee Lovers ☕</span>
          <span className="block text-xs text-gray-600 truncate font-medium">Ana: Nueva cafetería abierta!</span>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="text-[10px] text-gray-400 font-semibold">3h</span>
          <span className="w-6 h-6 rounded-xl bg-gradient-to-br from-primary-orange to-primary-yellow text-white text-xs font-black flex items-center justify-center shadow-md">8</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-2xl border-t-2 border-primary-purple/10 flex items-center justify-around px-6 shadow-2xl">
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🏠</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🔍</div>
      <div className="w-14 h-14 -mt-3 rounded-full bg-primary-purple flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-purple/50 hover:scale-110 transition-transform">+</div>
      <div className="text-2xl opacity-100 transform hover:scale-125 transition-transform">💬</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">👤</div>
    </div>
  </div>
);

const DiscoverScreen = () => (
  <div className="w-full h-full flex flex-col bg-gradient-to-br from-cyan-50/50 via-white to-pink-50/50 overflow-hidden">
    <div className="flex items-center justify-center p-5 bg-gradient-to-r from-primary-cyan/10 to-primary-pink/10 backdrop-blur-xl border-b border-white/50">
      <span className="text-lg font-bold bg-gradient-to-r from-primary-cyan via-primary-pink to-primary-purple bg-clip-text text-transparent">Conoce Gente</span>
    </div>
    
    <div className="flex-1 flex items-center justify-center p-4 pb-24">
      <div className="w-full max-w-[250px] bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-purple-500/20 overflow-hidden border-2 border-purple-100">
        <div className="relative h-72 flex items-center justify-center text-7xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899, #06B6D4)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <span className="relative z-10 text-white font-black text-7xl drop-shadow-2xl">A</span>
        </div>
        <div className="p-5">
          <span className="block text-xl font-black bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent">Ana, 28</span>
          <span className="block text-xs text-gray-600 font-semibold mb-4 mt-1">📍 A 2 km de ti</span>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-xl text-xs font-bold border-2 border-purple-300 shadow-md">🎵 Música</span>
            <span className="px-3 py-1.5 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 rounded-xl text-xs font-bold border-2 border-pink-300 shadow-md">🎨 Arte</span>
            <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 rounded-xl text-xs font-bold border-2 border-cyan-300 shadow-md">☕ Café</span>
          </div>
        </div>
        <div className="flex items-center justify-around px-5 pb-5 gap-3">
          <button className="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-bold transition-all hover:scale-110 shadow-md">✕</button>
          <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-cyan to-primary-purple flex items-center justify-center text-white text-xl transition-all hover:scale-110 shadow-xl shadow-primary-cyan/40">💬</button>
          <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-pink to-primary-orange flex items-center justify-center text-white text-xl transition-all hover:scale-110 shadow-xl shadow-primary-pink/40">❤️</button>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-2xl border-t-2 border-primary-cyan/10 flex items-center justify-around px-6 shadow-2xl">
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">🏠</div>
      <div className="text-2xl opacity-100 transform hover:scale-125 transition-transform">🔍</div>
      <div className="w-14 h-14 -mt-3 rounded-full bg-primary-purple flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-primary-purple/50 hover:scale-110 transition-transform">+</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">💬</div>
      <div className="text-2xl opacity-40 hover:opacity-70 transition-opacity">👤</div>
    </div>
  </div>
);

export default PhoneMockup;
