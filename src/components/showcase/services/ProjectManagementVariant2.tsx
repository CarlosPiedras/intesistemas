'use client';

import { motion } from 'framer-motion';
import { ClipboardList, UsersRound, BadgeCheck, Calculator } from 'lucide-react';

export default function ProjectManagementVariant2() {
  const services = [
    {
      id: 1,
      title: 'Planificación y Diseño',
      description:
        'Análisis de necesidades, diseño técnico, elaboración de presupuestos detallados y planificación temporal del proyecto.',
      icon: ClipboardList,
    },
    {
      id: 2,
      title: 'Coordinación de Equipos',
      description:
        'Gestión y coordinación de todos los equipos técnicos involucrados, subcontratistas y proveedores.',
      icon: UsersRound,
    },
    {
      id: 3,
      title: 'Control de Calidad y Supervisión',
      description:
        'Supervisión continua de la ejecución, control de calidad en cada fase, verificación del cumplimiento de normativas.',
      icon: BadgeCheck,
    },
    {
      id: 4,
      title: 'Control de Presupuesto y Plazos',
      description:
        'Gestión económica rigurosa del proyecto, seguimiento de costes, control de desviaciones y ajustes.',
      icon: Calculator,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Main Title - Igual que el resto */}
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
            Coordinamos todos los aspectos técnicos, logísticos y administrativos de tu proyecto
            eléctrico o industrial con garantía de calidad y cumplimiento de plazos.
          </motion.p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-lg p-8 border border-secondary-200 group hover:border-[#1175c7] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon with background */}
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1175c7] transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 text-[#1175c7] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-secondary-900 mb-3 group-hover:text-[#1175c7] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
