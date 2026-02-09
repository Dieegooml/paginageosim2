import { motion } from 'framer-motion';
import Container from '../ui/Container';

const LocationMap = () => {
  const address = {
    street: 'Av. Colonial 601',
    district: 'Ampliación Paucarpata, Paucarpata',
    city: 'Arequipa',
    country: 'Perú',
  };

  const fullAddress = `${address.street}, ${address.district}, ${address.city}, ${address.country}`;
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/?q=${mapsQuery}`;

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
              Nuestra Ubicación
            </span>
            <div className="w-12 h-px bg-primary-500" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Encuéntranos en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              Arequipa
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visítanos en nuestras oficinas o contáctanos para programar una reunión
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/80">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-blue-500/10 rounded-[1.5rem] blur-xl -z-10" />
              <iframe
                src={mapsEmbedUrl}
                className="w-full h-full min-h-[400px] md:min-h-[450px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Lean Mining Consulting"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Oficina Principal</h3>
                  <p className="text-slate-500 text-sm">Arequipa, Perú</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-2">Dirección</p>
                  <p className="text-slate-900 font-medium leading-relaxed">
                    {address.street}
                    <br />
                    {address.district}
                    <br />
                    {address.city}, {address.country}
                  </p>
                </div>

                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Abrir en Google Maps
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium text-slate-900">Fácil acceso</span>
                      <br />
                      Zona céntrica con estacionamiento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default LocationMap;
