'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ShowcaseHeroContact() {
  return (
    <section className="relative h-[calc(100vh-5rem)] overflow-hidden bg-secondary-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/media/pages/contacto/hero.jpg"
          alt="INTE SISTEMAS - Contacto"
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
            / Contacto
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest text-white mb-8"
          >
            HABLEMOS DE
            <br />
            <span className="font-normal" style={{ color: '#a9d9ff' }}>
              TU PROYECTO
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Soluciones personalizadas en sistemas eléctricos y automatización industrial.
            <br className="hidden md:block" />
            Nuestro equipo está preparado para transformar tus ideas en realidad con excelencia técnica.
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
    </section>
  );
}
