'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactIntro() {
  return (
    <section className="bg-secondary-50 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Columna Izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="relative w-full h-full rounded-none overflow-hidden">
              <Image
                src="/media/pages/contacto/hero.jpg"
                alt="INTE SISTEMAS - Contacto"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Columna Derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            {/* Tag superior */}
            <div className="text-xs md:text-sm font-medium text-secondary-600 mb-4 tracking-wide">
              /Contacto
            </div>

            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6" style={{ color: '#1175c7' }}>
              HABLEMOS DE TU PROYECTO
            </h1>

            {/* Descripción */}
            <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
              En INTE SISTEMAS estamos listos para escucharte y ofrecerte soluciones
              personalizadas en automatización industrial y sistemas eléctricos.
              Nuestro equipo de expertos está preparado para transformar tus ideas en realidad
              con tecnología de vanguardia y un servicio de calidad excepcional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
