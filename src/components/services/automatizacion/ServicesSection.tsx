'use client';

import { motion } from 'framer-motion';
import { Cpu, Monitor, Gauge, Bot, RefreshCw } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Cpu,
    title: 'Programación de PLCs',
    description:
      'Diseño y programación de controladores lógicos programables (PLCs) con Siemens, Allen-Bradley, Schneider Electric y EATON. Lenguajes Ladder, SCL y Structured Text.',
  },
  {
    id: 2,
    icon: Monitor,
    title: 'Sistemas SCADA',
    description:
      'Implementación de sistemas de supervisión, control y adquisición de datos. Monitorización en tiempo real, gestión de alarmas y generación de informes automáticos.',
  },
  {
    id: 3,
    icon: Gauge,
    title: 'Control de Procesos',
    description:
      'Optimización de líneas de producción mediante control de temperatura, presión, caudal y velocidad. Regulación PID avanzada y control distribuido (DCS).',
  },
  {
    id: 4,
    icon: Bot,
    title: 'Robótica Industrial',
    description:
      'Integración de soluciones robóticas para pick & place, paletizado, soldadura y ensamblaje. Robots colaborativos (cobots) y visión artificial.',
  },
  {
    id: 5,
    icon: RefreshCw,
    title: 'Modernización',
    description:
      'Actualización de sistemas obsoletos con tecnología moderna. Migración de PLCs antiguos, retrofitting de maquinaria y mejora de comunicaciones industriales.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary-50">
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
            SOLUCIONES INTEGRALES
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Tecnología avanzada para optimizar procesos industriales y maximizar la
            productividad de tu empresa
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: '#e6f4ff',
                    border: '2px solid #65a6d8',
                  }}
                >
                  <Icon className="w-8 h-8 transition-colors duration-300" style={{ color: '#1175c7' }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-secondary-900 uppercase tracking-wide">
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
