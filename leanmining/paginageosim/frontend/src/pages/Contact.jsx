import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { company } from '../data/company';

const Contact = () => {
  const { address } = company.contact;
  const fullAddress = [address.street, address.district, address.city, address.country].filter(Boolean).join(', ');
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/?q=${mapsQuery}`;
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/contact/contact-hero.jpg')`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(15,23,42,0.75) 35%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.25) 75%, rgba(15,23,42,0.05) 100%)',
          }}
        />
        

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary-600/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-1/4 h-1/3 bg-blue-600/10 blur-[120px] pointer-events-none" />

        <Container className="relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
            <div className="py-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-12 h-px bg-primary-500" />
                <span className="text-primary-400 text-sm font-medium tracking-widest uppercase">
                  Contacto
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8"
                style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
              >
                <span className="text-white">Hablemos de su </span>
                <span className="relative">
                  <span className="text-[#60A5FA]">
                    próximo proyecto
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#60A5FA] to-[#60A5FA] origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl"
              >
                Estamos listos para ayudarte a optimizar tus operaciones mineras
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                <ContactInfo />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-blue-500/10 rounded-[2rem] blur-2xl" />
              <ContactForm />
            </motion.div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </section>

      {/* Map Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary-500" />
              <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
                Nuestra Ubicación
              </span>
              <div className="w-12 h-px bg-primary-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Encuéntranos en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                Arequipa
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{fullAddress}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-blue-500/5 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/80">
              <iframe
                src={mapsEmbedUrl}
                className="w-full h-[400px] md:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Lean Mining Consulting"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-auto">
              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm text-slate-900 font-medium rounded-xl shadow-lg hover:bg-white transition-all"
              >
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Abrir en Google Maps
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-white border border-slate-200/80 rounded-[2rem] p-12 md:p-16 shadow-2xl shadow-slate-200/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/50 rounded-full blur-3xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-px bg-primary-500" />
                    <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
                      Nuestra experiencia
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Transformamos la eficiencia de tu operación minera
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Con más de 15 años de experiencia, nuestro equipo de consultores
                    especializados está listo para llevar tu proyecto al siguiente nivel.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5 p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary-200/50 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">7 países</p>
                      <p className="text-slate-500">de operación</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary-200/50 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">+50 proyectos</p>
                      <p className="text-slate-500">completados</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary-200/50 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">+20 años</p>
                      <p className="text-slate-500">experiencia combinada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
