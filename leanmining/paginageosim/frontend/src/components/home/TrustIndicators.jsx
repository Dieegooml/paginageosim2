import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { company } from '../../data/company';

const TrustIndicators = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <Container className="relative">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12">
            {company.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative group"
              >
                {/* Stat container with hover effect */}
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-2xl transition-all duration-500 blur-xl" />

                  <div className="relative py-4">
                    {/* Value with gradient text */}
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">
                        {stat.value}
                      </span>
                    </div>

                    {/* Label with subtle styling */}
                    <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Vertical separator line */}
                {index < company.stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-6 w-px h-20 -translate-y-1/2">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
};

export default TrustIndicators;
