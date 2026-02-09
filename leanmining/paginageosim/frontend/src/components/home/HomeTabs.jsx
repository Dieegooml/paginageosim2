import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeTabs } from '../../data/tabs';
import Container from '../ui/Container';
import Button from '../ui/Button';

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-0 bg-gradient-to-b from-white to-slate-50/50">
      {/* Premium Tab Navigation */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Container>
          <nav className="flex justify-center md:justify-start -mb-px">
            {homeTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className="relative px-6 md:px-10 py-6 text-sm md:text-base font-medium transition-all duration-300 group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeTab === index
                      ? 'text-primary-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </span>

                {/* Active indicator with premium styling */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Hover background */}
                <div className="absolute inset-x-2 inset-y-2 bg-slate-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* Tab Content with premium styling */}
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
              {/* Image Section (3/5 on desktop) */}
              <div className="lg:col-span-3 relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
                <motion.img
                  key={`img-${activeTab}`}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={homeTabs[activeTab].image}
                  alt={homeTabs[activeTab].title}
                  className="w-full h-full object-cover"
                />

                {/* Premium overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-white/60 lg:to-white/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent lg:hidden" />

                {/* Decorative corner accent */}
                <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32">
                  <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-primary-500/30" />
                </div>
              </div>

              {/* Content Section (2/5 on desktop) */}
              <div className="lg:col-span-2 flex items-center bg-gradient-to-br from-white to-slate-50/80">
                <div className="p-8 md:p-12 lg:p-14 xl:p-16">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    {/* Premium section tag */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-primary-100">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {homeTabs[activeTab].label}
                    </span>

                    {/* Title with gradient accent */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
                      {homeTabs[activeTab].title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-8 text-base lg:text-lg">
                      {homeTabs[activeTab].description}
                    </p>

                    {/* Premium CTA button */}
                    <Button
                      to={homeTabs[activeTab].link}
                      variant="primary"
                      className="group shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
                    >
                      {homeTabs[activeTab].linkText}
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

      {/* Premium mobile dots indicator */}
      <div className="flex justify-center gap-3 py-8 lg:hidden bg-gradient-to-b from-slate-50/80 to-white">
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
