'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryVariant3() {
  const cuadros = [
    { id: 1, imagen: '/images/services/cuadros/cuadro1.webp' },
    { id: 2, imagen: '/images/services/cuadros/cuandro2.webp' },
    { id: 3, imagen: '/images/services/cuadros/cuandro3.webp' },
    { id: 4, imagen: '/images/services/cuadros/cuandro4.webp' },
    { id: 5, imagen: '/images/services/cuadros/cuadro5.webp' },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-[1500px]">
        {/* Header Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-secondary-900 leading-none tracking-tighter">
                Cuadros<br />
                <span className="font-light">eléctricos</span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="space-y-6 max-w-xl">
                <p className="text-2xl text-secondary-800 font-light leading-relaxed">
                  Excelencia en distribución eléctrica industrial
                </p>
                <p className="text-base text-secondary-500 font-light leading-relaxed">
                  Desarrollamos soluciones de distribución eléctrica adaptadas a proyectos
                  industriales de cualquier escala. Desde el diseño inicial hasta la puesta
                  en marcha, garantizamos máxima eficiencia y seguridad.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gallery Grid - Minimal Bento */}
        <div className="grid grid-cols-12 gap-2">
          {/* Large hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8 group relative overflow-hidden"
          >
            <div className="aspect-[16/10] relative bg-secondary-100">
              <Image
                src={cuadros[0].imagen}
                alt="Cuadro eléctrico principal"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Right column - 2 stacked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-4 group relative overflow-hidden"
          >
            <div className="aspect-square relative bg-secondary-100">
              <Image
                src={cuadros[1].imagen}
                alt="Cuadro eléctrico 2"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-4 group relative overflow-hidden"
          >
            <div className="aspect-square relative bg-secondary-100">
              <Image
                src={cuadros[2].imagen}
                alt="Cuadro eléctrico 3"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-6 md:col-span-5 group relative overflow-hidden"
          >
            <div className="aspect-[4/3] relative bg-secondary-100">
              <Image
                src={cuadros[3].imagen}
                alt="Cuadro eléctrico 4"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-6 md:col-span-3 group relative overflow-hidden"
          >
            <div className="aspect-[4/3] relative bg-secondary-100">
              <Image
                src={cuadros[4].imagen}
                alt="Cuadro eléctrico 5"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
