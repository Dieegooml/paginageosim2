import { motion } from 'framer-motion';
import Container from '../ui/Container';

const trustStats = [
  { value: '+20', label: 'años de experiencia' },
  { value: '+32', label: 'proyectos completados' },
  { value: 'Presencia', label: 'internacional' },
  { value: 'Consultoría', label: 'especializada' },
];

const TrustIndicators = () => {
  return (
    <section className="relative bg-[#123B70] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(166,204,106,0.22),transparent_38%),radial-gradient(circle_at_85%_70%,rgba(124,191,255,0.18),transparent_42%)] pointer-events-none"
      />

      <Container className="relative">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="py-3"
                >
                  <div className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-3 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-200/80 font-medium capitalize tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>

                {index < trustStats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-6 w-px h-20 -translate-y-1/2">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-primary-400/25 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
    </section>
  );
};

export default TrustIndicators;
