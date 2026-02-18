import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import { alianzas, categoriasAlianzas } from '../../data/socios';

const SociosGrid = () => {
  const [filtro, setFiltro] = useState('todos');

  // Compute counts per category
  const categoriasConCount = useMemo(() =>
    categoriasAlianzas.map((cat) => ({
      ...cat,
      count: cat.id === 'todos'
        ? alianzas.length
        : alianzas.filter((a) => a.categoria === cat.id).length,
    })),
    []
  );

  const filtered = filtro === 'todos'
    ? alianzas
    : alianzas.filter((a) => a.categoria === filtro);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* ── Sidebar (SRK-inspired) ── */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              {/* Sidebar header */}
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-5">
                Filtrar por Área
              </h3>

              <nav className="space-y-1">
                {categoriasConCount.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFiltro(cat.id)}
                    className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-250 ${
                      filtro === cat.id
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Active indicator */}
                      <span className={`w-1 h-5 rounded-full transition-all duration-300 ${
                        filtro === cat.id ? 'bg-primary-500' : 'bg-transparent'
                      }`} />
                      <span className="text-sm">{cat.label}</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md transition-colors ${
                      filtro === cat.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Sidebar decorative */}
              <div className="hidden lg:block mt-10 p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nuestro Ecosistema</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Empresas aliadas que fortalecen nuestras capacidades y amplían el alcance de cada proyecto.
                </p>
              </div>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <main className="lg:col-span-9">
            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-slate-500">
                Mostrando <span className="font-semibold text-slate-800">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'alianza' : 'alianzas'}
              </p>
              <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-primary-400" />
                Destacado
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((alianza, index) => (
                  <motion.a
                    key={alianza.id}
                    href={alianza.url}
                    target={alianza.url !== '#' ? '_blank' : undefined}
                    rel={alianza.url !== '#' ? 'noopener noreferrer' : undefined}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-900/6 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Top accent */}
                    <div className="h-[3px] bg-gradient-to-r from-primary-500 to-primary-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Featured badge */}
                    {alianza.destacado && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="w-2 h-2 rounded-full bg-primary-400 block" />
                      </div>
                    )}

                    {/* Logo area */}
                    <div className="relative px-6 pt-8 pb-4">
                      <div className="w-full h-16 flex items-center justify-center">
                        <img
                          src={alianza.logo}
                          alt={alianza.nombre}
                          className="max-h-14 max-w-[160px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="px-6 pb-6">
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                        {alianza.nombre}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {alianza.descripcion}
                      </p>

                      {/* Category tag */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {categoriasAlianzas.find((c) => c.id === alianza.categoria)?.label}
                        </span>
                        <svg
                          className="w-4 h-4 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">No hay alianzas en esta categoría.</p>
              </div>
            )}
          </main>
        </div>
      </Container>
    </section>
  );
};

export default SociosGrid;
