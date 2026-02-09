import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/equipo', label: 'Equipo' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-slate-900">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Marca */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">LM</span>
                </div>
                <span className="text-lg font-semibold text-white">
                  Lean Mining Consulting
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Consultoría especializada en eficiencia operacional y planeación
                de minas subterráneas para el sector minero.
              </p>
            </div>

            {/* Enlaces */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navegación
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lima, Perú
                </li>
                <li className="flex items-start gap-2 pt-2">
                  <span className="text-slate-500 text-xs">
                    Datos de contacto próximamente
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6">
          <p className="text-sm text-slate-500 text-center">
            © {currentYear} Lean Mining Consulting. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
