export default function MapSection() {
  return (
    <section id="map" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 max-w-lg">
            <span className="inline-block px-4 py-1.5 rounded-full bg-hangout-50 text-hangout-500 text-sm font-semibold mb-4">
              Mapa interactivo
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Encuentra eventos{' '}
              <span className="text-gradient">en tu zona</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Explora el mapa y descubre lo que pasa cerca de ti. Filtra por categoría, ve precios directamente en los pins y accede a los detalles de cada evento con un toque.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Pins con precios',
                  desc: 'Ve de un vistazo cuánto cuesta cada evento o si es gratis, directamente en el mapa.',
                  color: 'bg-hangout-50 text-hangout-500',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  ),
                  title: 'Filtros por categoría',
                  desc: 'Música, comida, arte, nocturno, tech... filtra para encontrar exactamente lo que buscas.',
                  color: 'bg-violet-50 text-violet-500',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: 'Tarjetas deslizables',
                  desc: 'Desliza las tarjetas en la parte inferior para explorar detalles sin salir del mapa.',
                  color: 'bg-emerald-50 text-emerald-500',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[300px] h-[600px] rounded-[3rem] bg-white border-[8px] border-gray-900 phone-shadow overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />

              <div className="h-full bg-gray-50 pt-8 text-[10px] relative overflow-hidden">
                {/* Category pills */}
                <div className="flex gap-1.5 px-3 mb-2 relative z-10">
                  <span className="px-3 py-1.5 rounded-full bg-hangout-500 text-white text-[9px] font-semibold shadow-md shadow-hangout-500/20">Todos</span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-[9px] text-gray-600 shadow-sm border border-gray-100">Musica</span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-[9px] text-gray-600 shadow-sm border border-gray-100">Comida</span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-[9px] text-gray-600 shadow-sm border border-gray-100">Arte</span>
                  <span className="px-3 py-1.5 rounded-full bg-white text-[9px] text-gray-600 shadow-sm border border-gray-100">Nocturno</span>
                </div>

                {/* Zoom controls */}
                <div className="absolute top-12 right-3 z-10 flex flex-col bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                  <button className="w-7 h-7 flex items-center justify-center text-gray-600 text-sm font-bold hover:bg-gray-50 border-b border-gray-100">+</button>
                  <button className="w-7 h-7 flex items-center justify-center text-gray-600 text-sm font-bold hover:bg-gray-50">−</button>
                </div>

                {/* Map background with streets */}
                <div className="absolute inset-0 top-12 bg-[#F5F1EB]">
                  {/* Streets - horizontal */}
                  <div className="absolute top-[15%] left-0 right-0 h-[1px] bg-white/80" />
                  <div className="absolute top-[30%] left-[10%] right-[20%] h-[1px] bg-white/80" />
                  <div className="absolute top-[45%] left-0 right-0 h-[2px] bg-white" />
                  <div className="absolute top-[60%] left-[5%] right-[10%] h-[1px] bg-white/80" />
                  <div className="absolute top-[75%] left-0 right-[15%] h-[1px] bg-white/80" />
                  <div className="absolute top-[88%] left-[15%] right-0 h-[1px] bg-white/80" />
                  
                  {/* Streets - vertical */}
                  <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/80" />
                  <div className="absolute left-[40%] top-[10%] bottom-[20%] w-[2px] bg-white" />
                  <div className="absolute left-[55%] top-0 bottom-0 w-[1px] bg-white/80" />
                  <div className="absolute left-[75%] top-[5%] bottom-[10%] w-[1px] bg-white/80" />
                  
                  {/* Parks/green areas */}
                  <div className="absolute top-[20%] left-[25%] w-16 h-12 bg-[#E8F0E0] rounded-lg opacity-60" />
                  <div className="absolute top-[50%] right-[10%] w-12 h-16 bg-[#E8F0E0] rounded-lg opacity-60" />

                  {/* Price pins */}
                  <div className="absolute top-[18%] left-[10%] animate-fadeInUp">
                    <div className="bg-hangout-100 text-hangout-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-hangout-200/50 border border-hangout-200/50">
                      $250 MXN
                    </div>
                  </div>
                  
                  <div className="absolute top-[30%] right-[8%]" style={{ animationDelay: '0.1s' }}>
                    <div className="bg-green-100 text-green-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-green-200/50 border border-green-200/50">
                      Gratis
                    </div>
                  </div>
                  
                  <div className="absolute top-[42%] left-[30%]" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-green-100 text-green-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-green-200/50 border border-green-200/50">
                      Gratis
                    </div>
                  </div>
                  
                  <div className="absolute top-[38%] left-[8%]" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-hangout-100 text-hangout-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-hangout-200/50 border border-hangout-200/50">
                      $100 MXN
                    </div>
                  </div>
                  
                  <div className="absolute top-[55%] left-[20%]" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-green-100 text-green-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-green-200/50 border border-green-200/50">
                      Gratis
                    </div>
                  </div>
                  
                  <div className="absolute top-[50%] left-[50%]" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-hangout-100 text-hangout-600 text-[8px] px-2.5 py-1 rounded-full font-bold shadow-lg shadow-hangout-200/50 border border-hangout-200/50">
                      $50 MXN
                    </div>
                  </div>
                </div>

                {/* My location button */}
                <div className="absolute bottom-[140px] right-3 z-10">
                  <div className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom event cards */}
                <div className="absolute bottom-12 left-0 right-0 flex gap-2.5 px-3 z-10">
                  <div className="min-w-[140px] bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
                    <div className="h-14 bg-gradient-to-br from-purple-400 via-violet-500 to-pink-500 rounded-xl mb-1.5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <p className="font-bold text-[8px] mb-0.5">Noche de Jazz en...</p>
                    <div className="flex items-center gap-1.5 text-[7px] text-gray-400 mb-1">
                      <span>📅 28 feb</span>
                      <span>|</span>
                      <span>20:00</span>
                    </div>
                    <div className="flex items-center gap-1 text-[7px] text-gray-400 mb-1">
                      <span>📍 Terraza del Angel</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-green-500 font-bold">Gratis</span>
                      <span className="text-[7px] text-gray-400">👥 87/150</span>
                    </div>
                  </div>
                  
                  <div className="min-w-[140px] bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
                    <div className="h-14 bg-gradient-to-br from-orange-400 via-red-400 to-rose-500 rounded-xl mb-1.5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <p className="font-bold text-[8px] mb-0.5">Festival Gastro...</p>
                    <div className="flex items-center gap-1.5 text-[7px] text-gray-400 mb-1">
                      <span>📅 4 mar</span>
                      <span>|</span>
                      <span>12:00</span>
                    </div>
                    <div className="flex items-center gap-1 text-[7px] text-gray-400 mb-1">
                      <span>📍 Parque Mexico</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-hangout-600 font-bold">$50 MXN</span>
                      <span className="text-[7px] text-gray-400">👥 234/500</span>
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2.5 px-2 z-10">
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-4.5 h-4.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    <span className="text-[7px] text-gray-400">Explorar</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-4.5 h-4.5 text-hangout-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="text-[7px] text-hangout-500 font-semibold">Mapa</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-4.5 h-4.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-[7px] text-gray-400">Social</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-4.5 h-4.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-[7px] text-gray-400">Organizar</span>
                  </div>
                </div>

                {/* Leaflet attribution */}
                <div className="absolute bottom-[42px] right-1 z-10 text-[5px] text-gray-400">
                  🇲🇽 Leaflet | © OpenStreetMap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
