import { motion } from 'framer-motion';
import { featuredContent } from '../../data/featured';
import Container from '../ui/Container';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contenido Destacado
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conocimientos y recursos sobre metodología Lean aplicada a la industria minera
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Imagen */}
              <Link to={item.link} className="block relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

                {/* Categoría */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full">
                  {item.category}
                </span>
              </Link>

              {/* Contenido */}
              <div className="p-6">
                <Link to={item.link}>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Footer del card */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.readTime} de lectura
                  </span>
                  <Link
                    to={item.link}
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1"
                  >
                    Leer más
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedContent;
