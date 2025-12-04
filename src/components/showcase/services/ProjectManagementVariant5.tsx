'use client';

import { motion } from 'framer-motion';
import { Clipboard, Users2, ShieldCheck, Calculator } from 'lucide-react';

export default function ProjectManagementVariant5() {
  const services = [
    {
      id: 1,
      title: 'Planificación y Diseño',
      description:
        'Análisis de necesidades, diseño técnico, elaboración de presupuestos detallados y planificación temporal del proyecto.',
      icon: Clipboard,
    },
    {
      id: 2,
      title: 'Coordinación de Equipos',
      description:
        'Gestión y coordinación de todos los equipos técnicos involucrados, subcontratistas y proveedores.',
      icon: Users2,
    },
    {
      id: 3,
      title: 'Control de Calidad y Supervisión',
      description:
        'Supervisión continua de la ejecución, control de calidad en cada fase, verificación del cumplimiento de normativas.',
      icon: ShieldCheck,
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
    <section className="py-20 md:py-28 bg-secondary-50">
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
            Coordinamos todos los aspectos técnicos, logísticos y administrativos de tu proyecto
            eléctrico o industrial con garantía de calidad y cumplimiento de plazos.
          </motion.p>
        </div>

        {/* Services Grid - Mix: Bordes laterales + iconos con fondo circular suave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg p-8 border-l-4 border-[#1175c7] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon con fondo circular suave */}
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-[#1175c7]/10 rounded-full flex items-center justify-center group-hover:bg-[#1175c7]/20 transition-colors duration-300">
                        <Icon
                          className="w-8 h-8 text-[#1175c7] group-hover:text-[#3a89c5] transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      {/* Title sentence case */}
                      <h3 className="text-lg md:text-xl font-semibold text-secondary-900 mb-3 group-hover:text-[#1175c7] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
