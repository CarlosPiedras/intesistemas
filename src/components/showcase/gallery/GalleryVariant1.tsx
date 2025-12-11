'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryVariant1() {
  const cuadros = [
    { id: 1, imagen: '/media/pages/servicios/distribucion/gallery/cuadro1.webp', alt: 'Cuadro eléctrico 1' },
    { id: 2, imagen: '/media/pages/servicios/distribucion/gallery/cuadro2.webp', alt: 'Cuadro eléctrico 2' },
    { id: 3, imagen: '/media/pages/servicios/distribucion/gallery/cuadro3.webp', alt: 'Cuadro eléctrico 3' },
    { id: 4, imagen: '/media/pages/servicios/distribucion/gallery/cuadro4.webp', alt: 'Cuadro eléctrico 4' },
    { id: 5, imagen: '/media/pages/servicios/distribucion/gallery/cuadro5.webp', alt: 'Cuadro eléctrico 5' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Title and Description Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            NUESTROS PROYECTOS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explora nuestra galería de proyectos de distribución eléctrica realizados con los más altos estándares de calidad y seguridad industrial.
          </motion.p>
        </div>

        {/* Gallery Grid - 5 images flexible layout */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {/* Image 2 - Large featured (cuandro2.webp) - SWAPPED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-4 md:col-span-5 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={cuadros[1].imagen}
                alt={cuadros[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 62.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 1 - Tall right (cuadro1.webp) - SWAPPED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-4 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={cuadros[0].imagen}
                alt={cuadros[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 3 - Medium (cuandro3.webp) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={cuadros[2].imagen}
                alt={cuadros[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 4 - Medium (cuandro4.webp) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 md:col-span-3 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={cuadros[3].imagen}
                alt={cuadros[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 37.5vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Image 5 - Small (cuadro5.webp) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-4 md:col-span-2 group relative overflow-hidden bg-secondary-100"
          >
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={cuadros[4].imagen}
                alt={cuadros[4].alt}
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
