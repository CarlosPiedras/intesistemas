'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    number: '01',
    title: 'Experiencia probada',
    highlight: '+10 años',
    description: 'Desde 2014 implementando soluciones que transforman industrias.',
    image: '/images/sectores/impresion_1.jpg',
    benefits: ['Proyectos exitosos', 'Equipo experto', 'Metodología probada'],
  },
  {
    icon: Users,
    number: '02',
    title: 'Partners de confianza',
    highlight: 'EATON Oficial',
    description: 'Integrador certificado con acceso a tecnología de primera línea.',
    image: '/images/sectores/cortadora.jpg',
    benefits: ['Certificación oficial', 'Componentes premium', 'Garantía extendida'],
  },
  {
    icon: MapPin,
    number: '03',
    title: 'Cobertura local',
    highlight: '2 sedes BCN',
    description: 'Presencia física para una atención cercana y personalizada.',
    image: '/images/proceso/analisis.jpg',
    benefits: ['Hospitalet', 'Terrassa', 'Respuesta rápida'],
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Compromiso total',
    highlight: 'Soporte 24/7',
    description: 'Mantenimiento y asistencia continua para tu tranquilidad.',
    image: '/images/proceso/entrega_1.jpg',
    benefits: ['Asistencia inmediata', 'Mantenimiento', 'Formación'],
  },
];

export default function WhyChooseUsVariant6() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-secondary-50 to-white">
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
            Nuestras Fortalezas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            4 RAZONES PARA ELEGIRNOS
          </h2>
          <p className="text-secondary-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre qué nos hace diferentes y por qué somos tu mejor opción
          </p>
        </motion.div>

        {/* Timeline vertical en mobile, grid en desktop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Línea conectora - solo visible en desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-600 to-primary-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline connector mobile */}
                  {index < reasons.length - 1 && (
                    <div className="lg:hidden absolute left-20 top-40 w-1 h-8 bg-gradient-to-b from-primary-600 to-primary-200"></div>
                  )}

                  <div className="text-center">
                    {/* Imagen circular con borde */}
                    <div className="relative inline-block mb-6">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl group">
                        <Image
                          src={reason.image}
                          alt={reason.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent"></div>

                        {/* Número sobre la imagen */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary-600/95 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                            <span className="text-2xl font-bold text-white">{reason.number}</span>
                          </div>
                        </div>
                      </div>

                      {/* Punto en la línea timeline - desktop */}
                      <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Icono pequeño */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mb-4">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>

                    {/* Título y highlight */}
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                      {reason.title}
                    </h3>
                    <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {reason.highlight}
                    </div>

                    {/* Descripción */}
                    <p className="text-secondary-600 leading-relaxed mb-6 px-2">
                      {reason.description}
                    </p>

                    {/* Benefits list */}
                    <div className="space-y-2">
                      {reason.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-secondary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto border border-secondary-200">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Trabajemos juntos en tu próximo proyecto
            </h3>
            <p className="text-secondary-600 text-lg mb-8">
              Más de 500 empresas confían en nosotros. Sé la próxima historia de éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg group"
              >
                Solicitar consulta gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+34933379453"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-50 transition-colors border-2 border-primary-600"
              >
                +34 933 379 453
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
