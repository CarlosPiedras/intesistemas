'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryVariant1() {
  const cuadros = [
    { id: 1, imagen: '/images/services/cuadros/cuadro1.webp', alt: 'Cuadro eléctrico 1' },
    { id: 2, imagen: '/images/services/cuadros/cuandro2.webp', alt: 'Cuadro eléctrico 2' },
    { id: 3, imagen: '/images/services/cuadros/cuandro3.webp', alt: 'Cuadro eléctrico 3' },
    { id: 4, imagen: '/images/services/cuadros/cuandro4.webp', alt: 'Cuadro eléctrico 4' },
    { id: 5, imagen: '/images/services/cuadros/cuadro5.webp', alt: 'Cuadro eléctrico 5' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-secondary-900 leading-[0.95] tracking-tight">
              Cuadros
              <br />
              eléctricos
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex items-end"
          >
            <div className="space-y-6">
              <p className="text-secondary-600 text-lg leading-relaxed font-light">
                Diseñamos y fabricamos cuadros de distribución eléctrica a medida,
                combinando ingeniería de precisión con los más altos estándares
                de seguridad industrial.
              </p>
              <p className="text-secondary-500 text-base leading-relaxed font-light">
                Cada proyecto es una solución única, adaptada a las necesidades
                específicas de instalaciones industriales y comerciales.
              </p>
            </div>
          </motion.div>
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
            <div className="relative w-full h-[250px] md:h-[350px]">
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
            <div className="relative w-full h-[250px] md:h-[350px]">
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
            <div className="relative w-full h-[250px] md:h-[350px]">
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
