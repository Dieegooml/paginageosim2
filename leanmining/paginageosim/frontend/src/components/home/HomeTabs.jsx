import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { homeTabs } from '../../data/tabs';
import Container from '../ui/Container';
import Button from '../ui/Button';

const tabKeys = ['planning', 'optimization', 'consulting'];

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  return (
    <section className="py-0 bg-white">
      {/* Tab Navigation */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-10">
        <Container>
          <nav className="flex justify-center md:justify-start -mb-px">
            {homeTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className="relative px-6 md:px-10 py-5 text-sm md:text-base font-medium transition-all duration-300 group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeTab === index
                      ? 'text-primary-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t(`homeTabs.${tabKeys[index]}.label`)}
                </span>

                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* Tab Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image Section */}
              <div className="lg:col-span-3 relative h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
                <motion.img
                  key={`img-${activeTab}`}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={homeTabs[activeTab].image}
                  alt={homeTabs[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-white/60 lg:to-white/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 flex items-center bg-white">
                <div className="p-8 md:p-12 lg:p-14">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-5 border border-primary-100">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {t(`homeTabs.${tabKeys[activeTab]}.label`)}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">
                      {t(`homeTabs.${tabKeys[activeTab]}.title`)}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-7 text-base">
                      {t(`homeTabs.${tabKeys[activeTab]}.description`)}
                    </p>

                    <Button
                      to={homeTabs[activeTab].link}
                      variant="primary"
                      className="group shadow-md transition-all"
                    >
                      {t(`homeTabs.${tabKeys[activeTab]}.linkText`)}
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile dots */}
      <div className="flex justify-center gap-3 py-6 lg:hidden bg-white">
        {homeTabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeTab === index
                ? 'bg-primary-600 w-8'
                : 'bg-slate-300 hover:bg-slate-400 w-2'
            }`}
            aria-label={`Tab ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeTabs;
