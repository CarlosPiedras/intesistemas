import WorkProcessVariant1 from '@/components/showcase/work-process/WorkProcessVariant1';
import FAQ from '@/components/showcase/FAQ';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Showcase - Componentes</h1>
          <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
            Visualización de componentes Work Process y FAQ con sus respectivos diseños y funcionalidades.
          </p>
        </div>
      </div>

      {/* Variante 1 - Grid con Parallax 3D */}
      <div className="border-b-8 border-secondary-200">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">Grid con Parallax 3D</h2>
                <p className="text-secondary-600 mt-1">
                  Efecto 3D que sigue el movimiento del cursor con rotación dinámica, luz siguiendo el mouse y partículas flotantes.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    3D Parallax
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Mouse Tracking
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Particles
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Depth Layers
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Neon Effects
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                WORK PROCESS
              </span>
            </div>
          </div>
        </div>
        <WorkProcessVariant1 />
      </div>

      {/* FAQ Component */}
      <div className="border-b-8 border-secondary-200">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">FAQ - Preguntas Frecuentes</h2>
                <p className="text-secondary-600 mt-1">
                  Sección de preguntas frecuentes con diseño accordion limpio y simple.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Accordion
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Animaciones
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Simple & Clean
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                FAQ
              </span>
            </div>
          </div>
        </div>
        <FAQ />
      </div>

      {/* Footer informativo */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Características del Componente</h3>

            {/* Características principales */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                    <span className="text-lg">🎮</span>
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-400">Interactividad Avanzada</h4>
                </div>
                <ul className="space-y-2 text-sm text-secondary-300">
                  <li>✓ Tracking del movimiento del cursor en tiempo real</li>
                  <li>✓ Rotación 3D dinámica (rotateX y rotateY)</li>
                  <li>✓ Luz radial que sigue el mouse</li>
                  <li>✓ Partículas flotantes animadas</li>
                </ul>
              </div>

              <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-400">Efectos Visuales</h4>
                </div>
                <ul className="space-y-2 text-sm text-secondary-300">
                  <li>✓ Capas con profundidad 3D (translateZ)</li>
                  <li>✓ Escala de imagen en hover</li>
                  <li>✓ Efecto neón en barra de progreso</li>
                  <li>✓ Gradientes animados y overlays</li>
                </ul>
              </div>

              <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-purple-400">Performance</h4>
                </div>
                <ul className="space-y-2 text-sm text-secondary-300">
                  <li>✓ Animaciones optimizadas con GPU</li>
                  <li>✓ Framer Motion con spring physics</li>
                  <li>✓ useMotionValue para tracking eficiente</li>
                  <li>✓ Transformaciones hardware-accelerated</li>
                </ul>
              </div>

              <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                  <h4 className="text-lg font-semibold text-amber-400">Diseño Responsive</h4>
                </div>
                <ul className="space-y-2 text-sm text-secondary-300">
                  <li>✓ Grid adaptativo: 1/2/3 columnas</li>
                  <li>✓ Breakpoints: móvil, tablet, desktop</li>
                  <li>✓ Imágenes optimizadas con Next/Image</li>
                  <li>✓ Touch-friendly en dispositivos móviles</li>
                </ul>
              </div>
            </div>

            {/* Detalles técnicos */}
            <div className="bg-secondary-800 rounded-xl p-8 border border-secondary-700">
              <h4 className="text-xl font-semibold mb-6 text-center">Detalles Técnicos</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-primary-400 text-3xl mb-2">🎨</div>
                  <h5 className="font-semibold mb-2">6 Pasos</h5>
                  <p className="text-sm text-secondary-400">
                    Análisis, Planificación, Ejecución, Control, Entrega y Soporte
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary-400 text-3xl mb-2">🖼️</div>
                  <h5 className="font-semibold mb-2">Imágenes</h5>
                  <p className="text-sm text-secondary-400">
                    Desde /images/procesosabout/ con lazy loading
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary-400 text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold mb-2">Iconos</h5>
                  <p className="text-sm text-secondary-400">
                    Lucide React con animaciones personalizadas
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-secondary-400 text-sm mb-4">
                Mueva el cursor sobre las tarjetas para experimentar el efecto 3D parallax completo
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-800 rounded-full border border-secondary-700">
                <span className="text-xs text-secondary-500">Stack:</span>
                <span className="text-xs font-semibold text-primary-400">Next.js</span>
                <span className="text-secondary-600">•</span>
                <span className="text-xs font-semibold text-primary-400">Framer Motion</span>
                <span className="text-secondary-600">•</span>
                <span className="text-xs font-semibold text-primary-400">Tailwind CSS</span>
                <span className="text-secondary-600">•</span>
                <span className="text-xs font-semibold text-primary-400">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
