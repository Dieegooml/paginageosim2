import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
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
        alert(data.error || 'Error al enviar');
      }
    } catch {
      setStatus('idle');
      alert('Error de conexión al enviar el mensaje');
    }
  };

  const inputClasses = "w-full px-4 py-3.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-slate-900 placeholder:text-slate-400 text-[15px]";
  const labelClasses = "block text-sm font-medium text-slate-600 mb-2";

  return (
    <div className="relative bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/60">
      <div className="mb-8 pb-6 border-b border-slate-100">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
          Envíanos un mensaje
        </h2>
        <p className="text-slate-500 text-sm">
          Completa el formulario y nos pondremos en contacto contigo.
        </p>
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
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Mensaje enviado
          </h3>
          <p className="text-slate-600 mb-6">
            Gracias por contactarnos. Te responderemos a la brevedad.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="inline-flex items-center px-5 py-2.5 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors border border-primary-200 rounded-lg hover:bg-primary-50"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="name" className={labelClasses}>
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email corporativo <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="correo@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className={labelClasses}>
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Teléfono de contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+51 999 000 000"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="recipient" className={labelClasses}>
                Persona a contactar
              </label>
              <select
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                className={`${inputClasses} cursor-pointer text-sm md:text-[15px]`}
              >
                <option value="persona1">Luis Enrique Zevallos Paredes</option>
                <option value="persona2">Wilber Martín Manrique Valdivia</option>
                <option value="persona3">Luis Felipe Talaverano Cárdenas</option>
                <option value="persona4">Antonio González Reyes</option>
             </select>
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelClasses}>
              Servicio de interés
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${inputClasses} cursor-pointer`}
            >
              <option value="">Selecciona un servicio</option>
              <option value="diseno">Diseño de Minas</option>
              <option value="costos">Análisis de Costos</option>
              <option value="kpis">Implementación de KPIs</option>
              <option value="planeacion">Planeación de Mina</option>
              <option value="metalurgia">Procesos de Planta Concentradora y Metalurgia Aplicada</option>
              <option value="hidrogeologia">Hidrogeología Aplicada y Gestión Hídrica Minera</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="Describe brevemente tu proyecto o consulta..."
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
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando mensaje...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-400 text-center">
            Al enviar este formulario, aceptas nuestra política de privacidad.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

