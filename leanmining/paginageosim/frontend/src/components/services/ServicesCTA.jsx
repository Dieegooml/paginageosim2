import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const ServicesCTA = () => {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="relative px-10 md:px-20 py-20 md:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500/10 text-primary-300 text-sm font-medium rounded-full border border-primary-500/20 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                  Comienza ahora
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">¿Listo para optimizar su </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  operación?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-300 mb-14 max-w-2xl mx-auto leading-relaxed"
              >
                Nuestro equipo de especialistas está preparado para analizar su proyecto
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
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40"
                >
                  Solicitar consultoría
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  to="/equipo"
                  className="group inline-flex items-center px-10 py-5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/10 transition-all border border-white/20 hover:border-white/40"
                >
                  Conocer al equipo
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
