import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { premiumHeroOverlayStyle } from '../ui/heroOverlay';

const stats = [
  {
    value: '+20',
    label: 'Años de experiencia',
    sublabel: 'En la industria minera',
  },
  {
    value: '7',
    label: 'Países',
    sublabel: 'De operación activa',
  },
  {
    value: '+30',
    label: 'Proyectos',
    sublabel: 'Ejecutados con éxito',
  },
  {
    value: null,
    label: 'Certificados',
    sublabel: 'En calidad y seguridad',
    isIcon: true,
  },
];

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/about/hero-mining.jpg"
          alt="Operación minera subterránea"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={premiumHeroOverlayStyle}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/35 to-transparent" />

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
            <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
              Sobre Nosotros
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            <span className="hero-title-main">Somos Lean Mining</span>
            <br />
            <span className="hero-title-accent">Consulting</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            className="origin-left h-1 w-64 md:w-72 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 rounded-full mb-8"
          />

          <div className="max-w-[680px] mt-4">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="text-lg text-white/90 leading-[1.6]"
            >
              Consultoría técnica de alto nivel en planeación minera, procesos metalúrgicos e hidrogeología.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: 'easeOut' }}
              className="mt-2 text-lg text-white/90 leading-[1.6]"
            >
              Impulsamos la optimización operativa, la sostenibilidad y la excelencia técnica en cada etapa del ciclo minero.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: 'easeOut' }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-4xl"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="h-full min-h-[9.75rem] rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-primary-500/20 border border-primary-400/30 text-primary-200 flex items-center justify-center">
                  {stat.isIcon ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ) : (
                    <span className="font-bold text-sm">{stat.value}</span>
                  )}
                </div>
                <p className="text-white font-semibold text-sm leading-tight">{stat.label}</p>
                <p className="text-slate-300 text-xs leading-relaxed mt-1">{stat.sublabel}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/25 text-[10px] uppercase tracking-[0.35em]">Descubrir más</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;




