'use client';

import { motion } from 'framer-motion';
import { Zap, Cpu, ArrowRight } from 'lucide-react';

export default function ServicesVariant1() {
  const services = [
    {
      id: 'distribucion',
      title: 'Distribución de Energía',
      description: 'Sistemas de distribución eléctrica y cuadros de distribución eléctrica de alta calidad',
      icon: Zap,
      gradient: 'from-denim to-boston-blue',
      features: ['Cuadros eléctricos', 'Distribución BT/MT', 'Ingeniería eléctrica']
    },
    {
      id: 'automatizacion',
      title: 'Automatización',
      description: 'Automatización industrial, programación de PLCs y automatización de procesos',
      icon: Cpu,
      gradient: 'from-boston-blue to-danube',
      features: ['Programación PLCs', 'Control de procesos', 'Sistemas SCADA']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Nuestros <span className="text-denim">Servicios</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Soluciones integrales para la industria con más de 10 años de experiencia
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-secondary-900 mb-4 group-hover:text-denim transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-2 text-secondary-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-denim" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-denim font-semibold group-hover:gap-4 transition-all"
                  >
                    Conocer más
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
