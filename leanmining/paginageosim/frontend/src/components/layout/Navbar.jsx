import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/nosotros', label: t('nav.about') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/equipo', label: t('nav.team') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <Container>
        <nav className="flex justify-between items-center h-24">
          {/* Logo */}
          <NavLink to="/" className="relative flex items-center group" onClick={closeMenu}>
            <span className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-500/12 via-primary-400/8 to-accent-400/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/images/logo-leanmining-consulting.png"
              alt="Lean Mining Consulting"
              className="relative h-14 md:h-16 w-auto object-contain drop-shadow-[0_8px_18px_rgba(16,46,87,0.24)] transition-transform duration-300 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </NavLink>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-slate-700 hover:text-primary-700 hover:bg-primary-50/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Botón móvil hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* CTA en móvil */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: (navItems.length + 1) * 0.05 }}
                  className="pt-4"
                >
                  <NavLink
                    to="/contacto"
                    onClick={closeMenu}
                    className="block w-full px-4 py-3 text-center text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors"
                  >
                    {t('nav.cta')}
                  </NavLink>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
