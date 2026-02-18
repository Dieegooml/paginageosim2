import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

// Coloca tu imagen de fondo en: public/images/socios/hero-alianzas.jpg
const SOCIOS_HERO_IMAGE = '/images/socios/hero-alianzas.jpg';
// Coloca tu imagen lateral en: public/images/socios/hero-alianzas-card.jpg
const SOCIOS_HERO_SIDE_IMAGE = '/images/socios/hero-alianzas-card.jpg';

const SociosHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${SOCIOS_HERO_IMAGE}')` }}
      />

      <div className="absolute inset-0" style={premiumHeroOverlayStyle} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
              <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
                Alianzas Estrategicas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
              style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
            >
              <span className="hero-title-main">Alianzas</span>
              <br />
              <span className="hero-title-accent">Tecnologicas</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0.9 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72, ease: 'easeOut' }}
              className="origin-left h-1 w-64 md:w-72 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 rounded-full mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
              className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl"
            >
              Conoce nuestras alianzas con empresas y plataformas que fortalecen
              la innovacion, la ejecucion tecnica y el valor para cada proyecto minero.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-sm p-4 md:p-5">
              <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900/30">
                <img
                  src={SOCIOS_HERO_SIDE_IMAGE}
                  alt="Imagen de alianzas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs md:text-sm text-white/85 font-medium tracking-wide">
                    Espacio para imagen de alianzas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SociosHero;
