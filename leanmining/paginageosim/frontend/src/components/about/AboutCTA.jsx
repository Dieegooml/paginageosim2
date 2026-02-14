import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

// Coloca tu imagen en: public/images/cta/about-cta-bg.jpg
const ABOUT_CTA_BG = '/images/cta/about-cta-bg.jpg';

const AboutCTA = () => {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${ABOUT_CTA_BG}')` }}
      />
      <div className="absolute inset-0 bg-[#0f2742]/72" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-sm px-8 md:px-14 py-14 md:py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              <span className="text-white">Listo para optimizar tu </span>
              <span className="text-white">
                operacion minera?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Nuestro equipo de expertos esta listo para ayudarte a alcanzar
              tus objetivos de produccion y rentabilidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                to="/servicios"
                className="group inline-flex items-center rounded-xl bg-[#123B70] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#123B70]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver Servicios
                <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutCTA;
