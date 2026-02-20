import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const CONTACTO_CTA_BG = '/images/contacto-cta-bg.jpg';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 md:py-36 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${CONTACTO_CTA_BG}')` }}
      />

      {/* Overlay oscuro corporativo (azul oscuro → negro) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2240]/75 via-[#123B70]/70 to-slate-950/75" />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            {t('contactPage.cta.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-100/90 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            {t('contactPage.cta.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/centro-contenido"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#123B70] font-semibold text-base rounded-xl shadow-2xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              {t('contactPage.cta.button')}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactCTA;
