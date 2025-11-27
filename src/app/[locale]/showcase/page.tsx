'use client';

import Link from 'next/link';
import HeroVariant7 from '@/components/showcase/heroes/HeroVariant7';

export default function ShowcasePage() {
  const variant = {
    name: 'Minimalista Premium V2',
    description: 'Diseño limpio con overlay opaco para mejor legibilidad',
    style: 'Elegante y legible',
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header de navegación */}
      <header className="bg-white border-b border-secondary-200 sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-denim">
                Showcase - Hero
              </h1>
              <p className="text-sm text-secondary-600 mt-1">
                {variant.name} - {variant.description}
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-lg transition-colors text-sm font-medium"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Contenedor de la variante */}
      <div className="bg-white">
        <HeroVariant7 />
      </div>

      {/* Footer informativo */}
      <div className="bg-secondary-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="text-sm text-secondary-400">
            Showcase - Laboratorio de Componentes UI
          </p>
          <p className="text-xs text-secondary-500 mt-2">
            Componente con animaciones Framer Motion, estados interactivos y diseño responsive
          </p>
        </div>
      </div>
    </div>
  );
}
