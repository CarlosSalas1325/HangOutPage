import { useState } from 'react';
import PhoneMockup from './PhoneMockup';

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
    <section className="py-24 px-8 bg-gradient-to-br from-purple-50/50 via-white to-cyan-50/50 relative overflow-hidden" id="app">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-cyan/15 to-primary-purple/15 text-primary-cyan border-2 border-primary-cyan/20 text-sm font-bold rounded-full mb-4 tracking-wide uppercase shadow-lg">La Aplicación</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-text-dark leading-[1.2] mb-4">
            Explora todas las <span className="bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent">vistas</span>
          </h2>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            Una interfaz intuitiva diseñada para que disfrutes cada momento
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {screens.map((screen) => (
              <button
                key={screen.id}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeScreen === screen.id
                    ? 'bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan text-white shadow-[0_8px_30px_rgba(168,85,247,0.4)] scale-105'
                    : 'bg-white/80 text-text-dark border-2 border-gray-200 hover:border-primary-purple/50 hover:text-primary-purple hover:scale-105 hover:shadow-lg'
                }`}
                onClick={() => setActiveScreen(screen.id)}
              >
                {screen.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <PhoneMockup screen={activeScreen} />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-dark">
                {screens.find(s => s.id === activeScreen)?.label}
              </h3>
              <p className="text-lg text-text-medium leading-relaxed">
                {screens.find(s => s.id === activeScreen)?.description}
              </p>
              
              <div className="space-y-3">
                {activeScreen === 'home' && (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-purple to-primary-cyan text-white rounded-lg font-bold text-sm shadow-md">✓</span>
                      <span className="text-text-dark font-medium">Feed personalizado</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-purple to-primary-cyan text-white rounded-lg font-bold text-sm shadow-md">✓</span>
                      <span className="text-text-dark font-medium">Planes del día</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-purple to-primary-cyan text-white rounded-lg font-bold text-sm shadow-md">✓</span>
                      <span className="text-text-dark font-medium">Búsqueda rápida</span>
                    </div>
                  </>
                )}
                {activeScreen === 'events' && (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Filtros por categoría</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Eventos cercanos</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Asistentes confirmados</span>
                    </div>
                  </>
                )}
                {activeScreen === 'chat' && (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Chats grupales</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Mensajes directos</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Notificaciones en tiempo real</span>
                    </div>
                  </>
                )}
                {activeScreen === 'profile' && (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Estadísticas personales</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Intereses y hobbies</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Historial de eventos</span>
                    </div>
                  </>
                )}
                {activeScreen === 'discover' && (
                  <>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Match por intereses</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Personas cercanas</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary-purple/10 text-primary-purple rounded-lg font-bold">✓</span>
                      <span className="text-text-dark font-medium">Conexiones seguras</span>
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
