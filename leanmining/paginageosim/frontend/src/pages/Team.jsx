import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import TeamHero from '../components/team/TeamHero';
import TeamGrid from '../components/team/TeamGrid';
import ConsultantModal from '../components/team/ConsultantModal';
import { team } from '../data/team';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectMember = useCallback((member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  }, []);

  return (
    <>
      <TeamHero />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Consultores Especializados
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Un equipo multidisciplinario con experiencia comprobada en las principales
              operaciones mineras de Latinoamérica.
            </p>
          </motion.div>

          <TeamGrid
            members={team}
            onSelectMember={handleSelectMember}
          />
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesita asesoría especializada?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Nuestro equipo está listo para analizar sus desafíos y desarrollar
              soluciones a la medida de su operación.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contactar al equipo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </Container>
      </section>

      <ConsultantModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Team;
