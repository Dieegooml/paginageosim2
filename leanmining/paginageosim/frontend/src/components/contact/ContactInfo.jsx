const ContactInfo = () => {
  return (
    <div className="space-y-3">

      {/* Oficinas */}
      <div className="space-y-3">
        {/* Perú */}
        <a
          href="https://maps.google.com/?q=-16.42745554,-71.50242861"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-white/12 hover:border-primary-400/40 transition-all duration-300"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="text-xs font-bold text-primary-300 uppercase tracking-widest">Perú</p>
            </div>
            <p className="text-white font-semibold text-sm leading-snug group-hover:text-primary-200 transition-colors">
              Arequipa
            </p>
            <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
              Av. Colonial 601, Ampliación Paucarpata
            </p>
          </div>
          <svg className="w-4 h-4 text-slate-500 group-hover:text-primary-400 transition-colors mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* México */}
        <a
          href="https://maps.google.com/?q=Privada+Jose+Maria+Morelos+y+Pavon+1820,+Chihuahua,+Chihuahua,+31020,+Mexico"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-white/12 hover:border-blue-400/40 transition-all duration-300"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">México</p>
            </div>
            <p className="text-white font-semibold text-sm leading-snug group-hover:text-blue-200 transition-colors">
              Chihuahua
            </p>
            <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
              Privada José María Morelos y Pavón 1820
            </p>
          </div>
          <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/526142088019?text=${encodeURIComponent('Buen dia, me gustaria recibir asesoria especializada para mi proyecto minero.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-emerald-500/10 hover:border-emerald-400/40 transition-all duration-300"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.83 11.83 0 0012.1 0C5.53 0 .19 5.34.19 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.32-1.65a11.86 11.86 0 005.78 1.49h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.49-8.45zM12.1 21.82h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.75.98 1-3.65-.24-.37a9.9 9.9 0 01-1.53-5.27C2.16 6.46 6.66 1.96 12.1 1.96c2.65 0 5.13 1.03 7 2.91a9.82 9.82 0 012.9 7.01c0 5.45-4.44 9.94-9.9 9.94zm5.43-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.26 5.18 4.57.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-0.5">WhatsApp</p>
          <p className="text-white font-semibold text-sm group-hover:text-emerald-200 transition-colors">
            +52 614 208 8019
          </p>
        </div>
      </a>

      {/* Horario */}
      <div className="p-4 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Horario de atención</p>
        </div>
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Lunes – Viernes</span>
            <span className="font-semibold text-white">9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Sábado</span>
            <span className="font-semibold text-white">9:00 AM – 1:00 PM</span>
          </div>
          <p className="text-xs text-slate-500 pt-2 border-t border-white/8 mt-2">Hora de Perú (GMT-5)</p>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
