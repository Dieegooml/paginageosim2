import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { premiumHeroOverlayStyle } from '../components/ui/heroOverlay';

// Coloca tu imagen de hero en: public/images/contact/hero-contacto.jpg
const CONTACT_HERO_IMAGE = '/images/contact/hero-contacto.jpg';
const CONTACT_EXPERIENCE_BG = '/images/contact/contact-experience-bg.jpg';

const OFFICES = [
  {
    id: 'peru',
    label: 'Perú',
    city: 'Arequipa',
    country: 'Perú',
    address: 'Av. Colonial 601, Ampliación Paucarpata',
    fullAddress: 'Arequipa, Perú',
    embedUrl: 'https://maps.google.com/maps?q=-16.42745554,-71.50242861&z=17&output=embed',
    linkUrl: 'https://maps.google.com/?q=-16.42745554,-71.50242861',
    color: 'from-primary-600 to-primary-700',
    accent: 'bg-primary-500',
  },
  {
    id: 'mexico',
    label: 'México',
    city: 'Chihuahua',
    country: 'México',
    address: 'Privada José María Morelos y Pavón 1820',
    fullAddress: 'Chihuahua, Chihuahua 31020, México',
    embedUrl: 'https://maps.google.com/maps?q=Privada+Jose+Maria+Morelos+y+Pavon+1820,+Chihuahua,+Chihuahua,+31020,+Mexico&z=16&output=embed',
    linkUrl: 'https://maps.google.com/?q=Privada+Jose+Maria+Morelos+y+Pavon+1820,+Chihuahua,+Chihuahua,+31020,+Mexico',
    color: 'from-blue-600 to-blue-700',
    accent: 'bg-blue-500',
  },
];

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState(0);
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
      <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-primary-500" />
              <span className="text-primary-600 text-xs font-bold tracking-[0.3em] uppercase">Nuestras Oficinas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Presencia en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Latinoamérica
              </span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg">
              Selecciona una oficina para ver su ubicación en el mapa.
            </p>
          </motion.div>

          {/* Layout: selector left + map right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {/* Office selector */}
            <div className="flex flex-col gap-4">
              {OFFICES.map((office, index) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(index)}
                  className={`text-left w-full rounded-2xl p-5 border-2 transition-all duration-300 ${
                    activeOffice === index
                      ? 'bg-white border-primary-500 shadow-lg shadow-primary-500/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-slate-900 text-sm">{office.city}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${office.color}`}>
                          {office.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{office.address}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{office.fullAddress}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 transition-all duration-300 ${
                      activeOffice === index ? `${office.accent}` : 'bg-slate-200'
                    }`} />
                  </div>
                </button>
              ))}

              {/* Link to maps */}
              <a
                href={OFFICES[activeOffice].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-200/80 h-[360px] md:h-[440px] lg:h-full min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={OFFICES[activeOffice].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={OFFICES[activeOffice].embedUrl}
                    className="w-full h-full absolute inset-0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Oficina ${OFFICES[activeOffice].city}`}
                  />
                </AnimatePresence>
                {/* Badge overlay */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md text-sm font-semibold text-slate-800">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${activeOffice === 0 ? 'text-primary-600' : 'text-blue-600'}`}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {OFFICES[activeOffice].city}, {OFFICES[activeOffice].country}
                  </div>
                </div>
              </div>
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







