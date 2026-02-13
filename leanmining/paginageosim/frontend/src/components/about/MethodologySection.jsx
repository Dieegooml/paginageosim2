import { motion } from 'framer-motion';
import Container from '../ui/Container';

const steps = [
  {
    number: '01',
    title: 'Análisis del Yacimiento',
    description: 'Comprendemos profundamente el contexto geológico, las características del depósito mineral y las condiciones operativas específicas de cada proyecto.',
    image: '/images/about/enfoque-1.jpg',
  },
  {
    number: '02',
    title: 'Selección del Método Óptimo',
    description: 'Evaluamos y seleccionamos el método de explotación más adecuado considerando aspectos técnicos, económicos y de seguridad para maximizar el valor del proyecto.',
    image: '/images/about/enfoque-2.jpg',
  },
  {
    number: '03',
    title: 'Implementación y Optimización',
    description: 'Desarrollamos planes mineros detallados y acompañamos la implementación con enfoque en eficiencia operativa, reducción de costos y mejora continua.',
    image: '/images/about/enfoque-3.jpg',
  },
  {
    number: '04',
    title: 'Procesos Metalúrgicos',
    description: 'Diagnóstico integral de plantas concentradoras: auditorías técnicas, optimización de recuperación metalúrgica, reducción de costos operativos y soporte a decisiones CAPEX/OPEX con impacto económico medible.',
    image: '/images/about/enfoque-4.jpg',
  },
  {
    number: '05',
    title: 'Hidrogeología Aplicada y Gestión Hídrica Minera',
    description: 'Gestión de aguas subterráneas, dewatering mina, modelamiento hidrogeológico, balance hídrico y estudios ambientales. Monitoreo y simulación para operaciones sostenibles.',
    image: '/images/about/enfoque-5.jpg',
  },
];

const MethodologySection = () => {
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
              Nuestra Metodología
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6"
          >
            Un enfoque riguroso para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
              resultados excepcionales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl"
          >
            Nuestra metodología probada garantiza que cada proyecto reciba la atención
            y el análisis detallado necesarios para alcanzar sus objetivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="h-full"
            >
              <div className="h-full min-h-[31rem] rounded-2xl border border-slate-200/80 bg-white/90 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60 flex flex-col">
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm font-bold shadow-md shadow-primary-600/30">
                    {step.number}
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight min-h-[3.25rem] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MethodologySection;
