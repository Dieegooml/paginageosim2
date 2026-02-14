import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const fullAddress = 'Av. Colonial 601, Ampliación Paucarpata, Paucarpata, Arequipa, Perú';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  const footerLinks = [
    { path: '/nosotros', label: t('nav.about') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/equipo', label: t('nav.team') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.65) 70%, rgba(15,23,42,0.35) 100%)',
        }}
      />
      {/* Texturas sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-[#1E40AF]/5 via-transparent to-transparent pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-16 md:py-20 lg:py-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8 lg:gap-12 items-start">

            {/* Brand only - large logo */}
            <div className="md:col-span-4">
              <div className="flex items-center mb-7">
                <img
                  src="/images/logo-leanmining-consulting.png"
                  alt="Lean Mining Consulting"
                  className="w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-4">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.18em] mb-7 pb-3 border-b border-white/8">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-[15px] text-slate-400 hover:text-white font-medium transition-all duration-300"
                    >
                      <span className="w-0 h-px bg-primary-400 group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="md:col-span-4">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.18em] mb-7 pb-3 border-b border-white/8">
                Ubicación
              </h4>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/8 shadow-inner">
                  <svg className="w-5 h-5 text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300/90 text-[15px] font-medium leading-[1.75]">
                    Av. Colonial 601
                  </p>
                  <p className="text-slate-400/80 text-sm leading-[1.7]">
                    Ampliación Paucarpata, Paucarpata
                    <br />
                    Arequipa, Perú
                  </p>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Ver en Google Maps
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-slate-500 font-medium tracking-wide">
            © {currentYear} Lean Mining Consulting. {t('footer.rights')}.
          </p>
          <p className="text-[13px] text-slate-600 tracking-wide">
            Arequipa, Perú
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
