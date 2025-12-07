'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

/**
 * HERO VARIANTE 1: FULLSCREEN DRAMÁTICO CON IMAGEN DE FONDO
 *
 * Estilo: Moderno, impactante, fullscreen
 * - Imagen de fondo a pantalla completa con overlay gradiente
 * - Texto grande centrado con CTA prominente
 * - Animaciones dramáticas de entrada
 * - Partículas decorativas flotantes
 */
export default function HeroVariant1() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[55vh] lg:h-[70vh] 2xl:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/01.jpg"
            alt="Inte Sistemas - Soluciones Eléctricas"
            fill
            className="object-cover scale-105"
            priority
            quality={95}
          />
          {/* Overlay con gradiente de marca */}
          <div className="absolute inset-0 bg-gradient-to-br from-denim/95 via-boston-blue/90 to-danube/85" />

          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-anakiwa rounded-full blur-3xl" />
          </div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-xl">
                <span className="text-sm font-semibold tracking-wide">
                  ⚡ INTEGRADORES OFICIALES DE EATON
                </span>
              </div>
            </motion.div>

            {/* Título principal - MUY GRANDE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight"
            >
              Energía que<br />
              <span className="text-anakiwa">Impulsa Industrias</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-white/95 font-light"
            >
              Soluciones eléctricas y automatización industrial de vanguardia.<br />
              Más de 30 años transformando la industria española.
            </motion.p>

            {/* CTAs grandes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contacto"
                className="group px-10 py-5 bg-white text-denim rounded-xl hover:bg-anakiwa hover:scale-105 transition-all text-lg font-bold shadow-2xl flex items-center gap-3"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sectores"
                className="px-10 py-5 bg-transparent border-3 border-white text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all text-lg font-bold flex items-center gap-3"
              >
                Ver Sectores
              </Link>
            </motion.div>

            {/* Contacto rápido */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
            >
              <a href="tel:+34933379453" className="flex items-center gap-2 hover:text-anakiwa transition-colors">
                <Phone className="w-4 h-4" />
                <span>+34 933 379 453</span>
              </a>
              <span className="hidden sm:block text-white/50">•</span>
              <a href="mailto:inte@inteautomatizacion.com" className="flex items-center gap-2 hover:text-anakiwa transition-colors">
                <Mail className="w-4 h-4" />
                <span>inte@inteautomatizacion.com</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-xs font-semibold tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECCIÓN SIGUIENTE: PARTNERS/CONFIANZA */}
      <section className="py-20 bg-white border-t-4 border-anakiwa">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-secondary-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Trabajan con nosotros
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Partners de Confianza
            </h2>
          </motion.div>

          {/* Logos de partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {[
              { src: '/images/logos/logo-eaton.jpg', alt: 'Eaton' },
              { src: '/images/logos/logo-cea.jpg', alt: 'CEA' },
              { src: '/images/logos/logo-sael.png', alt: 'SAEL' },
              { src: '/images/logos/logo-inte.png', alt: 'Inte Sistemas' },
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-32 h-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
