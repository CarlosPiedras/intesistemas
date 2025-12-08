'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroVariant8() {
  return (
    <section className="relative h-[65vh] md:h-[55vh] lg:h-[70vh] 2xl:h-[60vh] flex items-center overflow-hidden bg-denim">
      {/* Imagen de fondo con opacidad muy baja */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/media/pages/servicios/soporte/hero.jpg"
          alt="Sistemas eléctricos profesionales"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Elementos decorativos con colores de marca */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Círculos grandes con colores de marca */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-anakiwa rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-boston-blue rounded-full blur-3xl"
        />

        {/* Líneas decorativas */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 left-0 h-1 w-1/3 bg-gradient-to-r from-anakiwa to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-1/3 right-0 h-1 w-1/4 bg-gradient-to-l from-danube to-transparent origin-right"
        />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Columna izquierda - vacía */}
          <div className="hidden lg:block" />

          {/* Columna derecha - Contenido */}
          <div className="lg:pl-8 max-w-2xl">
            {/* Badge con gradiente de marca */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-anakiwa/20 to-danube/20 backdrop-blur-sm border-2 border-anakiwa/40 rounded-full"
            >
              <Zap className="w-4 h-4 text-anakiwa" fill="currentColor" />
              <span className="text-sm font-bold text-white tracking-wider uppercase">
                Soluciones industriales
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Automatización{' '}
              <span className="relative inline-block">
                <span className="text-anakiwa">Industrial Avanzada</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-anakiwa origin-left"
                />
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-primary-100 mb-8 leading-relaxed"
            >
              Más de 30 años diseñando e implementando sistemas de control industrial.
              <span className="block mt-2 text-anakiwa font-semibold">
                Calidad, innovación y compromiso en cada proyecto.
              </span>
            </motion.p>

            {/* CTA con colores de marca según guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(169, 217, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-8 py-4 text-base font-bold text-denim bg-white rounded-lg cursor-pointer hover:bg-anakiwa transition-colors duration-200"
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
