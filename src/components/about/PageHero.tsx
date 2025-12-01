'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHero() {
  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/1.1.jpg"
          alt="Quiénes Somos - INTE SISTEMAS"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay con gradiente azul */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1175c7]/80 to-[#3a89c5]/90" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 text-white/90 text-sm mb-6"
        >
          <Link
            href="/es"
            className="hover:text-white transition-colors duration-200"
          >
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">Quiénes Somos</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
        >
          Quiénes Somos
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/90 max-w-3xl"
        >
          Más de 10 años innovando en sistemas eléctricos y automatización
          industrial
        </motion.p>
      </div>
    </section>
  );
}
