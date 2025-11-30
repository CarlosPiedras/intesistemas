'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Zap, Shield, Award, Users } from 'lucide-react';

/**
 * HERO VARIANTE 2: SPLIT LAYOUT CORPORATIVO
 *
 * Estilo: Profesional, corporativo, estructurado
 * - Layout dividido 60/40 (texto/imagen)
 * - Lista de beneficios destacados
 * - Estadísticas con iconos
 * - Diseño limpio y organizado
 */
export default function HeroVariant2() {
  const beneficios = [
    'Integradores oficiales de Eaton desde 2014',
    'Más de 500 proyectos completados exitosamente',
    'Equipo de ingenieros certificados',
    'Soporte técnico 24/7 todo el año',
  ];

  const stats = [
    { icon: Users, value: '10+', label: 'Años de Experiencia' },
    { icon: Award, value: '500+', label: 'Proyectos Completados' },
    { icon: Shield, value: '100%', label: 'Satisfacción' },
    { icon: Zap, value: '24/7', label: 'Soporte' },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-primary-50/30 to-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* COLUMNA IZQUIERDA - CONTENIDO (60%) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 inline-block"
                >
                  <div className="px-5 py-2.5 bg-gradient-to-r from-denim to-boston-blue text-white rounded-lg text-sm font-bold shadow-soft flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    LÍDERES EN AUTOMATIZACIÓN INDUSTRIAL
                  </div>
                </motion.div>

                {/* Título */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-secondary-900 mb-6 leading-tight"
                >
                  Soluciones Eléctricas{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-denim to-boston-blue">
                    Profesionales
                  </span>{' '}
                  para tu Industria
                </motion.h1>

                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed"
                >
                  Especialistas en distribución de energía, cuadros eléctricos y programación
                  de PLCs. Transformamos tu operación con tecnología de vanguardia.
                </motion.p>

                {/* Lista de beneficios */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-10 space-y-4"
                >
                  {beneficios.map((beneficio, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-denim/10 flex items-center justify-center group-hover:bg-denim transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-denim group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-secondary-700 font-medium">{beneficio}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/contacto"
                    className="group px-8 py-4 bg-denim text-white rounded-xl hover:bg-primary-700 transition-all font-semibold shadow-soft hover:shadow-hard flex items-center justify-center gap-2"
                  >
                    Solicitar Consultoría
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/sectores"
                    className="px-8 py-4 bg-white border-2 border-denim text-denim rounded-xl hover:bg-primary-50 transition-all font-semibold shadow-soft flex items-center justify-center gap-2"
                  >
                    Explorar Sectores
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* COLUMNA DERECHA - IMAGEN (40%) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Imagen principal */}
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-hard">
                  <Image
                    src="/images/hero/12.jpg"
                    alt="Instalaciones Inte Sistemas"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-denim/20 to-transparent" />
                </div>

                {/* Card flotante con estadística */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border-t-4 border-denim"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-denim to-boston-blue rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary-900">Integrador</p>
                      <p className="text-sm text-secondary-600">Oficial de Eaton</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SIGUIENTE: ESTADÍSTICAS */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-denim rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-secondary-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
