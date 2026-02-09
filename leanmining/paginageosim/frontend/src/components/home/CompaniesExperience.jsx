import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import { companies, companiesSection } from '../../data/companies';

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
      whileHover={{ scale: 1.03 }}
    >
      <div
        className={[
          'bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl px-6 py-5 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-200',
          company.url ? 'cursor-pointer' : 'cursor-default opacity-90',
        ].join(' ')}
      >
        {!imageError ? (
          <img
            src={company.logo}
            alt={`Logo de ${company.name}`}
            onError={() => setImageError(true)}
            className="h-12 max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
        ) : (
          <div className="text-center">
            <span className="text-slate-600 font-semibold text-sm group-hover:text-primary-600 transition-colors">
              {company.name}
            </span>
            <span className="block text-slate-400 text-xs mt-0.5">
              {company.country}
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const CompaniesExperience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
            Trayectoria Comprobada
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {companiesSection.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {companiesSection.subtitle}
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
          className="bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
        >
          {/* Logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
            {companies.map((company, index) => (
              <CompanyLogo key={company.name} company={company} index={index} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 pt-8 border-t border-slate-200/60 text-center"
          >
            <p className="text-slate-500 text-sm">
              Más de{' '}
              <span className="font-semibold text-primary-600">80 años</span> de
              experiencia combinada en operaciones mineras de clase mundial
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CompaniesExperience;