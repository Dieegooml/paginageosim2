import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { company } from '../../data/company';

const WhyUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50/20 py-24 md:py-32 overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-50/30 to-transparent rounded-full" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Premium header */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-6 border border-primary-100">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                Nuestras Fortalezas
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-slate-600">
                Metodología rigurosa y experiencia comprobada en el sector minero
              </p>
            </div>

            {/* Premium differentiator cards */}
            <div className="space-y-5">
              {company.differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary-200/50 transition-all duration-500">
                    {/* Number badge with gradient */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-xl group-hover:shadow-primary-500/30 group-hover:scale-110 transition-all duration-500">
                      <span className="text-sm font-bold text-white">0{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Methodology Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Premium methodology card */}
            <div className="relative">
              {/* Decorative elements behind the card */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-white shadow-2xl shadow-slate-900/30 overflow-hidden">
                {/* Inner glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

                <div className="relative">
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-500/30">
                      <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">{company.methodology.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed">
                    {company.methodology.description}
                  </p>

                  {/* Methodology steps with premium styling */}
                  <div className="space-y-4">
                    {company.methodology.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500/30 to-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30 group-hover:bg-primary-500/40 transition-colors">
                          <span className="text-sm font-bold text-primary-300">{index + 1}</span>
                        </div>
                        <span className="text-slate-200 group-hover:text-white transition-colors">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
