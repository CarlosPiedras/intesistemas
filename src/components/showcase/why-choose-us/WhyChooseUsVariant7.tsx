'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    title: 'Más de 10 años de experiencia',
    description: 'Desde 2014 diseñando e implementando sistemas de control industrial con los más altos estándares de calidad.',
  },
  {
    icon: Users,
    title: 'Integrador oficial EATON',
    description: 'Certificación oficial que garantiza componentes premium y soluciones técnicas de primera línea.',
  },
  {
    icon: MapPin,
    title: '2 sedes en Barcelona',
    description: 'Presencia en Hospitalet de Llobregat y Terrassa para una atención cercana y personalizada.',
  },
  {
    icon: Headphones,
    title: 'Soporte técnico continuo',
    description: 'Asistencia técnica, mantenimiento preventivo y formación para garantizar tu tranquilidad.',
  },
];

export default function WhyChooseUsVariant7() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
              <Image
                src="/images/proceso/instalacion_1.jpg"
                alt="Equipo de Inte Sistemas trabajando"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Contenido derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8"
          >
            {/* Header - alineado con el texto */}
            <div className="flex gap-5 mb-14">
              <div className="w-12 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                  ¿Por qué Inte Sistemas?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                  CALIDAD Y EXPERIENCIA
                </h2>
              </div>
            </div>

            {/* Lista de razones */}
            <div className="space-y-12">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-5"
                  >
                    {/* Icono */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary-900 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed text-base">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
