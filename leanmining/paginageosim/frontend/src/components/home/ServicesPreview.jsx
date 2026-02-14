import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesPreview = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-28 md:py-36 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary-50/30 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <p className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-5">
            <span className="text-slate-900">Soluciones técnicas </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              para cada etapa
            </span>
          </h2>

          {/* Línea decorativa */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mb-6" />

          <p className="text-lg text-slate-600 leading-relaxed">
            Integramos diseño, planeación y optimización operativa para mejorar el valor económico de cada operación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group h-full"
            >
              <article className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-900/12 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>
                  <Button
                    to={`/servicios#${service.id}`}
                    variant="secondary"
                    className="w-full justify-center rounded-xl border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    Ver servicio
                  </Button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
