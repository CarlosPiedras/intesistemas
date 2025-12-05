'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulación de envío (aquí deberías implementar tu lógica de envío real)
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulación de delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white">
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-2" style={{ color: '#1175c7' }}>
          Envíanos un mensaje
        </h2>
        <p className="text-sm text-secondary-600 mb-8">
          Completa el formulario y nos pondremos en contacto contigo lo antes posible
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-secondary-700 mb-2">
              Nombre completo <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1175c7] focus:border-transparent transition-all duration-200"
              placeholder="Tu nombre y apellidos"
            />
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1175c7] focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1175c7] focus:border-transparent transition-all duration-200"
                placeholder="+34 600 000 000"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-secondary-700 mb-2">
              Mensaje <span className="text-error">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1175c7] focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Cuéntanos sobre tu proyecto o consulta..."
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 bg-success-light border border-success rounded-lg"
            >
              <CheckCircle className="w-5 h-5 text-success-dark" />
              <p className="text-sm text-success-dark">
                Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 bg-error-light border border-error rounded-lg"
            >
              <AlertCircle className="w-5 h-5 text-error-dark" />
              <p className="text-sm text-error-dark">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1175c7] hover:bg-[#0e5fa3] text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar mensaje
              </>
            )}
          </motion.button>

          <p className="text-xs text-secondary-500 text-center">
            Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
