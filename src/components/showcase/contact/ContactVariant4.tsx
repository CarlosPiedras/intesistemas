'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Building2, CheckCircle } from 'lucide-react';

const quickInfo = [
  { icon: Phone, label: 'Teléfono', value: '+34 933 379 453' },
  { icon: Mail, label: 'Email', value: 'inte@inteautomatizacion.com' },
  { icon: Clock, label: 'Horario', value: 'Lun-Sáb: 8:00h - 20:00h' },
];

export default function ContactVariant4() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
          style={{ color: '#1175c7' }}
        >
          ESTAMOS AQUÍ PARA AYUDARTE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
        >
          Cuéntanos tu idea y te ayudaremos a hacerla realidad con soluciones innovadoras en automatización industrial y sistemas eléctricos.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Sidebar con información rápida (de Variante 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-4 h-full flex flex-col"
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
                <p className="text-xs text-secondary-500 uppercase mb-2">Oficina Principal</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">Terrassa</p>
                    <p className="text-xs text-secondary-600">Av. Santa Eulalia 290, 08223</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">Hospitalet de Llobregat</p>
                    <p className="text-xs text-secondary-600">Pasaje Milans 1</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">Sevilla</p>
                    <p className="text-xs text-secondary-600">Por definir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulario moderno (de Variante 3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 h-full"
        >
          <div className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
            <div className="bg-gradient-to-r from-[#1175c7] to-[#0e5fa3] p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Inicia tu proyecto con nosotros</h3>
              <p className="text-white/90">
                Cuéntanos tu idea y te ayudaremos a hacerla realidad con soluciones innovadoras
              </p>
            </div>

            <div className="p-8 flex-1">
              <form className="space-y-6 h-full flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                    Mensaje *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors resize-none flex-1"
                    placeholder="Describe tu proyecto o necesidad..."
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#1175c7] to-[#0e5fa3] hover:from-[#0e5fa3] hover:to-[#1175c7] text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
