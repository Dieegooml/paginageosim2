import { motion } from 'framer-motion';
import Container from '../ui/Container';

const highlights = [
  {
    label: '20 años de experiencia combinada',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Reportes JORC / NI 43-101 / UNFC',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: 'Proyectos en Asia, África, América y Europa',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AboutPreview = () => {
  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/40 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-primary-600 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Consultoría minera global
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight">
              <span className="text-slate-900">Consultoría técnica </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                con visión global
              </span>
            </h2>

            {/* Línea decorativa */}
            <div className="mt-8 w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
          </motion.div>

          {/* Right column: Paragraph + Bullets + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-lg text-slate-700 leading-[1.85] mb-10">
              Con 20 años de experiencia global combinada, nuestro equipo de consultores en Geología y Minería ofrece servicios integrales de consultoría técnica: debida diligencia, evaluación de recursos minerales, gestión de exploración e informes conforme a JORC, NI 43-101, UNFC y MEMC India 2015. Desarrollamos planes mineros, estudios de prefactibilidad, procesamiento de minerales y estudios metalúrgicos para operaciones en Asia, Australia, Medio Oriente, África, América y Europa, abarcando commodities como hierro, carbón, cobre, oro, bauxita, níquel, cromo, zinc y manganeso.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 mb-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100/80 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-slate-800 text-sm font-medium leading-snug pt-1.5">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
