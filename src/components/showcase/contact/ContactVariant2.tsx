'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Building2 } from 'lucide-react';

const quickInfo = [
  { icon: Phone, label: 'Teléfono', value: '+34 933 379 453' },
  { icon: Mail, label: 'Email', value: 'inte@inteautomatizacion.com' },
  { icon: Clock, label: 'Horario', value: 'Lun-Sáb: 8:00h - 20:00h' },
];

export default function ContactVariant2() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar con información rápida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-4"
        >
          <div className="bg-gradient-to-br from-[#1175c7] to-[#0e5fa3] p-6 rounded-xl text-white">
            <Building2 className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">INTE SISTEMAS</h3>
            <p className="text-sm text-white/90">
              Expertos en automatización industrial y sistemas eléctricos
            </p>
          </div>

          {quickInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#1175c7]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#1175c7]" />
                  <div>
                    <p className="text-xs text-secondary-500 uppercase">{item.label}</p>
                    <p className="text-sm font-semibold text-secondary-900">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1175c7] flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-secondary-500 uppercase mb-2">Oficinas</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">Hospitalet</p>
                    <p className="text-xs text-secondary-600">Pasaje Milans 1</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">Terrassa</p>
                    <p className="text-xs text-secondary-600">Av. Santa Eulalia 290</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulario principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2" style={{ color: '#1175c7' }}>
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-secondary-600">
              Completa el formulario y te responderemos en menos de 24 horas
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-secondary-50 border-2 border-transparent rounded-lg focus:border-[#1175c7] focus:bg-white transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-secondary-50 border-2 border-transparent rounded-lg focus:border-[#1175c7] focus:bg-white transition-all"
                  placeholder="Tu empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-secondary-50 border-2 border-transparent rounded-lg focus:border-[#1175c7] focus:bg-white transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-secondary-50 border-2 border-transparent rounded-lg focus:border-[#1175c7] focus:bg-white transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-2">
                ¿En qué podemos ayudarte? *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-secondary-50 border-2 border-transparent rounded-lg focus:border-[#1175c7] focus:bg-white transition-all resize-none"
                placeholder="Describe tu proyecto o consulta con el máximo detalle posible..."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 w-4 h-4 text-[#1175c7] rounded"
              />
              <label htmlFor="privacy" className="text-xs text-secondary-600">
                Acepto la política de privacidad y el tratamiento de mis datos personales
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#1175c7] hover:bg-[#0e5fa3] text-white font-semibold py-4 px-10 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
