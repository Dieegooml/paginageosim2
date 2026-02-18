import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

/* ─────────────────────────────────────────────────────────────
   IMÁGENES DEL CARRUSEL
   Colocar en: /public/images/home/
   ─────────────────────────────────────────────────────────────
   hero-main.jpg   ← imagen 1 (ya existe)
   hero-2.jpg      ← imagen 2 (agregar)
   hero-3.jpg      ← imagen 3 (agregar)
   hero-4.jpg      ← imagen 4 (agregar)

   Formato recomendado: JPG, min 1920×1080px, calidad 85%
   ───────────────────────────────────────────────────────────── */
const SLIDES = [
  '/images/home/hero-main.jpg',
  '/images/home/hero-2.jpg',
  '/images/home/hero-3.jpg',
  '/images/home/hero-4.jpg',
];

const INTERVAL_MS = 7000; // 7 segundos por slide

const Hero = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ── Carrusel de fondo ── */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`w-full h-full object-cover ${
              i === active ? 'hero-kenburns' : ''
            }`}
          />
        </div>
      ))}

      {/* ── Overlay premium ── */}
      <div className="absolute inset-0 z-20" style={premiumHeroOverlayStyle} />

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent z-30" />

      {/* ── Contenido ── */}
      <Container className="relative z-30 min-h-screen flex items-center">
        <div className="max-w-4xl py-24 md:py-28">
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

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            <span className="hero-title-main">{t('hero.titlePart1')}</span>
            <br />
            <span className="hero-title-accent">{t('hero.titleHighlight')}</span>
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
            className="mt-6 text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-xl"
          >
            {t('hero.description')}
          </motion.p>

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
              {t('common.learnMore')}
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* ── Indicadores de slide ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-500 ease-out rounded-full ${
              i === active
                ? 'w-8 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-8 md:right-12 z-30"
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
