'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Llámanos',
    description: 'Estamos disponibles de Lunes a Sábado',
    info: ['+34 933 379 453', '627 520 831'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Escríbenos',
    description: 'Te respondemos en menos de 24h',
    info: ['inte@inteautomatizacion.com'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: MapPin,
    title: 'Visítanos',
    description: 'Dos ubicaciones en Barcelona',
    info: ['Pasaje Milans 1, Hospitalet', 'Av. Santa Eulalia 290, Terrassa'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Clock,
    title: 'Horario',
    description: 'Siempre disponibles para emergencias',
    info: ['Lun-Sáb: 8:00h - 20:00h'],
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function ContactVariant3() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Grid de tarjetas de información */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all h-full border-2 border-transparent hover:border-[#1175c7]/20">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-1">{card.title}</h4>
                <p className="text-xs text-secondary-500 mb-3">{card.description}</p>
                <div className="space-y-1">
                  {card.info.map((item, i) => (
                    <p key={i} className="text-sm font-semibold text-[#1175c7]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Formulario centrado con diseño moderno */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1175c7] to-[#0e5fa3] p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Inicia tu proyecto con nosotros</h3>
            <p className="text-white/90">
              Cuéntanos tu idea y te ayudaremos a hacerla realidad con soluciones innovadoras
            </p>
          </div>

          <div className="p-8">
            <form className="space-y-6">
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
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                    Tipo de servicio
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors">
                    <option>Selecciona un servicio</option>
                    <option>Automatización Industrial</option>
                    <option>Distribución de Energía</option>
                    <option>Gestión de Proyectos</option>
                    <option>Soporte Técnico</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                  Mensaje *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-[#1175c7] focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu proyecto o necesidad..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Respuesta garantizada en 24h</span>
                </div>
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
  );
}
