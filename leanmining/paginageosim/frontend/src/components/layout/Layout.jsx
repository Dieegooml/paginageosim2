import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <main className="relative flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
