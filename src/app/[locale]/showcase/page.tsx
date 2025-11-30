import OurSectorsVariant1 from '@/components/showcase/sectors/OurSectorsVariant1';
import OurSectorsVariant2 from '@/components/showcase/sectors/OurSectorsVariant2';
import OurSectorsVariant3 from '@/components/showcase/sectors/OurSectorsVariant3';
import OurSectorsVariant4 from '@/components/showcase/sectors/OurSectorsVariant4';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Galería de Trabajos</h1>
          <p className="text-secondary-300">4 estilos diferentes de galería de imágenes</p>
        </div>
      </div>

      {/* Variante 1 - Simple Grid */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 1 - Grid Simple Uniforme</h2>
            <p className="text-secondary-600">Galería en cuadrícula con todas las imágenes del mismo tamaño, hover zoom sutil</p>
          </div>
        </div>
        <OurSectorsVariant1 />
      </div>

      {/* Variante 2 - Masonry */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 2 - Masonry Columnas</h2>
            <p className="text-secondary-600">Estilo Pinterest con columnas y alturas variables, captions en hover</p>
          </div>
        </div>
        <OurSectorsVariant2 />
      </div>

      {/* Variante 3 - Featured + Grid */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 3 - Imagen Destacada + Grid</h2>
            <p className="text-secondary-600">Imagen principal grande con grid de imágenes secundarias en diferentes tamaños</p>
          </div>
        </div>
        <OurSectorsVariant3 />
      </div>

      {/* Variante 4 - Interactive Gallery */}
      <div className="border-b-8 border-primary-600">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary-900">Variante 4 - Galería Interactiva con Thumbnails</h2>
            <p className="text-secondary-600">Imagen principal grande con miniaturas clickeables abajo que cambian la vista principal</p>
          </div>
        </div>
        <OurSectorsVariant4 />
      </div>
    </div>
  );
}
