import { Metadata } from 'next';
import GalleryVariant1 from '@/components/showcase/gallery/GalleryVariant1';

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
      <GalleryVariant1 />
    </div>
  );
}
