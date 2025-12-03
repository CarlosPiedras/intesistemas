'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AutomatizacionGallery() {
  const images = [
    { id: 1, imagen: '/images/sectores/plc.bmp', alt: 'Programación de PLCs' },
    { id: 2, imagen: '/images/sectores/procesos.png', alt: 'Automatización de procesos' },
    { id: 3, imagen: '/images/sectores/procesos_2.jpg', alt: 'Control industrial' },
    { id: 4, imagen: '/images/proceso/instalacion.jpg', alt: 'Instalación de sistemas' },
    { id: 5, imagen: '/images/proceso/instalacion_1.jpg', alt: 'Configuración de equipos' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag superior */}
            <div className="text-xs md:text-sm font-medium text-secondary-600 mb-4 tracking-wide">
              /Servicios/Automatización Industrial
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest" style={{ color: '#1175c7' }}>
              AUTOMATIZACIÓN
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
              Diseñamos e implementamos soluciones de automatización industrial que optimizan
              procesos productivos mediante programación de PLCs, sistemas SCADA y control
              avanzado. Tecnología de vanguardia para maximizar la eficiencia de tu industria.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid - 5 images flexible layout */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {/* Image 1 - Large featured (procesos_2.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-4 md:col-span-5 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={images[2].imagen}
                alt={images[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 62.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 2 - Tall right (procesos.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-4 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={images[1].imagen}
                alt={images[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 3 - Medium (plc.bmp) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={images[0].imagen}
                alt={images[0].alt}
                fill
                sizes="(max-width: 768px) 50vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 4 - Medium (instalacion.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={images[3].imagen}
                alt={images[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 5 - Small (instalacion_1.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-4 md:col-span-2 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={images[4].imagen}
                alt={images[4].alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
