'use client';

import { motion } from 'framer-motion';
import { Cog, Radio, Lock, Lightbulb, Workflow } from 'lucide-react';
import Image from 'next/image';

export default function ServicesVariant2() {
  const services = [
    {
      id: 1,
      title: 'POWER SOLUTIONS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Lightbulb,
      image: '/images/sectores/cuadro_1.jpg',
    },
    {
      id: 2,
      title: 'SECURITY SYSTEMS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Lock,
      image: '/images/sectores/edificios.jpg',
    },
    {
      id: 3,
      title: 'PROCESS AUTOMATION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Workflow,
      image: '/images/sectores/procesos.png',
    },
    {
      id: 4,
      title: 'REMOTE MONITORING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Radio,
      image: '/images/proceso/instalacion.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest text-primary-600 uppercase mb-4 font-semibold"
          >
            Professional Services
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-secondary-900 mb-6"
          >
            CORE COMPETENCIES
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </motion.p>
        </div>

        {/* Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-full max-w-md" />
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 180 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-4 shrink-0"
          >
            <Cog className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent w-full max-w-md" />
        </motion.div>

        {/* Services Grid with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-primary-600 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-medium uppercase tracking-wide text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
