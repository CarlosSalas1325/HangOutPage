import { useState } from 'react'

const screens = [
  {
    id: 'explore',
    label: 'Explorar',
    title: 'Descubre eventos increíbles',
    description: 'Navega por eventos destacados, filtra por categoría y encuentra experiencias personalizadas solo para ti. Desde jazz en terrazas hasta yoga al amanecer.',
    mockup: <ExploreMockup />,
  },
  {
    id: 'social',
    label: 'Social',
    title: 'Comparte tus experiencias',
    description: 'Lee reseñas reales de otros asistentes, comparte fotos y opiniones. Construye una comunidad alrededor de lo que te apasiona.',
    mockup: <SocialMockup />,
  },
  {
    id: 'organizer',
    label: 'Organizar',
    title: 'Gestiona como un pro',
    description: 'Panel completo con métricas en tiempo real. Ve tus eventos activos, total de asistentes, vistas y tasa de asistencia todo en un solo lugar.',
    mockup: <OrganizerMockup />,
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    title: 'Empieza en segundos',
    description: 'Solo escribe tu nombre, elige tus intereses y listo. Sin procesos largos ni complicados. Personalización desde el primer momento.',
    mockup: <OnboardingMockup />,
  },
]

export default function AppShowcase() {
  const [active, setActive] = useState(0)
  const current = screens[active]

  return (
    <section id="screens" className="py-24 px-6 bg-section-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-hangout-50 text-hangout-500 text-sm font-semibold mb-4">
            La App
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Diseñada para que{' '}
            <span className="text-gradient">disfrutes</span>
          </h2>
          <p className="text-lg text-gray-500">
            Cada pantalla pensada para una experiencia fluida e intuitiva.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-hangout-500 text-white shadow-lg shadow-hangout-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-hangout-200 hover:text-hangout-500'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Phone */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-[290px] h-[580px] rounded-[3rem] bg-white border-[8px] border-gray-900 phone-shadow overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
              {current.mockup}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 max-w-lg">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900">
              {current.title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {current.description}
            </p>

            {/* Feature bullets */}
            <div className="space-y-4">
              {['Interfaz intuitiva y rápida', 'Datos en tiempo real', 'Disponible en iOS y Android'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-hangout-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-hangout-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExploreMockup() {
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
          <div className="w-6 h-6 rounded-full bg-gray-100" />
          <div className="w-6 h-6 rounded-full bg-gray-100 relative">
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-hangout-500 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 mb-3">
        <span className="px-2.5 py-1 rounded-full bg-hangout-500 text-white text-[8px] font-medium">Todos</span>
        <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px]">Musica</span>
        <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px]">Comida</span>
        <span className="px-2.5 py-1 rounded-full border border-gray-200 text-[8px]">Arte</span>
      </div>

      <p className="font-bold text-xs mb-2 px-1">Para ti</p>

      <div className="rounded-2xl overflow-hidden bg-gray-50 mb-3">
        <div className="h-28 bg-gradient-to-br from-green-300 via-emerald-400 to-teal-400 relative">
          <div className="absolute top-2 left-2 flex gap-1">
            <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full font-medium">Yoga</span>
            <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full font-medium">Bienestar</span>
          </div>
          <span className="absolute top-2 right-2 bg-hangout-500 text-white text-[7px] px-2 py-0.5 rounded-lg font-bold">$100 MXN</span>
        </div>
        <div className="p-2.5">
          <p className="font-bold text-[10px] mb-0.5">Yoga al Amanecer en Chapultepec</p>
          <p className="text-[8px] text-gray-400 mb-1">Empieza tu dia con energia positiva. Clase de yoga al aire libre...</p>
          <div className="flex items-center gap-2 text-[7px] text-gray-400">
            <span>📅 dom 1 de mar</span>
            <span>🕐 06:30</span>
            <span>📍 Bosque de Chapultepec</span>
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center text-[6px] font-bold">YU</div>
              <span className="text-[7px] font-medium">Yoga Urbano</span>
            </div>
            <span className="text-[7px] text-gray-400">👥 28 asistentes</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden bg-gray-50">
        <div className="h-20 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400 relative">
          <div className="absolute top-2 left-2 flex gap-1">
            <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full font-medium">Tech</span>
            <span className="bg-white/90 text-[7px] px-1.5 py-0.5 rounded-full font-medium">Hackathon</span>
          </div>
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[7px] px-2 py-0.5 rounded-lg font-bold">Gratis</span>
        </div>
        <div className="p-2.5">
          <p className="font-bold text-[10px]">Hackathon: IA para el Bien</p>
          <p className="text-[8px] text-gray-400">48 horas de innovacion...</p>
        </div>
      </div>

      <BottomNav active="explore" />
    </div>
  )
}

function SocialMockup() {
  return (
    <div className="h-full bg-white pt-8 px-3 text-[10px]">
      <p className="font-bold text-sm text-center mb-4">Social</p>

      <div className="flex items-center gap-2 mb-4 p-2.5 bg-gray-50 rounded-2xl">
        <div className="w-8 h-8 rounded-full bg-hangout-100 flex items-center justify-center text-[8px] font-bold text-hangout-600">TU</div>
        <div className="flex-1">
          <p className="text-[9px] text-gray-400">Comparte tu experiencia...</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[7px] text-gray-400">📷 Foto</span>
          </div>
        </div>
        <span className="bg-hangout-500 text-white text-[8px] px-3 py-1.5 rounded-full font-semibold">Publicar</span>
      </div>

      <div className="space-y-3">
        <div className="border border-gray-100 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-[7px] font-bold text-purple-600">MG</div>
            <div>
              <p className="font-semibold text-[9px]">Maria G.</p>
              <p className="text-[7px] text-gray-400">Hace 2 horas</p>
            </div>
          </div>
          <span className="inline-block bg-hangout-50 text-hangout-600 text-[7px] px-2 py-0.5 rounded-full mb-1.5 font-medium">Noche de Jazz en Terraza</span>
          <p className="text-[8px] text-gray-600 leading-relaxed mb-2">Increible noche de jazz! El ambiente estuvo perfecto y la musica de otro nivel. Definitivamente regreso.</p>
          <div className="h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-2" />
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-[8px]">♡ 34</span>
            <span className="text-[8px]">💬 8</span>
            <span className="text-[8px]">↗</span>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[7px] font-bold text-orange-600">DM</div>
            <div>
              <p className="font-semibold text-[9px]">Diego M.</p>
              <p className="text-[7px] text-gray-400">Hace 2 dias</p>
            </div>
          </div>
          <span className="inline-block bg-hangout-50 text-hangout-600 text-[7px] px-2 py-0.5 rounded-full mb-1.5 font-medium">Sunset Rooftop Party</span>
          <p className="text-[8px] text-gray-600 leading-relaxed">Vista espectacular y muy buena seleccion de musica. Top 3 del mes.</p>
          <div className="flex items-center gap-4 mt-2 text-gray-400">
            <span className="text-[8px]">♡ 78</span>
            <span className="text-[8px]">💬 15</span>
          </div>
        </div>
      </div>

      <BottomNav active="social" />
    </div>
  )
}

function OrganizerMockup() {
  return (
    <div className="h-full bg-white pt-8 px-3 text-[10px]">
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="font-bold text-sm">Panel Organizador</p>
        <span className="bg-hangout-500 text-white text-[8px] px-2.5 py-1 rounded-full font-semibold">+ Crear evento</span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-hangout-50 rounded-xl p-2.5">
          <div className="w-5 h-5 rounded-lg bg-hangout-100 flex items-center justify-center mb-1">
            <span className="text-[8px]">📅</span>
          </div>
          <p className="text-lg font-bold text-gray-900">3</p>
          <p className="text-[7px] text-gray-500">Eventos activos</p>
          <p className="text-[6px] text-green-500 mt-0.5">+1 esta semana</p>
        </div>
        <div className="bg-green-50 rounded-xl p-2.5">
          <div className="w-5 h-5 rounded-lg bg-green-100 flex items-center justify-center mb-1">
            <span className="text-[8px]">👥</span>
          </div>
          <p className="text-lg font-bold text-gray-900">365</p>
          <p className="text-[7px] text-gray-500">Total asistentes</p>
          <p className="text-[6px] text-green-500 mt-0.5">+48 esta semana</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-2.5">
          <div className="w-5 h-5 rounded-lg bg-blue-100 flex items-center justify-center mb-1">
            <span className="text-[8px]">👁</span>
          </div>
          <p className="text-lg font-bold text-gray-900">1.2K</p>
          <p className="text-[7px] text-gray-500">Vistas totales</p>
          <p className="text-[6px] text-green-500 mt-0.5">+230 esta semana</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-2.5">
          <div className="w-5 h-5 rounded-lg bg-purple-100 flex items-center justify-center mb-1">
            <span className="text-[8px]">📈</span>
          </div>
          <p className="text-lg font-bold text-gray-900">78%</p>
          <p className="text-[7px] text-gray-500">Tasa de asistencia</p>
          <p className="text-[6px] text-green-500 mt-0.5">+5% vs mes pasado</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 mb-3 border-b border-gray-100">
        <span className="flex-1 text-center py-1.5 text-[9px] font-semibold text-gray-900 border-b-2 border-gray-900">Activos</span>
        <span className="flex-1 text-center py-1.5 text-[9px] text-gray-400">Pasados</span>
        <span className="flex-1 text-center py-1.5 text-[9px] text-gray-400">Borradores</span>
      </div>

      {/* Event list */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[9px] truncate">Noche de Jazz en Terraza</p>
              <span className="bg-green-100 text-green-700 text-[6px] px-1.5 py-0.5 rounded-full font-medium">Activo</span>
            </div>
            <p className="text-[7px] text-gray-400">📅 28 feb  👥 87/150</p>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
              <div className="w-[58%] h-full bg-hangout-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-300 to-red-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[9px] truncate">Festival Gastro Callejero</p>
              <span className="bg-green-100 text-green-700 text-[6px] px-1.5 py-0.5 rounded-full font-medium">Activo</span>
            </div>
            <p className="text-[7px] text-gray-400">📅 4 mar  👥 234/500</p>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
              <div className="w-[47%] h-full bg-hangout-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="organizer" />
    </div>
  )
}

function OnboardingMockup() {
  return (
    <div className="h-full bg-gradient-to-b from-hangout-50/50 to-white pt-12 px-4 text-[10px]">
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-hangout-500 flex items-center justify-center mx-auto mb-3">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>
        <p className="text-xl font-extrabold text-gray-900">DoPlans</p>
        <p className="text-[9px] text-gray-400 mt-1">Descubre experiencias increíbles cerca de ti</p>
      </div>

      <div className="space-y-2.5 mb-6">
        <div className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-hangout-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-hangout-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[9px]">Eventos cercanos</p>
            <p className="text-[7px] text-gray-400">Encuentra lo que pasa en tu zona</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[9px]">Personalizado para ti</p>
            <p className="text-[7px] text-gray-400">Basado en tus gustos e intereses</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[9px]">Conecta con personas</p>
            <p className="text-[7px] text-gray-400">Comparte experiencias reales</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-[9px] font-semibold text-gray-700 block mb-1">Tu nombre</label>
          <div className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[9px] text-gray-400">
            Como te llamas?
          </div>
        </div>
        <div>
          <label className="text-[9px] font-semibold text-gray-700 block mb-1">Email</label>
          <div className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[9px] text-gray-400">
            tu@email.com
          </div>
        </div>
        <div className="w-full py-2.5 rounded-2xl btn-gradient text-center text-white text-[10px] font-bold">
          Empezar →
        </div>
      </div>

      <p className="text-center text-[7px] text-gray-400 mt-3">Al continuar, aceptas nuestros terminos y condiciones</p>
    </div>
  )
}

function BottomNav({ active }: { active: string }) {
  const items = [
    { id: 'explore', label: 'Explorar' },
    { id: 'map', label: 'Mapa' },
    { id: 'social', label: 'Social' },
    { id: 'organizer', label: 'Organizar' },
  ]
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2 px-1">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-0.5">
          <div className={`w-4 h-4 rounded ${active === item.id ? 'bg-hangout-100' : 'bg-gray-100'}`} />
          <span className={`text-[7px] ${active === item.id ? 'text-hangout-500 font-medium' : 'text-gray-400'}`}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
