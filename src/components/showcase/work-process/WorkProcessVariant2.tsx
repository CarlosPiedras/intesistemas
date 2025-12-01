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

export default function WorkProcessVariant2() {
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
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="text-xs font-medium text-secondary-600 mb-4 tracking-wide">
            /Cómo Trabajamos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto">
            Seguimos un método estructurado para garantizar el éxito en cada proyecto
          </p>
        </motion.div>

        {/* Grid de 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.paso}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: 'easeOut',
                }}
                className="group relative bg-secondary-50 hover:bg-white border border-secondary-200 hover:border-primary-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                {/* Número de paso en grande al fondo */}
                <div className="absolute top-4 right-4 text-7xl font-black text-secondary-200 group-hover:text-primary-100 transition-colors duration-300">
                  {step.paso}
                </div>

                {/* Icono */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-white group-hover:bg-primary-600 border-2 border-secondary-300 group-hover:border-primary-600 rounded-xl flex items-center justify-center transition-all duration-300">
                    <Icon className="w-8 h-8 text-secondary-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {step.titulo}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {step.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
