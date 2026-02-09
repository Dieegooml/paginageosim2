import { motion } from 'framer-motion';
import Container from '../ui/Container';

const expertiseAreas = [
  {
    title: 'Diseño y Planeación Minera',
    description: 'Desarrollamos diseños y programas mineros eficientes que maximizan la extracción de valor mientras optimizan costos operativos.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    gradient: 'from-primary-500 to-primary-600',
    shadowColor: 'shadow-primary-500/30',
    hoverBorder: 'hover:border-primary-300',
  },
  {
    title: 'Transición Cielo Abierto a Subterránea',
    description: 'Expertise en la transición de operaciones a cielo abierto hacia minería subterránea, optimizando la secuencia y minimizando riesgos.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-600',
    shadowColor: 'shadow-blue-500/30',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    title: 'Mecanización y Automatización',
    description: 'Implementamos soluciones de mecanización y automatización que incrementan la productividad y seguridad de las operaciones.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-emerald-600',
    shadowColor: 'shadow-emerald-500/30',
    hoverBorder: 'hover:border-emerald-300',
  },
  {
    title: 'Planta Concentradora',
    description: 'Consultoría especializada en procesos de planta y optimización de extracción de metales para maximizar la recuperación.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-amber-600',
    shadowColor: 'shadow-amber-500/30',
    hoverBorder: 'hover:border-amber-300',
  },
];

const ExpertiseAreas = () => {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
              Áreas de Expertise
            </span>
            <div className="w-12 h-px bg-primary-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Servicios especializados para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              la industria minera
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Ofrecemos soluciones integrales que abarcan todo el ciclo de vida
            de las operaciones mineras, desde la planeación hasta la optimización.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group"
            >
              <div className={`relative bg-white border border-slate-200/80 rounded-3xl p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 ${area.hoverBorder} hover:-translate-y-2`}>
                <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary-50/50 group-hover:to-transparent rounded-3xl transition-all duration-500" />

                <div className="relative">
                  <div className={`w-18 h-18 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl ${area.shadowColor} group-hover:scale-110 transition-all duration-500`}>
                    <div className="p-4">
                      {area.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {area.description}
                  </p>

                  <div className="mt-8 flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm">Conocer más</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExpertiseAreas;
