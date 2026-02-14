import { motion } from 'framer-motion';
import Container from '../ui/Container';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Evaluación integral del yacimiento, contexto operativo y variables técnico-económicas',
  },
  {
    number: '02',
    title: 'Evaluación',
    description: 'Análisis técnico-económico y selección del método óptimo de explotación',
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Desarrollo del Plan Minero Diseñado y Detallado con integración técnica-financiera',
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'Acompañamiento especializado en ejecución, control y ajustes operativos',
  },
];

const MethodologyBanner = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Fondo degradado premium */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4d] to-[#123b6b]" />

      {/* Imagen de fondo para metodología: */}
      {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/methodology-bg.jpg')" }} /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4d]/90 to-[#123b6b]/85" /> */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1E40AF]/6 rounded-full blur-[120px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400/60" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              Nuestro Proceso
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400/60" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Metodología </span>
            <span className="text-[#3B82F6]">
              Probada
            </span>
          </h2>

          <p className="text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed">
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
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-primary-400/30 transition-all duration-500">
                <span className="inline-block text-6xl font-bold text-primary-500/15 mb-6 group-hover:text-primary-500/30 transition-colors duration-300">
                  {step.number}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center justify-center z-10">
                  <svg className="w-5 h-5 text-primary-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/25 to-transparent" />
    </section>
  );
};

export default MethodologyBanner;
