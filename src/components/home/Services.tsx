'use client';

import { motion } from 'framer-motion';
import { Zap, Cpu, ClipboardList, Wrench, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'DISTRIBUCIÓN ELÉCTRICA',
      description: 'Diseño y fabricación de cuadros de distribución personalizados para instalaciones industriales y comerciales.',
      icon: Zap,
      slug: 'distribucion-energia',
    },
    {
      id: 2,
      title: 'AUTOMATIZACIÓN INDUSTRIAL',
      description: 'Programación de PLCs y sistemas SCADA para optimizar procesos productivos y mejorar la eficiencia.',
      icon: Cpu,
      slug: 'automatizacion-industrial',
    },
    {
      id: 3,
      title: 'GESTIÓN DE PROYECTOS',
      description: 'Planificación y ejecución integral de proyectos eléctricos industriales con garantía de calidad.',
      icon: ClipboardList,
      slug: 'gestion-proyectos',
    },
    {
      id: 4,
      title: 'SOPORTE TÉCNICO',
      description: 'Mantenimiento, asistencia técnica y formación continua para asegurar el óptimo funcionamiento.',
      icon: Wrench,
      slug: 'soporte-tecnico',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest text-denim uppercase mb-4 font-bold"
          >
            Qué Hacemos
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            NUESTROS SERVICIOS
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones completas en sistemas eléctricos y automatización. Desde el diseño inicial hasta el soporte continuo,
            acompañamos cada proyecto con experiencia técnica y dedicación profesional.
          </motion.p>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center my-16"
        >
          {/* Left Line Container */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center h-px w-32 md:w-40 relative"
          >
            <span className="absolute inset-0 border-t border-secondary-700"></span>
          </motion.span>

          {/* Gear Icon */}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 150 }}
            className="inline-flex mx-4"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Settings className="w-5 h-5 text-denim" strokeWidth={1.5} />
            </motion.span>
          </motion.span>

          {/* Right Line Container */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="flex flex-col items-center text-center group cursor-pointer block"
                >
                  {/* Icon Circle with thick border */}
                  <div className="w-28 h-28 rounded-full border-[2.5px] border-secondary-300 group-hover:border-[#1175c7] group-hover:bg-[#e6f4ff] flex items-center justify-center mb-6 bg-white shadow-sm transition-all duration-200">
                    <Icon className="w-12 h-12 text-secondary-700 group-hover:text-[#1175c7] transition-colors duration-200" strokeWidth={1.25} />
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-secondary-600 leading-relaxed mb-4 min-h-[4.5rem]">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-700 group-hover:text-[#1175c7] transition-colors duration-200">
                    Más información
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
