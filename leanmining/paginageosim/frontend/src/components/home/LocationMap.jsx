import { motion } from 'framer-motion';
import Container from '../ui/Container';

const LocationMap = () => {
  const fullAddress = 'Av Colonial 601, Ampliación Paucarpata, Paucarpata, Arequipa, Perú';
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/?q=${mapsQuery}`;

  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white to-slate-50/80 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-50/30 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-14"
        >
          <p className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-5">
            <span className="text-slate-900">Nuestra </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              ubicación
            </span>
          </h2>

          {/* Línea decorativa */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mb-6" />

          <p className="text-lg text-slate-600 leading-relaxed">
            Av Colonial 601, Ampliación Paucarpata
            <br />
            Paucarpata, Arequipa, Perú
          </p>
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
            title="Ubicación Lean Mining Consulting"
          />
        </motion.div>

        <div className="mt-6 flex justify-end">
          <a
            href={mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/15 hover:scale-[1.02] transition-all duration-300"
          >
            Ver en Google Maps
          </a>
        </div>
      </Container>
    </section>
  );
};

export default LocationMap;
