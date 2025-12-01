'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Layers,
  Hammer,
  CheckCircle,
  Package,
  Headphones,
} from 'lucide-react';

export default function WorkProcessVariant1() {
  const processSteps = [
    {
      paso: 1,
      titulo: 'Análisis de necesidades',
      descripcion: 'Estudio detallado del proyecto y las necesidades del cliente',
      icon: Search,
    },
    {
      paso: 2,
      titulo: 'Planificación',
      descripcion: 'Diseño y estrategia del proyecto',
      icon: Layers,
    },
    {
      paso: 3,
      titulo: 'Ejecución',
      descripcion: 'Implementación del proyecto con estándares de calidad',
      icon: Hammer,
    },
    {
      paso: 4,
      titulo: 'Control de calidad',
      descripcion: 'Verificación y pruebas exhaustivas del sistema',
      icon: CheckCircle,
    },
    {
      paso: 5,
      titulo: 'Entrega',
      descripcion: 'Finalización y puesta en marcha del proyecto',
      icon: Package,
    },
    {
      paso: 6,
      titulo: 'Soporte',
      descripcion: 'Mantenimiento, asistencia técnica y formación',
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-secondary-50 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-sm text-primary-600 font-semibold uppercase tracking-wider mb-4">
            Cómo Trabajamos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 uppercase mb-4">
            NUESTRO PROCESO
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Un método probado que garantiza resultados excepcionales en cada
            proyecto
          </p>
        </motion.div>

        {/* Timeline Desktop (>= lg) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Línea horizontal principal */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-secondary-200">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                className="h-full bg-primary-600 origin-left"
              />
            </div>

            {/* Grid de pasos */}
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.paso}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: 'easeOut',
                    }}
                    className="flex flex-col items-center"
                  >
                    {/* Icono arriba del círculo */}
                    <motion.div
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + 0.1 * index,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className="mb-3"
                    >
                      <Icon className="w-6 h-6 text-primary-600" />
                    </motion.div>

                    {/* Círculo numerado */}
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * index,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 20px rgba(17, 117, 199, 0.4)',
                      }}
                      className="relative z-10 w-16 h-16 bg-white border-3 border-primary-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                    >
                      <span className="text-2xl font-bold text-primary-600">
                        {step.paso}
                      </span>
                    </motion.div>

                    {/* Card de información */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + 0.1 * index,
                        ease: 'easeOut',
                      }}
                      className="mt-6 max-w-[180px] bg-white border border-secondary-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-sm font-semibold text-secondary-900 mb-2 text-center">
                        {step.titulo}
                      </h3>
                      <p className="text-xs text-secondary-600 leading-relaxed text-center">
                        {step.descripcion}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Mobile/Tablet (< lg) - Vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.paso}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: 'easeOut',
                }}
                className="relative flex gap-6"
              >
                {/* Línea vertical */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-1 bg-secondary-200">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + 0.1 * index,
                        ease: 'easeOut',
                      }}
                      className="w-full bg-primary-600 origin-top"
                      style={{ height: '100%' }}
                    />
                  </div>
                )}

                {/* Círculo e icono */}
                <div className="flex flex-col items-center gap-2 z-10">
                  <motion.div
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * index,
                      type: 'spring',
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary-600" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * index,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="w-16 h-16 bg-white border-3 border-primary-600 rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-primary-600">
                      {step.paso}
                    </span>
                  </motion.div>
                </div>

                {/* Contenido */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + 0.1 * index,
                    ease: 'easeOut',
                  }}
                  className="flex-1 bg-white border border-secondary-200 rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {step.titulo}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {step.descripcion}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
