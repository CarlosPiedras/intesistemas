'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { id: 1, src: '/media/shared/sectores/cortadora.jpg', alt: 'Maquinaria de Corte' },
  { id: 2, src: '/media/shared/sectores/cuadro_1.jpg', alt: 'Cuadros de Distribución' },
  { id: 3, src: '/media/shared/sectores/cuadro_3.jpg', alt: 'Panel de Control' },
  { id: 4, src: '/media/shared/sectores/cuadro_4.jpg', alt: 'Sistemas Eléctricos' },
  { id: 5, src: '/media/shared/sectores/edificios.jpg', alt: 'Instalaciones Eléctricas' },
  { id: 6, src: '/media/shared/sectores/edificios_1.jpg', alt: 'Edificios Comerciales' },
  { id: 7, src: '/media/shared/sectores/impresion.jpg', alt: 'Industria de Impresión' },
  { id: 8, src: '/media/shared/sectores/impresion_1.jpg', alt: 'Maquinaria de Impresión' },
  { id: 9, src: '/media/shared/sectores/impresion_2.jpg', alt: 'Automatización Gráfica' },
  { id: 10, src: '/media/shared/sectores/plc.bmp', alt: 'Programación PLCs' },
  { id: 11, src: '/media/shared/sectores/procesos.png', alt: 'Automatización de Procesos' },
  { id: 12, src: '/media/shared/sectores/procesos_2.jpg', alt: 'Procesos Industriales' },
  { id: 13, src: '/media/shared/sectores/proyecto.bmp', alt: 'Gestión de Proyectos' },
];

export default function OurSectorsVariant1() {
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
            Galería de proyectos realizados
          </p>
        </motion.div>

        {/* Simple Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-secondary-100 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Simple hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
