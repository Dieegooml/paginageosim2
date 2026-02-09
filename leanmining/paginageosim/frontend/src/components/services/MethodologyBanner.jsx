import { motion } from 'framer-motion';
import Container from '../ui/Container';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Análisis integral del yacimiento y contexto operativo',
  },
  {
    number: '02',
    title: 'Evaluación',
    description: 'Selección técnico-económica del método óptimo',
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Desarrollo del plan minero detallado',
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'Acompañamiento en ejecución y ajustes',
  },
];

const MethodologyBanner = () => {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Nuestro Proceso
            </span>
            <div className="w-12 h-px bg-primary-500" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Metodología </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Probada
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nuestra metodología inicia con la comprensión profunda del contexto minero
            y las características del yacimiento, información fundamental para seleccionar
            el método de explotación apropiado y establecer un plan minero sólido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500">
                <span className="inline-block text-6xl font-bold text-primary-500/20 mb-6 group-hover:text-primary-500/40 transition-colors">
                  {step.number}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center justify-center z-10">
                  <svg className="w-6 h-6 text-primary-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
};

export default MethodologyBanner;
