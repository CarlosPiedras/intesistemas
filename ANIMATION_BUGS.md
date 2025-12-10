# Análisis: Problema de Visibilidad en Animaciones

## Problema Detectado

Al navegar entre páginas, algunos componentes no se ven (están en blanco/invisible).
Al hacer scroll hacia abajo y luego hacia arriba, los elementos aparecen.

## Causa Raíz

El problema ocurre con componentes que usan `framer-motion` con el patrón:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

### Por qué falla:

1. **PageWrapper** resetea la página con `key={pathname}` y `scrollTo(0, 0)`
2. Los componentes se montan con `initial={{ opacity: 0 }}`
3. `whileInView` usa `IntersectionObserver` para detectar cuando el elemento está visible
4. **PROBLEMA**: Si el elemento ya está en el viewport inicial, el `IntersectionObserver`
   a veces no se dispara inmediatamente durante la navegación SPA
5. Resultado: elemento con `opacity: 0` permanece invisible
6. Al hacer scroll, el elemento entra/sale del viewport, disparando el observer

## Componentes Afectados

Componentes que usan `whileInView` (74 archivos encontrados):

- Hero sections
- Títulos H2 en Services
- Secciones de intro
- Cards de servicios
- Y muchos más...

## Soluciones Propuestas

### Opción 1: Usar `animate` en lugar de `whileInView` para viewport inicial

Para elementos que están visibles al cargar la página (hero, títulos principales):

```tsx
// ANTES (problemático)
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

// DESPUÉS (correcto)
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Opción 2: Agregar delay inicial a `whileInView`

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
```

### Opción 3: Enfoque híbrido (RECOMENDADO)

```tsx
import { useState, useEffect } from 'react';

const [isInitialLoad, setIsInitialLoad] = useState(true);

useEffect(() => {
  // Forzar animación inmediata en viewport inicial
  const timer = setTimeout(() => setIsInitialLoad(false), 100);
  return () => clearTimeout(timer);
}, []);

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInitialLoad ? { opacity: 1, y: 0 } : undefined}
  whileInView={!isInitialLoad ? { opacity: 1, y: 0 } : undefined}
  viewport={{ once: true }}
>
```

### Opción 4: Modificar ScrollReveal (para componentes no-motion)

El componente `ScrollReveal.tsx` tiene el mismo problema. Solución:

```tsx
useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  // Verificar si ya está visible al montar
  const rect = element.getBoundingClientRect();
  const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

  if (isInViewport) {
    // Elemento ya visible, animar inmediatamente
    setTimeout(() => setIsVisible(true), delay);
    return;
  }

  // Si no está visible, usar IntersectionObserver
  const observer = new IntersectionObserver(/*...*/);
  observer.observe(element);

  return () => observer.disconnect();
}, []);
```

## Archivos Prioritarios a Corregir

1. `/src/components/heroes/Hero.tsx` - Hero principal
2. `/src/components/home/Services.tsx` - Títulos de servicios
3. `/src/components/about/AboutHero.tsx` - Hero de About
4. `/src/components/services/ServicesHero.tsx` - Hero de Servicios
5. `/src/components/effects/ScrollReveal.tsx` - Componente base

## Tests Creados

Se crearon tests de Playwright en `/tests/navigation-visibility.spec.ts` que:

- Navegan entre todas las páginas
- Verifican visibilidad inmediata de H1
- Detectan elementos con opacity:0 en viewport
- Reproducen el bug de scroll hacia arriba/abajo
- Capturan screenshots de problemas

Para ejecutar (una vez instaladas las dependencias de sistema):

```bash
npm test
npm run test:ui  # Modo interactivo
```

## Instalación de Dependencias para Tests (WSL)

```bash
# Instalar dependencias de sistema necesarias
sudo apt-get update
sudo apt-get install -y \\
  libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 \\
  libcups2 libdrm2 libxkbcommon0 libxcomposite1 \\
  libxdamage1 libxfixes3 libxrandr2 libgbm1 \\
  libasound2 libpango-1.0-0 libcairo2

# Instalar navegadores de Playwright
npx playwright install chromium
```

## Recomendación Final

**Solución Inmediata**: Cambiar componentes críticos (Heroes, títulos principales)
de `whileInView` a `animate` para animaciones inmediatas.

**Solución a Largo Plazo**: Crear un componente wrapper inteligente que:
- Detecte si el elemento está en viewport inicial
- Use `animate` si está visible al montar
- Use `whileInView` si está más abajo en la página

Esto mantendría la funcionalidad de animaciones al scroll pero sin el bug de visibilidad inicial.
