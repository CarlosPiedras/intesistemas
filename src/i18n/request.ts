import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export default getRequestConfig(async ({ requestLocale }) => {
  // Esperar el locale de la request
  let locale = await requestLocale

  // Validar que existe
  const locales = ['es', 'en']
  if (!locale || !locales.includes(locale)) {
    locale = 'es'
  }

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`)).default,
  }
})
