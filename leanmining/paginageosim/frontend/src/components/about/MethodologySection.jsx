import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const MethodologySection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('aboutPage.methodology.step1Title'),
      description: t('aboutPage.methodology.step1Desc'),
      image: '/images/about/enfoque-1.jpg',
    },
    {
      number: '02',
      title: t('aboutPage.methodology.step2Title'),
      description: t('aboutPage.methodology.step2Desc'),
      image: '/images/about/enfoque-2.jpg',
    },
    {
      number: '03',
      title: t('aboutPage.methodology.step3Title'),
      description: t('aboutPage.methodology.step3Desc'),
      image: '/images/about/enfoque-3.jpg',
    },
    {
      number: '04',
      title: t('aboutPage.methodology.step4Title'),
      description: t('aboutPage.methodology.step4Desc'),
      image: '/images/about/enfoque-4.jpg',
    },
    {
      number: '05',
      title: t('aboutPage.methodology.step5Title'),
      description: t('aboutPage.methodology.step5Desc'),
      image: '/images/about/enfoque-5.jpg',
    },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-28">
      <Container>
        <div className="max-w-4xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-500/80 to-primary-400/40" />
            <span className="text-primary-600 text-xs font-semibold tracking-[0.3em] uppercase">
              {t('aboutPage.methodology.badge')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6"
          >
            {t('aboutPage.methodology.titlePart1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
              {t('aboutPage.methodology.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl"
          >
            {t('aboutPage.methodology.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.slice(0, 3).map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="h-full"
            >
              <div className="h-full min-h-[24rem] rounded-2xl border border-slate-200/80 bg-white/90 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60 flex flex-col">
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm font-bold shadow-md shadow-primary-600/30">
                    {step.number}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">{step.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:mt-10 max-w-[56rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {steps.slice(3).map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.08 }}
              className="h-full"
            >
              <div className="h-full min-h-[24rem] rounded-2xl border border-slate-200/80 bg-white/90 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60 flex flex-col">
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm font-bold shadow-md shadow-primary-600/30">
                    {step.number}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">{step.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MethodologySection;
