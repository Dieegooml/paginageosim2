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
    <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/15 to-slate-600/10 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="/images/about/sustainability.jpg"
                alt="Minería sostenible"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `
                    <div class="w-full aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <svg class="w-24 h-24 text-emerald-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  `;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Compromiso Ambiental</p>
                  <p className="text-sm text-slate-300">Operaciones responsables</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">
                Sostenibilidad
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Medio ambiente y </span>
              <span className="text-emerald-400">
                responsabilidad
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Creemos en el equilibrio entre la eficiencia operativa y el respeto por el medio ambiente.
              Nuestras soluciones integran prácticas sostenibles que aseguran la viabilidad
              de largo plazo de cada operación minera.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="flex items-start gap-5 p-5 bg-slate-800/60 rounded-2xl border border-slate-700/40 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/30">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </section>
  );
};

export default SustainabilitySection;
