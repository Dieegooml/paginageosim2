import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

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
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">LM</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-slate-900 tracking-tight">
                Lean Mining
              </span>
              <span className="text-lg text-slate-500 ml-1">Consulting</span>
            </div>
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
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Language Selector */}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                aria-label={currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className={currentLanguage === 'es' ? 'font-semibold text-slate-900' : ''}>ES</span>
                <span className="text-slate-300">|</span>
                <span className={currentLanguage === 'en' ? 'font-semibold text-slate-900' : ''}>EN</span>
              </button>
            </div>
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

                {/* Language Selector en móvil */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="pt-4 mt-4 border-t border-slate-200"
                >
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className={currentLanguage === 'es' ? 'font-semibold text-slate-900' : 'text-slate-500'}>Español</span>
                    <span className="text-slate-300">|</span>
                    <span className={currentLanguage === 'en' ? 'font-semibold text-slate-900' : 'text-slate-500'}>English</span>
                  </button>
                </motion.div>

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
