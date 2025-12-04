import ProjectManagementVariant4 from '@/components/showcase/services/ProjectManagementVariant4';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gestión de Proyectos</h1>
          <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
            Layout horizontal con números decorativos y borde lateral animado.
          </p>
        </div>
      </div>

      {/* PM Variante 4 - Layout Horizontal con Números */}
      <div>
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">
                  Layout Horizontal con Números
                </h2>
                <p className="text-secondary-600 mt-1">
                  Lista vertical estilo timeline con números grandes decorativos (01-04), borde lateral animado, iconos con rotación 360°, hover slide derecha.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Timeline Style
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Big Numbers
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Side Border
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Icon Rotate
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                SELECTED
              </span>
            </div>
          </div>
        </div>
        <ProjectManagementVariant4 />
      </div>
    </div>
  );
}
