import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/services/hero-services.jpg')`,
        }}
      />

      {/* Overlay degradado direccional oscuro */}
      <div
        className="absolute inset-0"
        style={premiumHeroOverlayStyle}
      />
      

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              Nuestros Servicios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-10"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            <span className="hero-title-main">Servicios de </span>
            <br />
            <span className="hero-title-accent">
              Consultoría Minera
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="origin-left h-1 w-64 md:w-72 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-200/90 leading-relaxed mb-12 max-w-2xl"
          >
            Soluciones especializadas en planeación subterránea, optimización operativa
            y maximización de valor para proyectos mineros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap gap-8"
          >
            {['Diseño de minas', 'Análisis de costos', 'KPIs'].map((label, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                <span className="text-white/90 font-medium text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-[0.35em]">Descubrir más</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;




