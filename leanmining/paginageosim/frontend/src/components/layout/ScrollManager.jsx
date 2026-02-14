import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollManager — gestión global de scroll para toda la aplicación.
 *
 * Reglas:
 *  - Navegación sin hash → scroll inmediato al top
 *  - Navegación con hash → scroll suave al elemento destino
 *
 * Montado una sola vez en AppRouter, cubre todas las rutas.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Espera al ciclo de render para que el DOM esté listo
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Navegación normal: siempre arriba, sin animación para que sea instantáneo
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
