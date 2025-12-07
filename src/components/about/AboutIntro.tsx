'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, MapPin, Users } from 'lucide-react';

export default function AboutIntro() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1994;

  const stats = [
    {
      icon: Award,
      number: `+${yearsOfExperience}`,
      label: 'años de experiencia',
    },
    {
      icon: MapPin,
      number: '2',
      label: 'sedes en Barcelona',
    },
    {
      icon: Users,
      number: '3',
      label: 'partners estratégicos',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Columna Izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/proceso/instalacion.jpg"
                alt="INTE SISTEMAS - Trabajo profesional"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Columna Derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Título */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6" style={{ color: '#1175c7' }}>
              INTE SISTEMAS
            </h2>

            {/* Badge */}
            <div className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Desde 1994
            </div>

            {/* Descripción 1 */}
            <p className="text-base md:text-lg text-secondary-700 leading-relaxed mb-6">
              Empresa española especializada en{' '}
              <span className="font-semibold text-secondary-900">
                soluciones integrales de sistemas eléctricos y automatización
                industrial
              </span>
              . Con más de {yearsOfExperience} años de experiencia, INTE
              SISTEMAS se ha consolidado como referente en el sector, ofreciendo
              servicios de calidad y excelencia técnica.
            </p>

            {/* Descripción 2 - Compromiso */}
            <p className="text-base md:text-lg text-secondary-700 leading-relaxed mb-10">
              En Inte Sistemas estamos comprometidos con ofrecer productos y
              servicios de calidad a nuestros clientes, proporcionando{' '}
              <span className="font-semibold text-secondary-900">
                soluciones innovadoras
              </span>{' '}
              que optimizan procesos industriales y garantizan la eficiencia
              energética.
            </p>

            {/* Stats - Grid de 3 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="bg-secondary-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-secondary-600 font-medium">
                      {stat.label}
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
