'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Cpu, ClipboardList, Wrench, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'distribucion-energia',
      title: 'Distribución de Energía',
      shortTitle: 'DISTRIBUCIÓN ELÉCTRICA',
      description:
        'Diseñamos e implementamos sistemas de distribución eléctrica industrial que garantizan el suministro confiable y eficiente de energía.',
      features: [
        'Cuadros eléctricos BT/MT',
        'Sistemas de protección',
        'Automatización de distribución',
        'Optimización energética',
      ],
      icon: Zap,
      image: '/media/shared/sectores/cuadro_1.jpg',
      href: '/es/servicios/distribucion-energia',
      color: '#1175c7',
    },
    {
      id: 'automatizacion-industrial',
      title: 'Automatización Industrial',
      shortTitle: 'AUTOMATIZACIÓN',
      description:
        'Implementamos soluciones de automatización avanzada para optimizar procesos productivos y mejorar la eficiencia operativa.',
      features: [
        'Programación de PLCs',
        'Sistemas SCADA',
        'Control de procesos',
        'Integración de sistemas',
      ],
      icon: Cpu,
      image: '/media/shared/sectores/procesos.png',
      href: '/es/servicios/automatizacion-industrial',
      color: '#3a89c5',
    },
    {
      id: 'gestion-proyectos',
      title: 'Gestión de Proyectos',
      shortTitle: 'GESTIÓN DE PROYECTOS',
      description:
        'Planificación y ejecución integral de proyectos eléctricos industriales con garantía de calidad y cumplimiento de plazos.',
      features: [
        'Análisis de necesidades',
        'Diseño y planificación',
        'Ejecución y control',
        'Documentación técnica',
      ],
      icon: ClipboardList,
      image: '/media/pages/servicios/gestion/project-hero.png',
      href: '/es/servicios/gestion-proyectos',
      color: '#65a6d8',
    },
    {
      id: 'soporte-tecnico',
      title: 'Soporte Técnico',
      shortTitle: 'SOPORTE Y MANTENIMIENTO',
      description:
        'Servicio de mantenimiento preventivo y correctivo, asistencia técnica especializada y formación continua para tu equipo.',
      features: [
        'Mantenimiento preventivo',
        'Asistencia técnica 24/7',
        'Formación especializada',
        'Actualización de sistemas',
      ],
      icon: Wrench,
      image: '/media/shared/proceso/formacion.jpg',
      href: '/es/servicios/soporte-tecnico',
      color: '#a9d9ff',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: '#1175c7' }}
          >
            Lo que ofrecemos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mb-6"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-secondary-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-7 h-7" style={{ color: service.color }} strokeWidth={1.5} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      {/* Title */}
                      <h3
                        className="text-xl md:text-2xl font-light uppercase tracking-wider mb-4 group-hover:text-opacity-80 transition-all duration-300"
                        style={{ color: service.color }}
                      >
                        {service.shortTitle}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-secondary-600">
                            <span
                              className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: service.color }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Link */}
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300"
                        style={{ color: service.color }}
                      >
                        <span>Conocer más</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </div>
                    </div>
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
