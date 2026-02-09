import { motion } from 'framer-motion';
import Container from '../ui/Container';

const ServicesIntro = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
              Nuestro Enfoque
            </span>
            <div className="w-12 h-px bg-primary-500" />
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 leading-relaxed font-light">
            Desarrollamos estrategias mineras que transforman la complejidad técnica
            en resultados económicos tangibles. Nuestro enfoque combina{' '}
            <span className="text-primary-600 font-semibold">rigor metodológico</span>{' '}
            con décadas de experiencia operativa para entregar planes que maximizan
            el retorno de cada proyecto.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesIntro;
