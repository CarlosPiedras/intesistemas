import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Políticas y Aviso Legal | INTE SISTEMAS',
  description:
    'Aviso legal, política de privacidad y política de cookies de INTE SISTEMAS. Información sobre protección de datos y uso de la web.',
  keywords:
    'aviso legal, política privacidad, cookies, protección datos, INTE SISTEMAS, LOPD, RGPD',
  robots: 'index, follow',
};

export default function PoliticasPage() {
  const policies = [
    {
      title: 'Aviso Legal',
      icon: '📋',
      description:
        'Información sobre datos identificativos, condiciones de uso, propiedad intelectual y legislación aplicable.',
      href: '/politicas/aviso-legal',
      color: 'from-primary-600 to-primary-500',
    },
    {
      title: 'Política de Privacidad',
      icon: '🔒',
      description:
        'Información sobre protección de datos personales, RGPD, derechos del usuario y medidas de seguridad.',
      href: '/politicas/privacidad',
      color: 'from-primary-500 to-primary-400',
    },
    {
      title: 'Política de Cookies',
      icon: '🍪',
      description:
        'Información sobre el uso de cookies en nuestro sitio web y cómo gestionarlas en tu navegador.',
      href: '/politicas/cookies',
      color: 'from-primary-400 to-primary-300',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8]">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Información Legal
          </h1>
          <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto">
            Políticas, protección de datos y uso del sitio web
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${policy.color} p-8 text-center`}>
                  <div className="text-6xl mb-4">{policy.icon}</div>
                  <h2 className="text-2xl font-bold text-white">{policy.title}</h2>
                </div>
                <div className="p-8">
                  <p className="text-secondary-700 mb-6 leading-relaxed">{policy.description}</p>
                  <div className="flex items-center justify-center gap-2 text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                    <span>Leer más</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <div className="text-center">
              <p className="text-lg font-semibold text-primary-800 mb-3">
                ¿Tienes alguna duda sobre nuestras políticas?
              </p>
              <p className="text-secondary-700 mb-6">
                Para cualquier consulta sobre aviso legal, privacidad o cookies, estamos a tu
                disposición
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
      </section>
    </div>
  );
}
