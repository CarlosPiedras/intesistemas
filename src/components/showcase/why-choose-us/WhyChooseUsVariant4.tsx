'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    title: '+10 años de experiencia',
    subtitle: 'Desde 2014',
    description: 'Más de una década ofreciendo soluciones de calidad en sistemas eléctricos y automatización industrial.',
    image: '/images/proceso/instalacion_1.jpg',
    features: ['Proyectos completados', 'Clientes satisfechos', 'Certificaciones'],
  },
  {
    icon: Users,
    title: 'Integrador oficial EATON',
    subtitle: '100% Certificado',
    description: 'Partners certificados de EATON en diversos sectores industriales con garantía de calidad.',
    image: '/images/sectores/cuadro_3.jpg',
    features: ['Certificación oficial', 'Componentes premium', 'Garantía extendida'],
  },
  {
    icon: MapPin,
    title: '2 sedes en Barcelona',
    subtitle: 'Proximidad',
    description: 'Oficinas en Hospitalet de Llobregat y Terrassa para estar cerca de ti cuando nos necesites.',
    image: '/images/sectores/edificios_1.jpg',
    features: ['Hospitalet de Llobregat', 'Terrassa', 'Cobertura regional'],
  },
  {
    icon: Headphones,
    title: 'Soporte técnico continuo',
    subtitle: 'Disponibilidad 24/7',
    description: 'Asistencia técnica, mantenimiento preventivo y formación para garantizar el óptimo funcionamiento.',
    image: '/images/proceso/formacion_1.jpg',
    features: ['Mantenimiento', 'Asistencia inmediata', 'Formación continua'],
  },
];

export default function WhyChooseUsVariant4() {
  return (
    <section className="py-20 md:py-28 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Ventajas Competitivas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            EXCELENCIA GARANTIZADA
          </h2>
          <p className="text-secondary-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre por qué somos la mejor opción para tus proyectos de automatización industrial
          </p>
        </motion.div>

        {/* Grid de tarjetas visuales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Imagen de fondo */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent"></div>

                  {/* Icono flotante */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shadow-xl">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Subtítulo */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">
                      {reason.subtitle}
                    </span>
                  </div>

                  {/* Título sobre la imagen */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {reason.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-secondary-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Borde decorativo en hover */}
                <div className="absolute inset-0 border-4 border-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-left">
              <p className="text-secondary-900 font-bold text-xl mb-1">
                ¿Hablamos de tu proyecto?
              </p>
              <p className="text-secondary-600">
                Solicita una consulta gratuita sin compromiso
              </p>
            </div>
            <a
              href="#contacto"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg whitespace-nowrap"
            >
              Contactar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
