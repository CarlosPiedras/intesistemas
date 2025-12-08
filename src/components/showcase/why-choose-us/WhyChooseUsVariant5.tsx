'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    number: '30+',
    title: 'Años de experiencia',
    description: 'Líderes en automatización industrial desde 1994',
    image: '/media/shared/sectores/procesos_2.jpg',
    stats: [
      { icon: Star, value: '500+', label: 'Proyectos' },
      { icon: TrendingUp, value: '98%', label: 'Satisfacción' },
    ],
  },
  {
    icon: Users,
    number: '100%',
    title: 'Integrador EATON oficial',
    description: 'Certificados y avalados por los mejores',
    image: '/media/shared/sectores/cuadro_4.jpg',
    stats: [
      { icon: Star, value: 'A+', label: 'Certificación' },
      { icon: TrendingUp, value: '100%', label: 'Garantía' },
    ],
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Sedes en Barcelona',
    description: 'Hospitalet y Terrassa a tu servicio',
    image: '/media/shared/proceso/instalacion_2.jpg',
    stats: [
      { icon: Star, value: '2', label: 'Oficinas' },
      { icon: TrendingUp, value: '<2h', label: 'Respuesta' },
    ],
  },
  {
    icon: Headphones,
    number: '24/7',
    title: 'Soporte continuo',
    description: 'Asistencia técnica cuando la necesites',
    image: '/media/shared/proceso/entrega.jpg',
    stats: [
      { icon: Star, value: '24/7', label: 'Disponible' },
      { icon: TrendingUp, value: '365', label: 'Días/año' },
    ],
  },
];

export default function WhyChooseUsVariant5() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            Por Qué Somos Diferentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            RESULTADOS COMPROBADOS
          </h2>
          <p className="text-secondary-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestros números hablan por sí solos
          </p>
        </motion.div>

        {/* Grid de mini-heroes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Imagen de fondo */}
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/70 to-secondary-900/30"></div>

                {/* Contenido */}
                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  {/* Top - Icono y número */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary-400">
                        {reason.number}
                      </div>
                    </div>
                  </div>

                  {/* Bottom - Texto y stats */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-secondary-200 mb-4">
                      {reason.description}
                    </p>

                    {/* Stats inline */}
                    <div className="flex gap-6">
                      {reason.stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <StatIcon className="w-4 h-4 text-primary-400" />
                            <span className="font-bold text-white">{stat.value}</span>
                            <span className="text-secondary-300 text-sm">{stat.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Borde hover */}
                <div className="absolute inset-0 border-4 border-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA con estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary-900 rounded-3xl p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿Quieres formar parte de nuestros casos de éxito?
            </h3>
            <p className="text-secondary-300 text-lg mb-8">
              Únete a las +500 empresas que confían en nosotros
            </p>

            {/* Stats destacadas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">10+</div>
                <div className="text-secondary-300">Años</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-secondary-300">Proyectos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
                <div className="text-secondary-300">Satisfacción</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-secondary-300">Soporte</div>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-xl"
            >
              Empezar mi proyecto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
