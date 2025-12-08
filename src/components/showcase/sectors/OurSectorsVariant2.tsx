'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { id: 1, src: '/media/shared/sectores/cortadora.jpg', alt: 'Maquinaria de Corte', size: 'large' },
  { id: 2, src: '/media/shared/sectores/cuadro_1.jpg', alt: 'Cuadros de Distribución', size: 'small' },
  { id: 3, src: '/media/shared/sectores/edificios.jpg', alt: 'Instalaciones Eléctricas', size: 'small' },
  { id: 4, src: '/media/shared/sectores/impresion_2.jpg', alt: 'Industria de Impresión', size: 'medium' },
  { id: 5, src: '/media/shared/sectores/plc.bmp', alt: 'Programación PLCs', size: 'medium' },
  { id: 6, src: '/media/shared/sectores/cuadro_3.jpg', alt: 'Panel de Control', size: 'small' },
  { id: 7, src: '/media/shared/sectores/procesos.png', alt: 'Automatización de Procesos', size: 'large' },
  { id: 8, src: '/media/shared/sectores/cuadro_4.jpg', alt: 'Sistemas Eléctricos', size: 'small' },
  { id: 9, src: '/media/shared/sectores/impresion_1.jpg', alt: 'Maquinaria de Impresión', size: 'small' },
  { id: 10, src: '/media/shared/sectores/edificios_1.jpg', alt: 'Edificios Comerciales', size: 'medium' },
  { id: 11, src: '/media/shared/sectores/procesos_2.jpg', alt: 'Procesos Industriales', size: 'small' },
  { id: 12, src: '/media/shared/sectores/proyecto.bmp', alt: 'Gestión de Proyectos', size: 'small' },
];

export default function OurSectorsVariant2() {
  return (
    <section className="py-20 md:py-28 bg-secondary-50">
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
            Proyectos que nos enorgullecen
          </p>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative break-inside-avoid overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div
                className={`
                  relative overflow-hidden
                  ${image.size === 'large' ? 'h-80 md:h-96' : ''}
                  ${image.size === 'medium' ? 'h-64 md:h-80' : ''}
                  ${image.size === 'small' ? 'h-48 md:h-64' : ''}
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm md:text-base">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
