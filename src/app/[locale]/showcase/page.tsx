import ShowcaseIntro from '@/components/showcase/ShowcaseIntro';
import SoporteVariant3 from '@/components/showcase/services/SoporteVariant3';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Intro Section */}
      <ShowcaseIntro />

      {/* Variante 3 - Grid con Números Grandes */}
      <SoporteVariant3 />
    </div>
  );
}
