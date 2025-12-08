# Arquitectura del Proyecto - Inte Sistemas

## Visión General

Este documento describe la arquitectura técnica del proyecto web corporativo de Inte Sistemas, construido con Next.js 14+ utilizando el App Router.

---

## Stack Tecnológico Completo

### Core
- **Framework:** Next.js 14+ (React 18+)
- **Lenguaje:** TypeScript 5+
- **Runtime:** Node.js 18+

### Estilos y UI
- **CSS Framework:** Tailwind CSS 3+
- **CSS-in-JS:** CSS Modules (incluido en Next.js)
- **Iconos:** Lucide React o Heroicons

### Internacionalización
- **Librería:** next-intl
- **Idiomas:** ES (Español) - EN (Inglés)

### Optimización
- **Imágenes:** Next.js Image Component
- **Fonts:** next/font (optimización automática)
- **Bundle:** SWC Compiler (Next.js nativo)

### SEO
- **Metadatos:** Next.js Metadata API
- **Sitemap:** Generación automática
- **Analytics:** Google Analytics 4 (opcional)

---

## Estructura de Directorios

```
intesistemas/
├── public/
│   ├── images/              # Imágenes estáticas
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── team/
│   ├── locales/             # Traducciones i18n
│   │   ├── es/
│   │   │   ├── common.json
│   │   │   ├── home.json
│   │   │   └── services.json
│   │   └── en/
│   │       ├── common.json
│   │       ├── home.json
│   │       └── services.json
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── [locale]/        # Rutas internacionalizadas
│   │   │   ├── layout.tsx   # Layout raíz con providers
│   │   │   ├── page.tsx     # Página inicio
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── portfolio/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── legal/
│   │   │       ├── privacy/page.tsx
│   │   │       └── terms/page.tsx
│   │   ├── api/             # API Routes
│   │   │   └── contact/
│   │   │       └── route.ts # Endpoint formulario contacto
│   │   ├── sitemap.ts       # Generador sitemap
│   │   ├── robots.ts        # Generador robots.txt
│   │   └── not-found.tsx    # Página 404
│   │
│   ├── components/
│   │   ├── ui/              # Componentes UI primitivos
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── forms/           # Formularios
│   │   │   ├── ContactForm.tsx
│   │   │   └── FormField.tsx
│   │   ├── gallery/         # Galerías de imágenes
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── Lightbox.tsx
│   │   │   └── ImageCard.tsx
│   │   ├── sections/        # Secciones de página
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── CTA.tsx
│   │   └── shared/          # Componentes compartidos
│   │       ├── Logo.tsx
│   │       ├── SEO.tsx
│   │       └── Container.tsx
│   │
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts    # Configuración i18n
│   │   │   ├── request.ts   # Middleware i18n
│   │   │   └── routing.ts   # Rutas i18n
│   │   ├── utils/
│   │   │   ├── cn.ts        # Utility para classNames
│   │   │   └── validators.ts # Validadores
│   │   ├── email/
│   │   │   └── send.ts      # Servicio envío emails
│   │   └── constants.ts     # Constantes globales
│   │
│   ├── types/
│   │   ├── index.ts         # Tipos globales
│   │   ├── api.ts           # Tipos API
│   │   └── components.ts    # Tipos componentes
│   │
│   ├── styles/
│   │   └── globals.css      # Estilos globales + Tailwind
│   │
│   └── middleware.ts        # Middleware Next.js (i18n)
│
├── info/                    # Documentación del proyecto
│   ├── 01-arquitectura.md
│   ├── 02-guia-desarrollo.md
│   ├── 03-convenciones.md
│   └── ...
│
├── .env.local               # Variables de entorno locales
├── .env.example             # Ejemplo variables de entorno
├── .eslintrc.json           # Configuración ESLint
├── .gitignore
├── next.config.js           # Configuración Next.js
├── tailwind.config.ts       # Configuración Tailwind
├── tsconfig.json            # Configuración TypeScript
├── package.json
├── PLANTILLA.md             # Especificación del proyecto
└── README.md                # Documentación principal

```

---

## Patrones de Arquitectura

### 1. App Router (Next.js 14+)

Utilizamos el **App Router** de Next.js en lugar del Pages Router por sus ventajas:

- Server Components por defecto
- Layouts anidados
- Loading y error states
- Streaming y Suspense
- Mejor rendimiento SEO

### 2. Server vs Client Components

**Server Components (por defecto):**
- Layouts
- Páginas estáticas
- Secciones sin interactividad
- Componentes que consumen datos

**Client Components ('use client'):**
- Componentes interactivos (formularios, modals)
- Hooks de React (useState, useEffect)
- Event listeners
- Browser APIs

### 3. Composition Pattern

Priorizamos la composición sobre la herencia:

```tsx
// ✅ Bueno: Composición
<Container>
  <Header />
  <main>{children}</main>
  <Footer />
</Container>

// ❌ Evitar: Props excesivos
<Layout showHeader showFooter theme="dark" ...>
```

### 4. Colocation

Colocamos archivos relacionados cerca:

```
components/
├── ContactForm/
│   ├── ContactForm.tsx
│   ├── ContactForm.test.tsx
│   ├── useContactForm.ts
│   └── types.ts
```

---

## Flujo de Datos

### 1. Internacionalización

```
URL Request → Middleware → Detecta locale → Redirige a /[locale]/
                              ↓
                    next-intl Provider
                              ↓
                    Componentes acceden a traducciones
```

### 2. Formulario de Contacto

```
Cliente → ContactForm (validación) → API Route (/api/contact)
                                          ↓
                                    Envía email (Resend/Nodemailer)
                                          ↓
                                    Respuesta al cliente
```

### 3. Optimización de Imágenes

```
<Image src="/media/pages/servicios/hero.jpg" />
            ↓
Next.js Image Optimizer
            ↓
- Redimensiona según viewport
- Convierte a WebP
- Lazy loading
- Blur placeholder
```

---

## Rendering Strategy

### SSG (Static Site Generation) - Por Defecto
- Páginas: Home, About, Services, Legal
- Generadas en build time
- Máximo rendimiento
- Ideal para contenido estático

### ISR (Incremental Static Regeneration) - Opcional
- Portfolio (si se actualiza frecuentemente)
- Revalidación cada X segundos

### SSR (Server-Side Rendering) - Casos específicos
- Formulario de contacto (si necesita datos dinámicos)
- Páginas personalizadas por locale

---

## Optimizaciones de Performance

### 1. Code Splitting
- Automático por ruta
- Dynamic imports para componentes pesados

### 2. Image Optimization
- Next.js Image component
- Formatos modernos (WebP, AVIF)
- Responsive images
- Lazy loading

### 3. Font Optimization
- next/font para Google Fonts
- Preload automático
- Self-hosting

### 4. Bundle Optimization
- Tree shaking automático
- Minificación con SWC
- Análisis de bundle con @next/bundle-analyzer

---

## Seguridad

### 1. Headers de Seguridad
```js
// next.config.js
{
  headers: [
    {
      key: 'X-Frame-Options',
      value: 'DENY'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    // CSP, HSTS, etc.
  ]
}
```

### 2. Validación de Formularios
- Validación client-side (inmediata)
- Validación server-side (API route)
- Sanitización de inputs
- Rate limiting (opcional)

### 3. Environment Variables
- Variables públicas: `NEXT_PUBLIC_*`
- Variables privadas: solo en server

---

## Escalabilidad

### Preparado para crecer:

1. **Agregar CMS:**
   - Integración con Strapi/Contentful vía API
   - Sin cambiar arquitectura base

2. **Área de clientes:**
   - NextAuth.js para autenticación
   - Rutas protegidas con middleware

3. **Blog:**
   - MDX para contenido
   - Generación estática de posts

4. **E-commerce:**
   - Integración Stripe/PayPal
   - Gestión de productos

---

## Monitoreo y Analytics

### Métricas clave:
- Core Web Vitals (LCP, FID, CLS)
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)

### Herramientas:
- Vercel Analytics (si se usa Vercel)
- Google Analytics 4
- Google Search Console
- Lighthouse CI

---

## Decisiones Arquitectónicas (ADRs)

### ADR-001: App Router vs Pages Router
**Decisión:** App Router
**Razón:** Mejor rendimiento, Server Components, layouts anidados, futuro de Next.js

### ADR-002: next-intl vs next-i18next
**Decisión:** next-intl
**Razón:** Mejor integración con App Router, más ligero, API moderna

### ADR-003: Tailwind CSS vs CSS-in-JS
**Decisión:** Tailwind CSS
**Razón:** Mejor rendimiento (sin runtime), utility-first, DX excelente

### ADR-004: Sin CMS inicial
**Decisión:** Contenido hardcoded inicialmente
**Razón:** Simplificar MVP, agregar CMS en fase 2 si se necesita

---

**Fecha:** 2025-11-21
**Autor:** Claude Code
**Versión:** 1.0
