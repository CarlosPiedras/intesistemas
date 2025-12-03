import { Metadata } from 'next';
import AutomatizacionIntro from '@/components/services/automatizacion/AutomatizacionIntro';
import ServicesSection from '@/components/services/automatizacion/ServicesSection';
import SectorsSection from '@/components/services/automatizacion/SectorsSection';

export const metadata: Metadata = {
  title: 'Automatización Industrial | INTE SISTEMAS',
  description:
    'Soluciones profesionales en automatización industrial. Programación de PLCs, sistemas SCADA, control de procesos y robótica industrial. Más de 10 años de experiencia en Barcelona.',
  keywords:
    'automatización industrial, PLCs, SCADA, control industrial, sistemas automatizados, programación PLCs, Siemens, Allen-Bradley, Schneider Electric, EATON, Barcelona, robótica industrial, control de procesos',
};

export default function AutomatizacionIndustrialPage() {
  return (
    <div className="min-h-screen">
      {/* Intro Section */}
      <AutomatizacionIntro />

      {/* Services Section */}
      <ServicesSection />

      {/* Sectors Section */}
      <SectorsSection />
    </div>
  );
}
