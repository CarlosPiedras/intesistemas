import AboutHero from '@/components/about/AboutHero';
import WorkProcess from '@/components/about/WorkProcess';
import SectionCTA from '@/components/shared/SectionCTA';
import FAQ from '@/components/about/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos | INTE SISTEMAS - Expertos en Automatización Industrial',
  description:
    'Más de 10 años de experiencia en sistemas eléctricos y automatización industrial. INTE SISTEMAS, tu partner de confianza en Barcelona.',
  keywords:
    'INTE SISTEMAS, quiénes somos, automatización industrial, sistemas eléctricos, Barcelona, empresa, experiencia',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WorkProcess />
      <SectionCTA
        title="¿Listo para impulsar tu proyecto?"
        description="Contáctanos y descubre cómo podemos ayudarte con soluciones personalizadas en sistemas eléctricos y automatización industrial"
        primaryButton={{
          text: 'Contactar ahora',
          href: '/es/contacto',
          icon: 'arrow',
        }}
        secondaryButton={{
          text: 'Ver servicios',
          href: '/es#servicios',
        }}
      />
      <FAQ />
    </>
  );
}
