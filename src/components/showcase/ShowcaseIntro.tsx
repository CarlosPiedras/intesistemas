'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ShowcaseIntro() {

  return (
    <section className="bg-secondary-50 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Columna Izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="relative w-full h-full rounded-none overflow-hidden">
              <Image
                src="/media/pages/servicios/soporte/hero.jpg"
                alt="INTE SISTEMAS - Soluciones en sistemas eléctricos y automatización industrial"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Columna Derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            {/* Tag superior */}
            <div className="text-xs md:text-sm font-medium text-secondary-600 mb-4 tracking-wide">
              /Servicios/Soporte Técnico
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6" style={{ color: '#1175c7' }}>
              SOPORTE CONTINUO
            </h2>

            {/* Descripción */}
            <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-6">
              Ofrecemos asistencia técnica especializada para garantizar el correcto funcionamiento de tus
              instalaciones eléctricas y sistemas de automatización. Nuestro equipo está disponible para resolver
              incidencias y optimizar el rendimiento de tus equipos.
            </p>

            <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
              Mantenimiento preventivo, correctivo y formación técnica para maximizar la vida útil de tus
              sistemas y minimizar tiempos de inactividad en tu operación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
