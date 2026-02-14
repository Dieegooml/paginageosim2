import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

// Coloca tu imagen en: public/images/cta/services-cta-bg.jpg
const SERVICES_CTA_BG = '/images/cta/services-cta-bg.jpg';

const ServicesCTA = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${SERVICES_CTA_BG}')` }}
      />
      <div className="absolute inset-0 bg-[#0f2742]/74" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 backdrop-blur-sm">
            <div className="relative px-10 md:px-20 py-20 md:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/25 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-accent-300 rounded-full animate-pulse" />
                  Comienza ahora
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">Listo para optimizar su </span>
                <span className="text-white">
                  operacion?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed"
              >
                Nuestro equipo de especialistas esta preparado para analizar su proyecto
                y desarrollar soluciones a la medida de sus objetivos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <Link
                  to="/contacto"
                  className="group inline-flex items-center px-10 py-5 bg-[#123B70] text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#123B70]/25 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#123B70]/30"
                >
                  Solicitar consultoria
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  to="/equipo"
                  className="group inline-flex items-center px-10 py-5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/15 hover:border-white/30"
                >
                  Conocer al equipo
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesCTA;
