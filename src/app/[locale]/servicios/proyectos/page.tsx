import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestión de Proyectos | INTE SISTEMAS',
  description:
    'Gestión integral de proyectos de automatización industrial y distribución de energía. Planificación, coordinación y ejecución de proyectos complejos.',
  keywords:
    'gestión proyectos, project management, proyectos industriales, automatización, distribución energía, Barcelona',
};

export default function GestionProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8] text-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestión de Proyectos
            </h1>
            <p className="text-xl text-white/90">
              Contenido próximamente
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-gray-600">
            <p>Esta página está en construcción</p>
          </div>
        </div>
      </section>
    </div>
  );
}
