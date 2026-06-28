import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';

const partners = [
  {
    id: 'ebogeotech',
    name: 'EboGeotech',
    descKey: 'sociosPage.ebogeotech.description',
    url: 'https://ebogeotech.com/',
    logo: '/images/socios/ebogeotech.png',
  },
  {
    id: 'zoluzion',
    name: 'Zoluzion',
    descKey: 'sociosPage.zoluzion.description',
    url: 'https://zoluzion.com/',
    logo: '/images/socios/zoluzion.png',
  },
];

const PartnerCard = ({ partner, index }) => {
  const { t } = useTranslation();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-center justify-center h-36 px-10 border-b border-slate-100 bg-slate-50 group-hover:bg-white transition-colors duration-300">
        <img
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          className="max-h-16 max-w-[180px] w-auto object-contain opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-400"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'flex';
          }}
        />
        <div
          style={{ display: 'none' }}
          className="w-16 h-16 rounded-2xl bg-primary-100 items-center justify-center"
        >
          <span className="text-2xl font-bold text-primary-700">
            {partner.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
          {partner.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">
          {t(partner.descKey)}
        </p>

        <div className="mt-8">
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123B70] text-white text-sm font-semibold hover:bg-[#1a4f90] transition-colors duration-200"
          >
            {t('sociosPage.visitSite')}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Socios = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {t('sociosPage.hero.eyebrow')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            {t('sociosPage.hero.title')}
          </h1>
          <div className="w-12 h-1 bg-primary-500 rounded-full mb-6" />
          <p className="text-lg text-slate-500 leading-relaxed">
            {t('sociosPage.hero.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Socios;
