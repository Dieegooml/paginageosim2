import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { company } from '../data/company';
import { premiumHeroOverlayStyle } from '../components/ui/heroOverlay';

// Coloca tu imagen de hero en: public/images/contact/hero-contacto.jpg
const CONTACT_HERO_IMAGE = '/images/contact/hero-contacto.jpg';
const CONTACT_EXPERIENCE_BG = '/images/contact/contact-experience-bg.jpg';
const OFFICE_LAT = -16.42745554;
const OFFICE_LNG = -71.50242861;

const Contact = () => {
  const { address } = company.contact;
  const fullAddress = [address.street, address.district, address.city, address.country].filter(Boolean).join(', ');
  const mapsEmbedUrl = `https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}&z=17&output=embed`;
  const mapsLinkUrl = `https://maps.google.com/?q=${OFFICE_LAT},${OFFICE_LNG}`;
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CONTACT_HERO_IMAGE}')`,
          }}
        />

        <div
          className="absolute inset-0"
          style={premiumHeroOverlayStyle}
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
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
                style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
              >
                <span className="hero-title-main">Hablemos de su </span>
                <span className="relative">
                  <span className="hero-title-accent">
                    próximo proyecto
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 origin-left"
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
              <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">Nuestra Ubicación
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

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${CONTACT_EXPERIENCE_BG}')` }}
        />
        <div className="absolute inset-0 bg-[#0b2240]/45" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-white/12 backdrop-blur-xl border border-white/25 rounded-[2rem] p-12 md:p-16 shadow-2xl shadow-slate-900/20 overflow-hidden">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-px bg-primary-500" />
                    <span className="text-primary-200 text-sm font-medium tracking-widest uppercase">
                      Nuestra experiencia
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Transformamos la eficiencia de tu operación minera
                  </h2>
                  <p className="text-lg text-slate-100/90 leading-relaxed">
                    Con más de 20 años de experiencia, nuestro equipo de consultores
                    especializados está listo para llevar tu proyecto al siguiente nivel.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">7 países</p>
                      <p className="text-slate-200/90">de operación</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">+30 proyectos</p>
                      <p className="text-slate-200/90">completados</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">+20 años</p>
                      <p className="text-slate-200/90">experiencia combinada</p>
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







