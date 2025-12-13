import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | INTE SISTEMAS',
  description:
    'Política de privacidad de INTE SISTEMAS. Información sobre protección de datos personales, RGPD y derechos del usuario.',
  keywords: 'política privacidad, protección datos, INTE SISTEMAS, RGPD, LOPD',
  robots: 'index, follow',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Política de Privacidad
          </h1>
          <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto">
            Información sobre protección de datos personales
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
                  1. Responsable del Tratamiento
                </h3>
                <p className="mb-4 text-secondary-700">
                  De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento
                  Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las
                  personas físicas en lo que respecta al tratamiento de datos personales (RGPD), y
                  la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y
                  garantía de los derechos digitales (LOPDGDD), le informamos que:
                </p>
                <ul className="list-none pl-0 mb-0 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Responsable:</strong> INTE SISTEMAS ELÉCTRICOS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">▪</span>
                    <span>
                      <strong className="text-primary-800">Domicilio:</strong> Pasaje Milans 1, Hospitalet de Llobregat, Barcelona
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
                2. Finalidad del Tratamiento
              </h3>
              <p className="mb-4">
                Los datos personales que nos facilite a través de los formularios de contacto de
                esta web serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>
                    Gestionar las consultas y solicitudes de información que nos formule a través
                    de los formularios habilitados en la web
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Gestionar la relación comercial y el envío de presupuestos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>
                    Envío de comunicaciones comerciales sobre nuestros productos y servicios,
                    previa solicitud de consentimiento
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                3. Legitimación
              </h3>
              <p className="mb-4">
                La base legal para el tratamiento de sus datos es el consentimiento del
                interesado, así como el interés legítimo en mantener relaciones comerciales y
                responder a las consultas planteadas.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                4. Conservación de Datos
              </h3>
              <p className="mb-4">
                Los datos personales proporcionados se conservarán mientras se mantenga la
                relación comercial o no se solicite su supresión por el interesado, y durante el
                plazo por el cual pudieran derivarse responsabilidades legales por los servicios
                prestados.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                5. Destinatarios de los Datos
              </h3>
              <p className="mb-4">
                Sus datos no serán cedidos a terceros, salvo obligación legal. No se realizarán
                transferencias internacionales de datos.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                6. Derechos del Usuario
              </h3>
              <p className="mb-4">
                Cualquier persona tiene derecho a obtener confirmación sobre si en INTE SISTEMAS
                estamos tratando datos personales que les conciernan, o no. Las personas
                interesadas tienen derecho a:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Solicitar el acceso a los datos personales relativos al interesado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Solicitar su rectificación o supresión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Solicitar la limitación de su tratamiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Oponerse al tratamiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Solicitar la portabilidad de los datos</span>
                </li>
              </ul>
              <p className="mb-4">
                Para ejercitar estos derechos, puede dirigirse a{' '}
                <a
                  href="mailto:inte@inteautomatizacion.com"
                  className="text-primary-600 hover:underline"
                >
                  inte@inteautomatizacion.com
                </a>
                , adjuntando copia de su DNI o documento identificativo equivalente.
              </p>
              <p className="mb-4">
                Asimismo, le informamos del derecho a presentar una reclamación ante la Agencia
                Española de Protección de Datos (
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  www.aepd.es
                </a>
                ) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>

              <h3 className="text-xl font-semibold text-primary-600 mt-8 mb-3 border-l-4 border-primary-600 pl-4">
                7. Medidas de Seguridad
              </h3>
              <p className="mb-4">
                INTE SISTEMAS ha adoptado las medidas técnicas y organizativas necesarias para
                garantizar la seguridad e integridad de los datos de carácter personal que trate,
                así como para evitar su pérdida, alteración y/o acceso por parte de terceros no
                autorizados. Entre estas medidas se incluyen:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <span>Cifrado SSL/TLS en todas las comunicaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <span>Almacenamiento seguro de datos personales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <span>Políticas de acceso restringido a datos personales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <span>Auditorías periódicas de seguridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <span>Formación del personal en protección de datos</span>
                </li>
              </ul>
            </div>

            {/* Footer Info */}
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <div className="text-center">
                <p className="text-lg font-semibold text-primary-800 mb-3">
                  ¿Tienes alguna duda sobre privacidad?
                </p>
                <p className="text-secondary-700 mb-6">
                  Para cualquier consulta sobre protección de datos, estamos a tu disposición
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
