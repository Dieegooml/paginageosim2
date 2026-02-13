import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
            <span className="text-white">{t('cta.titlePart1')} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              {t('cta.titleHighlight')}
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {t('cta.description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              to="/contacto"
              size="large"
              className="bg-primary-500 text-white hover:bg-primary-600 border-0 shadow-lg shadow-primary-500/25 transition-all px-8"
            >
              {t('common.requestConsultation')}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              to="/nosotros"
              variant="ghost"
              size="large"
              className="text-white border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              {t('common.learnMore')}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
