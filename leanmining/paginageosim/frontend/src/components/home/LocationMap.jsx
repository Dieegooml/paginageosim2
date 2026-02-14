import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { company } from '../../data/company';

const OFFICE_LAT = -16.42745554;
const OFFICE_LNG = -71.50242861;

const LocationMap = () => {
  const { address } = company.contact;
  const fullAddress = [address.street, address.district, address.city, address.country].filter(Boolean).join(', ');
  const mapsEmbedUrl = `https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}&z=17&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/?q=${OFFICE_LAT},${OFFICE_LNG}`;

  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white to-slate-50/80 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-50/30 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-14"
        >
          <p className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Nuestra Ubicacion</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-5">
            <span className="text-slate-900">Encuentranos en </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Arequipa</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mb-6" />

          <p className="text-lg text-slate-600 leading-relaxed">Visitanos en nuestras oficinas o contactanos para programar una reunion</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/12"
        >
          <iframe
            src={mapsEmbedUrl}
            className="w-full h-[360px] md:h-[440px] lg:h-[520px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion Lean Mining Consulting"
          />
        </motion.div>

        <div className="mt-6 flex justify-end">
          <a
            href={mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/15 hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ver en Google Maps
          </a>
        </div>
      </Container>
    </section>
  );
};

export default LocationMap;
