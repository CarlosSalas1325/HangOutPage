import PhoneMockup from './PhoneMockup';

const Hero = () => {
  const phones = ['home', 'events', 'profile'] as const;

  return (
    <section className="min-h-screen py-28 px-8 md:px-32 lg:px-16 pt-28 pb-16 relative overflow-hidden bg-bg-dark flex items-center" id="inicio">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0118] via-[#1E0B3E] to-[#3B0764] z-0" />
      <div className="absolute inset-0 z-[1] animate-mesh-move" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(168, 85, 247, 0.5) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 20%, rgba(244, 114, 182, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse 50% 30% at 60% 80%, rgba(34, 211, 238, 0.35) 0%, transparent 50%),
          radial-gradient(ellipse 40% 40% at 10% 80%, rgba(251, 191, 36, 0.25) 0%, transparent 50%)
        `
      }} />
      
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-50 bg-primary-purple top-[10%] left-[5%] animate-float" />
        <div className="absolute w-[200px] h-[200px] rounded-full blur-[60px] opacity-50 bg-primary-pink top-[60%] right-[10%] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute w-[150px] h-[150px] rounded-full blur-[60px] opacity-50 bg-primary-cyan bottom-[20%] left-[30%] animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute w-[100px] h-[100px] rounded-full blur-[60px] opacity-50 bg-primary-yellow top-[30%] right-[25%] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[80px] h-[80px] rounded-full blur-[60px] opacity-50 bg-primary-green bottom-[40%] left-[60%] animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center relative z-10 w-full">
        <div className="z-[2] lg:text-left text-center flex flex-col lg:items-start items-center lg:pr-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 border border-primary-purple/40 rounded-full mb-6 backdrop-blur-xl shadow-lg shadow-primary-purple/20">
            <span className="text-base animate-sparkle">✨</span>
            <span className="text-[0.875rem] font-semibold bg-gradient-to-r from-primary-purple-light via-primary-pink to-primary-cyan bg-clip-text text-transparent tracking-wide">La mejor app social de 2026</span>
          </div>
          
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] text-white mb-6 tracking-[-0.03em]">
            Conecta, Planea y
            <span className="inline-block relative ml-3">
              <span className="bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientText_3s_ease_infinite]">Disfruta</span>
              <svg className="absolute bottom-[-5px] left-0 w-full h-3 text-primary-cyan opacity-70" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 9c30-4 60-7 100-7s70 3 100 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-white/70 leading-[1.8] mb-8 font-normal max-w-[480px]">
            HANG OUT es la app perfecta para organizar planes con amigos, 
            descubrir eventos cercanos y conocer gente nueva con intereses similares.
          </p>
          
          <div className="flex gap-4 mb-12 flex-wrap lg:justify-start justify-center max-sm:flex-col max-sm:w-full">
            <button className="relative inline-flex items-center bg-gradient-to-r from-primary-purple via-primary-pink to-primary-cyan text-white px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-[0_10px_40px_rgba(168,85,247,0.5)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.7)] hover:scale-105 group max-sm:justify-center max-sm:w-full">
              <span className="flex items-center gap-2 relative z-10">
                <span className="text-[1.1rem]">📱</span>
                <span>Descargar App</span>
              </span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]" />
            </button>
            <button className="flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:bg-white/20 hover:border-primary-cyan/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_10px_40px_rgba(34,211,238,0.4)] group max-sm:justify-center max-sm:w-full">
              <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-primary-purple to-primary-cyan rounded-full text-[0.7rem] transition-all duration-300 group-hover:scale-110">▶</span>
              <span>Ver Demo</span>
            </button>
          </div>
          
          <div className="flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl w-fit shadow-xl shadow-primary-purple/10 max-sm:flex-col max-sm:gap-4 max-sm:w-full">
            <div className="flex flex-col text-center">
              <span className="text-[1.75rem] font-bold bg-gradient-to-br from-primary-cyan via-primary-pink to-primary-purple bg-clip-text text-transparent">50K+</span>
              <span className="text-[0.8rem] text-white/60 mt-1">Usuarios activos</span>
            </div>
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent max-sm:w-[60%] max-sm:h-px" />
            <div className="flex flex-col text-center">
              <span className="text-[1.75rem] font-bold bg-gradient-to-br from-white to-primary-purple-light bg-clip-text text-transparent">10K+</span>
              <span className="text-[0.8rem] text-white/60 mt-1">Eventos creados</span>
            </div>
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent max-sm:w-[60%] max-sm:h-px" />
            <div className="flex flex-col text-center">
              <span className="text-[1.75rem] font-bold bg-gradient-to-br from-white to-primary-purple-light bg-clip-text text-transparent">4.9</span>
              <span className="text-[0.8rem] text-white/60 mt-1">⭐ Rating</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8 relative z-[2] mt-8 lg:mt-0 lg:ml-auto">
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] animate-[pulseGlow_4s_ease-in-out_infinite]" style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)'
            }} />
            
            <div className="relative flex items-center justify-center gap-4 h-[600px] w-[800px] max-lg:scale-[0.65] max-md:scale-50 max-sm:scale-[0.35] max-lg:w-[600px]">
              {/* Phone 1 - Left (rotated) */}
              <div className="absolute left-8 z-10 transition-all duration-500 hover:scale-110 hover:z-30 hover:rotate-0" style={{ transform: 'translateX(-50px) rotate(-10deg)' }}>
                <PhoneMockup screen="home" />
              </div>
              
              {/* Phone 2 - Center (main) */}
              <div className="relative z-20 transition-all duration-500 hover:scale-110 hover:z-30">
                <PhoneMockup screen="events" />
              </div>
              
              {/* Phone 3 - Right (rotated) */}
              <div className="absolute right-8 z-10 transition-all duration-500 hover:scale-110 hover:z-30 hover:rotate-0" style={{ transform: 'translateX(50px) rotate(10deg)' }}>
                <PhoneMockup screen="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.1em] uppercase z-10 max-sm:hidden">
        <span>Scroll</span>
        <div className="animate-bounce-slow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
