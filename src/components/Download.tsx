const Download = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-cyan relative overflow-hidden" id="descargar">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center text-white space-y-6">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.2]">
            ¿Listo para hacer <span className="inline-block relative">
              <span className="relative z-10">planes increíbles</span>
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-white/20 -rotate-1" />
            </span>?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Descarga HANG OUT gratis y comienza a conectar con personas 
            que comparten tus intereses.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <button className="flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-4 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
              <div className="text-3xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs text-white/70">Descargar en</span>
                <span className="block text-lg font-semibold">App Store</span>
              </div>
            </button>
            
            <button className="flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-4 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
              <div className="text-3xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs text-white/70">Descargar en</span>
                <span className="block text-lg font-semibold">Google Play</span>
              </div>
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-3 pt-8">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-5xl">📱</span>
            </div>
            <span className="text-sm text-white/80 font-medium">Escanea para descargar</span>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute text-6xl animate-bounce-slow opacity-30" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>🎉</div>
          <div className="absolute text-5xl animate-bounce-slow opacity-30" style={{ top: '20%', right: '15%', animationDelay: '0.5s' }}>🎸</div>
          <div className="absolute text-5xl animate-bounce-slow opacity-30" style={{ bottom: '15%', left: '15%', animationDelay: '1s' }}>☕</div>
          <div className="absolute text-6xl animate-bounce-slow opacity-30" style={{ bottom: '20%', right: '10%', animationDelay: '1.5s' }}>🎨</div>
          <div className="absolute text-5xl animate-bounce-slow opacity-30" style={{ top: '50%', right: '5%', animationDelay: '2s' }}>⚽</div>
        </div>
      </div>
    </section>
  );
};

export default Download;
