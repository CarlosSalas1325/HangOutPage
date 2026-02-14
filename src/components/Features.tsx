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
    <section className="py-24 px-8 bg-gradient-to-br from-white via-purple-50/30 to-cyan-50/30 relative overflow-hidden" id="caracteristicas">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-purple/15 to-primary-cyan/15 text-primary-purple border-2 border-primary-purple/20 text-sm font-bold rounded-full mb-4 tracking-wide uppercase shadow-lg">Características</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-text-dark leading-[1.2] mb-4">
            Todo lo que necesitas para <span className="bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent">pasarla bien</span>
          </h2>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            HANG OUT te ofrece todas las herramientas para organizar planes increíbles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] hover:border-primary-purple/30 hover:scale-105 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary-purple/20 via-primary-pink/20 to-primary-cyan/20 rounded-2xl text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-text-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
