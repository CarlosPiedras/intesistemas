import ServicesVariant1 from '@/components/showcase/services/ServicesVariant1';
import ServicesVariant2 from '@/components/showcase/services/ServicesVariant2';
import ServicesVariant3 from '@/components/showcase/services/ServicesVariant3';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Showcase - Servicios</h1>
          <p className="text-secondary-300">Comparación de variantes de componentes</p>
        </div>
      </div>

      {/* Variant 1 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 1 - Minimalista</h2>
            <p className="text-secondary-600">Círculos con borde fino, estilo limpio</p>
          </div>
        </div>
        <ServicesVariant1 />
      </div>

      {/* Variant 2 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 2 - Gradiente</h2>
            <p className="text-secondary-600">Círculos con gradiente de relleno y efectos animados</p>
          </div>
        </div>
        <ServicesVariant2 />
      </div>

      {/* Variant 3 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 3 - Borde Grueso</h2>
            <p className="text-secondary-600">Círculos con borde grueso y animaciones sutiles</p>
          </div>
        </div>
        <ServicesVariant3 />
      </div>
    </div>
  );
}
