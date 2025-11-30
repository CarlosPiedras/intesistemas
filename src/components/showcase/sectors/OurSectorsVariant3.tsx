'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { id: 1, src: '/images/sectores/cortadora.jpg', alt: 'Maquinaria de Corte' },
  { id: 2, src: '/images/sectores/cuadro_1.jpg', alt: 'Cuadros de Distribución' },
  { id: 3, src: '/images/sectores/cuadro_3.jpg', alt: 'Panel de Control' },
  { id: 4, src: '/images/sectores/edificios.jpg', alt: 'Instalaciones Eléctricas' },
  { id: 5, src: '/images/sectores/impresion_2.jpg', alt: 'Industria de Impresión' },
  { id: 6, src: '/images/sectores/plc.bmp', alt: 'Programación PLCs' },
  { id: 7, src: '/images/sectores/procesos.png', alt: 'Automatización de Procesos' },
  { id: 8, src: '/images/sectores/cuadro_4.jpg', alt: 'Sistemas Eléctricos' },
  { id: 9, src: '/images/sectores/edificios_1.jpg', alt: 'Edificios Comerciales' },
  { id: 10, src: '/images/sectores/impresion_1.jpg', alt: 'Maquinaria de Impresión' },
  { id: 11, src: '/images/sectores/procesos_2.jpg', alt: 'Procesos Industriales' },
  { id: 12, src: '/images/sectores/proyecto.bmp', alt: 'Gestión de Proyectos' },
];

export default function OurSectorsVariant3() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
            Una muestra de nuestra experiencia
          </p>
        </motion.div>

        {/* Featured Image + Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mb-4 md:mb-6 cursor-pointer"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white text-2xl md:text-3xl font-bold">
                {images[0].alt}
              </p>
            </div>
          </motion.div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {images.slice(1, 7).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Second Row - Medium + Small Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Medium Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {images.slice(7, 11).map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tall Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group relative h-64 md:h-full overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={images[11].src}
                alt={images[11].alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
