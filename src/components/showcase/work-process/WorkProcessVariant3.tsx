'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Layers,
  Hammer,
  CheckCircle,
  Package,
  Headphones,
  ArrowRight,
} from 'lucide-react';

export default function WorkProcessVariant3() {
  const processSteps = [
    {
      paso: 1,
      titulo: 'Análisis',
      descripcion: 'Estudio detallado del proyecto',
      icon: Search,
    },
    {
      paso: 2,
      titulo: 'Planificación',
      descripcion: 'Diseño y estrategia',
      icon: Layers,
    },
    {
      paso: 3,
      titulo: 'Ejecución',
      descripcion: 'Implementación con calidad',
      icon: Hammer,
    },
    {
      paso: 4,
      titulo: 'Control',
      descripcion: 'Verificación y pruebas',
      icon: CheckCircle,
    },
    {
      paso: 5,
      titulo: 'Entrega',
      descripcion: 'Puesta en marcha',
      icon: Package,
    },
    {
      paso: 6,
      titulo: 'Soporte',
      descripcion: 'Asistencia continua',
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-secondary-50 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-primary-600 rounded-full"></div>
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              Metodología
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Proceso de <span className="text-primary-600">6 pasos</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl">
            De la idea a la realidad: nuestro enfoque garantiza resultados
            excepcionales
          </p>
        </motion.div>

        {/* Timeline horizontal con flechas */}
        <div className="relative">
          {/* Contenedor de pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <div key={step.paso} className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: 'easeOut',
                    }}
                    className="relative"
                  >
                    {/* Card */}
                    <div className="bg-white border-2 border-secondary-200 hover:border-primary-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group">
                      {/* Badge número */}
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary-600 text-white font-bold text-sm rounded-full mb-4">
                        {step.paso}
                      </div>

                      {/* Icono */}
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-primary-600" strokeWidth={1.5} />
                      </div>

                      {/* Título */}
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">
                        {step.titulo}
                      </h3>

                      {/* Descripción */}
                      <p className="text-sm text-secondary-600">
                        {step.descripcion}
                      </p>
                    </div>

                    {/* Flecha conectora (solo desktop y no en el último) */}
                    {!isLast && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + 0.1 * index,
                        }}
                        className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                      >
                        <ArrowRight className="w-6 h-6 text-primary-600" strokeWidth={3} />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Flecha vertical en mobile/tablet */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-primary-600 rotate-90" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA inferior opcional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-600 mb-4">
            ¿Listo para comenzar tu proyecto?
          </p>
          <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Iniciar proyecto
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
