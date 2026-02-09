import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/home/hero-main.jpg"
          alt="Operación minera subterránea"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />

      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary-600/10 blur-[150px] pointer-events-none" />

      <Container className="relative h-screen flex items-center">
        <div className="max-w-3xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
              Consultoría Minera Especializada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.95]"
          >
            Planeación minera con{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                metodología Lean
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light"
          >
            Generamos diseños y programas mineros que representan el uso más
            eficaz del capital, maximizando el beneficio económico de cada proyecto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button
              to="/contacto"
              size="large"
              className="bg-primary-500 text-white hover:bg-primary-600 border-0 px-10 py-4 text-base shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
            >
              Solicitar consultoría
            </Button>
            <Button
              to="/servicios"
              variant="ghost"
              size="large"
              className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-10 py-4 text-base backdrop-blur-sm"
            >
              Conocer servicios
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
