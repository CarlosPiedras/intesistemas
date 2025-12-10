# Ejemplo de Solución al Problema de Animaciones

## Solución Rápida: Cambiar whileInView por animate

### ANTES (Problemático)

```tsx
// src/components/home/Services.tsx (líneas 45-54)
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
  style={{ color: '#1175c7' }}
>
  NUESTROS SERVICIOS
</motion.h2>
```

**Problema**: El título queda invisible al navegar a la página porque `whileInView` no se dispara.

### DESPUÉS (Corregido)

```tsx
// Cambiar whileInView por animate
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
  style={{ color: '#1175c7' }}
>
  NUESTROS SERVICIOS
</motion.h2>
```

## Solución Avanzada: Usar SmartMotion

### Opción 1: Usar el componente SmartMotion

```tsx
import { SmartMotion } from '@/components/effects/SmartMotion';

// El componente detecta automáticamente si está en viewport inicial
<SmartMotion
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  autoDetect={true}
>
  <h2 className="text-4xl md:text-5xl">NUESTROS SERVICIOS</h2>
</SmartMotion>
```

### Opción 2: Usar InstantMotion para elementos siempre visibles

```tsx
import { InstantMotion } from '@/components/effects/SmartMotion';

// Para heroes y títulos principales que siempre están visibles
<InstantMotion
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1>Título que siempre se verá</h1>
</InstantMotion>
```

## Guía de Migración por Tipo de Componente

### Heroes (ALTA PRIORIDAD)

**Archivos a corregir**:
- `src/components/heroes/Hero.tsx` ✅ Ya usa `animate` correctamente
- `src/components/about/AboutHero.tsx`
- `src/components/services/ServicesHero.tsx`
- `src/components/services/AutomationHero.tsx`
- `src/components/services/DistributionHero.tsx`

**Acción**: Cambiar todos los `motion` components a usar `animate` en lugar de `whileInView`.

### Títulos de Sección (ALTA PRIORIDAD)

**Archivos a corregir**:
- `src/components/home/Services.tsx` (línea 45)
- `src/components/about/AboutIntro.tsx`
- `src/components/services/ServicesIntro.tsx`
- Todos los componentes showcase

**Acción**:
- Si el título está cerca del top: usar `animate`
- Si el título está más abajo: mantener `whileInView` pero agregar `amount: 0.3`

```tsx
// Para títulos más abajo en la página
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}  // <-- Agregar amount
  transition={{ duration: 0.5 }}
>
```

### Cards y Elementos Grid (MEDIA PRIORIDAD)

**Archivos a corregir**:
- `src/components/home/Services.tsx` (líneas 122-128, cards individuales)
- `src/components/services/ServicesGrid.tsx`

**Acción**: Mantener `whileInView` pero ajustar el `viewport`:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}  // <-- Más sensible
  transition={{ duration: 0.5 }}
>
```

### ScrollReveal personalizado

**Archivo**: `src/components/effects/ScrollReveal.tsx`

**Problema detectado en línea 40-60**: El `IntersectionObserver` no verifica si el elemento ya está visible al montar.

**Solución**: Agregar verificación inicial

```tsx
useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  // NUEVO: Verificar si ya está visible
  const rect = element.getBoundingClientRect();
  const isInitiallyVisible =
    rect.top >= 0 &&
    rect.top < window.innerHeight * threshold;

  if (isInitiallyVisible) {
    // Animar inmediatamente
    setTimeout(() => setIsVisible(true), delay);
    return;
  }

  // Si no está visible, usar IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold }
  )

  observer.observe(element)
  return () => observer.disconnect()
}, [delay, threshold])
```

## Plan de Implementación Sugerido

### Fase 1: Fixes Críticos (30 min)
1. ✅ Hero principal (`src/components/heroes/Hero.tsx`) - Ya correcto
2. ⚠️ Services títulos (`src/components/home/Services.tsx:45-54`)
3. ⚠️ AboutHero (`src/components/about/AboutHero.tsx`)
4. ⚠️ ServicesHero (`src/components/services/ServicesHero.tsx`)

### Fase 2: ScrollReveal (15 min)
5. ⚠️ Corregir `src/components/effects/ScrollReveal.tsx`

### Fase 3: Componentes Showcase (opcional)
6. ⚠️ Revisar y corregir componentes en `src/components/showcase/`

### Fase 4: Testing (30 min)
7. Abrir `test-animations.html` en navegador
8. Navegar entre páginas y verificar visibilidad
9. Ejecutar tests de Playwright (si se configuran las deps)

## Comandos Útiles

```bash
# Encontrar todos los usos de whileInView
grep -r "whileInView" src/components/ --include="*.tsx"

# Abrir test manual en navegador
# 1. Asegurarse que el servidor esté corriendo
npm run dev

# 2. Abrir en navegador (usar extensión Live Server o similar)
# open test-animations.html

# Ejecutar tests de Playwright (una vez configurado)
npm test
npm run test:ui
```

## Resultado Esperado

Después de aplicar las correcciones:

✅ Todos los títulos visibles inmediatamente al cargar
✅ No más elementos en blanco al navegar
✅ Animaciones funcionan correctamente al hacer scroll
✅ Sin necesidad de scroll up/down para ver contenido
✅ Mejor experiencia de usuario
