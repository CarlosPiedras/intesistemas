import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | INTE SISTEMAS',
  description:
    'Política de cookies de INTE SISTEMAS. Información sobre el uso de cookies en el sitio web.',
  keywords: 'política cookies, INTE SISTEMAS, cookies técnicas, cookies analíticas',
  robots: 'index, follow',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Política de Cookies
          </h1>
          <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto">
            Información sobre el uso de cookies en nuestro sitio web
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="prose prose-lg max-w-none text-secondary-700">
              <h3 className="text-xl font-semibold text-primary-600 mt-6 mb-3 border-l-4 border-primary-600 pl-4">
                1. ¿Qué son las Cookies?
              </h3>
              <p className="mb-4">
                Las cookies son archivos que se pueden descargar en su equipo a través de las
                páginas web. Son herramientas que tienen un papel esencial para la prestación de
                numerosos servicios de la sociedad de la información. Entre otros, permiten a una
                página web almacenar y recuperar información sobre los hábitos de navegación de
                un usuario o de su equipo y, dependiendo de la información obtenida, se pueden
                utilizar para reconocer al usuario y mejorar el servicio ofrecido.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                2. Tipos de Cookies Utilizadas
              </h3>
              <p className="mb-4">Esta web utiliza los siguientes tipos de cookies:</p>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl mb-6 border border-primary-200">
                <h4 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🍪</span>
                  Cookies Técnicas (Necesarias)
                </h4>
                <p className="mb-2 text-secondary-700">
                  Permiten al usuario la navegación a través de la página web y la utilización de
                  las diferentes opciones o servicios que en ella existan. Son imprescindibles
                  para el funcionamiento de la web.
                </p>
                <p className="text-sm text-primary-800 mt-3 bg-white/50 rounded-lg px-3 py-2">
                  <strong>Duración:</strong> Sesión | <strong>Finalidad:</strong> Funcionamiento
                  del sitio web
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl mb-6 border border-primary-200">
                <h4 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Cookies de Análisis (Opcionales)
                </h4>
                <p className="mb-2 text-secondary-700">
                  Permiten cuantificar el número de usuarios y así realizar la medición y análisis
                  estadístico de la utilización que hacen los usuarios del servicio ofertado. Para
                  ello se analiza su navegación en nuestra página web con el fin de mejorar la
                  oferta de productos o servicios que le ofrecemos.
                </p>
                <p className="text-sm text-primary-800 mt-3 bg-white/50 rounded-lg px-3 py-2">
                  <strong>Duración:</strong> Hasta 2 años | <strong>Finalidad:</strong> Análisis
                  estadístico del uso de la web
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                3. Cookies de Terceros
              </h3>
              <p className="mb-4">
                Esta web puede utilizar servicios de terceros que, por cuenta de INTE SISTEMAS,
                recopilan información con fines estadísticos:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li className="flex items-start gap-2 bg-primary-50/50 rounded-lg p-3">
                  <span className="text-primary-600 mt-1">▪</span>
                  <span>
                    <strong className="text-primary-800">Google Analytics:</strong> Almacena cookies para poder elaborar
                    estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar
                    esta web está consintiendo el tratamiento de información acerca de usted por
                    Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá
                    hacerlo comunicando directamente con Google.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                4. Gestión de Cookies
              </h3>
              <p className="mb-4">
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante
                la configuración de las opciones del navegador instalado en su ordenador. A
                continuación puede acceder a la configuración de los navegadores web más
                frecuentes:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-all hover:shadow-md group"
                >
                  <span className="text-2xl">🌐</span>
                  <span className="text-primary-600 font-medium group-hover:text-primary-500">Google Chrome</span>
                </a>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-all hover:shadow-md group"
                >
                  <span className="text-2xl">🦊</span>
                  <span className="text-primary-600 font-medium group-hover:text-primary-500">Mozilla Firefox</span>
                </a>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-all hover:shadow-md group"
                >
                  <span className="text-2xl">🧭</span>
                  <span className="text-primary-600 font-medium group-hover:text-primary-500">Safari</span>
                </a>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-all hover:shadow-md group"
                >
                  <span className="text-2xl">🔷</span>
                  <span className="text-primary-600 font-medium group-hover:text-primary-500">Microsoft Edge</span>
                </a>
              </div>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                5. Aceptación de las Cookies
              </h3>
              <p className="mb-4">
                Si continúa navegando después de haber sido informado sobre nuestra Política de
                Cookies, entendemos que acepta la instalación de las cookies en su dispositivo.
                No obstante, puede retirar su consentimiento en cualquier momento configurando su
                navegador.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                6. Actualizaciones
              </h3>
              <p className="mb-4">
                INTE SISTEMAS puede modificar esta Política de Cookies en función de exigencias
                legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las
                instrucciones dictadas por la Agencia Española de Protección de Datos, por ello
                se aconseja a los usuarios que la visiten periódicamente.
              </p>
            </div>

            {/* Footer Info */}
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <div className="text-center">
                <p className="text-lg font-semibold text-primary-800 mb-3">
                  ¿Tienes alguna duda sobre las cookies?
                </p>
                <p className="text-secondary-700 mb-6">
                  Para cualquier consulta sobre el uso de cookies, estamos a tu disposición
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
