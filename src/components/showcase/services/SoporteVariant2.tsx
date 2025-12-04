'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, BookOpen, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'MANTENIMIENTO PREVENTIVO',
    description:
      'Revisiones periódicas programadas de tus instalaciones eléctricas y sistemas de automatización para detectar y prevenir fallos antes de que ocurran, prolongando la vida útil de tus equipos.',
    icon: Clock,
    number: '01',
  },
  {
    id: 2,
    title: 'ASISTENCIA TÉCNICA',
    description:
      'Atención inmediata ante incidencias y averías. Diagnóstico rápido de problemas, reparaciones efectivas y optimización del rendimiento de tus sistemas eléctricos e industriales.',
    icon: Wrench,
    number: '02',
  },
  {
    id: 3,
    title: 'FORMACIÓN TÉCNICA',
    description:
      'Capacitación especializada para tu equipo en el manejo y mantenimiento básico de instalaciones eléctricas, PLCs y sistemas de automatización, garantizando autonomía operativa.',
    icon: BookOpen,
    number: '03',
  },
  {
    id: 4,
    title: 'GARANTÍA Y SEGUIMIENTO',
    description:
      'Control continuo post-instalación, verificación del correcto funcionamiento de los sistemas, actualizaciones de software y firmware, y soporte técnico extendido para total tranquilidad.',
    icon: Shield,
    number: '04',
  },
];

export default function SoporteVariant2() {
  return (
    <section className="py-20 md:py-28 bg-secondary-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            SERVICIOS DE SOPORTE TÉCNICO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Cuatro pilares fundamentales para mantener tus sistemas operativos al máximo rendimiento,
            con respuesta rápida, mantenimiento especializado y soporte continuo.
          </motion.p>
        </div>

        {/* Lista Vertical Compacta */}
        <div className="max-w-4xl mx-auto space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white hover:bg-secondary-50 p-6 flex items-start gap-6 border-l-4 border-secondary-200 hover:border-[#1175c7] transition-all duration-300 cursor-pointer"
                >
                  {/* Icono */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full bg-secondary-100 group-hover:bg-[#1175c7]/10 flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon
                        className="w-7 h-7 text-[#1175c7] group-hover:text-[#3a89c5] transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-secondary-400 group-hover:text-[#1175c7] transition-colors duration-300">
                        {service.number}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold uppercase tracking-wider text-secondary-900 group-hover:text-[#1175c7] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
