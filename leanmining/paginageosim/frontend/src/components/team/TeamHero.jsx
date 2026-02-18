import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

const TeamHero = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/team/hero-equipo.jpg')`,
        }}
      />

      <div className="absolute inset-0" style={premiumHeroOverlayStyle} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              {isEnglish ? t('teamPage.hero.badge') : 'Nuestro Equipo'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.05]"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            {isEnglish ? t('teamPage.hero.titlePart1') : 'Expertos que'}{' '}
            <span className="hero-title-accent">
              {isEnglish ? t('teamPage.hero.titleHighlight') : 'impulsan resultados'}
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="origin-left h-1 w-64 md:w-72 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl"
          >
            {isEnglish
              ? t('teamPage.hero.description')
              : 'Profesionales con décadas de experiencia en operaciones mineras de clase mundial, comprometidos con la excelencia y la mejora continua de cada proyecto.'}
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default TeamHero;
