'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Search, Layers, Hammer, CheckCircle, Package, Headphones } from 'lucide-react';
import { useState } from 'react';

const processSteps = [
  {
    paso: 1,
    titulo: 'Análisis de necesidades',
    descripcion: 'Realizamos un estudio exhaustivo de sus requerimientos técnicos y operativos para diseñar la solución más adecuada a su proyecto industrial.',
    icon: Search,
    imagen: '/images/procesosabout/analisisnecesidades.png',
  },
  {
    paso: 2,
    titulo: 'Planificación',
    descripcion: 'Desarrollamos un plan detallado con cronogramas, recursos y estrategias de implementación que garantizan el éxito de su proyecto eléctrico.',
    icon: Layers,
    imagen: '/images/procesosabout/planificacion.png',
  },
  {
    paso: 3,
    titulo: 'Ejecución',
    descripcion: 'Nuestro equipo técnico especializado implementa el proyecto siguiendo los más altos estándares de calidad y las normativas vigentes del sector.',
    icon: Hammer,
    imagen: '/images/procesosabout/ejecucion.png',
  },
  {
    paso: 4,
    titulo: 'Control de calidad',
    descripcion: 'Realizamos verificaciones rigurosas y pruebas exhaustivas del sistema para asegurar su correcto funcionamiento y cumplimiento normativo.',
    icon: CheckCircle,
    imagen: '/images/procesosabout/controlycalidad.png',
  },
  {
    paso: 5,
    titulo: 'Entrega',
    descripcion: 'Coordinamos la puesta en marcha del sistema, entregamos toda la documentación técnica y realizamos la transferencia de conocimiento necesaria.',
    icon: Package,
    imagen: '/images/procesosabout/entrega.png',
  },
  {
    paso: 6,
    titulo: 'Soporte',
    descripcion: 'Ofrecemos mantenimiento preventivo y correctivo continuo, asistencia técnica especializada y programas de formación para su equipo operativo.',
    icon: Headphones,
    imagen: '/images/procesosabout/Gemini_Generated_Image_483nm6483nm6483n.png',
  },
];

function ProcessCard({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const [hoveredStep, setHoveredStep] = useState(false);
  const Icon = step.icon;

  // Motion values para el efecto 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHoveredStep(true)}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full"
      >
        {/* Imagen de fondo con efecto parallax interno */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            animate={{
              scale: hoveredStep ? 1.15 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={step.imagen}
              alt={step.titulo}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay gradiente con brillo */}
          <motion.div
            animate={{
              opacity: hoveredStep ? 0.7 : 0.9,
            }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-900/40 to-secondary-900/90"
          />

          {/* Efecto de luz siguiendo el cursor */}
          <motion.div
            style={{
              background: 'radial-gradient(circle at center, rgba(17, 117, 199, 0.4) 0%, transparent 70%)',
              x: useTransform(x, [-100, 100], [-20, 20]),
              y: useTransform(y, [-100, 100], [-20, 20]),
            }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Líneas decorativas animadas */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 origin-left"
          />
        </div>

        {/* Contenido con efecto de elevación */}
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            translateZ: 20,
          }}
          className="p-6 relative"
        >
          {/* Borde superior brillante */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />

          {/* Número y título */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#65a6d8' }}
            >
              <span className="text-sm font-bold text-white">
                {step.paso}
              </span>
            </div>
            <h3 className="text-lg font-bold text-secondary-900 uppercase tracking-wide flex-1">
              {step.titulo}
            </h3>
          </div>

          <p className="text-sm text-secondary-600 leading-relaxed mb-4">
            {step.descripcion}
          </p>

          {/* Barra de progreso con efecto neón */}
          <div className="relative h-1.5 bg-secondary-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 origin-left shadow-[0_0_10px_rgba(17,117,199,0.5)]"
            />
          </div>

          {/* Partículas flotantes */}
          {hoveredStep && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: -60,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeOut',
                  }}
                  className="absolute w-1 h-1 bg-primary-400 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    bottom: 0,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default function WorkProcessVariant1() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-secondary-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest text-denim uppercase mb-4 font-bold"
          >
            Cómo Trabajamos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            NUESTRO PROCESO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Un método probado que garantiza resultados excepcionales en cada proyecto
          </motion.p>
        </div>

        {/* Grid de Cards - 3 columnas con efecto 3D Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.paso} step={step} index={index} />
          ))}
        </div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-secondary-500 tracking-wide">
            Mueva el cursor sobre cada tarjeta para ver el efecto 3D parallax
          </p>
        </motion.div>
      </div>
    </section>
  );
}
