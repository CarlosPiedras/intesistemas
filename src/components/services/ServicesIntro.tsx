'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, Shield, TrendingUp } from 'lucide-react';

export default function ServicesIntro() {
  const features = [
    {
      icon: Zap,
      title: 'Eficiencia',
      description: 'Optimizamos procesos para maximizar rendimiento y reducir costes operativos.',
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Cumplimiento estricto de normativas y estándares de calidad internacional.',
    },
    {
      icon: TrendingUp,
      title: 'Innovación',
      description: 'Tecnologías de vanguardia aplicadas a soluciones industriales reales.',
    },
    {
      icon: Settings,
      title: 'Personalización',
      description: 'Cada proyecto diseñado específicamente según las necesidades del cliente.',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: '#1175c7' }}
          >
            Por qué elegirnos
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mb-6"
            style={{ color: '#1175c7' }}
          >
            EXCELENCIA EN CADA PROYECTO
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            En INTE SISTEMAS combinamos más de una década de experiencia con las últimas
            tecnologías del sector. Nuestro compromiso es ofrecer soluciones que no solo cumplan,
            sino que superen las expectativas de nuestros clientes.
          </motion.p>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mb-16"
        >
          {/* Left Line */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center h-px w-24 md:w-32 relative"
          >
            <span className="absolute inset-0 border-t border-secondary-300"></span>
          </motion.span>

          {/* Icon */}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 150 }}
            className="inline-flex mx-4"
          >
            <Settings className="w-5 h-5" style={{ color: '#1175c7' }} strokeWidth={1.5} />
          </motion.span>

          {/* Right Line */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center h-px w-24 md:w-32 relative"
          >
            <span className="absolute inset-0 border-t border-secondary-300"></span>
          </motion.span>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#e6f4ff' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#1175c7' }} strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
