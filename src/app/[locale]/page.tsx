import Hero from '@/components/heroes/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Services from '@/components/home/Services';
import WhyChooseUsVariant7 from '@/components/showcase/why-choose-us/WhyChooseUsVariant7';
import OurSectors from '@/components/home/OurSectors';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logos Section */}
      <ClientLogos />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Why Choose Us Section - Variante 7 */}
      <WhyChooseUsVariant7 />

      {/* 5. Our Sectors Section */}
      <OurSectors />
    </main>
  );
}
