import GalleryVariant1 from '@/components/showcase/gallery/GalleryVariant1';
import GalleryVariant2 from '@/components/showcase/gallery/GalleryVariant2';
import GalleryVariant3 from '@/components/showcase/gallery/GalleryVariant3';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Galería Minimalista - Cuadros Eléctricos</h1>
          <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
            3 variantes estilo arquitectónico minimalista con títulos cuidados y grid tipo bento box.
          </p>
        </div>
      </div>

      {/* Variante 1 - Minimal Architecture */}
      <div className="border-b-8 border-secondary-200">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">Variante 1 - Minimal Architecture</h2>
                <p className="text-secondary-600 mt-1">
                  Tipografía ultra light, título gigante minúsculas, textos cuidados. Grid asimétrico: 1 grande + 4 variadas. Sin overlays, solo hover scale suave.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Ultra Light Type
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Asymmetric Grid
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Clean Minimal
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-secondary-700 text-white text-sm font-semibold rounded-full">
                MINIMAL
              </span>
            </div>
          </div>
        </div>
        <GalleryVariant1 />
      </div>

      {/* Variante 2 - Editorial Style */}
      <div className="border-b-8 border-secondary-200">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">Variante 2 - Editorial Style</h2>
                <p className="text-secondary-600 mt-1">
                  Eyebrow con línea decorativa, título editorial multi-línea, features con bullets. Bento grid gaps pequeños, fondo gris suave.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Editorial
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Bento Grid
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Feature List
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Tight Gaps
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
                EDITORIAL
              </span>
            </div>
          </div>
        </div>
        <GalleryVariant2 />
      </div>

      {/* Variante 3 - Ultra Minimal */}
      <div className="border-b-8 border-secondary-200">
        <div className="bg-secondary-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-2xl font-bold text-secondary-900">Variante 3 - Ultra Minimal</h2>
                <p className="text-secondary-600 mt-1">
                  Título extralight gigante (text-9xl), subtítulo grande, descripción extensa. Grid gaps mínimos (2px), 1 hero + 4 imágenes. Hover lento y sutil.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Extralight
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Giant Type
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Minimal Gaps
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    Slow Hover
                  </span>
                </div>
              </div>
              <span className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                ULTRA MINIMAL
              </span>
            </div>
          </div>
        </div>
        <GalleryVariant3 />
      </div>
    </div>
  );
}
