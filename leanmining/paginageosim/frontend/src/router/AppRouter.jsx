import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollManager from "../components/layout/ScrollManager";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/privacidad" element={<Privacy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
