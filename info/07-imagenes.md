# Gestión y Optimización de Imágenes - Inte Sistemas

## Next.js Image Component

### Ventajas

- Optimización automática (WebP, AVIF)
- Lazy loading por defecto
- Prevención de CLS (Cumulative Layout Shift)
- Responsive images automático
- Placeholder blur
- Sin dependencias externas

---

## Uso Básico

### Imagen Estática

```tsx
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/media/pages/about/hero.jpg"
      alt="Equipo de Inte Sistemas trabajando en oficina moderna"
      width={1200}
      height={600}
      priority // Para imágenes above the fold
      className="rounded-lg"
    />
  )
}
```

### Imagen con Layout Fill

```tsx
// Para imágenes que llenan un contenedor
<div className="relative h-96 w-full">
  <Image
    src="/media/pages/servicios/hero.jpg"
    alt="Hero image"
    fill
    className="object-cover"
  />
</div>
```

### Responsive Sizing

```tsx
<Image
  src="/media/pages/servicios/distribucion/gallery/cuadro1.webp"
  alt="Service"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Optimización Avanzada

### Priority vs Lazy Loading

```tsx
// ✅ Priority para imágenes above the fold (Hero, primera vista)
<Image src="/hero.jpg" alt="..." priority />

// ✅ Lazy loading por defecto (resto de imágenes)
<Image src="/service.jpg" alt="..." />

// ✅ Eager loading explícito (si es necesario)
<Image src="/logo.jpg" alt="..." loading="eager" />
```

### Placeholder Blur

```tsx
// Opción 1: Data URL manual
<Image
  src="/media/shared/hero-extras/stand_barnigrado_2.jpg"
  alt="Team"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>

// Opción 2: Generar con librería (plaiceholder)
import { getPlaiceholder } from 'plaiceholder'

export async function getStaticProps() {
  const { base64, img } = await getPlaiceholder('/media/shared/hero-extras/stand_barnigrado_2.jpg')

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  }
}
```

### Quality

```tsx
// Quality por defecto: 75 (buen balance)
<Image src="/image.jpg" alt="..." quality={75} />

// Mayor calidad para hero images
<Image src="/hero.jpg" alt="..." quality={90} />

// Menor calidad para thumbnails
<Image src="/thumb.jpg" alt="..." quality={60} />
```

---

## Configuración Next.js

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Formatos de imagen (por defecto: ['image/webp'])
    formats: ['image/avif', 'image/webp'],

    // Tamaños de dispositivo (responsive breakpoints)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Tamaños de imagen
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Dominios permitidos para imágenes externas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/intesistemas/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

    // Duración de caché (segundos)
    minimumCacheTTL: 60,

    // Deshabilitar Static Image Import (opcional)
    // disableStaticImages: false,

    // Configuración de loader (por defecto: 'default')
    // loader: 'cloudinary', // o 'imgix', 'akamai', etc.
  },
}

module.exports = nextConfig
```

---

## Estructura de Carpetas

```
public/
└── images/
    ├── hero/
    │   ├── office-team.jpg (1920x1080)
    │   ├── technology.jpg
    │   └── innovation.jpg
    ├── services/
    │   ├── web-development.jpg (800x600)
    │   ├── consulting.jpg
    │   ├── cloud.jpg
    │   └── mobile.jpg
    ├── portfolio/
    │   ├── project-01/
    │   │   ├── cover.jpg (1200x800)
    │   │   ├── detail-1.jpg
    │   │   └── detail-2.jpg
    │   └── project-02/
    │       └── ...
    ├── gallery/
    │   ├── office-01.jpg (1200x800)
    │   ├── office-02.jpg
    │   ├── team-01.jpg
    │   └── ...
    ├── team/
    │   ├── john-doe.jpg (400x400)
    │   ├── jane-smith.jpg
    │   └── ...
    └── logos/
        ├── logo.svg
        ├── logo-white.svg
        └── logo-icon.svg
```

---

## Galería de Imágenes

### Grid Gallery

```tsx
// components/gallery/ImageGallery.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lightbox } from './Lightbox'

interface ImageItem {
  src: string
  alt: string
  width: number
  height: number
}

interface Props {
  images: ImageItem[]
}

export function ImageGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </>
  )
}
```

### Lightbox

```tsx
// components/gallery/Lightbox.tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

interface ImageItem {
  src: string
  alt: string
  width: number
  height: number
}

interface Props {
  images: ImageItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: Props) {
  const currentImage = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1)
      }
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [currentIndex, images.length, onClose, onNavigate])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Cerrar"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex - 1)
          }}
          className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Anterior"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="max-h-[90vh] w-auto object-contain"
          priority
        />
        <p className="mt-4 text-center text-sm text-white">{currentImage.alt}</p>
      </div>

      {/* Next Button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex + 1)
          }}
          className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Siguiente"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}
```

---

## Optimización de Imágenes

### Herramientas de Compresión

**Online:**
- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Editor de Google
- [ImageOptim](https://imageoptim.com/) - MacOS app

**CLI:**
```bash
# Sharp (Node.js)
npm install sharp
node scripts/optimize-images.js

# ImageMagick
brew install imagemagick
magick convert input.jpg -quality 85 output.jpg

# WebP conversion
cwebp -q 85 input.jpg -o output.webp
```

### Script de Optimización

```js
// scripts/optimize-images.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = './public/media/original'
const outputDir = './public/media/optimized'

async function optimizeImages() {
  const files = fs.readdirSync(inputDir)

  for (const file of files) {
    const inputPath = path.join(inputDir, file)
    const outputPath = path.join(outputDir, file)

    // Optimizar JPEG/PNG
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath)

    // Generar WebP
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath.replace(/\.(jpg|png)$/, '.webp'))

    console.log(`Optimized: ${file}`)
  }
}

optimizeImages()
```

### Tamaños Recomendados

| Uso | Dimensiones | Peso Máximo |
|-----|-------------|-------------|
| Hero Images | 1920x1080px | 200KB |
| Service Cards | 800x600px | 100KB |
| Portfolio | 1200x800px | 150KB |
| Gallery | 1200x800px | 150KB |
| Thumbnails | 400x300px | 50KB |
| Team Photos | 400x400px | 60KB |
| Logos (PNG/SVG) | Variable | 50KB |

---

## Imágenes Externas (CDN)

### Cloudinary

```js
// next.config.js
module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/intesistemas/',
  },
}
```

```tsx
// Uso
<Image
  src="images/hero.jpg" // Ruta relativa a Cloudinary
  alt="Hero"
  width={1200}
  height={600}
/>
```

### URL Transformation

```tsx
// Con parámetros de transformación
<Image
  src="https://res.cloudinary.com/intesistemas/image/upload/w_800,h_600,c_fill,f_auto,q_auto/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
/>
```

---

## Lazy Loading Avanzado

### Intersection Observer

```tsx
// components/LazyImage.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function LazyImage({ src, alt, width, height, className }: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={className}>
      {isVisible ? (
        <Image src={src} alt={alt} width={width} height={height} />
      ) : (
        <div
          className="animate-pulse bg-gray-200"
          style={{ width, height }}
        />
      )}
    </div>
  )
}
```

---

## SVG Icons

### Inline SVG

```tsx
// components/icons/CheckIcon.tsx
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

// Uso
<CheckIcon className="h-6 w-6 text-green-500" />
```

### SVG como Imagen

```tsx
import Image from 'next/image'

<Image
  src="/media/shared/logos/brand/logointe.webp"
  alt="Inte Sistemas Logo"
  width={200}
  height={50}
/>
```

---

## Performance Checklist

- [ ] Usar Next.js Image component para todas las imágenes
- [ ] Añadir `priority` a imágenes above the fold
- [ ] Especificar width y height para prevenir CLS
- [ ] Comprimir imágenes antes de subir (< 200KB para hero)
- [ ] Usar formatos modernos (WebP, AVIF)
- [ ] Implementar lazy loading para galerías
- [ ] Añadir alt text descriptivo para SEO
- [ ] Usar placeholder blur para mejor UX
- [ ] Configurar sizes attribute para responsive
- [ ] Optimizar quality según contexto (60-90)

---

## Monitoreo

### Lighthouse

```bash
# Ejecutar audit
npm run build
npm run start
# Abrir Chrome DevTools > Lighthouse
```

**Métricas objetivo:**
- LCP < 2.5s (imagen más grande debe cargar rápido)
- CLS < 0.1 (sin layout shift por imágenes)

### Next.js Analytics

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

**Fecha:** 2025-11-21
