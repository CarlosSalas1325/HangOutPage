export default function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-hangout-500 via-hangout-400 to-pink-400 p-12 md:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-medium text-white">Descarga gratuita</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Empieza a descubrir
              <br />
              experiencias hoy
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Únete a miles de personas que ya están viviendo momentos increíbles con DoPlans. Disponible gratis para iOS y Android.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* App Store */}
              <a
                href="#"
                className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Descargar en</p>
                  <p className="text-lg font-bold -mt-0.5">App Store</p>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 010 1.724l-2.144 1.24-2.53-2.53 2.53-2.674zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Disponible en</p>
                  <p className="text-lg font-bold -mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
