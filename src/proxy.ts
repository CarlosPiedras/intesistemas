import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n/config';

export const proxy = createMiddleware({
  // Lista de locales soportados
  locales,

  // Locale por defecto
  defaultLocale,

  // Estrategia de detección de locale
  localeDetection: true,

  // Prefijo de locale en la URL
  localePrefix: 'always', // Siempre mostrar el prefijo de locale (/es, /en)
});

export const config = {
  // Aplicar middleware a todas las rutas excepto:
  // - API routes
  // - Archivos estáticos
  // - Next.js internals
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/',
    '/(es|en)/:path*'
  ],
};
