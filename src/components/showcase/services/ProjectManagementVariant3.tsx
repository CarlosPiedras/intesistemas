'use client';

import { motion } from 'framer-motion';
import { FileText, Users2, ShieldCheck, Banknote, Settings } from 'lucide-react';

export default function ProjectManagementVariant3() {
  const services = [
    {
      id: 1,
      title: 'Planificación y Diseño',
      description:
        'Análisis de necesidades, diseño técnico, elaboración de presupuestos detallados y planificación temporal del proyecto.',
      icon: FileText,
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
      icon: Banknote,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary-50">
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
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones completas en sistemas eléctricos y automatización. Desde el diseño inicial hasta el soporte continuo, acompañamos cada proyecto con experiencia técnica y dedicación profesional.
          </motion.p>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-16 md:mb-20"
        >
          {/* Left Line */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center h-px w-32 md:w-40 relative"
          >
            <span className="absolute inset-0 border-t border-secondary-700"></span>
          </motion.span>

          {/* Icon */}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 150 }}
            className="inline-flex mx-4"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Settings className="w-5 h-5 text-[#1175c7]" strokeWidth={1.5} />
            </motion.span>
          </motion.span>

          {/* Right Line */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center h-px w-32 md:w-40 relative"
          >
            <span className="absolute inset-0 border-t border-secondary-700"></span>
          </motion.span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#1175c7',
                    backgroundColor: '#e6f4ff'
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-28 h-28 rounded-full border-[2.5px] border-secondary-300 flex items-center justify-center mb-6 bg-white shadow-sm group"
                >
                  <Icon className="w-12 h-12 text-secondary-700 group-hover:text-[#1175c7] transition-colors duration-200" strokeWidth={1.25} />
                </motion.div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary-600 leading-relaxed">
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
