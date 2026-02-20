import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import TeamHero from '../components/team/TeamHero';
import TeamExperience from '../components/team/TeamExperience';
import TeamGrid from '../components/team/TeamGrid';
import ConsultantModal from '../components/team/ConsultantModal';
import { team } from '../data/team';
import { applyEnglishTeamProfile } from '../data/team.en';

const TEAM_CTA_BG = '/images/cta/team-cta-bg.jpg';

const Team = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');
  const localizedTeam = team.map((member) => applyEnglishTeamProfile(member, isEnglish));

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

      <TeamExperience />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              <span className="text-slate-900">{t('teamPage.grid.titleMain')} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                {t('teamPage.grid.titleAccent')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t('teamPage.grid.description')}
            </p>
          </motion.div>

          <TeamGrid members={localizedTeam} onSelectMember={handleSelectMember} />
        </Container>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${TEAM_CTA_BG}')` }}
        />
        <div className="absolute inset-0 bg-[#0f2742]/74" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-sm p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('teamPage.cta.title')}</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">{t('teamPage.cta.description')}</p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#123B70] text-white font-medium rounded-lg hover:bg-[#1a4f90] transition-colors"
            >
              {t('teamPage.cta.button')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </Container>
      </section>

      <ConsultantModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Team;
