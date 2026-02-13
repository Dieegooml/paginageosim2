import { motion } from 'framer-motion';
import Container from '../ui/Container';

const features = [
  {
    title: 'Equilibrio Operativo',
    description: 'Balanceamos precios y costos con respuestas operativas flexibles y eficientes.',
  },
  {
    title: 'Eficiencia de Recursos',
    description: 'Optimizamos el uso de recursos naturales minimizando el impacto ambiental.',
  },
  {
    title: 'Visión a Largo Plazo',
    description: 'Diseñamos planes que aseguran la viabilidad económica y ambiental futura.',
  },
];

const SustainabilitySection = () => {
  return (
    <section className="relative py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-stretch lg:min-h-[600px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-slate-200/80 bg-white/90 overflow-hidden shadow-sm flex flex-col">
              <div className="relative flex-1 min-h-[360px]">
                <img
                  src="/images/about/sustainability.jpg"
                  alt="Minería sostenible"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <svg class="w-24 h-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              <div className="p-7 lg:p-8 border-t border-slate-200/70">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Compromiso Ambiental</p>
                    <p className="text-sm text-slate-600">Operaciones responsables</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-3xl border border-slate-200/80 bg-white/90 p-8 lg:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-emerald-600/80 to-emerald-500/40" />
                <span className="text-emerald-700 text-xs font-semibold tracking-[0.3em] uppercase">
                  Sostenibilidad
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
                <span>Medio ambiente y </span>
                <span className="text-emerald-700">responsabilidad</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-600 mb-9 leading-relaxed">
                Creemos en el equilibrio entre la eficiencia operativa y el respeto por el medio ambiente.
                Nuestras soluciones integran prácticas sostenibles que aseguran la viabilidad
                de largo plazo de cada operación minera.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SustainabilitySection;
