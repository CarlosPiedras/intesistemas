'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Cpu, ClipboardList, Wrench, ArrowUpRight } from 'lucide-react';

export default function ServicesIntro() {
  const services = [
    {
      id: '01',
      title: 'Distribución de Energía',
      description: 'Cuadros eléctricos y sistemas de distribución de baja y media tensión para instalaciones industriales.',
      keywords: ['BT/MT', 'Protección', 'Eficiencia'],
      icon: Zap,
      href: '/es/servicios/distribucion-energia',
      gradient: 'from-[#1175c7] to-[#3a89c5]',
    },
    {
      id: '02',
      title: 'Automatización Industrial',
      description: 'PLCs, SCADA y sistemas de control automatizado para optimizar procesos productivos.',
      keywords: ['PLCs', 'SCADA', 'Control'],
      icon: Cpu,
      href: '/es/servicios/automatizacion-industrial',
      gradient: 'from-[#3a89c5] to-[#65a6d8]',
    },
    {
      id: '03',
      title: 'Gestión de Proyectos',
      description: 'Planificación, dirección y control integral de proyectos eléctricos con metodologías ágiles.',
      keywords: ['Planificación', 'Ejecución', 'Control'],
      icon: ClipboardList,
      href: '/es/servicios/gestion-proyectos',
      gradient: 'from-[#65a6d8] to-[#a9d9ff]',
    },
    {
      id: '04',
      title: 'Soporte Técnico',
      description: 'Mantenimiento preventivo, correctivo y asistencia técnica especializada disponible 24/7.',
      keywords: ['Mantenimiento', 'Asistencia', 'Formación'],
      icon: Wrench,
      href: '/es/servicios/soporte-tecnico',
      gradient: 'from-[#a9d9ff] to-[#1175c7]',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            SERVICIOS ESPECIALIZADOS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Desde la distribución eléctrica hasta la automatización completa, ofrecemos soluciones
            integrales adaptadas a las necesidades específicas de cada industria.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative h-full bg-white border-2 border-secondary-200 hover:border-[#1175c7] transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative p-8 md:p-10">
                      {/* Number */}
                      <div className="flex items-start justify-between mb-6">
                        <span
                          className="text-7xl md:text-8xl font-light leading-none"
                          style={{ color: '#1175c7', opacity: 0.15 }}
                        >
                          {service.id}
                        </span>

                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon
                            className="w-10 h-10 md:w-12 md:h-12"
                            style={{ color: '#1175c7' }}
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-4 text-secondary-900">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 border border-secondary-300 text-secondary-700 uppercase tracking-wide"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                        style={{ color: '#1175c7' }}
                      >
                        <span>Ver detalles</span>
                        <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#1175c7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
