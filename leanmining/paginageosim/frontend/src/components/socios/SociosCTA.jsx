import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const SociosCTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#123B70]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,204,106,0.18),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(124,191,255,0.15),transparent_45%)] pointer-events-none"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />

      <Container className="relative">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                ¿Tu empresa ofrece{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6CC6A] to-emerald-400">
                  tecnología minera
                </span>
                ?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Buscamos partners tecnológicos que compartan nuestra visión de excelencia
                técnica. Si tu solución puede aportar valor a nuestros proyectos, conversemos.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end"
            >
              <Button
                to="/contacto"
                className="rounded-xl bg-[#A6CC6A] text-slate-900 hover:bg-[#b8d97e] px-8 py-3.5 font-semibold shadow-lg shadow-[#A6CC6A]/20"
              >
                Proponer alianza
              </Button>
              <Button
                to="/servicios"
                variant="ghost"
                className="rounded-xl text-slate-300 hover:text-white hover:bg-white/10 px-8 py-3.5"
              >
                Ver servicios
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
    </section>
  );
};

export default SociosCTA;
