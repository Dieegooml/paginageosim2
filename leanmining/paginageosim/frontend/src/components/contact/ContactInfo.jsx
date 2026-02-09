import { company } from '../../data/company';

const ContactInfo = () => {
  const { contact } = company;
  const { address } = contact;

  const fullAddress = [address.street, address.district, address.city, address.country]
    .filter(Boolean)
    .join(', ');
  const locationText = fullAddress || 'Ubicación próximamente';

  const contactItems = [
    contact.email && {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    contact.phone && {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Teléfono',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Ubicación',
      value: locationText,
      href: fullAddress
        ? `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`
        : null,
      isExternal: true,
    },
  ].filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-semibold text-white group-hover:text-primary-300 transition-colors">{item.value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white">Horario de atención</h3>
        </div>
        <div className="text-slate-300 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Lunes - Viernes</span>
            <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Sábado</span>
            <span className="font-medium text-white">9:00 AM - 1:00 PM</span>
          </div>
          <p className="text-xs text-slate-500 pt-3 border-t border-white/10 mt-3">
            Hora de Perú (GMT-5)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
