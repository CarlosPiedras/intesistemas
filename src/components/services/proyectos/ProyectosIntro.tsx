'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProyectosIntro() {

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
                src="/media/pages/servicios/gestion/project-hero.png"
                alt="INTE SISTEMAS - Gestión de proyectos eléctricos e industriales"
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
              /Servicios/Gestión de Proyectos
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6" style={{ color: '#1175c7' }}>
              LIDERANDO TU PROYECTO
            </h2>

            {/* Descripción */}
            <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
              Coordinamos proyectos eléctricos e industriales de principio a fin, asegurando resultados
              óptimos mediante una metodología probada. Nuestro equipo gestiona cada detalle: desde el
              diseño y presupuestación hasta la supervisión de obra y puesta en marcha, garantizando
              entregas puntuales dentro del marco económico establecido.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
