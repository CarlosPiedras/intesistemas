'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientLogos() {
  const logos = [
    {
      name: 'EATON',
      image: '/images/logos/clientes/logo-eaton.jpg',
      width: 140,
      height: 60,
    },
    {
      name: 'CEA',
      image: '/images/logos/clientes/logo-cea.jpg',
      width: 120,
      height: 60,
    },
    {
      name: 'SAEL',
      image: '/images/logos/clientes/logo-sael.png',
      width: 130,
      height: 60,
    },
  ];

  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-wider text-secondary-600 font-semibold">
            Integradores oficiales de
          </p>
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-20">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative transition-all duration-300"
            >
              <Image
                src={logo.image}
                alt={`Logo ${logo.name}`}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
