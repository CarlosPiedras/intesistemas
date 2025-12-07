'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Cpu, Settings, TrendingUp } from 'lucide-react';

/**
 * HERO VARIANTE 3: MINIMALISTA CON CARDS DE SERVICIOS
 *
 * Estilo: Limpio, moderno, minimalista
 * - Fondo blanco/claro con acentos sutiles
 * - Texto centrado grande
 * - Cards de servicios destacados integrados en el hero
 * - Diseño espacioso y respirado
 */
export default function HeroVariant3() {
  const servicios = [
    {
      icon: Lightbulb,
      titulo: 'Distribución de Energía',
      descripcion: 'Sistemas eléctricos eficientes y seguros',
      color: 'from-denim to-boston-blue',
    },
    {
      icon: Cpu,
      titulo: 'Automatización',
      descripcion: 'PLCs y control de procesos industriales',
      color: 'from-boston-blue to-danube',
    },
    {
      icon: Settings,
      titulo: 'Cuadros Eléctricos',
      descripcion: 'Diseño y fabricación personalizada',
      color: 'from-danube to-anakiwa',
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white via-primary-50/20 to-white py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Contenido central */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary-200 rounded-full text-denim text-sm font-bold shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-denim opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-denim"></span>
                  </span>
                  Innovación en Sistemas Eléctricos
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-secondary-900 mb-6 leading-tight px-4"
              >
                Tecnología que{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-denim via-boston-blue to-danube">
                    Transforma
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-denim to-danube rounded-full"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-secondary-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Diseñamos, implementamos y mantenemos soluciones eléctricas e industriales
                de alto rendimiento. Integradores oficiales de Eaton.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  href="/contacto"
                  className="group px-10 py-5 bg-gradient-to-r from-denim to-boston-blue text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg flex items-center justify-center gap-2"
                >
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/como-lo-hacemos"
                  className="px-10 py-5 bg-white text-denim border-2 border-denim rounded-xl hover:bg-primary-50 transition-all font-bold text-lg flex items-center justify-center gap-2 shadow-sm"
                >
                  Cómo Trabajamos
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-secondary-500"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-denim" />
                  <span>+30 años en el sector</span>
                </div>
                <span className="text-secondary-300">|</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/images/logos/logo-eaton.jpg"
                      alt="Eaton"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Integrador Oficial</span>
                </div>
                <span className="text-secondary-300">|</span>
                <div className="flex items-center gap-2">
                  <span className="text-denim font-bold">500+</span>
                  <span>Proyectos Completados</span>
                </div>
              </motion.div>
            </div>

            {/* Cards de servicios integrados */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {servicios.map((servicio, index) => {
                const Icon = servicio.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-hard transition-all border border-primary-100 hover:border-denim cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${servicio.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-denim transition-colors">
                      {servicio.titulo}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-denim font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Saber más
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SIGUIENTE: IMAGEN GRANDE CON TEXTO SUPERPUESTO */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/hero/13.jpg"
          alt="Instalaciones Inte Sistemas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/70" />

        <div className="relative z-10 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones a Medida para Cada Industria
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Desde edificios residenciales hasta complejas instalaciones industriales,
              adaptamos nuestras soluciones a tus necesidades específicas.
            </p>
            <Link
              href="/sectores"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-denim rounded-xl hover:bg-anakiwa transition-all font-bold shadow-xl"
            >
              Explorar Sectores
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
