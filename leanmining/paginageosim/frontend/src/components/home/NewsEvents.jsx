import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { news, formatDate } from '../../data/news';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  const { t } = useTranslation();

  // Separar noticia destacada del resto
  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              {t('news.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t('news.title')}
            </h2>
          </div>
          <Button
            to="/noticias"
            variant="ghost"
            className="mt-4 md:mt-0 text-slate-600 hover:text-primary-600"
          >
            {t('common.viewAllNews')}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>

        {/* Layout: Destacado + Lista */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Noticia destacada (izquierda) */}
          {featuredNews && (
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden h-[400px] lg:h-full"
            >
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Contenido sobre la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-4">
                  {featuredNews.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                  <Link to={featuredNews.link}>{featuredNews.title}</Link>
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(featuredNews.date)}
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Lista de noticias (derecha) */}
          <div className="space-y-4">
            {otherNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                {/* Thumbnail */}
                <Link to={item.link} className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                </div>

                {/* Flecha */}
                <div className="flex-shrink-0 self-center">
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsEvents;
