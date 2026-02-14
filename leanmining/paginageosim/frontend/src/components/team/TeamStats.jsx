import { motion, AnimatePresence } from 'framer-motion';

const TeamStats = ({ filtered, total, hasFilters }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-200">
      {/* Contador de resultados */}
      <AnimatePresence mode="wait">
        <motion.p
          key={filtered}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-slate-600"
        >
          {hasFilters ? (
            <>
              Mostrando{' '}
              <span className="font-semibold text-slate-900">{filtered}</span> de{' '}
              <span className="font-semibold text-slate-900">{total}</span>{' '}
              consultores
            </>
          ) : (
            <>
              <span className="font-semibold text-slate-900">{total}</span>{' '}
              consultores en nuestro equipo
            </>
          )}
        </motion.p>
      </AnimatePresence>

      {/* Indicador de filtros activos */}
      {hasFilters && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 text-sm text-primary-600"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="font-medium">Filtros activos</span>
        </motion.div>
      )}
    </div>
  );
};

export default TeamStats;
