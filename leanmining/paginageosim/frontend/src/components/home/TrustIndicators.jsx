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
    <section className="relative bg-gradient-to-r from-[#0b1f3a] via-[#0f2748] to-[#0b1f3a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent pointer-events-none" />

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
                <div className="py-3">
                  <div className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-3 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-200/80 font-medium capitalize tracking-wide">
                    {stat.label}
                  </div>
                </div>

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
