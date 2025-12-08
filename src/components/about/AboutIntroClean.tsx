'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutIntroClean() {
  const yearsOfExperience = 30;

  const stats = [
    {
      number: '500+',
      label: 'Proyectos',
    },
    {
      number: yearsOfExperience.toString(),
      label: 'Años de Experiencia',
    },
    {
      number: '98%',
      label: 'Clientes Satisfechos',
    },
  ];

  return (
    <section className="bg-secondary-50 py-12 md:py-16 lg:py-20">
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
                src="/media/shared/procesos-about/aboutimage.png"
                alt="INTE SISTEMAS - Equipo profesional"
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
              /Sobre Nosotros
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6" style={{ color: '#1175c7' }}>
              TU SOCIO EN TECNOLOGÍA
            </h2>

            {/* Descripción */}
            <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-8">
              En Inte Sistemas creemos en ofrecer soluciones de automatización
              con calidad, integridad y experiencia. Fundados bajo los
              principios de proporcionar servicios personalizados y accesibles,
              nuestra empresa está dedicada a apoyar a individuos, familias y
              empresas en sus desafíos de automatización industrial.
            </p>

            {/* Stats - Grid de 3 columnas */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-secondary-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
