'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    number: '10+',
    label: 'años',
    title: 'Experiencia consolidada',
    description: 'Desde 2014 ofreciendo soluciones de calidad en el sector industrial.',
  },
  {
    icon: Users,
    number: '100%',
    label: 'oficial',
    title: 'Integrador EATON',
    description: 'Partners certificados en diversos sectores industriales.',
  },
  {
    icon: MapPin,
    number: '02',
    label: 'sedes',
    title: 'Presencia en Barcelona',
    description: 'Hospitalet de Llobregat y Terrassa a tu servicio.',
  },
  {
    icon: Headphones,
    number: '24/7',
    label: 'soporte',
    title: 'Asistencia continua',
    description: 'Mantenimiento y soporte técnico garantizado.',
  },
];

export default function WhyChooseUsVariant2() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            ¿Por qué Inte Sistemas?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            CALIDAD Y EXPERIENCIA
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Grid de razones - Layout horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 text-center ${
                  index < reasons.length - 1 ? 'lg:border-r border-secondary-300' : ''
                } ${index < 2 ? 'md:border-r border-secondary-300' : ''}`}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-primary-600">
                      {reason.number}
                    </span>
                    <span className="text-sm text-secondary-500 uppercase tracking-wider">
                      {reason.label}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-3 uppercase tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 group"
          >
            Contactar ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
