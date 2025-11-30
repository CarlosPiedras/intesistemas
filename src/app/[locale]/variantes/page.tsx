'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroVariant1 from '@/components/heroes/HeroVariant1';
import HeroVariant2 from '@/components/heroes/HeroVariant2';
import HeroVariant3 from '@/components/heroes/HeroVariant3';

export default function VariantesPage() {
  const [selectedVariant, setSelectedVariant] = useState<1 | 2 | 3>(1);

  const variants = [
    {
      id: 1,
      name: 'Fullscreen Dramático',
      description: 'Imagen de fondo a pantalla completa con overlay gradiente',
      style: 'Moderno e impactante',
    },
    {
      id: 2,
      name: 'Split Layout Corporativo',
      description: 'Layout dividido 60/40 con lista de beneficios',
      style: 'Profesional y estructurado',
    },
    {
      id: 3,
      name: 'Minimalista con Cards',
      description: 'Diseño limpio con cards de servicios integrados',
      style: 'Limpio y espacioso',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header de navegación */}
      <header className="bg-white border-b border-secondary-200 sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-denim">
                Comparador de Variantes Hero
              </h1>
              <p className="text-sm text-secondary-600 mt-1">
                Selecciona y compara las diferentes opciones de diseño
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-lg transition-colors text-sm font-medium"
            >
              ← Volver
            </Link>
          </div>
        </div>
      </header>

      {/* Selector de variantes */}
      <div className="bg-white border-b border-secondary-200 py-6">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id as 1 | 2 | 3)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedVariant === variant.id
                    ? 'border-denim bg-primary-50 shadow-md'
                    : 'border-secondary-200 bg-white hover:border-primary-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-bold ${
                    selectedVariant === variant.id ? 'text-denim' : 'text-secondary-900'
                  }`}>
                    Variante {variant.id}
                  </h3>
                  {selectedVariant === variant.id && (
                    <span className="px-3 py-1 bg-denim text-white text-xs font-bold rounded-full">
                      ACTIVA
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-secondary-900 mb-2">
                  {variant.name}
                </p>
                <p className="text-xs text-secondary-600 mb-2">
                  {variant.description}
                </p>
                <p className="text-xs text-denim font-medium">
                  Estilo: {variant.style}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor de la variante seleccionada */}
      <div className="bg-white">
        {selectedVariant === 1 && <HeroVariant1 />}
        {selectedVariant === 2 && <HeroVariant2 />}
        {selectedVariant === 3 && <HeroVariant3 />}
      </div>

      {/* Footer informativo */}
      <div className="bg-secondary-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="text-sm text-secondary-400">
            Vista de comparación de variantes Hero + sección siguiente
          </p>
          <p className="text-xs text-secondary-500 mt-2">
            Cada variante incluye animaciones con Framer Motion y es totalmente responsive
          </p>
        </div>
      </div>
    </div>
  );
}
