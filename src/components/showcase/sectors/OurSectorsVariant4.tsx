'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { id: 1, src: '/media/shared/sectores/cortadora.jpg', alt: 'Maquinaria de Corte' },
  { id: 2, src: '/media/shared/sectores/cuadro_1.jpg', alt: 'Cuadros de Distribución' },
  { id: 3, src: '/media/shared/sectores/edificios.jpg', alt: 'Instalaciones Eléctricas' },
  { id: 4, src: '/media/shared/sectores/impresion_2.jpg', alt: 'Industria de Impresión' },
  { id: 5, src: '/media/shared/sectores/plc.bmp', alt: 'Programación PLCs' },
  { id: 6, src: '/media/shared/sectores/procesos.png', alt: 'Automatización de Procesos' },
  { id: 7, src: '/media/shared/sectores/proyecto.bmp', alt: 'Gestión de Proyectos' },
];

export default function OurSectorsVariant4() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="py-12 md:py-16 bg-secondary-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest text-denim uppercase mb-4 font-bold"
          >
            Nuestra Experiencia
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            NUESTROS TRABAJOS
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Proyectos reales que demuestran nuestra capacidad técnica y compromiso con la excelencia.
            Más de una década transformando industrias con soluciones innovadoras.
          </motion.p>
        </div>

        {/* Gallery Container */}
        <div className="max-w-6xl mx-auto">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg mb-6 bg-white shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={selectedImage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-xl md:text-2xl font-light uppercase tracking-wider"
                >
                  {selectedImage.alt}
                </motion.h3>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Thumbnails Grid - Single Row of 7 */}
          <div className="grid grid-cols-7 gap-3 md:gap-4">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square overflow-hidden cursor-pointer group"
              >
                {/* Image container with rounded corners */}
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-secondary-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Active indicator - bottom bar */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: selectedImage.id === image.id ? 1 : 0,
                    opacity: selectedImage.id === image.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 origin-center"
                />
              </motion.button>
            ))}
          </div>

          {/* Navigation Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-secondary-500 tracking-wide">
              Seleccione una imagen para verla en detalle
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
