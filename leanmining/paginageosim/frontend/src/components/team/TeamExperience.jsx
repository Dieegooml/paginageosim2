import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const TEAM_EXPERIENCE_BG = '/images/contact/contact-experience-bg.jpg';

const TeamExperience = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${TEAM_EXPERIENCE_BG}')` }}
      />
      <div className="absolute inset-0 bg-[#0b2240]/45" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white/12 backdrop-blur-xl border border-white/25 rounded-[2rem] p-12 md:p-16 shadow-2xl shadow-slate-900/20 overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-primary-500" />
                  <span className="text-primary-200 text-sm font-medium tracking-widest uppercase">
                    {t('contactPage.experience.badge')}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {t('contactPage.experience.title')}
                </h2>
                <p className="text-lg text-slate-100/90 leading-relaxed">
                  {t('contactPage.experience.description')}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{t('contactPage.experience.stat1Value')}</p>
                    <p className="text-slate-200/90">{t('contactPage.experience.stat1Label')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{t('contactPage.experience.stat2Value')}</p>
                    <p className="text-slate-200/90">{t('contactPage.experience.stat2Label')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-white/12 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/18 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{t('contactPage.experience.stat3Value')}</p>
                    <p className="text-slate-200/90">{t('contactPage.experience.stat3Label')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TeamExperience;
