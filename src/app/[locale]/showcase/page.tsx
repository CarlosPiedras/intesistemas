import WhyChooseUsVariant2 from '@/components/showcase/why-choose-us/WhyChooseUsVariant2';
import WhyChooseUsVariant3 from '@/components/showcase/why-choose-us/WhyChooseUsVariant3';
import WhyChooseUsVariant4 from '@/components/showcase/why-choose-us/WhyChooseUsVariant4';
import WhyChooseUsVariant5 from '@/components/showcase/why-choose-us/WhyChooseUsVariant5';
import WhyChooseUsVariant6 from '@/components/showcase/why-choose-us/WhyChooseUsVariant6';
import WhyChooseUsVariant7 from '@/components/showcase/why-choose-us/WhyChooseUsVariant7';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Showcase - Why Choose Us</h1>
          <p className="text-secondary-300">6 variantes de diseño para elegir</p>
        </div>
      </div>

      {/* Variante 2 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 2 - Minimalista con Números</h2>
            <p className="text-secondary-600">Layout horizontal con números destacados y divisores verticales</p>
          </div>
        </div>
        <WhyChooseUsVariant2 />
      </div>

      {/* Variante 3 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 3 - Split Screen Visual</h2>
            <p className="text-secondary-600">Diseño alternado con imágenes grandes y contenido detallado</p>
          </div>
        </div>
        <WhyChooseUsVariant3 />
      </div>

      {/* Variante 4 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 4 - Grid de Tarjetas Visuales</h2>
            <p className="text-secondary-600">Grid 2x2 con imágenes de fondo y overlay de contenido</p>
          </div>
        </div>
        <WhyChooseUsVariant4 />
      </div>

      {/* Variante 5 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 5 - Mini Heroes con Stats</h2>
            <p className="text-secondary-600">Grid 2x2 estilo hero compacto con estadísticas integradas</p>
          </div>
        </div>
        <WhyChooseUsVariant5 />
      </div>

      {/* Variante 6 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 6 - Timeline con Imágenes Circulares</h2>
            <p className="text-secondary-600">Diseño tipo timeline horizontal con imágenes circulares numeradas</p>
          </div>
        </div>
        <WhyChooseUsVariant6 />
      </div>

      {/* Variante 7 */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 7 - Imagen Grande + Lista (Estilo &quot;Our Values&quot;)</h2>
            <p className="text-secondary-600">Imagen grande a la izquierda con lista vertical de valores a la derecha</p>
          </div>
        </div>
        <WhyChooseUsVariant7 />
      </div>
    </div>
  );
}
