import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Servicios | INTE SISTEMAS - Soluciones Eléctricas y Automatización',
  description:
    'Descubre nuestros servicios especializados: Distribución de Energía, Automatización Industrial, Gestión de Proyectos y Soporte Técnico. Soluciones completas para tu empresa.',
  keywords:
    'servicios eléctricos, distribución energía, automatización industrial, gestión proyectos, soporte técnico, Barcelona, INTE SISTEMAS',
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />

      {/* Intro Section */}
      <ServicesIntro />

      {/* Services Grid */}
      <ServicesGrid />

      {/* CTA Section */}
      <ServicesCTA />
    </div>
  );
}
