import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | INTE SISTEMAS',
  description:
    'Aviso legal de INTE SISTEMAS. Información sobre datos identificativos, condiciones de uso y propiedad intelectual.',
  keywords: 'aviso legal, INTE SISTEMAS, condiciones uso, propiedad intelectual',
  robots: 'index, follow',
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Aviso Legal
          </h1>
          <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto">
            Información legal sobre el uso del sitio web
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="prose prose-lg max-w-none text-secondary-700">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 mb-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-primary-800 mt-0 mb-3">
                  1. Datos Identificativos
                </h3>
                <p className="mb-4 text-secondary-700">
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley
                  34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del
                  Comercio Electrónico, a continuación se reflejan los siguientes datos:
                </p>
                <ul className="list-none pl-0 mb-0 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Denominación social:</strong> INTE SISTEMAS ELÉCTRICOS / INTE AUTOMATIZACIÓN
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Domicilio social:</strong> Pasaje Milans 1, Hospitalet de Llobregat,
                      Barcelona, España
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Email:</strong>{' '}
                      <a
                        href="mailto:inte@inteautomatizacion.com"
                        className="text-primary-600 hover:text-primary-500 hover:underline transition-colors"
                      >
                        inte@inteautomatizacion.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Teléfono:</strong> +34 933 379 453
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                2. Objeto y Aceptación
              </h3>
              <p className="mb-4">
                El presente aviso legal regula el uso del sitio web{' '}
                <strong>www.inteautomatizacion.com</strong> (en adelante, LA WEB), del que es
                titular INTE SISTEMAS.
              </p>
              <p className="mb-4">
                La navegación por la web de INTE SISTEMAS le atribuye la condición de usuario de
                la misma e implica la aceptación plena y sin reservas de todas y cada una de las
                disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                3. Condiciones de Uso
              </h3>
              <p className="mb-4">
                El Usuario se compromete a utilizar la Web de conformidad con la Ley y el
                presente Aviso Legal, así como con la moral y buenas costumbres generalmente
                aceptadas y el orden público. Asimismo, se obliga a abstenerse de utilizar la
                Web con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar
                perjuicio o impedir el normal funcionamiento de la Web.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                4. Propiedad Intelectual e Industrial
              </h3>
              <p className="mb-4">
                Todos los contenidos de esta web, incluyendo, sin carácter limitativo, textos,
                fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás
                contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente,
                son propiedad intelectual de INTE SISTEMAS o de terceros, sin que puedan
                entenderse cedidos al Usuario ninguno de los derechos de explotación reconocidos
                por la normativa vigente en materia de propiedad intelectual sobre los mismos.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                5. Exclusión de Responsabilidad
              </h3>
              <p className="mb-4">
                INTE SISTEMAS no se hace responsable, en ningún caso, de los daños y perjuicios
                de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u
                omisiones en los contenidos, falta de disponibilidad del portal o la transmisión
                de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber
                adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                6. Modificaciones
              </h3>
              <p className="mb-4">
                INTE SISTEMAS se reserva el derecho de efectuar sin previo aviso las
                modificaciones que considere oportunas en su web, pudiendo cambiar, suprimir o
                añadir tanto los contenidos y servicios que se presten a través de la misma como
                la forma en la que éstos aparezcan presentados o localizados en su web.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                7. Legislación Aplicable y Jurisdicción
              </h3>
              <p className="mb-4">
                La relación entre INTE SISTEMAS y el Usuario se regirá por la normativa española
                vigente. Para la resolución de todas las controversias o cuestiones relacionadas
                con el presente sitio web o de las actividades en él desarrolladas, serán de
                aplicación la legislación española, sometiéndose las partes a los Juzgados y
                Tribunales de Barcelona.
              </p>
            </div>

            {/* Footer Info */}
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <div className="text-center">
                <p className="text-lg font-semibold text-primary-800 mb-3">
                  ¿Tienes alguna duda sobre el aviso legal?
                </p>
                <p className="text-secondary-700 mb-6">
                  Para cualquier consulta, estamos a tu disposición
                </p>
                <div className="bg-white rounded-lg p-6 inline-block">
                  <p className="text-sm text-secondary-600 mb-2">Contacto</p>
                  <a
                    href="mailto:inte@inteautomatizacion.com"
                    className="text-xl font-semibold text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    inte@inteautomatizacion.com
                  </a>
                </div>
                <p className="text-sm text-secondary-600 mt-6 pt-6 border-t border-primary-200">
                  Última actualización: Diciembre 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
