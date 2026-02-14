import { motion } from 'framer-motion';
import Container from '../ui/Container';

const expertiseAreas = [
  {
    title: 'Diseño y Planeación Minera',
    description: 'Desarrollamos diseños y programas mineros eficientes que maximizan la extracción de valor mientras optimizan costos operativos.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Transición Cielo Abierto a Subterránea',
    description: 'Expertise en la transición de operaciones a cielo abierto hacia minería subterránea, optimizando la secuencia y minimizando riesgos.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Mecanización y Automatización',
    description: 'Implementamos soluciones de mecanización y automatización que incrementan la productividad y seguridad de las operaciones.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Procesos de Planta Concentradora y Metalurgia Aplicada',
    description: 'Optimizamos procesos metalúrgicos para maximizar el valor por tonelada tratada. Aplicamos diagnósticos rápidos y análisis técnico para identificar brechas, mejorar recuperaciones y reducir costos mediante soluciones accionables con impacto financiero medible.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    title: 'Hidrogeología Aplicada y Gestión Hídrica Minera',
    description: 'Desarrollamos soluciones en hidrogeología aplicada para proyectos mineros, de infraestructura y energía. Integramos estudios, modelamiento y sistemas de dewatering para gestionar riesgos hídricos, optimizar el recurso y respaldar decisiones operativas con base técnica sólida y cumplimiento regulatorio.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-cyan-600',
  },
];

const ExpertiseAreas = () => {
  const firstRow = expertiseAreas.slice(0, 3);
  const secondRow = expertiseAreas.slice(3);

  const cardClassName =
    'h-full min-h-[22rem] rounded-2xl border border-slate-200/80 bg-white/90 p-5 md:p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col';

  return (
    <section className="relative py-16">
      <Container>
        <div className="max-w-4xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-500/80 to-primary-400/40" />
            <span className="text-primary-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Áreas de Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6"
          >
            Servicios especializados para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
              la industria minera
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl"
          >
            Soluciones integrales que abarcan todo el ciclo de vida
            de las operaciones mineras, desde la planeación hasta la optimización.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {firstRow.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className={cardClassName}>
                <div className="flex flex-col gap-2.5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} text-white flex items-center justify-center`}>
                    {area.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base">
                    {area.description}
                  </p>
                </div>

                {area.subtitle && (
                  <p className="mt-3 pt-3 text-sm font-medium text-slate-500 border-t border-slate-200">
                    {area.subtitle}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:mt-10 max-w-[56rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-center">
          {secondRow.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="h-full"
            >
              <div className={cardClassName}>
                <div className="flex flex-col gap-2.5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} text-white flex items-center justify-center`}>
                    {area.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base">
                    {area.description}
                  </p>
                </div>

                {area.subtitle && (
                  <p className="mt-3 pt-3 text-sm font-medium text-slate-500 border-t border-slate-200">
                    {area.subtitle}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExpertiseAreas;
