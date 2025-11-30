'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Headphones } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    title: 'Trayectoria consolidada',
    description: 'Una década de experiencia transformando procesos industriales y optimizando infraestructuras eléctricas con resultados medibles.',
  },
  {
    icon: Users,
    title: 'Partner estratégico EATON',
    description: 'Colaboración oficial con EATON que nos permite ofrecer tecnología de vanguardia y respaldo internacional.',
  },
  {
    icon: MapPin,
    title: 'Presencia territorial',
    description: 'Red de oficinas estratégicamente ubicadas en el área metropolitana de Barcelona para respuesta inmediata.',
  },
  {
    icon: Headphones,
    title: 'Compromiso de servicio',
    description: 'Acompañamiento integral desde la consultoría inicial hasta el mantenimiento, garantizando la continuidad operativa.',
  },
];

export default function WhyChooseUsVariant7() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-[1400px] mx-auto">
          {/* Imagen izquierda con parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] lg:h-auto overflow-hidden -mx-4 lg:mx-0"
          >
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: -100 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="relative h-[700px] lg:h-[calc(100%+200px)]"
            >
              <Image
                src="/images/proceso/instalacion_1.jpg"
                alt="Equipo de Inte Sistemas trabajando"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Contenido derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center py-8"
          >
            {/* Header - alineado con el texto */}
            <div className="flex gap-5 mb-14">
              <div className="w-12 flex-shrink-0"></div>
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-xs tracking-widest text-denim uppercase mb-4 font-bold"
                >
                  ¿Por qué Inte Sistemas?
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
                  style={{ color: '#1175c7' }}
                >
                  CALIDAD Y EXPERIENCIA
                </motion.h2>
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
