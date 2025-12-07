'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ShowcaseHeroFused() {
  return (
    <section className="relative h-[65vh] md:h-[55vh] lg:h-[70vh] 2xl:h-[60vh] overflow-hidden bg-secondary-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/12.jpg"
          alt="INTE SISTEMAS - Servicios profesionales"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column - Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              {/* Eyebrow */}
              <div className="text-xs md:text-sm font-medium text-white/80 mb-6 tracking-widest uppercase">
                / Servicios / Distribución de Energía
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-widest text-white mb-6">
                DISTRIBUCIÓN
                <br />
                <span className="font-normal" style={{ color: '#a9d9ff' }}>
                  EFICIENTE
                </span>
              </h1>

              {/* Subtitle from Services Hero */}
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                Soluciones integrales en sistemas eléctricos y automatización industrial.
              </p>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-px w-32 md:w-48 bg-gradient-to-r from-white via-white/50 to-transparent mb-8"
              />

              {/* Description from DistribucionIntro */}
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                Diseñamos e implementamos sistemas de distribución eléctrica industrial que garantizan
                el suministro confiable y eficiente de energía. Nuestras soluciones incluyen cuadros
                eléctricos de baja y media tensión, sistemas de protección y automatización de la
                distribución energética. Cumplimos con todas las normativas vigentes y optimizamos el consumo energético de
                tu instalación, reduciendo costes operativos y mejorando la seguridad eléctrica.
              </p>
            </motion.div>

            {/* Right Column - Image from DistribucionIntro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] lg:h-[600px]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/hero/13.jpg"
                  alt="INTE SISTEMAS - Distribución de energía eléctrica"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
