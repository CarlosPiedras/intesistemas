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

export default function SoporteVariant3() {
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
            MANTÉN TUS SISTEMAS OPERATIVOS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Asistencia técnica profesional que garantiza el funcionamiento óptimo de tus instalaciones
            eléctricas y equipos industriales, minimizando tiempos de inactividad y maximizando la productividad.
          </motion.p>
        </div>

        {/* Grid con Números Grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group relative bg-secondary-50 hover:bg-white border-2 border-transparent hover:border-[#1175c7]/20 p-8 lg:p-10 h-full overflow-hidden transition-all duration-300"
                >
                  {/* Número grande de fondo */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <span className="text-[180px] font-bold text-[#1175c7]">
                      {service.number}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Icono */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-white group-hover:bg-[#1175c7] flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300">
                        <Icon
                          className="w-8 h-8 text-[#1175c7] group-hover:text-white transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wider text-secondary-900 mb-4 group-hover:text-[#1175c7] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Línea decorativa */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '60px' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="h-1 bg-[#1175c7] mb-4"
                    />

                    {/* Descripción */}
                    <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
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
