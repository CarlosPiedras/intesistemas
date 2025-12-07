'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    number: '30+',
    label: 'años',
    title: 'Experiencia consolidada',
    description: 'Más de tres décadas diseñando e implementando sistemas de control industrial. Desde 1994, hemos completado cientos de proyectos exitosos en toda España.',
    image: '/images/sectores/cuadro_1.jpg',
    imageAlt: 'Cuadro eléctrico industrial',
  },
  {
    icon: Users,
    number: '100%',
    label: 'oficial',
    title: 'Integrador EATON certificado',
    description: 'Como integradores oficiales de EATON, garantizamos la máxima calidad en componentes y soluciones técnicas para tu industria.',
    image: '/images/proceso/instalacion.jpg',
    imageAlt: 'Instalación de sistemas EATON',
  },
  {
    icon: MapPin,
    number: '02',
    label: 'sedes',
    title: 'Presencia en Barcelona',
    description: 'Con oficinas en Hospitalet de Llobregat y Terrassa, estamos cerca para ofrecerte el mejor servicio y respuesta inmediata.',
    image: '/images/sectores/edificios.jpg',
    imageAlt: 'Edificios industriales',
  },
  {
    icon: Headphones,
    number: '24/7',
    label: 'soporte',
    title: 'Asistencia continua',
    description: 'Mantenimiento preventivo, asistencia técnica y formación continua para asegurar el óptimo funcionamiento de tus sistemas.',
    image: '/images/proceso/formacion.jpg',
    imageAlt: 'Soporte técnico y formación',
  },
];

export default function WhyChooseUsVariant3() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            TU PARTNER TECNOLÓGICO
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Razones alternadas */}
        <div className="space-y-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Imagen */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={reason.image}
                      alt={reason.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>

                    {/* Badge flotante */}
                    <div className="absolute top-6 right-6 bg-primary-600 text-white px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">{reason.number}</span>
                        <span className="text-sm uppercase tracking-wider">{reason.label}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-600 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 uppercase tracking-wide">
                    {reason.title}
                  </h3>

                  <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all cursor-pointer">
                    <span>Saber más</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para optimizar tus procesos industriales?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos ayudarte a llevar tu industria al siguiente nivel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Solicitar presupuesto
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+34933379453"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors border-2 border-white/20 inline-flex items-center justify-center gap-2"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
