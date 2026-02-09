import { motion } from 'framer-motion';
import Container from '../ui/Container';

const TeamHero = () => {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/images/team/hero-equipo.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500 rounded-full blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
            <span className="text-primary-300 text-sm font-medium">
              Nuestro Equipo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Expertos que{' '}
            <span className="text-primary-400">impulsan resultados</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Profesionales con décadas de experiencia en operaciones mineras de clase mundial,
            comprometidos con la excelencia y la mejora continua de cada proyecto.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default TeamHero;
