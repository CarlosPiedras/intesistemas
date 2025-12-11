'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed, Beaker, Factory, Newspaper, Droplet, Zap, Settings } from 'lucide-react';

const sectors = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: 'Industria Alimentaria',
    items: ['Líneas de envasado', 'Sistemas de pasteurización', 'Cámaras frigoríficas', 'Trazabilidad alimentaria'],
  },
  {
    id: 2,
    icon: Beaker,
    title: 'Química y Farmacéutica',
    items: ['Procesos batch', 'Dosificación de precisión', 'Control de reactores', 'Cumplimiento GMP'],
  },
  {
    id: 3,
    icon: Factory,
    title: 'Manufactura y Metalurgia',
    items: ['Control de hornos', 'Automatización de prensas', 'Sistemas CNC', 'Líneas de galvanizado'],
  },
  {
    id: 4,
    icon: Newspaper,
    title: 'Industria Gráfica',
    items: ['Máquinas de impresión', 'Sistemas de bobinado', 'Control de tensión', 'Guillotinas automáticas'],
  },
  {
    id: 5,
    icon: Droplet,
    title: 'Tratamiento de Aguas',
    items: ['Plantas depuradoras', 'Bombeo inteligente', 'Monitorización de parámetros', 'Dosificación química'],
  },
  {
    id: 6,
    icon: Zap,
    title: 'Energías Renovables',
    items: ['Plantas solares', 'Aerogeneradores', 'Sistemas de almacenamiento', 'Monitorización de rendimiento'],
  },
];

export default function SectorsSection() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            APLICACIONES INDUSTRIALES
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            Experiencia contrastada en múltiples sectores industriales
          </motion.p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-secondary-200"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1175c7' }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 uppercase tracking-wide">
                    {sector.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2">
                  {sector.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-secondary-600">
                      <span className="text-xs mt-1" style={{ color: '#1175c7' }}>
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
