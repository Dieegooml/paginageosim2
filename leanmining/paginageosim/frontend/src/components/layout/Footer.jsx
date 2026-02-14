import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const fullAddress = 'Av. Colonial 601, Ampliacion Paucarpata, Paucarpata, Arequipa, Peru';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;
  const whatsappNumber = '526142088019';
  const whatsappMessage = 'Buen dia, me gustaria recibir asesoria especializada para mi proyecto minero.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const footerLinks = [
    { path: '/nosotros', label: t('nav.about') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/equipo', label: t('nav.team') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#123B70]" />
      <div className="h-px bg-white/15" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-16 md:py-20 lg:py-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8 lg:gap-12 items-start">
            <div className="md:col-span-4">
              <div className="flex flex-col items-start -mt-1">
                <img
                  src="/images/logo-leanmining-consulting-footer.png"
                  alt="Lean Mining Consulting"
                  className="w-64 md:w-80 h-auto object-contain drop-shadow-[0_10px_20px_rgba(1,10,24,0.35)] transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[13px] font-bold text-slate-100 uppercase tracking-[0.18em] mb-7 pb-3 border-b border-white/10">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-base text-slate-300/90 hover:text-white font-medium transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="w-0 h-px bg-[#A6CC6A] group-hover:w-5 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[13px] font-bold text-slate-100 uppercase tracking-[0.18em] mb-7 pb-3 border-b border-white/10">
                Ubicacion
              </h4>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-[#1A4468]/70 to-[#153651]/70 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/12 shadow-inner">
                  <svg className="w-5 h-5 text-[#A6CC6A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-200 text-base font-medium leading-[1.75]">
                    Av. Colonial 601
                  </p>
                  <p className="text-slate-300/80 text-sm leading-[1.7]">
                    Ampliacion Paucarpata, Paucarpata
                    <br />
                    Arequipa, Peru
                  </p>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#A6CC6A] hover:text-[#bfdb90] transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Ver en Google Maps
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 group inline-flex items-center gap-2.5 text-sm font-semibold text-[#A6CC6A] hover:text-[#bfdb90] transition-all duration-300"
                aria-label="Contactar por WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.83 11.83 0 0012.1 0C5.53 0 .19 5.34.19 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.32-1.65a11.86 11.86 0 005.78 1.49h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.49-8.45zM12.1 21.82h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.75.98 1-3.65-.24-.37a9.9 9.9 0 01-1.53-5.27C2.16 6.46 6.66 1.96 12.1 1.96c2.65 0 5.13 1.03 7 2.91a9.82 9.82 0 012.9 7.01c0 5.45-4.44 9.94-9.9 9.94zm5.43-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.26 5.18 4.57.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
                </svg>
                WhatsApp +52 614 208 8019
              </a>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 py-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <p className="text-sm text-slate-400/90 font-medium tracking-wide text-center lg:text-left">
            &copy; {currentYear} Lean Mining Consulting. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/terminos" className="text-slate-300/90 hover:text-white transition-colors">
              Terminos y Condiciones
            </Link>
            <span className="text-white/25">|</span>
            <Link to="/privacidad" className="text-slate-300/90 hover:text-white transition-colors">
              Politica de Privacidad
            </Link>
          </div>
          <p className="text-sm text-slate-500 tracking-wide">
            Arequipa, Peru
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
