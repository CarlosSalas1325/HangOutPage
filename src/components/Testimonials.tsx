const testimonials = [
  {
    name: 'Maria G.',
    initials: 'MG',
    color: 'bg-purple-100 text-purple-600',
    event: 'Noche de Jazz en Terraza',
    text: 'Increible noche de jazz! El ambiente estuvo perfecto y la musica de otro nivel. Definitivamente regreso el proximo mes.',
    likes: 34,
    comments: 8,
  },
  {
    name: 'Ana L.',
    initials: 'AL',
    color: 'bg-blue-100 text-blue-600',
    event: 'Yoga al Amanecer en Chapultepec',
    text: 'La mejor manera de empezar el dia. El instructor fue genial y el ambiente del bosque le da una energia unica a la practica.',
    likes: 22,
    comments: 4,
  },
  {
    name: 'Diego M.',
    initials: 'DM',
    color: 'bg-orange-100 text-orange-600',
    event: 'Sunset Rooftop Party',
    text: 'Vista espectacular y muy buena seleccion de musica. El cocktail de mezcal con maracuya fue lo mejor. Top 3 eventos del mes facil.',
    likes: 78,
    comments: 15,
  },
  {
    name: 'Carlos R.',
    initials: 'CR',
    color: 'bg-emerald-100 text-emerald-600',
    event: 'Festival Gastro Callejero',
    text: 'La variedad de comida fue increible. Probé cosas que nunca habia visto. El ambiente familiar lo hizo todavia mejor.',
    likes: 45,
    comments: 12,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-hangout-50 text-hangout-500 text-sm font-semibold mb-4">
            Comunidad
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Lo que dice{' '}
            <span className="text-gradient">la gente</span>
          </h2>
          <p className="text-lg text-gray-500">
            Miles de personas ya están descubriendo experiencias increíbles con HangOut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl border border-gray-100 hover:border-hangout-100 card-hover bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <span className="inline-block bg-hangout-50 text-hangout-600 text-xs px-2.5 py-0.5 rounded-full font-medium mt-0.5">
                    {t.event}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t.likes}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
