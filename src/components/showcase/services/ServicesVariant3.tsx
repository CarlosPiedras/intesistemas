'use client';

import { motion } from 'framer-motion';
import { Zap, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ServicesVariant3() {
  const services = [
    {
      id: 'distribucion',
      title: 'Distribución de Energía',
      shortTitle: 'Distribución',
      description: 'Sistemas de distribución eléctrica y cuadros de distribución',
      icon: Zap,
      image: '/images/sectores/cuadro_3.jpg',
      benefits: [
        'Cuadros eléctricos personalizados',
        'Instalaciones BT/MT',
        'Certificación y normativa'
      ]
    },
    {
      id: 'automatizacion',
      title: 'Automatización Industrial',
      shortTitle: 'Automatización',
      description: 'Control inteligente y automatización de procesos',
      icon: Cpu,
      image: '/images/sectores/procesos.png',
      benefits: [
        'Programación PLCs',
        'Sistemas SCADA',
        'Optimización de procesos'
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-denim/10 text-denim rounded-full text-sm font-semibold mb-4"
          >
            Nuestras especialidades
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Soluciones <span className="text-denim">Industriales</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Más de 10 años ofreciendo servicios de calidad en distribución eléctrica y automatización
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      className="inline-flex p-4 rounded-xl bg-denim mb-6 w-fit"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-heading text-3xl font-bold text-white mb-3 group-hover:text-anakiwa transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <motion.ul
                      className="space-y-2 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {service.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.6 + idx * 0.1 }}
                          className="flex items-center gap-2 text-white/90"
                        >
                          <CheckCircle2 className="w-5 h-5 text-anakiwa flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-denim text-white rounded-lg font-semibold shadow-lg group-hover:bg-white group-hover:text-denim transition-all w-full"
                    >
                      <span>Más información</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-anakiwa rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
