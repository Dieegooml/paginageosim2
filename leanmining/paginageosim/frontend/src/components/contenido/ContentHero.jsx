import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

/* ─── Imágenes del carrusel
   Colocar en: /public/images/hero-contenido/
   ──────────────────────────────────────────── */
const SLIDES = [
  '/images/hero-contenido/hero-1.jpg',
  '/images/hero-contenido/hero-2.jpg',
  '/images/hero-contenido/hero-3.jpg',
];

const INTERVAL_MS = 6000; // cambia slide cada 6 segundos

const ContentHero = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  // Auto-advance infinito
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden flex items-center">

      {/* ── 1. Carrusel de imágenes (fondo) ── */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ── 2. Overlay premium (igual que los demás heroes) ── */}
      <div className="absolute inset-0" style={premiumHeroOverlayStyle} />

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      {/* ── 3. Contenido (z-index alto) ── */}
      <Container className="relative z-10 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              {t('contentCenter.hero.eyebrow')}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-10"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            <span className="hero-title-main">{t('contentCenter.hero.titlePart1')} </span>
            <br />
            <span className="hero-title-accent">{t('contentCenter.hero.titleAccent')}</span>
          </motion.h1>

          {/* Línea decorativa */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="origin-left h-1 w-64 md:w-72 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 rounded-full mb-8"
          />

          {/* Subtexto */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-200/90 leading-relaxed max-w-2xl"
          >
            {t('contentCenter.hero.subtitle')}
          </motion.p>
        </motion.div>
      </Container>

    </section>
  );
};

export default ContentHero;
