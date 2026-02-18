import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import ContentHero from '../components/contenido/ContentHero';
import PartnerCards from '../components/contenido/PartnerCards';

const CentroContenido = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentHero />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary-400" />
              <span className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase">
                {t('contentCenter.partners.eyebrow')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              {t('contentCenter.partners.title')}
              <br />
              {t('contentCenter.partners.titleLine2')}
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
              {t('contentCenter.partners.description')}
            </p>
          </motion.div>

          <PartnerCards />
        </Container>
      </section>
    </>
  );
};

export default CentroContenido;
