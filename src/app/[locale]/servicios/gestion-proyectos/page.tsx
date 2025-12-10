'use client';

import { motion } from 'framer-motion';
import { HeroImageLoader } from '@/components/effects/HeroImageLoader';
import { ClipboardCheck, Users, Shield, DollarSign } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'PLANIFICACIÓN Y DISEÑO',
    description:
      'Definimos la hoja de ruta completa: análisis de viabilidad, diseño de soluciones técnicas, presupuestos ajustados y cronogramas realistas que aseguran el éxito del proyecto.',
    icon: ClipboardCheck,
    number: '01',
  },
  {
    id: 2,
    title: 'COORDINACIÓN DE EQUIPOS',
    description:
      'Lideramos la comunicación entre todos los actores del proyecto: técnicos especializados, instaladores, proveedores y clientes, garantizando sincronización total.',
    icon: Users,
    number: '02',
  },
  {
    id: 3,
    title: 'CONTROL DE CALIDAD',
    description:
      'Implementamos protocolos de supervisión en cada etapa, realizamos inspecciones técnicas exhaustivas y verificamos el cumplimiento normativo antes de cada entrega.',
    icon: Shield,
    number: '03',
  },
  {
    id: 4,
    title: 'CONTROL DE PRESUPUESTO',
    description:
      'Administramos los recursos económicos con transparencia total: seguimiento de gastos en tiempo real, identificación temprana de desviaciones y optimización continua de costes.',
    icon: DollarSign,
    number: '04',
  },
];

export default function GestionProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[45vh] xl:h-[calc(100vh-5rem)] 2xl:h-[70vh] overflow-hidden bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <HeroImageLoader
            src="/media/pages/servicios/gestion/hero.webp"
            alt="INTE SISTEMAS - Gestión de Proyectos"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs md:text-sm font-medium text-white/80 mb-6 tracking-widest uppercase"
            >
              / Servicios / Gestión de Proyectos
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest text-white mb-8"
            >
              GESTIÓN CON
              <br />
              <span className="font-normal" style={{ color: '#a9d9ff' }}>
                CONOCIMIENTO
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Soluciones completas de gestión de proyectos eléctricos e industriales.
              <br className="hidden md:block" />
              Experiencia en planificación, coordinación y control de calidad.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-12"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            >
              Ofrecemos cuatro pilares fundamentales para el éxito de tu proyecto eléctrico o industrial,
              coordinando recursos, equipos y procesos con eficiencia profesional.
            </motion.p>
          </div>

          {/* Services List - Layout horizontal con números */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-6 md:gap-8 bg-white border-l-2 border-secondary-200 hover:border-[#1175c7] pl-6 md:pl-8 pr-6 py-6 transition-all duration-300"
                  >
                    {/* Número grande */}
                    <div className="flex-shrink-0 hidden md:block">
                      <span className="text-6xl font-extralight text-secondary-200 group-hover:text-[#1175c7]/30 transition-colors duration-500">
                        {service.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 mt-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon
                          className="w-10 h-10 md:w-12 md:h-12 text-[#1175c7] group-hover:text-[#3a89c5] transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-semibold uppercase tracking-wider text-secondary-900 mb-2 group-hover:text-[#1175c7] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
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
    </div>
  );
}
