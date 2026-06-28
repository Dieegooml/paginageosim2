import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const MissionVision = () => {
  const { t } = useTranslation();

  const cards = [
    {
      number: '01',
      title: t('aboutPage.philosophy.missionLabel'),
      text: t('aboutPage.philosophy.missionText'),
      tag: t('aboutPage.philosophy.missionTag'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      number: '02',
      title: t('aboutPage.philosophy.visionLabel'),
      text: t('aboutPage.philosophy.visionText'),
      tag: t('aboutPage.philosophy.visionTag'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-ink-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-gold-400/20" />
          <span className="text-gold-400/80 text-xs font-semibold tracking-[0.25em] uppercase">
            {t('aboutPage.philosophy.badge')}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06] mb-4"
        >
          <span className="text-white">{t('aboutPage.philosophy.title')} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
            {t('aboutPage.philosophy.titleAccent')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-16"
        >
          {t('aboutPage.philosophy.description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-[1px] rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,168,67,0.25), rgba(212,168,67,0.05), transparent)',
                }}
              />

              <div className="relative h-full rounded-[1.75rem] bg-gradient-to-b from-[#111B2E] to-[#0D1524] p-px">
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] pointer-events-none" />

                <div className="relative h-full rounded-[1.75rem] bg-ink-900 p-8 md:p-10 lg:p-12 flex flex-col">
                  <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-gold-500/0 rounded-full mb-8" />

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gold-400/50 uppercase tracking-[0.25em]">{card.number}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-0.5">{card.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-base md:text-lg flex-1">
                    {card.text}
                  </p>

                  <div className="mt-8 pt-5 border-t border-white/[0.04] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
                    <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">{card.tag}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
