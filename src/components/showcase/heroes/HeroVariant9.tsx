'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HeroVariant9() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/1.jpg"
          alt="Sistemas eléctricos profesionales"
          fill
          className="object-cover brightness-40"
          priority
          quality={90}
        />
        {/* Overlay con gradiente multi-color de marca */}
        <div className="absolute inset-0 bg-gradient-to-br from-boston-blue/80 via-denim/70 to-primary-900/85" />
      </div>

      {/* Barra lateral de colores de marca */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-anakiwa via-danube via-boston-blue to-denim z-20"
      />

      {/* Elementos decorativos con todos los colores de marca */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cuadrados decorativos con colores de marca */}
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-20 right-32 w-32 h-32 bg-anakiwa/20 backdrop-blur-sm border-2 border-anakiwa/40"
        />
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-32 right-64 w-24 h-24 bg-danube/20 backdrop-blur-sm border-2 border-danube/40"
        />

        {/* Círculos con degradados */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 right-20 w-64 h-64 bg-gradient-to-br from-anakiwa to-danube rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Columna izquierda - vacía */}
          <div className="hidden lg:block" />

          {/* Columna derecha - Contenido */}
          <div className="lg:pl-8 max-w-2xl">
            {/* Badge con todos los colores */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-boston-blue via-denim to-danube rounded-full shadow-lg shadow-denim/30"
            >
              <Sparkles className="w-4 h-4 text-anakiwa" />
              <span className="text-sm font-bold text-white tracking-wider uppercase">
                Tecnología de vanguardia
              </span>
            </motion.div>

            {/* Título con efectos de color */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              <span className="block">Automatización</span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-anakiwa via-danube to-boston-blue bg-clip-text text-transparent">
                  Industrial Avanzada
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-anakiwa via-danube to-boston-blue rounded-full"
                />
              </span>
            </motion.h1>

            {/* Descripción con acento de marca */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 pl-6 border-l-4 border-anakiwa"
            >
              <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed">
                Más de 30 años diseñando e implementando sistemas de control industrial.
                <span className="block mt-2 text-anakiwa font-bold">
                  Calidad, innovación y compromiso en cada proyecto.
                </span>
              </p>
            </motion.div>

            {/* CTAs con colores boston-blue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(58, 137, 197, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-boston-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-boston-blue hover:to-denim"
              >
                Conocer más
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(169, 217, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white border-2 border-anakiwa rounded-lg bg-transparent cursor-pointer"
              >
                Ver proyectos
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
