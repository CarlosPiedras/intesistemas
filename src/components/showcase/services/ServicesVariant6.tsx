'use client';

import { motion } from 'framer-motion';
import { Hammer, Database, Users, Target } from 'lucide-react';

export default function ServicesVariant6() {
  const services = [
    {
      id: 1,
      title: 'PROJECT MANAGEMENT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Target,
    },
    {
      id: 2,
      title: 'INFRASTRUCTURE BUILD',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Hammer,
    },
    {
      id: 3,
      title: 'DATA INTEGRATION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Database,
    },
    {
      id: 4,
      title: 'TEAM CONSULTING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: Users,
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
            className="text-xs tracking-widest text-denim uppercase mb-4 font-bold"
          >
            Excellence in Delivery
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest text-secondary-900 mb-6"
          >
            EXPERTISE AREAS
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-secondary-300 max-w-xs"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mx-4 flex gap-1"
          >
            <div className="w-1.5 h-1.5 bg-denim rounded-full" />
            <div className="w-1.5 h-1.5 bg-denim rounded-full" />
            <div className="w-1.5 h-1.5 bg-denim rounded-full" />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-secondary-300 max-w-xs"
          />
        </motion.div>

        {/* Services Grid - Full Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {/* Card with full border */}
                <motion.div
                  whileHover={{
                    y: -8,
                    borderColor: '#1175c7',
                    backgroundColor: '#f8fafc'
                  }}
                  transition={{ duration: 0.2 }}
                  className="h-full p-6 bg-white rounded-2xl border-[3px] border-secondary-200 flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#1175c7'
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-20 h-20 rounded-full border-[3px] border-denim flex items-center justify-center mb-5 bg-primary-50 icon-container"
                  >
                    <Icon className="w-10 h-10 text-denim icon-container-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
                  </motion.div>

                  {/* Divider */}
                  <div className="w-12 h-px bg-secondary-300 mb-4 group-hover:bg-denim group-hover:w-16 transition-all duration-200" />

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary-900 mb-3 group-hover:text-denim transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
