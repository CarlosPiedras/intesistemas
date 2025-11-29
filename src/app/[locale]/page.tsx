import Hero from '@/components/heroes/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Services from '@/components/home/Services';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import OurSectors from '@/components/home/OurSectors';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logos Section */}
      <ClientLogos />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Why Choose Us Section (con CTA) */}
      {/* <WhyChooseUs /> */}

      {/* 5. Our Sectors Section */}
      {/* <OurSectors /> */}
    </main>
  );
}
