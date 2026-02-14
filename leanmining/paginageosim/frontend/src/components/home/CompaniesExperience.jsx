import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import { companies } from '../../data/companies';

const CompanyLogo = ({ company, index }) => {
  const [imageError, setImageError] = useState(false);

  // Si no hay url, se renderiza como div normal (no clickeable)
  const Wrapper = company.url ? motion.a : motion.div;

  return (
    <Wrapper
      {...(company.url
        ? {
            href: company.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': `Abrir sitio de ${company.name}`,
            title: company.name,
            className: 'group block relative z-10',
            style: { textDecoration: 'none' },
          }
        : {
            className: 'group relative z-10',
          })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className={[
          'bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm border border-slate-200/70 rounded-xl flex items-center justify-center h-28 transition-all duration-300 hover:shadow-md hover:shadow-primary-500/15 hover:border-primary-300/50 hover:bg-white overflow-hidden',
          company.url ? 'cursor-pointer' : 'cursor-default opacity-80',
        ].join(' ')}
      >
        {!imageError ? (
          <img
            src={company.logo}
            alt={`Logo de ${company.name}`}
            onError={() => setImageError(true)}
            className="h-14 w-full max-w-[80%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
        ) : (
          <div className="text-center px-3">
            <span className="text-slate-600 font-semibold text-xs group-hover:text-primary-600 transition-colors line-clamp-2">
              {company.name}
            </span>
            <span className="block text-slate-400 text-[11px] mt-1">
              {company.country}
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const CompaniesExperience = ({ mode = 'grid' }) => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isCarousel = mode === 'carousel';
  const carouselItems = [...companies, ...companies];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            {t('companies.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('companies.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('companies.subtitle')}
          </p>
        </motion.div>

        {/* Premium card container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="bg-white/50 backdrop-blur-sm border border-slate-100/60 rounded-2xl p-8 md:p-10 lg:p-12 shadow-sm shadow-slate-200/30"
        >
          {/* Logos */}
          {isCarousel ? (
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-3 md:gap-4 lg:gap-5 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 38,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {carouselItems.map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="w-[170px] sm:w-[190px] md:w-[210px] flex-shrink-0"
                  >
                    <CompanyLogo company={company} index={index % companies.length} />
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
              {companies.map((company, index) => (
                <CompanyLogo key={company.name} company={company} index={index} />
              ))}
            </div>
          )}

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-slate-200/50 text-center"
          >
            <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: t('companies.bottomNote') }} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CompaniesExperience;
