# Sistema de Estilos y Diseño - Inte Sistemas

## Tailwind CSS

### Configuración

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Semantic colors
        success: {
          DEFAULT: '#10b981',
          light: '#d1fae5',
          dark: '#047857',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fee2e2',
          dark: '#dc2626',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#dbeafe',
          dark: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
```

---

## Tipografía

### Configuración de Fuentes

```tsx
// app/[locale]/layout.tsx
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

### Escala Tipográfica

```tsx
// Headings
<h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
  Título Principal
</h1>

<h2 className="font-heading text-3xl font-semibold md:text-4xl">
  Título Secundario
</h2>

<h3 className="font-heading text-2xl font-semibold md:text-3xl">
  Subtítulo
</h3>

<h4 className="font-heading text-xl font-medium md:text-2xl">
  Título de Sección
</h4>

// Body text
<p className="text-base text-gray-600 md:text-lg">
  Texto de párrafo principal
</p>

<p className="text-sm text-gray-500">
  Texto secundario o descriptivo
</p>

// Lead text
<p className="text-lg text-gray-700 md:text-xl">
  Texto destacado o introducción
</p>
```

---

## Sistema de Colores

### Paleta Principal

```tsx
// Primary (Azul corporativo)
<div className="bg-primary-500 text-white">Main Brand</div>
<div className="bg-primary-600 text-white">Hover State</div>
<div className="bg-primary-50">Light Background</div>

// Secondary (Grises)
<div className="bg-secondary-100">Light Gray</div>
<div className="bg-secondary-500 text-white">Medium Gray</div>
<div className="bg-secondary-900 text-white">Dark Gray</div>

// Semantic
<div className="bg-success text-white">Éxito</div>
<div className="bg-warning text-white">Advertencia</div>
<div className="bg-error text-white">Error</div>
<div className="bg-info text-white">Información</div>
```

### Uso de Colores

```tsx
// Backgrounds
className="bg-white"           // Fondo principal
className="bg-gray-50"         // Fondo alternativo
className="bg-gray-100"        // Fondo cards/sections
className="bg-primary-500"     // Fondo brand

// Text
className="text-gray-900"      // Texto principal
className="text-gray-600"      // Texto secundario
className="text-gray-400"      // Texto terciario
className="text-primary-600"   // Texto brand

// Borders
className="border-gray-200"    // Border default
className="border-gray-300"    // Border hover
className="border-primary-500" // Border brand
```

---

## Espaciado y Layout

### Container

```tsx
// Contenedor centrado con padding responsive
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Contenedor con max-width
<div className="mx-auto max-w-7xl px-4">
  {/* Content */}
</div>
```

### Grid Layouts

```tsx
// 2 columnas en desktop
<div className="grid gap-8 md:grid-cols-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

// 3 columnas responsive
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

// 4 columnas con auto-fit
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Cards */}
</div>
```

### Flex Layouts

```tsx
// Centro absoluto
<div className="flex items-center justify-center min-h-screen">
  {/* Content */}
</div>

// Header/Navigation
<div className="flex items-center justify-between">
  <div>Logo</div>
  <nav>Menu</nav>
</div>

// Stack con gap
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Componentes de Diseño

### Cards

```tsx
// Card básico
<div className="rounded-lg border border-gray-200 bg-white p-6">
  <h3 className="text-xl font-semibold">Título</h3>
  <p className="mt-2 text-gray-600">Descripción</p>
</div>

// Card con sombra
<div className="rounded-lg bg-white p-6 shadow-lg">
  {/* Content */}
</div>

// Card con hover effect
<div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
  {/* Content */}
</div>

// Card con imagen
<div className="overflow-hidden rounded-lg bg-white shadow-lg">
  <img src="..." alt="..." className="h-48 w-full object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-semibold">Título</h3>
    <p className="mt-2 text-gray-600">Descripción</p>
  </div>
</div>
```

### Buttons

```tsx
// Primary button
<button className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
  Acción Principal
</button>

// Secondary button
<button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
  Acción Secundaria
</button>

// Ghost button
<button className="rounded-lg bg-transparent px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100">
  Acción Terciaria
</button>

// Icon button
<button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
  <svg className="h-6 w-6">...</svg>
</button>
```

### Forms

```tsx
// Input field
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    type="email"
    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
    placeholder="tu@email.com"
  />
</div>

// Input con error
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    type="email"
    className="w-full rounded-lg border border-error px-4 py-2 focus:border-error focus:outline-none focus:ring-2 focus:ring-error/20"
  />
  <p className="text-sm text-error">Email inválido</p>
</div>

// Select
<select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20">
  <option>Opción 1</option>
  <option>Opción 2</option>
</select>

// Checkbox
<label className="flex items-center space-x-2">
  <input
    type="checkbox"
    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
  />
  <span className="text-sm text-gray-700">Acepto términos</span>
</label>
```

---

## Responsive Design

### Breakpoints

```tsx
// Tailwind breakpoints
sm:  640px  // Small devices (tablets)
md:  768px  // Medium devices (small laptops)
lg:  1024px // Large devices (desktops)
xl:  1280px // Extra large devices
2xl: 1536px // 2X Extra large devices

// Uso mobile-first
<div className="
  text-sm      // mobile
  md:text-base // tablet+
  lg:text-lg   // desktop+
">
```

### Layouts Responsive

```tsx
// Stack móvil, row desktop
<div className="flex flex-col gap-4 md:flex-row">
  <div>Sidebar</div>
  <div>Main</div>
</div>

// Grid adaptativo
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Items */}
</div>

// Ocultar en móvil
<div className="hidden md:block">
  Desktop only
</div>

// Mostrar solo en móvil
<div className="block md:hidden">
  Mobile only
</div>
```

---

## Animaciones y Transiciones

### Transiciones

```tsx
// Hover effects
<button className="transition-colors hover:bg-primary-700">
  Button
</button>

<div className="transition-transform hover:scale-105">
  Card
</div>

<a className="transition-all hover:text-primary-600 hover:underline">
  Link
</a>

// Multiple properties
<div className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
  Interactive Card
</div>
```

### Animaciones

```tsx
// Fade in
<div className="animate-fade-in">
  Content
</div>

// Slide up
<div className="animate-slide-up">
  Content
</div>

// Spin (loading)
<svg className="h-5 w-5 animate-spin">
  {/* Spinner icon */}
</svg>

// Pulse
<div className="animate-pulse bg-gray-200">
  Skeleton
</div>
```

---

## Utilidades Comunes

### Truncate Text

```tsx
// Una línea
<p className="truncate">
  Texto muy largo que se cortará con...
</p>

// Múltiples líneas
<p className="line-clamp-3">
  Texto que se mostrará máximo 3 líneas y luego...
</p>
```

### Aspect Ratio

```tsx
// Imagen 16:9
<div className="aspect-video overflow-hidden rounded-lg">
  <img src="..." alt="..." className="h-full w-full object-cover" />
</div>

// Imagen cuadrada
<div className="aspect-square overflow-hidden rounded-lg">
  <img src="..." alt="..." className="h-full w-full object-cover" />
</div>
```

### Focus States

```tsx
// Focus ring
<button className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
  Button
</button>

// Focus visible (solo teclado)
<a className="focus-visible:outline-none focus-visible:ring-2">
  Link
</a>
```

---

## Dark Mode (Preparado para futuro)

```tsx
// Configurar en tailwind.config.ts
module.exports = {
  darkMode: 'class', // o 'media'
  // ...
}

// Uso
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Texto
  </p>
</div>
```

---

## Estilos Globales

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Smooth scroll */
  html {
    @apply scroll-smooth;
  }

  /* Body defaults */
  body {
    @apply bg-white text-gray-900 antialiased;
  }

  /* Focus defaults */
  *:focus {
    @apply outline-none;
  }
}

@layer components {
  /* Botón personalizado */
  .btn-primary {
    @apply rounded-lg bg-primary-600 px-6 py-3 font-medium text-white;
    @apply transition-colors hover:bg-primary-700;
    @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  /* Container personalizado */
  .container-custom {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  /* Prose styling (para contenido markdown/rich text) */
  .prose-custom {
    @apply prose prose-lg prose-gray mx-auto;
    @apply prose-headings:font-heading prose-headings:font-bold;
    @apply prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline;
  }
}

@layer utilities {
  /* Gradient backgrounds */
  .bg-gradient-primary {
    @apply bg-gradient-to-r from-primary-600 to-primary-700;
  }

  .bg-gradient-soft {
    @apply bg-gradient-to-br from-blue-50 via-white to-purple-50;
  }

  /* Text gradients */
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent;
  }
}
```

---

## Accesibilidad

### Screen Readers

```tsx
// Texto solo para screen readers
<span className="sr-only">Descripción para lectores</span>

// Ocultar de screen readers
<div aria-hidden="true">Decorativo</div>
```

### Focus Visible

```tsx
// Focus solo con teclado
<button className="focus-visible:ring-2 focus-visible:ring-primary-500">
  Button
</button>
```

### ARIA Labels

```tsx
// Botón con icono
<button aria-label="Cerrar menú">
  <svg>...</svg>
</button>

// Link con contexto
<a href="#" aria-describedby="link-description">
  Leer más
</a>
<span id="link-description" className="sr-only">
  sobre nuestros servicios
</span>
```

---

## Performance

### CSS-in-JS vs Tailwind

✅ **Tailwind (recomendado):**
- Sin runtime JavaScript
- CSS estático generado en build
- Mejor performance
- Purge automático de clases no usadas

### Purge Configuration

```js
// tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Tailwind automáticamente elimina clases no usadas en producción
}
```

---

## Herramientas y Plugins

### VS Code Extensions

- **Tailwind CSS IntelliSense**: Autocompletado y preview
- **PostCSS Language Support**: Syntax highlighting
- **Headwind**: Ordenar clases automáticamente

### Prettier Plugin

```bash
npm install -D prettier-plugin-tailwindcss
```

```json
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts"
}
```

---

**Fecha:** 2025-11-21
**Sistema de diseño:** En evolución
