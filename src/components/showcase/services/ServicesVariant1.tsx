'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, Shield, Cpu, Wrench } from 'lucide-react';

export default function ServicesVariant1() {
  const services = [
    {
      id: 1,
      title: 'ELECTRICAL DISTRIBUTION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Zap,
    },
    {
      id: 2,
      title: 'INDUSTRIAL SAFETY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Shield,
    },
    {
      id: 3,
      title: 'AUTOMATION SYSTEMS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Cpu,
    },
    {
      id: 4,
      title: 'TECHNICAL MAINTENANCE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest text-secondary-500 uppercase mb-4"
          >
            What We Offer
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wide text-secondary-900 mb-6"
          >
            OUR SERVICES
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </motion.p>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="h-px bg-secondary-300 w-full max-w-xs" />
          <div className="mx-4">
            <Settings className="w-5 h-5 text-primary-600" strokeWidth={1.5} />
          </div>
          <div className="h-px bg-secondary-300 w-full max-w-xs" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-28 h-28 rounded-full border-2 border-primary-600 flex items-center justify-center mb-6 bg-white hover:bg-primary-50 transition-colors duration-300"
                >
                  <Icon className="w-12 h-12 text-primary-600" strokeWidth={1.5} />
                </motion.div>

                {/* Subtitle */}
                <h3 className="text-sm md:text-base font-medium uppercase tracking-wide text-secondary-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
