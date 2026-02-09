import { motion } from 'framer-motion';
import Container from '../ui/Container';

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/services/hero-services.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-1/4 h-1/3 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Nuestros Servicios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] mb-10"
          >
            <span className="text-white">Servicios de </span>
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                Consultoría Minera
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-400 origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl"
          >
            Soluciones especializadas en planeación subterránea, optimización operativa
            y maximización de valor para proyectos mineros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all duration-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium">Diseño de minas</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all duration-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium">Análisis de costos</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all duration-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium">KPIs</span>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-slate-400 text-xs tracking-widest uppercase">Descubrir más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary-400 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
