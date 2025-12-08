'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryVariant2() {
  const cuadros = [
    { id: 1, imagen: '/media/pages/servicios/distribucion/gallery/cuadro1.webp' },
    { id: 2, imagen: '/media/pages/servicios/distribucion/gallery/cuadro2.webp' },
    { id: 3, imagen: '/media/pages/servicios/distribucion/gallery/cuadro3.webp' },
    { id: 4, imagen: '/media/pages/servicios/distribucion/gallery/cuadro4.webp' },
    { id: 5, imagen: '/media/pages/servicios/distribucion/gallery/cuadro5.webp' },
  ];

  return (
    <section className="py-24 bg-secondary-50">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <div className="inline-block">
                  <span className="text-sm font-medium tracking-[0.2em] text-denim uppercase">
                    Ingeniería eléctrica
                  </span>
                  <div className="h-px bg-denim mt-4 w-16"></div>
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-light text-secondary-900 leading-tight">
                Diseño y<br />fabricación<br />a medida
              </h2>
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="space-y-8">
              <p className="text-secondary-700 text-xl font-light leading-relaxed">
                Especialistas en cuadros de distribución eléctrica para
                instalaciones industriales de alta complejidad.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-denim rounded-full"></div>
                  <p className="text-secondary-600 font-light">Certificación europea CE</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-denim rounded-full"></div>
                  <p className="text-secondary-600 font-light">Garantía de 10 años</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-denim rounded-full"></div>
                  <p className="text-secondary-600 font-light">Mantenimiento incluido</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Grid - Bento Style */}
        <div className="grid grid-cols-6 gap-3">
          {/* First large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-3 md:row-span-2 group relative overflow-hidden bg-white"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={cuadros[0].imagen}
                alt="Cuadro eléctrico 1"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Top right small */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-3 md:col-span-3 group relative overflow-hidden bg-white"
          >
            <div className="aspect-[16/10] relative">
              <Image
                src={cuadros[1].imagen}
                alt="Cuadro eléctrico 2"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Middle right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-3 md:col-span-2 group relative overflow-hidden bg-white"
          >
            <div className="aspect-square relative">
              <Image
                src={cuadros[2].imagen}
                alt="Cuadro eléctrico 3"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-3 md:col-span-1 group relative overflow-hidden bg-white"
          >
            <div className="aspect-square relative">
              <Image
                src={cuadros[3].imagen}
                alt="Cuadro eléctrico 4"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Bottom wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-6 group relative overflow-hidden bg-white"
          >
            <div className="aspect-[21/9] relative">
              <Image
                src={cuadros[4].imagen}
                alt="Cuadro eléctrico 5"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
