import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Distribución de Energía | INTE SISTEMAS',
  description:
    'Soluciones profesionales en distribución de energía eléctrica. Diseño, instalación y mantenimiento de sistemas de distribución eléctrica industrial.',
  keywords:
    'distribución energía, distribución eléctrica, cuadros eléctricos, sistemas eléctricos, automatización industrial, Barcelona',
};

export default function DistribucionEnergiaPage() {
  return (
    <div className="min-h-screen">
      {/* Página de Distribución de Energía - Sin contenido */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Distribución de Energía
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Contenido próximamente
        </p>
      </div>
    </div>
  );
}
