import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    recipient: 'persona1',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contacto.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          recipient: 'persona1',
        });
      } else {
        setStatus('idle');
        alert(data.error || t('contactPage.form.errorSending'));
      }
    } catch {
      setStatus('idle');
      alert(t('contactPage.form.connectionError'));
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-slate-900 placeholder:text-slate-400 text-[15px]';
  const labelClasses = 'block text-sm font-medium text-slate-600 mb-2';

  return (
    <div className="relative bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/60">
      <div className="mb-8 pb-6 border-b border-slate-100">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t('contactPage.form.title')}</h2>
        <p className="text-slate-500 text-sm">{t('contactPage.form.subtitle')}</p>
      </div>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{t('contactPage.form.successTitle')}</h3>
          <p className="text-slate-600 mb-6">{t('contactPage.form.successMessage')}</p>
          <button
            onClick={() => setStatus('idle')}
            className="inline-flex items-center px-5 py-2.5 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors border border-primary-200 rounded-lg hover:bg-primary-50"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {t('contactPage.form.sendAnother')}
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="name" className={labelClasses}>
                {t('contactPage.form.name')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder={t('contactPage.form.namePlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                {t('contactPage.form.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder={t('contactPage.form.emailPlaceholder')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className={labelClasses}>
                {t('contactPage.form.company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('contactPage.form.companyPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>
                {t('contactPage.form.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('contactPage.form.phonePlaceholder')}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="recipient" className={labelClasses}>
                {t('contactPage.form.recipient')}
              </label>
              <select
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                className={`${inputClasses} cursor-pointer text-sm md:text-[15px]`}
              >
                <option value="persona1">{t('contactPage.form.recipients.persona1')}</option>
                <option value="persona2">{t('contactPage.form.recipients.persona2')}</option>
                <option value="persona3">{t('contactPage.form.recipients.persona3')}</option>
                <option value="persona4">{t('contactPage.form.recipients.persona4')}</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelClasses}>
              {t('contactPage.form.service')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${inputClasses} cursor-pointer`}
            >
              <option value="">{t('contactPage.form.selectService')}</option>
              <option value="diseno">{t('contactPage.form.mineDesign')}</option>
              <option value="costos">{t('contactPage.form.costAnalysis')}</option>
              <option value="kpis">{t('contactPage.form.kpiImplementation')}</option>
              <option value="planeacion">{t('contactPage.form.minePlanning')}</option>
              <option value="metalurgia">{t('contactPage.form.metallurgy')}</option>
              <option value="hidrogeologia">{t('contactPage.form.hydrogeology')}</option>
              <option value="otro">{t('contactPage.form.other')}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              {t('contactPage.form.message')} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder={t('contactPage.form.messagePlaceholder')}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/25"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {t('contactPage.form.submitting')}
                </>
              ) : (
                <>
                  {t('contactPage.form.submitButton')}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-400 text-center">{t('contactPage.form.privacyNotice')}</p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
