'use client';

import { motion } from 'framer-motion';
import { FileCheck, UsersRound, BadgeCheck, Wallet } from 'lucide-react';

export default function ProjectManagementVariant6() {
  const services = [
    {
      id: 1,
      title: 'PLANIFICACIÓN Y DISEÑO',
      description:
        'Análisis de necesidades, diseño técnico, elaboración de presupuestos detallados y planificación temporal del proyecto.',
      icon: FileCheck,
    },
    {
      id: 2,
      title: 'COORDINACIÓN DE EQUIPOS',
      description:
        'Gestión y coordinación de todos los equipos técnicos involucrados, subcontratistas y proveedores.',
      icon: UsersRound,
    },
    {
      id: 3,
      title: 'CONTROL DE CALIDAD',
      description:
        'Supervisión continua de la ejecución, control de calidad en cada fase, verificación del cumplimiento de normativas.',
      icon: BadgeCheck,
    },
    {
      id: 4,
      title: 'CONTROL DE PRESUPUESTO',
      description:
        'Gestión económica rigurosa del proyecto, seguimiento de costes, control de desviaciones y ajustes.',
      icon: Wallet,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            SERVICIOS DE GESTIÓN DE PROYECTOS
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Planificación, coordinación y ejecución de proyectos complejos de automatización industrial
            y distribución de energía con garantía de calidad y cumplimiento de plazos.
          </motion.p>
        </div>

        {/* Services Grid - Mix: Cards minimalistas con iconos cuadrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative overflow-hidden"
              >
                {/* Card con borde sutil */}
                <div className="bg-white rounded-xl p-8 border border-secondary-200 group hover:border-[#1175c7] transition-all duration-300 h-full">
                  {/* Icon cuadrado con fondo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 inline-block"
                  >
                    <div className="w-14 h-14 bg-[#1175c7] rounded-lg flex items-center justify-center group-hover:bg-[#3a89c5] transition-colors duration-300 shadow-sm">
                      <Icon
                        className="w-7 h-7 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Title uppercase tracking wide */}
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-secondary-900 mb-4 group-hover:text-[#1175c7] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1175c7]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
