import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import GalleryVariant1 from '@/components/showcase/gallery/GalleryVariant1';

export const metadata: Metadata = {
  title: 'Showcase - Distribución de Energía | INTE SISTEMAS',
  description:
    'Visualización de la página de distribución de energía de INTE SISTEMAS.',
  keywords:
    'showcase, servicios, distribución energía, distribución eléctrica, cuadros eléctricos',
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />

      {/* Gallery Section */}
      <GalleryVariant1 />
    </div>
  );
}
