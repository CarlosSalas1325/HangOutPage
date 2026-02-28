const steps = [
  {
    step: '01',
    title: 'Descarga la app',
    description: 'Disponible gratis en App Store y Google Play. Solo pesa unos megas y está lista en segundos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Elige tus intereses',
    description: 'Música, comida, arte, tecnología, bienestar y más. Selecciona al menos 3 para personalizar tu experiencia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Descubre y asiste',
    description: 'Explora eventos cerca de ti, compra entradas o asiste gratis. Comparte tu experiencia con la comunidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-hangout-50 text-hangout-500 text-sm font-semibold mb-4">
            Cómo funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Empieza en{' '}
            <span className="text-gradient">3 simples pasos</span>
          </h2>
          <p className="text-lg text-gray-500">
            Sin procesos complicados. En menos de un minuto estarás descubriendo eventos increíbles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-hangout-200 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-hangout-50 text-hangout-500 mb-6 group-hover:bg-hangout-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-hangout-500/25">
                {s.icon}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-hangout-500 text-white text-xs font-bold flex items-center justify-center group-hover:bg-white group-hover:text-hangout-500 transition-colors">
                  {s.step}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
