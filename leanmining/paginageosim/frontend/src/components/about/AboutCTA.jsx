import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const AboutCTA = () => {
  return (
    <section className="relative py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 px-8 md:px-14 py-14 md:py-16 text-center shadow-sm">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              <span className="text-slate-900">¿Listo para optimizar tu </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
                operación minera?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Nuestro equipo de expertos está listo para ayudarte a alcanzar
              tus objetivos de producción y rentabilidad.
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
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#2563EB] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
