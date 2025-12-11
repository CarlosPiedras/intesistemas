import ContactVariant1 from '@/components/showcase/contact/ContactVariant1';
import ContactVariant2 from '@/components/showcase/contact/ContactVariant2';
import ContactVariant3 from '@/components/showcase/contact/ContactVariant3';
import ContactVariant4 from '@/components/showcase/contact/ContactVariant4';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Variante 1 - Dos columnas clásico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Contacto Variante 1</h2>
          <p className="text-center text-secondary-600">Diseño de dos columnas clásico</p>
        </div>
        <ContactVariant1 />
      </section>

      {/* Separador */}
      <div className="h-20 bg-secondary-100"></div>

      {/* Variante 2 - Tarjetas apiladas */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Contacto Variante 2</h2>
          <p className="text-center text-secondary-600">Diseño con tarjetas apiladas y sidebar compacto</p>
        </div>
        <ContactVariant2 />
      </section>

      {/* Separador */}
      <div className="h-20 bg-secondary-100"></div>

      {/* Variante 3 - Full Width con Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Contacto Variante 3</h2>
          <p className="text-center text-secondary-600">Diseño moderno con grid de información destacada</p>
        </div>
        <ContactVariant3 />
      </section>

      {/* Separador */}
      <div className="h-20 bg-secondary-100"></div>

      {/* Variante 4 - Sidebar + Formulario moderno */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Contacto Variante 4</h2>
          <p className="text-center text-secondary-600">Combinación: Sidebar de Variante 2 + Formulario de Variante 3</p>
        </div>
        <ContactVariant4 />
      </section>
    </div>
  );
}
