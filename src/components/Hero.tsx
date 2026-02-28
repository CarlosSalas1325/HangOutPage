export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient pt-24 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-hangout-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-hangout-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hangout-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hangout-50 border border-hangout-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-hangout-500 animate-pulse" />
              <span className="text-sm font-medium text-hangout-600">Disponible en tu ciudad</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Descubre{' '}
              <span className="text-gradient">experiencias</span>
              <br />
              increíbles cerca de ti
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Encuentra eventos, conecta con personas y vive momentos únicos.
              Jazz en terrazas, festivales gastronómicos, yoga al amanecer y mucho más.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-hangout-500 text-white font-semibold text-lg hover:bg-hangout-600 transition-all shadow-xl shadow-hangout-500/30 hover:shadow-2xl hover:shadow-hangout-500/40 hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#download"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 010 1.724l-2.144 1.24-2.53-2.53 2.53-2.674zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Usuarios activos</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Eventos al mes</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Ciudades</p>
              </div>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative">
              {/* Back phone */}
              <div className="absolute -left-8 top-8 w-[260px] h-[520px] rounded-[3rem] bg-white border-[8px] border-gray-800 shadow-2xl overflow-hidden opacity-60 rotate-[-8deg] hidden lg:block">
                <PhoneScreen variant="social" />
              </div>
              {/* Main phone */}
              <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-white border-[8px] border-gray-900 phone-shadow overflow-hidden z-10 animate-float">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                <PhoneScreen variant="explore" />
              </div>
              {/* Right phone */}
              <div className="absolute -right-8 top-8 w-[260px] h-[520px] rounded-[3rem] bg-white border-[8px] border-gray-800 shadow-2xl overflow-hidden opacity-60 rotate-[8deg] hidden lg:block">
                <PhoneScreen variant="map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneScreen({ variant }: { variant: 'explore' | 'social' | 'map' }) {
  if (variant === 'explore') {
    return (
      <div className="h-full bg-white pt-8 px-3 text-[10px]">
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <p className="text-[8px] text-gray-400">Hola, Asahel</p>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-hangout-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span className="font-semibold text-[9px]">Ciudad de Mexico</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center relative">
              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-hangout-500 rounded-full" />
            </div>
          </div>
        </div>
        
        <p className="font-bold text-xs mb-2 px-1">Destacados</p>
        <div className="flex gap-2 mb-3 overflow-hidden">
          <div className="min-w-[130px] rounded-xl overflow-hidden bg-gray-100 h-28">
            <div className="h-16 bg-gradient-to-br from-purple-400 to-pink-400 relative">
              <span className="absolute bottom-1 left-1 bg-hangout-500 text-white text-[7px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                ★ Destacado
              </span>
              <span className="absolute bottom-1 right-1 bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full font-medium">Gratis</span>
            </div>
            <div className="p-1.5">
              <p className="font-semibold text-[8px] leading-tight">Noche de Jazz en Terraza</p>
              <p className="text-[7px] text-gray-400 mt-0.5">28 feb · 20:00</p>
            </div>
          </div>
          <div className="min-w-[130px] rounded-xl overflow-hidden bg-gray-100 h-28">
            <div className="h-16 bg-gradient-to-br from-orange-300 to-yellow-400 relative">
              <span className="absolute bottom-1 left-1 bg-hangout-500 text-white text-[7px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                ★ Destacado
              </span>
            </div>
            <div className="p-1.5">
              <p className="font-semibold text-[8px] leading-tight">Festival Gastro Callejero</p>
              <p className="text-[7px] text-gray-400 mt-0.5">4 mar · 12:00</p>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex gap-1.5 mb-3 overflow-hidden">
          <span className="px-2.5 py-1 rounded-full bg-hangout-500 text-white text-[8px] font-medium">Todos</span>
          <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px] text-gray-600">Musica</span>
          <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px] text-gray-600">Comida</span>
          <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px] text-gray-600">Arte</span>
        </div>

        <p className="font-bold text-xs mb-2 px-1">Para ti</p>
        <div className="rounded-xl overflow-hidden bg-gray-100 h-32">
          <div className="h-20 bg-gradient-to-br from-green-300 to-emerald-400 relative">
            <div className="absolute top-1.5 left-1.5 flex gap-1">
              <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full">Yoga</span>
              <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full">Bienestar</span>
            </div>
            <span className="absolute top-1.5 right-1.5 bg-hangout-500 text-white text-[7px] px-1.5 py-0.5 rounded-lg font-medium">$100 MXN</span>
          </div>
          <div className="p-2">
            <p className="font-semibold text-[9px]">Yoga al Amanecer en Chapultepec</p>
            <p className="text-[7px] text-gray-400 mt-0.5">dom 1 de mar · 06:30 · Bosque de Chapultepec</p>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2 px-2">
          <div className="flex flex-col items-center gap-0.5">
            <svg className="w-4 h-4 text-hangout-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
            <span className="text-[7px] text-hangout-500 font-medium">Explorar</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            <span className="text-[7px] text-gray-400">Mapa</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <span className="text-[7px] text-gray-400">Social</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            <span className="text-[7px] text-gray-400">Organizar</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'social') {
    return (
      <div className="h-full bg-white pt-6 px-3 text-[10px]">
        <p className="font-bold text-sm text-center mb-3">Social</p>
        
        <div className="flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded-xl">
          <div className="w-7 h-7 rounded-full bg-hangout-100 flex items-center justify-center text-[8px] font-bold text-hangout-600">TU</div>
          <p className="text-[9px] text-gray-400 flex-1">Comparte tu experiencia...</p>
          <span className="bg-hangout-500 text-white text-[7px] px-2 py-1 rounded-full font-medium">Publicar</span>
        </div>

        <div className="space-y-3">
          <div className="border border-gray-100 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[7px] font-bold text-purple-600">MG</div>
              <div>
                <p className="font-semibold text-[8px]">Maria G.</p>
                <p className="text-[7px] text-gray-400">Hace 2 horas</p>
              </div>
            </div>
            <span className="inline-block bg-hangout-50 text-hangout-600 text-[7px] px-1.5 py-0.5 rounded-full mb-1">Noche de Jazz en Terraza</span>
            <p className="text-[8px] text-gray-600 leading-relaxed">Increible noche de jazz! El ambiente estuvo perfecto y la musica de otro nivel.</p>
            <div className="h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mt-1.5" />
            <div className="flex items-center gap-3 mt-1.5 text-gray-400">
              <span className="flex items-center gap-0.5 text-[7px]">♡ 34</span>
              <span className="flex items-center gap-0.5 text-[7px]">💬 8</span>
              <span className="flex items-center gap-0.5 text-[7px]">↗</span>
            </div>
          </div>

          <div className="border border-gray-100 rounded-xl p-2">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[7px] font-bold text-blue-600">AL</div>
              <div>
                <p className="font-semibold text-[8px]">Ana L.</p>
                <p className="text-[7px] text-gray-400">Hace 1 dia</p>
              </div>
            </div>
            <span className="inline-block bg-hangout-50 text-hangout-600 text-[7px] px-1.5 py-0.5 rounded-full mb-1">Yoga al Amanecer</span>
            <p className="text-[8px] text-gray-600 leading-relaxed">La mejor manera de empezar el dia. El instructor fue genial!</p>
            <div className="flex items-center gap-3 mt-1.5 text-gray-400">
              <span className="flex items-center gap-0.5 text-[7px]">♡ 22</span>
              <span className="flex items-center gap-0.5 text-[7px]">💬 4</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // map
  return (
    <div className="h-full bg-gray-100 pt-6 text-[10px] relative">
      <div className="flex gap-1.5 px-3 mb-2 overflow-hidden">
        <span className="px-2.5 py-1 rounded-full bg-hangout-500 text-white text-[8px] font-medium">Todos</span>
        <span className="px-2.5 py-1 rounded-full bg-white text-[8px] text-gray-600">Musica</span>
        <span className="px-2.5 py-1 rounded-full bg-white text-[8px] text-gray-600">Comida</span>
        <span className="px-2.5 py-1 rounded-full bg-white text-[8px] text-gray-600">Arte</span>
      </div>
      
      {/* Map area */}
      <div className="flex-1 relative h-[70%] bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Price pins */}
        <div className="absolute top-[20%] left-[15%] bg-hangout-50 text-hangout-600 text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">$250 MXN</div>
        <div className="absolute top-[35%] right-[15%] bg-green-50 text-green-600 text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">Gratis</div>
        <div className="absolute top-[50%] left-[30%] bg-green-50 text-green-600 text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">Gratis</div>
        <div className="absolute top-[45%] left-[10%] bg-hangout-50 text-hangout-600 text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">$100 MXN</div>
        <div className="absolute top-[60%] left-[25%] bg-hangout-50 text-hangout-600 text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">$50 MXN</div>
      </div>

      {/* Bottom cards */}
      <div className="absolute bottom-12 left-0 right-0 flex gap-2 px-3 overflow-hidden">
        <div className="min-w-[120px] bg-white rounded-xl p-1.5 shadow-sm">
          <div className="h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-1" />
          <p className="font-semibold text-[7px]">Noche de Jazz...</p>
          <p className="text-[6px] text-gray-400">28 feb | 20:00</p>
          <p className="text-[7px] text-green-600 font-medium">Gratis</p>
        </div>
        <div className="min-w-[120px] bg-white rounded-xl p-1.5 shadow-sm">
          <div className="h-10 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-lg mb-1" />
          <p className="font-semibold text-[7px]">Festival Gastro...</p>
          <p className="text-[6px] text-gray-400">4 mar | 12:00</p>
          <p className="text-[7px] text-hangout-600 font-medium">$50 MXN</p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2">
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span className="text-[7px] text-gray-400">Explorar</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-4 h-4 rounded bg-hangout-100" />
          <span className="text-[7px] text-hangout-500 font-medium">Mapa</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span className="text-[7px] text-gray-400">Social</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span className="text-[7px] text-gray-400">Organizar</span>
        </div>
      </div>
    </div>
  )
}
