'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Users, Shield, DollarSign } from 'lucide-react';

export default function ProjectManagementVariant1() {
  const services = [
    {
      id: 1,
      title: 'PLANIFICACIÓN Y DISEÑO',
      description:
        'Análisis de necesidades, diseño técnico, elaboración de presupuestos detallados y planificación temporal del proyecto.',
      icon: ClipboardCheck,
    },
    {
      id: 2,
      title: 'COORDINACIÓN DE EQUIPOS',
      description:
        'Gestión y coordinación de todos los equipos técnicos involucrados, subcontratistas y proveedores.',
      icon: Users,
    },
    {
      id: 3,
      title: 'CONTROL DE CALIDAD',
      description:
        'Supervisión continua de la ejecución, control de calidad en cada fase, verificación del cumplimiento de normativas.',
      icon: Shield,
    },
    {
      id: 4,
      title: 'CONTROL DE PRESUPUESTO',
      description:
        'Gestión económica rigurosa del proyecto, seguimiento de costes, control de desviaciones y ajustes.',
      icon: DollarSign,
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
            Planificación, coordinación y ejecución de proyectos complejos de automatización industrial
            y distribución de energía con garantía de calidad y cumplimiento de plazos.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                {/* Icon minimal */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon
                      className="w-12 h-12 text-[#1175c7] group-hover:text-[#3a89c5] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary-900 mb-3 group-hover:text-[#1175c7] transition-colors duration-300">
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
