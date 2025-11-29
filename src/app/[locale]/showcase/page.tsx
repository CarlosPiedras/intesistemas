import ServicesVariant1 from '@/components/showcase/services/ServicesVariant1';
import ServicesVariant2 from '@/components/showcase/services/ServicesVariant2';
import ServicesVariant3 from '@/components/showcase/services/ServicesVariant3';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-denim text-white py-12">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Showcase - Servicios
          </h1>
          <p className="text-lg text-white/90">
            Explora diferentes variantes del componente de Servicios
          </p>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-20 py-12">
        {/* Variant 1 */}
        <div>
          <div className="container-custom mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-denim text-white font-bold">
                1
              </span>
              <h2 className="font-heading text-2xl font-bold text-secondary-900">
                Cards Modernas con Hover
              </h2>
            </div>
            <p className="text-secondary-600 ml-14">
              Diseño de cards elevadas con efectos de hover suaves, iconos animados y gradientes de color.
              Ideal para destacar servicios con características detalladas.
            </p>
          </div>
          <ServicesVariant1 />
        </div>

        {/* Divider */}
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent" />
        </div>

        {/* Variant 2 */}
        <div>
          <div className="container-custom mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-boston-blue text-white font-bold">
                2
              </span>
              <h2 className="font-heading text-2xl font-bold text-secondary-900">
                Split Screen Interactivo Premium ✨
              </h2>
            </div>
            <p className="text-secondary-600 ml-14 mb-3">
              Diseño dividido con imágenes de fondo y múltiples efectos premium. Cada servicio ocupa un lado de la pantalla
              y se expande al hacer hover para revelar más información.
            </p>
            <ul className="text-sm text-secondary-500 ml-14 space-y-1">
              <li>• Efecto parallax en imágenes de fondo siguiendo el cursor</li>
              <li>• Luz ambiental que cambia según el servicio activo</li>
              <li>• Grid pattern animado de fondo</li>
              <li>• Badges y pills con información de características</li>
              <li>• Stats/métricas que aparecen al hacer hover</li>
              <li>• Efecto shimmer en el botón CTA</li>
              <li>• Decoraciones en las esquinas con animación</li>
              <li>• Transiciones suaves y custom easing</li>
            </ul>
          </div>
          <ServicesVariant2 />
        </div>

        {/* Divider */}
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent" />
        </div>

        {/* Variant 3 */}
        <div>
          <div className="container-custom mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-danube text-white font-bold">
                3
              </span>
              <h2 className="font-heading text-2xl font-bold text-secondary-900">
                Cards con Overlay de Imagen
              </h2>
            </div>
            <p className="text-secondary-600 ml-14">
              Cards verticales con imágenes de fondo y overlay oscuro. Efecto de elevación
              al hover con lista de beneficios y CTA prominente.
            </p>
          </div>
          <ServicesVariant3 />
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-secondary-50 py-12 mt-20">
        <div className="container-custom text-center">
          <p className="text-secondary-600">
            Estas son variantes de prueba. Selecciona la que mejor se adapte al diseño final.
          </p>
        </div>
      </div>
    </div>
  );
}
