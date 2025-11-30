'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroVariant7() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/1.jpg"
          alt="Sistemas eléctricos profesionales"
          fill
          className="object-cover brightness-50"
          priority
          quality={90}
        />
        {/* Overlay más opaco como Variante 6 */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-denim/80 to-primary-900/85" />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Columna izquierda - vacía para mostrar la imagen */}
          <div className="hidden lg:block" />

          {/* Columna derecha - Contenido */}
          <div className="lg:pl-8 max-w-2xl">
            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Automatización{' '}
              <span className="text-anakiwa">Industrial Avanzada</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Más de 10 años diseñando e implementando sistemas de control industrial.
              Calidad, innovación y compromiso en cada proyecto.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1175c7",
                  color: "#ffffff",
                  boxShadow: "0 0 20px rgba(17, 117, 199, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-8 py-4 text-base font-bold text-denim bg-white border-2 border-denim rounded-lg cursor-pointer shadow-lg"
              >
                Conocer más
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
