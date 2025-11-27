import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  // Siempre usar español
  const locale = 'es'

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`)).default,
  }
})
