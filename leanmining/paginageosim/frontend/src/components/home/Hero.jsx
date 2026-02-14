import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/home/hero-main.jpg"
          alt="Operación minera"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Overlay degradado direccional oscuro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(15,23,42,0.75) 35%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.25) 75%, rgba(15,23,42,0.05) 100%)',
        }}
      />

      {/* Línea inferior decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative min-h-screen flex items-center">
        <div className="max-w-4xl py-24 md:py-28">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              Lean Mining Consulting
            </span>
          </motion.div>

          {/* Título impactante */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            <span className="text-white drop-shadow-sm">Consultoría minera</span>
            <br />
            <span className="text-[#60A5FA] drop-shadow-sm">
              de alto impacto
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="mt-6 text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-xl"
          >
            Diseñamos estrategias técnicas para operaciones subterráneas y open pit, con foco en eficiencia, seguridad y rentabilidad sostenible.
          </motion.p>

          {/* CTA: Conocer más → /nosotros */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="mt-12"
          >
            <Button
              to="/nosotros"
              size="large"
              className="group bg-gradient-to-r from-[#1E40AF] to-[#2563EB] text-white border-0 px-12 py-5 text-sm font-semibold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-700/25 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              Conocer más
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-[0.35em]">
            {t('common.scroll')}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
