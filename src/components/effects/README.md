# Componentes de Efectos - Inte Sistemas

Colección de componentes React para crear efectos visuales modernos como parallax y animaciones de scroll.

## Componentes Disponibles

### 1. ParallaxSection

Crea secciones con efecto parallax que se mueven suavemente mientras el usuario hace scroll.

**Características:**
- Movimiento suave basado en scroll
- Control de velocidad y dirección
- Optimizado con `will-change` para mejor performance
- TypeScript support completo

**Uso:**
```tsx
import { ParallaxSection } from '@/components/effects'

<ParallaxSection speed={0.5} direction="up">
  <h2>Este contenido tendrá efecto parallax</h2>
</ParallaxSection>
```

---

### 2. ParallaxBackground

Fondo de imagen con efecto parallax, ideal para hero sections y banners.

**Características:**
- Integración con Next.js Image
- Overlay opcional con opacidad configurable
- Movimiento parallax optimizado
- Responsive y adaptable

**Uso:**
```tsx
import { ParallaxBackground } from '@/components/effects'

<section className="relative h-screen overflow-hidden">
  <ParallaxBackground
    imageSrc="/images/hero.jpg"
    speed={0.3}
    overlay
    overlayOpacity={50}
  />
  <div className="relative z-10">
    {/* Tu contenido aquí */}
  </div>
</section>
```

---

### 3. ScrollReveal

Revela contenido con animaciones cuando el usuario hace scroll.

**Características:**
- Múltiples tipos de animación
- Intersection Observer API
- Configurable delay y duración
- Se ejecuta solo una vez por defecto

**Uso:**
```tsx
import { ScrollReveal } from '@/components/effects'

<ScrollReveal animation="slide-up" delay={200}>
  <h2>Este título aparecerá al hacer scroll</h2>
</ScrollReveal>
```

---

## Instalación y Setup

Estos componentes están incluidos en el proyecto. Para usarlos:

1. Importa desde `@/components/effects`
2. Asegúrate de que el componente padre tenga configuración adecuada:
   - Para `ParallaxBackground`: el contenedor debe tener `position: relative` y `overflow: hidden`
   - Para `ScrollReveal`: funciona en cualquier contexto

---

## Ejemplos Completos

### Hero Section con Parallax

```tsx
import { ParallaxBackground, ScrollReveal } from '@/components/effects'

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <ParallaxBackground
        imageSrc="/images/hero-bg.jpg"
        speed={0.3}
        overlay
        overlayOpacity={40}
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in-up" delay={200}>
            <h1 className="text-6xl font-bold text-white">
              Bienvenido
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={400}>
            <p className="text-xl text-white/90 mt-4">
              Diseño minimalista y moderno
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

### Sección de Features con Animación

```tsx
import { ParallaxSection, ScrollReveal } from '@/components/effects'

export function Features() {
  const features = [
    { title: 'Rápido', description: '...' },
    { title: 'Seguro', description: '...' },
    { title: 'Escalable', description: '...' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ParallaxSection speed={0.3}>
          <h2 className="text-4xl font-bold text-center mb-16">
            Características
          </h2>
        </ParallaxSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              animation="scale"
              delay={index * 100}
            >
              <div className="card-minimal">
                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Performance Considerations

### Buenas Prácticas

✅ **DO:**
- Limitar el número de componentes parallax por página (3-4 máximo)
- Usar imágenes optimizadas con Next.js Image
- Aplicar parallax a elementos grandes (secciones completas)
- Usar `threshold` apropiado en ScrollReveal (0.1 - 0.3)

❌ **DON'T:**
- Aplicar parallax a demasiados elementos pequeños
- Usar imágenes muy grandes sin optimizar
- Animar elementos muy pequeños o texto
- Usar speed > 1.0 en parallax (puede causar mareos)

### Optimización

Los componentes están optimizados con:
- `will-change: transform` para mejor rendering
- Event listeners con `passive: true`
- Intersection Observer para ScrollReveal
- Cleanup de event listeners en useEffect

---

## TypeScript

Todos los componentes incluyen tipos completos:

```tsx
import type {
  ParallaxSectionProps,
  ParallaxBackgroundProps,
  ScrollRevealProps,
} from '@/components/effects'
```

---

## Soporte de Navegadores

- Chrome/Edge: ✅ Completo
- Firefox: ✅ Completo
- Safari: ✅ Completo
- Mobile: ✅ Completo (con smooth scroll)

---

## Troubleshooting

### El parallax no se mueve
- Verifica que el contenedor padre tenga `overflow: hidden`
- Asegúrate de que hay suficiente scroll en la página

### ScrollReveal no aparece
- Verifica que el elemento esté visible en viewport
- Ajusta el `threshold` si es necesario
- Comprueba que no hay z-index conflicts

### Performance issues
- Reduce el número de elementos parallax
- Aumenta el valor de `speed` (movimiento más lento)
- Verifica que las imágenes estén optimizadas

---

## Contribuir

Para agregar nuevos efectos o mejorar los existentes:

1. Crea el componente en `/src/components/effects/`
2. Exporta desde `index.ts`
3. Agrega documentación
4. Actualiza este README

---

**Última actualización:** 2025-11-21
