import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * LOGOS
 * Colocar los archivos en:
 *   /public/images/socios/ebogeotech.png   ← EboGeotech
 *   /public/images/socios/zoluzion.png     ← Zoluzion
 *
 * Formatos recomendados: PNG con fondo transparente, o SVG.
 * Tamaño sugerido: min 400 × 160 px para buena resolución.
 */
const PARTNERS = [
  {
    id: 'ebogeotech',
    name: 'EboGeotech',
    url: 'https://ebogeotech.com/',
    logo: '/images/socios/ebogeotech.png',
  },
  {
    id: 'zoluzion',
    name: 'Zoluzion',
    url: 'https://zoluzion.com/',
    logo: '/images/socios/zoluzion.png',
  },
];

const Card = ({ partner, index }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: index * 0.12 }}
      className="group flex flex-col md:flex-row bg-white rounded-2xl border border-slate-200/80 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* ── Logo panel (izquierda en desktop) ── */}
      <div className="md:w-72 lg:w-80 xl:w-96 shrink-0 flex flex-col items-center justify-center gap-4 px-10 py-12 md:py-0 bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-white transition-colors duration-300 min-h-[200px]">
        <img
          src={partner.logo}
          alt={`Logo de ${partner.name}`}
          /* ↑ Logo grande y centrado — reemplaza el archivo en /public/images/socios/ */
          className="max-h-24 max-w-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              e.currentTarget.nextElementSibling.style.removeProperty('display');
            }
          }}
        />
        {/* Fallback: inicial cuando no hay imagen */}
        <div
          style={{ display: 'none' }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary-700 select-none">
              {partner.name.charAt(0)}
            </span>
          </div>
          <span className="text-xs text-slate-400 text-center">
            Logo · /public/images/socios/{partner.id}.png
          </span>
        </div>
      </div>

      {/* ── Contenido (derecha en desktop) ── */}
      <div className="flex flex-col flex-1 justify-between px-8 py-9 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-500 mb-3">
            {t(`contentCenter.partners.${partner.id}.tagline`)}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors duration-200">
            {partner.name}
          </h3>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl">
            {t(`contentCenter.partners.${partner.id}.description`)}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#123B70] text-white text-sm font-semibold hover:bg-[#1a4f90] transition-colors duration-200"
          >
            {t('contentCenter.partners.visitSite')}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-xs text-slate-400 hidden sm:block">
            {partner.url.replace('https://', '').replace('/', '')}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const PartnerCards = () => (
  <div className="flex flex-col gap-5 lg:gap-6 w-full">
    {PARTNERS.map((partner, index) => (
      <Card key={partner.id} partner={partner} index={index} />
    ))}
  </div>
);

export default PartnerCards;
