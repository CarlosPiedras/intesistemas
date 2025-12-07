'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactVariant1() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#1175c7' }}>
            Envíanos un mensaje
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-[#1175c7] focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-[#1175c7] focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-[#1175c7] focus:border-transparent"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Mensaje *
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-[#1175c7] focus:border-transparent resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1175c7] hover:bg-[#0e5fa3] text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar mensaje
            </button>
          </form>
        </motion.div>

        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#1175c7' }}>
              Información de contacto
            </h3>
            <p className="text-secondary-600 mb-8">
              Ponte en contacto con nosotros para cualquier consulta o proyecto que tengas en mente.
            </p>
          </div>

          <div className="space-y-4">
            {/* Teléfono */}
            <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg hover:bg-[#a9d9ff]/20 transition-colors">
              <div className="w-12 h-12 bg-[#1175c7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Teléfono</h4>
                <p className="text-[#1175c7] font-medium">+34 933 379 453</p>
                <p className="text-[#1175c7] font-medium">627 520 831</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg hover:bg-[#a9d9ff]/20 transition-colors">
              <div className="w-12 h-12 bg-[#1175c7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Email</h4>
                <p className="text-[#1175c7] font-medium">inte@inteautomatizacion.com</p>
              </div>
            </div>

            {/* Ubicaciones */}
            <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg hover:bg-[#a9d9ff]/20 transition-colors">
              <div className="w-12 h-12 bg-[#1175c7] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Ubicaciones</h4>
                <p className="text-secondary-600 text-sm">Pasaje Milans 1, Barcelona</p>
                <p className="text-secondary-600 text-sm">Av. Santa Eulalia 290, Terrassa</p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg hover:bg-[#a9d9ff]/20 transition-colors">
              <div className="w-12 h-12 bg-[#1175c7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Horario</h4>
                <p className="text-secondary-600">Lunes a Sábado: 8:00h - 20:00h</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
