import { motion } from 'framer-motion';

const ConsultantFilters = ({
  specialties,
  activeFilters,
  onFilterChange,
  onClearAll
}) => {
  const toggleFilter = (specialty) => {
    if (activeFilters.includes(specialty)) {
      onFilterChange(activeFilters.filter((f) => f !== specialty));
    } else {
      onFilterChange([...activeFilters, specialty]);
    }
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">
          Filtrar por especialidad
        </span>
        {activeFilters.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Pills de filtros */}
      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty) => {
          const isActive = activeFilters.includes(specialty);
          return (
            <motion.button
              key={specialty}
              onClick={() => toggleFilter(specialty)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                isActive
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {specialty}
              {isActive && (
                <svg
                  className="w-3.5 h-3.5 ml-1.5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultantFilters;
