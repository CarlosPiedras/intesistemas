'use client';

import { motion } from 'framer-motion';
import { Hammer, Database, Users, Target } from 'lucide-react';

export default function ServicesVariant5() {
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
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary-50 to-white">
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
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-denim to-transparent w-full max-w-md"
          />
        </motion.div>

        {/* Services Grid - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                {/* Horizontal Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-xl border-2 border-secondary-200 hover:border-denim transition-colors duration-200"
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      borderColor: '#1175c7',
                      backgroundColor: '#e6f4ff'
                    }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-16 h-16 rounded-full border-[3px] border-secondary-300 flex items-center justify-center bg-white shadow-sm hover-group"
                  >
                    <Icon className="w-8 h-8 text-secondary-700 group-hover:text-[#1175c7] transition-colors duration-200" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-secondary-900 mb-2 group-hover:text-denim transition-colors duration-200">
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
