import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const offices = [
  {
    id: 'peru',
    country: 'Peru',
    city: 'Arequipa',
    address: 'Av. Colonial 601, Ampliacion Paucarpata',
    fullAddress: 'Arequipa, Peru',
    embedUrl: 'https://maps.google.com/maps?q=-16.42745554,-71.50242861&z=17&output=embed',
    linkUrl: 'https://maps.google.com/?q=-16.42745554,-71.50242861',
  },
  {
    id: 'mexico',
    country: 'Mexico',
    city: 'Chihuahua',
    address: 'Calle Privada Jose Maria Morelos y Pavon 1820',
    fullAddress: 'Chihuahua, Chihuahua 31020, Mexico',
    embedUrl:
      'https://maps.google.com/maps?q=Privada+Jose+Maria+Morelos+y+Pavon+1820,+Chihuahua,+Chihuahua,+31020,+Mexico&z=16&output=embed',
    linkUrl:
      'https://maps.google.com/?q=Privada+Jose+Maria+Morelos+y+Pavon+1820,+Chihuahua,+Chihuahua,+31020,+Mexico',
  },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const LocationMap = () => {
  const { t } = useTranslation();

  const localizedOffices = offices.map((office) => ({
    ...office,
    country: t(`homeLocation.offices.${office.id}.country`, { defaultValue: office.country }),
    city: t(`homeLocation.offices.${office.id}.city`, { defaultValue: office.city }),
    address: t(`homeLocation.offices.${office.id}.address`, { defaultValue: office.address }),
    fullAddress: t(`homeLocation.offices.${office.id}.fullAddress`, {
      defaultValue: office.fullAddress,
    }),
  }));

  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white to-slate-50/80 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-50/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-600 text-xs font-bold tracking-[0.3em] uppercase">
              {t('homeLocation.badge')}
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-5"
          >
            <span className="text-slate-900">{t('homeLocation.titleMain')} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              {t('homeLocation.titleAccent')}
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="origin-center mx-auto w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {t('homeLocation.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            {localizedOffices.map((office) => (
              <div
                key={office.id}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-semibold text-slate-700"
              >
                <span className="text-primary-500">
                  <PinIcon />
                </span>
                {office.city}, {office.country}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {localizedOffices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/8 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/12 transition-shadow duration-500">
                <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-500/30">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-[0.2em] leading-none mb-1">
                      {t('homeLocation.officeLabel')}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {office.city}, {office.country}
                    </h3>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-slate-400 leading-relaxed">{office.address}</p>
                    <p className="text-xs text-slate-400">{office.fullAddress}</p>
                  </div>
                </div>

                <div className="relative">
                  <iframe
                    src={office.embedUrl}
                    className="w-full h-[300px] md:h-[360px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('homeLocation.mapTitle', {
                      country: office.country,
                      defaultValue: `Lean Mining office - ${office.country}`,
                    })}
                  />
                </div>

                <div className="px-6 py-4 border-t border-slate-100 flex justify-end">
                  <a
                    href={office.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/15 hover:scale-[1.02] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('common.openGoogleMaps')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LocationMap;
