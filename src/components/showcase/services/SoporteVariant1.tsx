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

export default function SoporteVariant1() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(17, 117, 199, 0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-secondary-200 hover:border-[#1175c7] p-8 h-full transition-all duration-300"
                >
                  {/* Número e Icono */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-extralight text-secondary-200 group-hover:text-[#1175c7]/30 transition-colors duration-300">
                      {service.number}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        className="w-12 h-12 text-[#1175c7] group-hover:text-[#3a89c5] transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>

                  {/* Título */}
                  <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-secondary-900 mb-4 group-hover:text-[#1175c7] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
