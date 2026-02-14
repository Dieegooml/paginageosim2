import { motion } from 'framer-motion';
import Container from '../ui/Container';

const ServiceDetail = ({ service, index, isReversed }) => {
  const bgClass = index % 2 === 0
    ? 'bg-white'
    : 'bg-gradient-to-br from-slate-50 via-white to-slate-50';

  return (
    <section className={`relative py-24 md:py-32 ${bgClass} overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        {index % 2 !== 0 && (
          <>
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-50/40 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <Container className="relative">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${isReversed ? 'lg:order-2' : ''}`}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-blue-500/5 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            <div className={`absolute -z-10 w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl top-6 ${isReversed ? '-left-6' : '-right-6'}`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isReversed ? 'lg:order-1' : ''}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              Servicio {String(index + 1).padStart(2, '0')}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {service.title}
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {service.description}
            </p>

            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 bg-slate-50/80 rounded-xl border border-slate-100 hover:bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
                    <div className="mt-2 flex-shrink-0">
                      <span className="block w-2 h-2 bg-primary-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <span className="text-slate-700 font-medium pt-0.5">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetail;
