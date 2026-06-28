import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '../components/layout/Layout';
import ScrollManager from '../components/layout/ScrollManager';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import CentroContenido from '../pages/CentroContenido';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedPage = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/nosotros" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/servicios" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/equipo" element={<AnimatedPage><Team /></AnimatedPage>} />
            <Route path="/contacto" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/centro-contenido" element={<AnimatedPage><CentroContenido /></AnimatedPage>} />
            <Route path="/terminos" element={<AnimatedPage><Terms /></AnimatedPage>} />
            <Route path="/privacidad" element={<AnimatedPage><Privacy /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default AppRouter;
