export default function Organizers() {
  return (
    <section id="organizers" className="py-24 px-6 bg-section-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-hangout-50 text-hangout-500 text-sm font-semibold mb-4">
              Para organizadores
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Crea eventos que{' '}
              <span className="text-gradient">la gente ame</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              HangOut te da las herramientas para crear, promover y gestionar eventos exitosos. Panel con métricas en tiempo real para que tomes mejores decisiones.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Dashboard completo',
                  desc: 'Eventos activos, asistentes totales, vistas y tasa de asistencia en un solo lugar.',
                  color: 'bg-hangout-50 text-hangout-500',
                },
                {
                  title: 'Gestión de eventos',
                  desc: 'Crea borradores, publica cuando estés listo. Edita horarios, ubicaciones y precios al instante.',
                  color: 'bg-emerald-50 text-emerald-500',
                },
                {
                  title: 'Alcance orgánico',
                  desc: 'Aparece en el feed "Para ti" de miles de usuarios que comparten tus mismos intereses.',
                  color: 'bg-violet-50 text-violet-500',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Panel Organizador</h3>
                <span className="bg-hangout-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold">+ Crear evento</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-hangout-50 rounded-2xl p-4">
                  <p className="text-3xl font-extrabold text-gray-900">3</p>
                  <p className="text-sm text-gray-500">Eventos activos</p>
                  <p className="text-xs text-green-500 mt-1">+1 esta semana</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4">
                  <p className="text-3xl font-extrabold text-gray-900">365</p>
                  <p className="text-sm text-gray-500">Total asistentes</p>
                  <p className="text-xs text-green-500 mt-1">+48 esta semana</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4">
                  <p className="text-3xl font-extrabold text-gray-900">1.2K</p>
                  <p className="text-sm text-gray-500">Vistas totales</p>
                  <p className="text-xs text-green-500 mt-1">+230 esta semana</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4">
                  <p className="text-3xl font-extrabold text-gray-900">78%</p>
                  <p className="text-sm text-gray-500">Tasa de asistencia</p>
                  <p className="text-xs text-green-500 mt-1">+5% vs mes pasado</p>
                </div>
              </div>

              {/* Event progress */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-semibold text-sm">Noche de Jazz</p>
                      <span className="text-xs text-gray-400">87/150</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="w-[58%] h-full bg-hangout-500 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-300 to-red-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-semibold text-sm">Festival Gastro</p>
                      <span className="text-xs text-gray-400">234/500</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="w-[47%] h-full bg-hangout-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
