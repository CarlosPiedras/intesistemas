# Guía de SEO - Inte Sistemas

## Objetivo: Máxima Prioridad SEO

Este proyecto tiene SEO como **máxima prioridad**. Cada página debe estar optimizada para motores de búsqueda siguiendo las mejores prácticas actuales.

---

## Core Web Vitals

### Métricas Objetivo

| Métrica | Objetivo | Crítico |
|---------|----------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ |
| **FID** (First Input Delay) | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ |
| **FCP** (First Contentful Paint) | < 1.8s | ⚡ |
| **TTI** (Time to Interactive) | < 3.8s | ⚡ |
| **TTFB** (Time to First Byte) | < 600ms | ⚡ |

### Implementación

```tsx
// app/[locale]/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Metadatos

### Configuración Global

```tsx
// app/[locale]/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://intesistemas.com'),
  title: {
    default: 'Inte Sistemas - Soluciones Tecnológicas Empresariales',
    template: '%s | Inte Sistemas'
  },
  description: 'Inte Sistemas ofrece soluciones tecnológicas empresariales de vanguardia. Desarrollo de software, consultoría IT y transformación digital.',
  keywords: ['desarrollo software', 'consultoría IT', 'transformación digital', 'soluciones empresariales'],
  authors: [{ name: 'Inte Sistemas' }],
  creator: 'Inte Sistemas',
  publisher: 'Inte Sistemas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://intesistemas.com',
    siteName: 'Inte Sistemas',
    title: 'Inte Sistemas - Soluciones Tecnológicas Empresariales',
    description: 'Soluciones tecnológicas empresariales de vanguardia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inte Sistemas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inte Sistemas - Soluciones Tecnológicas',
    description: 'Soluciones tecnológicas empresariales de vanguardia',
    images: ['/images/twitter-image.jpg'],
    creator: '@intesistemas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
```

### Metadatos por Página

```tsx
// app/[locale]/services/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Descubre nuestros servicios de desarrollo de software, consultoría IT, cloud computing y más. Soluciones a medida para tu empresa.',
  keywords: ['servicios IT', 'desarrollo software', 'consultoría', 'cloud computing'],
  openGraph: {
    title: 'Servicios - Inte Sistemas',
    description: 'Soluciones tecnológicas a medida para tu empresa',
    url: 'https://intesistemas.com/services',
    images: [
      {
        url: '/images/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios de Inte Sistemas',
      },
    ],
  },
}

export default function ServicesPage() {
  return <main>...</main>
}
```

### Metadatos Dinámicos

```tsx
// app/[locale]/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}
```

---

## Sitemap

### Generación Automática

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://intesistemas.com'
  const locales = ['es', 'en']

  // Páginas estáticas
  const routes = ['', '/about', '/services', '/portfolio', '/contact']

  // Generar URLs para cada locale
  const urls: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    })
  })

  return urls
}
```

### Sitemap Dinámico (con Blog)

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/api/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://intesistemas.com'

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... más páginas
  ]

  // Páginas dinámicas (blog posts)
  const posts = await getAllPosts()
  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
```

---

## Robots.txt

```tsx
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://intesistemas.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

---

## Structured Data (Schema.org)

### Organization Schema

```tsx
// components/structured-data/OrganizationSchema.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Inte Sistemas',
    url: 'https://intesistemas.com',
    logo: 'https://intesistemas.com/images/logo.png',
    description: 'Soluciones tecnológicas empresariales de vanguardia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Ejemplo 123',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-XXX-XXX-XXX',
      contactType: 'customer service',
      email: 'info@intesistemas.com',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/intesistemas',
      'https://twitter.com/intesistemas',
      'https://github.com/intesistemas',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### WebSite Schema

```tsx
// components/structured-data/WebSiteSchema.tsx
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Inte Sistemas',
    url: 'https://intesistemas.com',
    description: 'Soluciones tecnológicas empresariales',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://intesistemas.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Breadcrumb Schema

```tsx
// components/structured-data/BreadcrumbSchema.tsx
interface BreadcrumbItem {
  name: string
  url: string
}

interface Props {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Uso
<BreadcrumbSchema
  items={[
    { name: 'Inicio', url: 'https://intesistemas.com' },
    { name: 'Servicios', url: 'https://intesistemas.com/services' },
    { name: 'Desarrollo Web', url: 'https://intesistemas.com/services/web' },
  ]}
/>
```

### Article Schema (Blog)

```tsx
// components/structured-data/ArticleSchema.tsx
interface Props {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Inte Sistemas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://intesistemas.com/images/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## Canonical URLs

```tsx
// app/[locale]/services/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://intesistemas.com/services',
    languages: {
      'es-ES': 'https://intesistemas.com/es/services',
      'en-US': 'https://intesistemas.com/en/services',
    },
  },
}
```

---

## Hreflang (Multiidioma)

```tsx
// app/[locale]/layout.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://intesistemas.com/${params.locale}`,
      languages: {
        'es-ES': 'https://intesistemas.com/es',
        'en-US': 'https://intesistemas.com/en',
        'x-default': 'https://intesistemas.com/es', // Idioma por defecto
      },
    },
  }
}
```

---

## Optimización de Imágenes para SEO

```tsx
// ✅ Alt text descriptivo y relevante
<Image
  src="/images/hero.jpg"
  alt="Equipo de desarrollo de software trabajando en oficina moderna con tecnología de vanguardia"
  width={1200}
  height={630}
  priority
/>

// ✅ Usar Next.js Image para optimización automática
<Image
  src="/images/service-consulting.jpg"
  alt="Consultor IT presentando estrategia digital a equipo empresarial"
  width={800}
  height={600}
  loading="lazy"
/>

// ✅ Formatos modernos (WebP, AVIF)
// Next.js Image lo hace automáticamente

// ✅ Dimensiones específicas (evita CLS)
<Image
  src="/images/team.jpg"
  alt="Equipo de Inte Sistemas"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Nombres de Archivos Descriptivos

```
❌ img1.jpg, photo.png, image-final-v2.jpg
✅ equipo-desarrollo-intesistemas.jpg
✅ consultoria-transformacion-digital.jpg
✅ oficina-moderna-tecnologia.jpg
```

---

## Headers HTTP para SEO

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

---

## Optimización de Contenido

### Estructura HTML Semántica

```tsx
// ✅ Usar elementos semánticos
<header>
  <nav>...</nav>
</header>

<main>
  <article>
    <h1>Título Principal</h1>
    <section>
      <h2>Sección 1</h2>
      <p>Contenido...</p>
    </section>
  </article>
</main>

<aside>
  <h2>Relacionado</h2>
</aside>

<footer>
  <p>&copy; 2025 Inte Sistemas</p>
</footer>

// ❌ Evitar divs para todo
<div class="header">
  <div class="nav">...</div>
</div>
```

### Jerarquía de Headings

```tsx
// ✅ Jerarquía correcta (no saltar niveles)
<h1>Inte Sistemas - Soluciones Tecnológicas</h1>
  <h2>Nuestros Servicios</h2>
    <h3>Desarrollo de Software</h3>
    <h3>Consultoría IT</h3>
  <h2>Por qué Elegirnos</h2>
    <h3>Experiencia</h3>

// ❌ Jerarquía incorrecta
<h1>Título</h1>
  <h3>Subtítulo</h3> <!-- ❌ Saltó h2 -->
    <h2>Otro título</h2> <!-- ❌ Orden incorrecto -->
```

### Keywords y Densidad

- **Density:** 1-2% (natural, no forzado)
- **Colocación:** Title, H1, primeras 100 palabras, H2/H3
- **LSI Keywords:** Variaciones y sinónimos
- **Long-tail keywords:** Frases específicas

```tsx
// Ejemplo: Página de servicios
<h1>Servicios de Desarrollo de Software Empresarial</h1>

<p>
  En Inte Sistemas ofrecemos <strong>desarrollo de software a medida</strong>
  para empresas que buscan soluciones tecnológicas innovadoras.
  Nuestro equipo de <strong>desarrolladores expertos</strong> crea
  aplicaciones web, aplicaciones móviles y sistemas empresariales
  que transforman digitalmente tu negocio.
</p>

<h2>Desarrollo de Aplicaciones Web</h2>
<p>
  Creamos <strong>aplicaciones web modernas</strong> utilizando las
  últimas tecnologías como React, Next.js y Node.js...
</p>
```

---

## Link Building Interno

```tsx
// ✅ Links internos descriptivos
<Link href="/services/web-development">
  Desarrollo de aplicaciones web
</Link>

// ❌ Anchor text genérico
<Link href="/services/web-development">
  Haz clic aquí
</Link>

// ✅ Links contextuales
<p>
  Nuestro equipo especializado en{' '}
  <Link href="/services/web-development">
    desarrollo de aplicaciones web
  </Link>{' '}
  puede ayudarte a crear soluciones a medida.
</p>
```

---

## Performance y SEO

### Optimizar Carga Inicial

```tsx
// ✅ Priority para imágenes above the fold
<Image src="/hero.jpg" alt="..." priority />

// ✅ Lazy loading para el resto
<Image src="/service.jpg" alt="..." loading="lazy" />

// ✅ Preload fonts críticos
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // FOUT en lugar de FOIT
  preload: true,
})
```

### Code Splitting

```tsx
// ✅ Dynamic imports para componentes pesados
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Si no es necesario en server
})
```

---

## Checklist SEO por Página

### Técnico
- [ ] Title único y descriptivo (50-60 caracteres)
- [ ] Meta description atractiva (150-160 caracteres)
- [ ] URL amigable (lowercase, con guiones)
- [ ] Canonical URL configurada
- [ ] Hreflang para cada idioma
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] Structured data (schema.org)
- [ ] Sin errores JavaScript console
- [ ] HTTPS habilitado

### Contenido
- [ ] H1 único y relevante
- [ ] Jerarquía de headings correcta (H1-H6)
- [ ] Keywords en lugares estratégicos
- [ ] Contenido original y de calidad (min 300 palabras)
- [ ] Links internos relevantes
- [ ] Imágenes con alt text descriptivo
- [ ] Contenido actualizado

### Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Tamaño de página < 3MB
- [ ] Tiempo de carga < 3s
- [ ] Mobile-friendly (responsive)
- [ ] Imágenes optimizadas
- [ ] Fonts optimizados

---

## Herramientas de Monitoreo

### Google Tools
- **Google Search Console**: Indexación, errores, rendimiento
- **Google Analytics 4**: Tráfico, comportamiento, conversiones
- **PageSpeed Insights**: Rendimiento y Core Web Vitals
- **Mobile-Friendly Test**: Compatibilidad móvil

### Otras Herramientas
- **Ahrefs / SEMrush**: Keywords, backlinks, competencia
- **Screaming Frog**: Auditoría técnica SEO
- **Lighthouse CI**: Monitoreo continuo en CI/CD
- **Schema Markup Validator**: Validar structured data

---

## Reportes SEO Mensuales

### Métricas a Seguir
1. **Posiciones**: Keywords objetivo en top 10
2. **Tráfico orgánico**: Sesiones desde buscadores
3. **Conversiones**: Leads desde SEO
4. **Core Web Vitals**: LCP, FID, CLS
5. **Indexación**: Páginas indexadas vs total
6. **Errores**: 404s, 500s, problemas de crawl
7. **Backlinks**: Cantidad y calidad

---

**Fecha actualización:** 2025-11-21
**Próxima revisión:** Trimestral
