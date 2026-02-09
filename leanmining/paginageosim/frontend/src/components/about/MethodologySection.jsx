import { motion } from 'framer-motion';
import Container from '../ui/Container';

const steps = [
  {
    number: '01',
    title: 'Análisis del Yacimiento',
    description: 'Comprendemos profundamente el contexto geológico, las características del depósito mineral y las condiciones operativas específicas de cada proyecto.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Selección del Método Óptimo',
    description: 'Evaluamos y seleccionamos el método de explotación más adecuado considerando aspectos técnicos, económicos y de seguridad para maximizar el valor del proyecto.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Implementación y Optimización',
    description: 'Desarrollamos planes mineros detallados y acompañamos la implementación con enfoque en eficiencia operativa, reducción de costos y mejora continua.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const MethodologySection = () => {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
              Nuestra Metodología
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Un enfoque riguroso para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              resultados excepcionales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Nuestra metodología probada garantiza que cada proyecto reciba la atención
            y el análisis detallado necesarios para alcanzar sus objetivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-white border border-slate-200/80 rounded-3xl p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200/50 hover:-translate-y-2">
                <div className="absolute -top-5 left-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-500/30">
                    {step.number}
                  </span>
                </div>

                <div className="w-18 h-18 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center text-slate-500 mb-8 mt-6 group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-primary-100 group-hover:text-primary-600 transition-all duration-500 border border-slate-200/50">
                  <div className="p-4">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-10 right-10 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-5 w-10 z-10">
                  <motion.svg
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="w-10 h-10 text-primary-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MethodologySection;
