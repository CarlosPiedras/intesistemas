import { Metadata } from 'next';
import AutomationHero from '@/components/services/AutomationHero';
import ServicesSection from '@/components/services/automatizacion/ServicesSection';
import SectorsSection from '@/components/services/automatizacion/SectorsSection';

export const metadata: Metadata = {
  title: 'Automatización Industrial | INTE SISTEMAS',
  description:
    'Soluciones profesionales en automatización industrial. Programación de PLCs, sistemas SCADA, control de procesos y robótica industrial. Más de 30 años de experiencia en Barcelona.',
  keywords:
    'automatización industrial, PLCs, SCADA, control industrial, sistemas automatizados, programación PLCs, Siemens, Allen-Bradley, Schneider Electric, EATON, Barcelona, robótica industrial, control de procesos',
};

export default function AutomatizacionIndustrialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AutomationHero />

      {/* Services Section */}
      <ServicesSection />

      {/* Sectors Section */}
      <SectorsSection />
    </div>
  );
}
