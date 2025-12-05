'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-secondary-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/12.jpg"
          alt="INTE SISTEMAS - Servicios profesionales"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm font-medium text-white/80 mb-6 tracking-widest uppercase"
          >
            / Experiencia y Tecnología
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest text-white mb-8"
          >
            NUESTROS
            <br />
            <span className="font-normal" style={{ color: '#a9d9ff' }}>
              SERVICIOS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Soluciones integrales en sistemas eléctricos y automatización industrial.
            <br className="hidden md:block" />
            Desde el diseño hasta el soporte continuo, acompañamos cada proyecto con excelencia técnica.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 uppercase tracking-wider">Explorar</span>
          <svg
            className="w-5 h-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
