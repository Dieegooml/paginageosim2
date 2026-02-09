import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsultantCard = ({ member, onClick }) => {
  const displayName = member.name || member.role;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-slate-100 hover:border-slate-200">
        <div className="relative bg-slate-100 aspect-[4/5] overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={displayName}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg
                  className="w-10 h-10 text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-900 shadow-lg">
              Ver perfil
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
            {displayName}
          </h3>
          <p className="text-primary-600 text-sm font-medium mb-2 line-clamp-1">
            {member.position || member.role}
          </p>

          {member.location && (
            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-2">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{member.location}</span>
            </div>
          )}

          {member.email && (
            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-3">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate text-primary-600">{member.email}</span>
            </div>
          )}

          {member.specialties && member.specialties.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {member.specialties.slice(0, 2).map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-slate-50 text-slate-600 text-xs rounded"
                >
                  {specialty}
                </span>
              ))}
              {member.specialties.length > 2 && (
                <span className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs rounded">
                  +{member.specialties.length - 2}
                </span>
              )}
            </div>
          )}

          <Link
            to="/contacto"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contactar
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ConsultantCard;
