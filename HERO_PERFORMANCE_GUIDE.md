# Guía: Performance de Carga de Imágenes en Heroes

## Problema Reportado
Al cambiar de página, a veces las imágenes del hero tardan en cargar, mostrando la sección vacía o con delay notable.

## Causas Comunes

### 1. Falta de Priority en Imágenes
Las imágenes del hero son "above the fold" (visibles sin scroll) y deben tener prioridad alta.

**Solución**: Usar el prop `priority` en Next.js Image:
```tsx
<Image
  src="/media/hero.jpg"
  alt="Hero"
  fill
  priority  // <-- CRÍTICO para imágenes above the fold
/>
```

### 2. Preload Insuficiente
Next.js con `priority` genera automáticamente preload links, pero puede no ser suficiente.

### 3. Imágenes Muy Grandes
Imágenes de alta resolución sin optimizar causan delays notables.

### 4. Navegación SPA Sin Cache
Al navegar entre páginas, las imágenes se descargan de nuevo si no están en cache.

## Estado Actual de los Heroes

### ✅ Heroes con `priority` configurado:
- `/` (Home) - Usa VIDEO en lugar de imagen
- `/about` - AboutHero.tsx ✅
- `/servicios` - ServicesHero.tsx ✅
- `/servicios/automatizacion-industrial` - AutomationHero.tsx ✅
- `/servicios/distribucion-energia` - DistributionHero.tsx ✅
- `/contacto` - Usa ContactIntro (sin hero image)

### Componentes verificados:
```
src/components/about/AboutHero.tsx:16:          priority ✅
src/components/services/ServicesHero.tsx:16:    priority ✅
src/components/services/AutomationHero.tsx:16:  priority ✅
src/components/services/DistributionHero.tsx:16: priority ✅
```

## Tests de Playwright Creados

### Archivo: `tests/hero-image-loading.spec.ts`

#### Test 1: Verificar Priority Attribute
```bash
npm run test:heroes -- --grep "priority"
```
Verifica que todas las imágenes tengan `fetchpriority="high"`.

#### Test 2: Medir Tiempos de Carga
```bash
npm run test:heroes -- --grep "tiempos de carga"
```
Mide cuánto tarda cada hero en cargar y muestra estadísticas.

#### Test 3: Navegación Rápida
```bash
npm run test:heroes -- --grep "Navegación rápida"
```
Simula usuario navegando rápidamente entre páginas y detecta imágenes que no cargan a tiempo.

#### Test 4: Estado de Carga
```bash
npm run test:heroes -- --grep "estado de carga"
```
Verifica el estado completo de cada imagen durante la carga.

#### Test 5: Conexión Lenta
```bash
npm run test:heroes -- --grep "conexión lenta"
```
Simula 3G lento y verifica que los heroes sean usables.

#### Test 6: Web Vitals
```bash
npm run test:heroes -- --grep "Web Vitals"
```
Mide LCP (Largest Contentful Paint) para cada página.

## Cómo Ejecutar los Tests

### Opción 1: Modo UI (Recomendado)
```bash
npm run test:heroes:ui
```
Abre interfaz visual donde puedes:
- Ver tests ejecutándose en tiempo real
- Navegar por los resultados
- Repetir tests específicos

### Opción 2: Modo Consola
```bash
npm run test:heroes
```
Ejecuta todos los tests y muestra resultados en consola.

### Opción 3: Test Específico
```bash
# Solo tiempos de carga
npm run test:heroes -- --grep "tiempos de carga"

# Solo navegación rápida
npm run test:heroes -- --grep "Navegación rápida"
```

## Interpretación de Resultados

### Tiempos Ideales:
- ✅ **< 1000ms**: Excelente
- ⚠️  **1000-2000ms**: Aceptable
- ❌ **> 2000ms**: Lento, requiere optimización

### LCP (Largest Contentful Paint):
- ✅ **< 2.5s**: Bueno
- ⚠️  **2.5-4s**: Necesita mejora
- ❌ **> 4s**: Malo

### FetchPriority:
- ✅ **"high"**: Correcto para heroes
- ❌ **null/undefined**: Falta configurar priority

## Soluciones Recomendadas

### 1. Optimizar Tamaño de Imágenes

Verificar dimensiones y tamaño de archivos:
```bash
ls -lh public/media/pages/*/hero.jpg
```

**Recomendación**:
- Width: máximo 1920px
- Formato: WebP o AVIF (mejor compresión)
- Calidad: 75-85%

### 2. Agregar Skeleton/Placeholder

Mientras la imagen carga, mostrar un placeholder:

```tsx
<div className="absolute inset-0 bg-gradient-to-br from-secondary-900 to-primary-900">
  {/* Placeholder mientras carga */}
</div>
<Image
  src="/hero.jpg"
  fill
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 3. Usar BlurDataURL

Next.js puede generar placeholders borrosos automáticamente:

```bash
# Generar blurDataURL para una imagen
node -e "require('next/dist/server/image-optimizer').getImageBlurSvg({ widthInt: 8, heightInt: 8, blurWidth: 8, blurHeight: 8, dataURL: 'base64...' })"
```

O usar herramientas como: https://blurred.dev/

### 4. Precargar Imágenes de Rutas Comunes

Agregar preload manual en el `<head>`:

```tsx
// app/layout.tsx
<head>
  <link
    rel="preload"
    href="/media/pages/about/hero.jpg"
    as="image"
    type="image/jpeg"
  />
</head>
```

### 5. Considerar Sprites para Múltiples Imágenes

Si usas las mismas imágenes en varios heroes, considera un sprite o CDN con cache agresivo.

## Test Manual Rápido

Sin ejecutar Playwright, puedes verificar manualmente:

1. **Abrir DevTools** (F12)
2. **Network tab** → Filtrar por "Img"
3. **Navegar** entre páginas
4. **Observar**:
   - ¿Cuánto tardan las imágenes del hero?
   - ¿Tienen `Priority: high` en headers?
   - ¿Se descargan de cache (from disk cache)?

### Checklist Manual:
```
□ Imagen del hero aparece < 1 segundo
□ No hay flash de contenido sin imagen
□ Al volver a la página, carga desde cache
□ En DevTools, prioridad es "High" o "Highest"
□ LCP en Lighthouse < 2.5s
```

## Próximos Pasos

1. **Ejecutar tests**: `npm run test:heroes`
2. **Revisar resultados**: Buscar warnings o errores
3. **Optimizar imágenes lentas**: Comprimir o reducir resolución
4. **Re-ejecutar tests**: Verificar mejoras
5. **Considerar CDN**: Para serving más rápido

## Mejoras Futuras (Opcionales)

### Progressive Image Loading
```tsx
import { useState } from 'react';

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && <PlaceholderSkeleton />}
      <Image
        src="/hero.jpg"
        fill
        priority
        onLoadingComplete={() => setImageLoaded(true)}
        className={imageLoaded ? 'opacity-100' : 'opacity-0'}
      />
    </>
  );
}
```

### Image Prefetching para Siguiente Página
```tsx
import { useRouter } from 'next/navigation';

// Prefetch imagen de la siguiente página probable
useEffect(() => {
  const img = new Image();
  img.src = '/media/pages/servicios/hero.jpg';
}, []);
```

## Recursos Útiles

- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Web Vitals](https://web.dev/vitals/)
- [Image Optimization Tools](https://squoosh.app/)
- [WebP Converter](https://developers.google.com/speed/webp)

## Comando Rápido de Diagnóstico

```bash
# Ver todos los tests de heroes en modo UI
npm run test:heroes:ui

# Solo medir tiempos
npm run test:heroes -- --grep "tiempos"

# Ver todos los tests (heroes + visibilidad)
npm test
```
