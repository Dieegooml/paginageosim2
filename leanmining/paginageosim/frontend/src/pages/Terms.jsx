import { motion } from 'framer-motion';
import Container from '../components/ui/Container';

const sections = [
  {
    id: '01',
    title: 'Uso del sitio',
    content:
      'El contenido publicado en este sitio es de carácter informativo y corporativo. No está permitido el uso indebido de la información, marca, diseño o elementos gráficos.',
  },
  {
    id: '02',
    title: 'Propiedad intelectual',
    content:
      'Todos los textos, imágenes, logotipos y materiales del sitio son propiedad de Lean Mining Consulting o se usan con autorización.',
  },
  {
    id: '03',
    title: 'Limitación de responsabilidad',
    content:
      'Lean Mining Consulting no garantiza que el sitio esté libre de errores o interrupciones, y no asume responsabilidad por daños derivados del uso de esta web.',
  },
  {
    id: '04',
    title: 'Modificaciones',
    content:
      'Nos reservamos el derecho de actualizar estos términos en cualquier momento para mantener la información alineada a nuestras operaciones.',
  },
];

const Terms = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-900/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-gradient-to-r from-primary-400/80 to-primary-300/40" />
              <span className="text-primary-300 text-xs font-semibold tracking-[0.3em] uppercase">
                Lean Mining Consulting
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Términos y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                Condiciones
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Al acceder y utilizar este sitio web, aceptas los presentes términos y
              condiciones de uso de Lean Mining Consulting.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contenido */}
      <section className="bg-slate-50 py-20 md:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 p-8 md:p-10"
              >
                <div className="flex items-start gap-6">
                  {/* Número de sección */}
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-xs font-bold text-primary-600 tracking-widest mt-0.5">
                    {section.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug">
                      {section.title}
                    </h2>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full mb-4" />
                    <p className="text-slate-600 leading-[1.85] text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pie de página legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Lean Mining Consulting. Todos los derechos reservados.
            </p>
            <p className="text-sm text-slate-400">
              Arequipa, Perú
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Terms;
