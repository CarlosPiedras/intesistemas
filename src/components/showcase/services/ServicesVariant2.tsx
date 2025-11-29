'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ServicesVariant2() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      id: 'distribucion',
      side: 'left' as const,
      title: 'Distribución de Energía',
      shortDescription: 'Diseño e implementación de sistemas de distribución eléctrica',
      longDescription: 'Soluciones completas en cuadros de distribución eléctrica, desde diseño hasta instalación y mantenimiento.',
      icon: Zap,
      color: '#1175c7', // denim
      bgImage: '/images/sectores/cuadro_1.jpg',
      stats: [
        { label: 'Proyectos', value: '500+' },
        { label: 'Experiencia', value: '10 años' },
      ],
      features: ['Cuadros BT/MT', 'Ingeniería', 'Certificación']
    },
    {
      id: 'automatizacion',
      side: 'right' as const,
      title: 'Automatización',
      shortDescription: 'Control inteligente de procesos industriales',
      longDescription: 'Programación de PLCs, sistemas SCADA y automatización integral de procesos productivos.',
      icon: Cpu,
      color: '#3a89c5', // boston-blue
      bgImage: '/images/sectores/plc.bmp',
      stats: [
        { label: 'Sistemas', value: '300+' },
        { label: 'Sectores', value: '7+' },
      ],
      features: ['PLCs', 'SCADA', 'Optimización']
    }
  ];

  // Parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[700px] overflow-hidden bg-secondary-900">
      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hoveredSide === 'left'
            ? 'radial-gradient(circle at 25% 50%, rgba(17, 117, 199, 0.15) 0%, transparent 50%)'
            : hoveredSide === 'right'
            ? 'radial-gradient(circle at 75% 50%, rgba(58, 137, 197, 0.15) 0%, transparent 50%)'
            : 'transparent'
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="flex h-full">
        {services.map((service) => {
          const Icon = service.icon;
          const isHovered = hoveredSide === service.side;
          const isOtherHovered = hoveredSide !== null && hoveredSide !== service.side;

          // Parallax transforms
          const offsetX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]);
          const offsetY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]);

          return (
            <motion.div
              key={service.id}
              initial={{ width: '50%' }}
              animate={{
                width: isHovered ? '65%' : isOtherHovered ? '35%' : '50%'
              }}
              transition={{
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing
              }}
              onMouseEnter={() => setHoveredSide(service.side)}
              onMouseLeave={() => setHoveredSide(null)}
              className="relative cursor-pointer group overflow-hidden"
            >
              {/* Parallax Background Image */}
              <motion.div
                className="absolute inset-0"
                style={{
                  x: isHovered ? offsetX : 0,
                  y: isHovered ? offsetY : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    filter: isOtherHovered ? 'grayscale(50%) blur(2px)' : 'grayscale(0%) blur(0px)',
                  }}
                />
              </motion.div>

              {/* Gradient Overlay with animated opacity */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundColor: service.color,
                }}
                animate={{
                  opacity: isHovered ? 0.90 : isOtherHovered ? 0.60 : 0.75
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Animated Grid Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  opacity: isHovered ? 0.15 : 0.05
                }}
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center p-12 lg:p-16">
                <motion.div
                  animate={{
                    scale: isOtherHovered ? 0.95 : 1,
                    opacity: isOtherHovered ? 0.7 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with glow effect */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      rotate: isHovered ? 360 : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      rotate: { duration: 1 }
                    }}
                    className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 relative"
                  >
                    <Icon className="w-12 h-12 text-white relative z-10" />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white rounded-2xl blur-xl"
                      animate={{
                        opacity: isHovered ? 0.3 : 0
                      }}
                    />
                  </motion.div>

                  {/* Badge with category */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : -10
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  >
                    <Sparkles className="w-4 h-4 text-anakiwa" />
                    <span className="text-white text-sm font-semibold">Especialidad</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    animate={{
                      fontSize: isHovered ? '3.5rem' : isOtherHovered ? '2rem' : '2.75rem',
                      lineHeight: isHovered ? '1.1' : '1.2'
                    }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-bold text-white mb-6 leading-tight"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description Toggle */}
                  <div className="mb-8 min-h-[60px]">
                    <AnimatePresence mode="wait">
                      {!isHovered ? (
                        <motion.p
                          key="short"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/95 text-lg leading-relaxed"
                        >
                          {service.shortDescription}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="long"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-xl leading-relaxed font-light"
                        >
                          {service.longDescription}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Features Pills - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : 0
                    }}
                    className="flex flex-wrap gap-2 mb-6 overflow-hidden"
                  >
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Stats - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : 0
                    }}
                    className="flex gap-8 mb-8 overflow-hidden"
                  >
                    {service.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <div className="text-3xl font-bold text-anakiwa">{stat.value}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    animate={{
                      opacity: isHovered ? 1 : 0.85,
                      scale: isHovered ? 1.05 : 1,
                      width: isHovered ? '100%' : 'auto'
                    }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: '#ffffff',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/90 text-secondary-900 rounded-xl font-bold shadow-2xl hover:shadow-white/20 relative overflow-hidden"
                  >
                    {/* Button shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: isHovered ? ['-100%', '100%'] : '-100%'
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isHovered ? Infinity : 0,
                        ease: 'linear'
                      }}
                    />
                    <span className="relative z-10">Descubrir más</span>
                    <motion.div
                      animate={{
                        x: isHovered ? 5 : 0
                      }}
                      className="relative z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Side indicator line */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scaleY: isHovered ? 1 : 0.5
                }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 ${service.side === 'left' ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-anakiwa via-white to-anakiwa`}
              />

              {/* Corner decorations */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.5
                }}
                className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-2xl"
              />
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.5
                }}
                className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-2xl"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom hint with animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hoveredSide ? 0 : 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/60 text-sm pointer-events-none"
      >
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
        <span>Pasa el cursor para explorar cada servicio</span>
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </motion.div>
      </motion.div>
    </section>
  );
}
