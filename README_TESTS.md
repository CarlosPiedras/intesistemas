# Tests y Diagnósticos - Intesistemas

## Resumen de Tests Creados

Este proyecto incluye tests completos para detectar y diagnosticar problemas de performance y visibilidad en la navegación.

## 🎯 Problemas Detectados y Solucionados

### 1. ✅ Elementos Invisibles al Navegar (SOLUCIONADO)
**Problema**: Títulos y componentes con `opacity: 0` que no se vuelven visibles al navegar entre páginas.

**Causa**: `whileInView` con `IntersectionObserver` no se disparaba en viewport inicial.

**Solución Aplicada**:
- Componentes críticos cambiados a `animate` en lugar de `whileInView`
- `ScrollReveal.tsx` actualizado con verificación de viewport inicial
- Agregado `amount: 0.3` a elementos con `whileInView` para mayor sensibilidad

**Archivos Corregidos**:
- ✅ `src/components/home/Services.tsx`
- ✅ `src/components/home/OurSectors.tsx`
- ✅ `src/components/effects/ScrollReveal.tsx`
- ✅ `src/components/services/ServicesIntro.tsx`

### 2. 🔍 Imágenes de Hero Lentas (EN INVESTIGACIÓN)
**Problema**: Imágenes del hero tardan en cargar al cambiar de página.

**Tests Creados**:
- Tests de Playwright para medir tiempos de carga
- Test manual interactivo en HTML

## 📋 Índice de Tests

### Tests Automatizados (Playwright)

| Test | Archivo | Comando | Descripción |
|------|---------|---------|-------------|
| **Visibilidad de Animaciones** | `tests/navigation-visibility.spec.ts` | `npm run test:visibility` | Detecta elementos invisibles al navegar |
| **Carga de Heroes** | `tests/hero-image-loading.spec.ts` | `npm run test:heroes` | Mide tiempos y detecta imágenes lentas |

### Tests Manuales (Navegador)

| Test | Archivo | Uso |
|------|---------|-----|
| **Test de Animaciones** | `test-animations.html` | Detecta elementos con `opacity:0` en tiempo real |
| **Test de Carga de Heroes** | `test-hero-loading.html` | Mide tiempos de carga de imágenes/videos |

## 🚀 Cómo Ejecutar los Tests

### Prerequisito: Servidor de Desarrollo

Todos los tests requieren que el servidor de desarrollo esté corriendo:

```bash
npm run dev
```

### Tests de Playwright

#### Instalar Dependencias (Solo Primera Vez)

**En WSL/Linux**:
```bash
# Instalar dependencias del sistema
sudo apt-get update
sudo apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 \
  libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 \
  libxrandr2 libgbm1 libasound2 libpango-1.0-0 libcairo2

# Instalar navegador de Playwright
npx playwright install chromium
```

#### Ejecutar Tests

```bash
# Todos los tests
npm test

# Tests de visibilidad (animaciones)
npm run test:visibility

# Tests de carga de heroes
npm run test:heroes

# Modo UI interactivo (recomendado)
npm run test:ui
npm run test:heroes:ui

# Test específico
npm run test:heroes -- --grep "tiempos de carga"
```

### Tests Manuales (Sin Instalación)

```bash
# 1. Asegúrate que el servidor esté corriendo
npm run dev

# 2. Abre en tu navegador:
# - test-animations.html (para problemas de visibilidad)
# - test-hero-loading.html (para carga de imágenes)
```

## 📊 Tests de Playwright Disponibles

### 1. Tests de Visibilidad (`navigation-visibility.spec.ts`)

#### Test: "Los títulos H1 deben ser visibles inmediatamente"
```bash
npm run test:visibility -- --grep "H1"
```
- ✅ Navega por todas las páginas
- ✅ Verifica que H1 tenga `opacity > 0`
- ✅ Captura screenshots de problemas

#### Test: "Navegación secuencial"
```bash
npm run test:visibility -- --grep "secuencial"
```
- ✅ Navega página por página
- ✅ Detecta elementos invisibles en viewport
- ✅ Lista todos los elementos con `opacity: 0`

#### Test: "Verificar visibilidad después de scroll"
```bash
npm run test:visibility -- --grep "scroll"
```
- ✅ Reproduce el bug de scroll up/down
- ✅ Verifica que elementos aparezcan correctamente

#### Test: "Tiempos de animación no bloqueantes"
```bash
npm run test:visibility -- --grep "tiempos"
```
- ✅ Mide tiempo hasta que H1 sea visible
- ✅ Verifica que sea < 1 segundo

### 2. Tests de Carga de Heroes (`hero-image-loading.spec.ts`)

#### Test: "Verificar priority attribute"
```bash
npm run test:heroes -- --grep "priority"
```
- ✅ Verifica que imágenes tengan `fetchpriority="high"`
- ✅ Detecta imágenes sin prioridad configurada

#### Test: "Medir tiempos de carga"
```bash
npm run test:heroes -- --grep "tiempos de carga"
```
- ✅ Mide tiempo de carga de cada hero
- ✅ Muestra estadísticas por página
- ✅ Detecta páginas lentas (> 2s)

#### Test: "Navegación rápida"
```bash
npm run test:heroes -- --grep "Navegación rápida"
```
- ✅ Simula usuario navegando rápido
- ✅ Detecta imágenes que no cargan a tiempo
- ✅ Captura screenshots de problemas

#### Test: "Estado de carga de imágenes"
```bash
npm run test:heroes -- --grep "estado de carga"
```
- ✅ Verifica `complete` y `naturalWidth`
- ✅ Muestra estado detallado de cada imagen
- ✅ Detecta imágenes rotas

#### Test: "Simular conexión lenta"
```bash
npm run test:heroes -- --grep "conexión lenta"
```
- ✅ Simula 3G lento (500ms delay)
- ✅ Verifica que heroes sean usables
- ✅ Detecta problemas de UX en conexiones lentas

#### Test: "Web Vitals"
```bash
npm run test:heroes -- --grep "Web Vitals"
```
- ✅ Mide LCP (Largest Contentful Paint)
- ✅ Verifica que LCP < 2.5s
- ✅ Reporta problemas de performance

#### Test: "Verificar preload"
```bash
npm run test:heroes -- --grep "preload"
```
- ✅ Verifica tags `<link rel="preload">`
- ✅ Lista recursos precargados
- ✅ Detecta imágenes críticas sin preload

## 🎨 Tests Manuales Interactivos

### Test de Animaciones (`test-animations.html`)

**Características**:
- 📊 Monitoreo en tiempo real de elementos invisibles
- 🔄 Botones de navegación entre páginas
- ✅ Verificación automática de visibilidad
- 📸 Test de scroll automático
- 📈 Estadísticas de H1 y elementos con opacity:0

**Cómo usar**:
1. Abre el archivo en tu navegador
2. Usa botones para navegar o ejecuta verificaciones
3. Observa los logs en tiempo real
4. Elementos rojos = problemas detectados

### Test de Carga de Heroes (`test-hero-loading.html`)

**Características**:
- ⏱️ Medición de tiempos de carga
- 📊 Gráficas de performance
- 🖼️ Verificación de `fetchpriority`
- 🚀 Test automático de todas las páginas
- 📈 Historial de cargas con métricas

**Cómo usar**:
1. Abre el archivo en tu navegador
2. Click en "Test Automático" para análisis completo
3. O navega manualmente con los botones
4. Observa métricas en las tarjetas superiores

**Interpretación de Resultados**:
- 🟢 Verde (< 1000ms): Excelente
- 🟡 Amarillo (1000-2000ms): Aceptable
- 🔴 Rojo (> 2000ms): Lento, requiere optimización

## 📖 Documentación Adicional

### Guías Detalladas

| Documento | Descripción |
|-----------|-------------|
| `ANIMATION_BUGS.md` | Análisis técnico del problema de animaciones |
| `SOLUTION_EXAMPLE.md` | Ejemplos de cómo corregir animaciones |
| `CORRECCIONES_APLICADAS.md` | Resumen de correcciones implementadas |
| `HERO_PERFORMANCE_GUIDE.md` | Guía completa de optimización de heroes |
| `README_TESTS.md` | Este documento |

### Componentes Útiles

| Componente | Ubicación | Uso |
|------------|-----------|-----|
| `SmartMotion` | `src/components/effects/SmartMotion.tsx` | Componente que auto-detecta viewport |
| `InstantMotion` | `src/components/effects/SmartMotion.tsx` | Animación inmediata para heroes |
| `ScrollReveal` | `src/components/effects/ScrollReveal.tsx` | Revelado al scroll (corregido) |

## 🔧 Resolución de Problemas

### "Error: Target page has been closed"
**Problema**: Falta instalar dependencias del sistema para Chromium.

**Solución**:
```bash
sudo apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 \
  libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1
npx playwright install chromium
```

### "Cannot read from cross-origin frame"
**Problema**: Los tests manuales HTML tienen restricciones de CORS.

**Solución**: Los tests funcionan correctamente con iframe del mismo origen (localhost:3000).

### Tests muy lentos
**Problema**: Los tests tardan demasiado.

**Solución**:
```bash
# Ejecutar tests en paralelo (más rápido)
npm test -- --workers=4

# Ejecutar solo un test específico
npm run test:heroes -- --grep "tiempos"
```

## 📈 Métricas de Performance

### Tiempos Objetivo

| Métrica | Ideal | Aceptable | Lento |
|---------|-------|-----------|-------|
| **Carga Hero** | < 1000ms | 1000-2000ms | > 2000ms |
| **H1 Visible** | < 500ms | 500-1000ms | > 1000ms |
| **LCP** | < 2.5s | 2.5-4s | > 4s |
| **FetchPriority** | "high" | - | null/undefined |

### Estado Actual de Heroes

| Página | Priority | Tipo | Estado |
|--------|----------|------|--------|
| `/` (Home) | N/A | Video | ✅ |
| `/about` | ✅ | Image | ✅ |
| `/servicios` | ✅ | Image | ✅ |
| `/servicios/automatizacion-industrial` | ✅ | Image | ✅ |
| `/servicios/distribucion-energia` | ✅ | Image | ✅ |
| `/servicios/soporte-tecnico` | ⚠️ | Image | En verificación |
| `/servicios/gestion-proyectos` | ⚠️ | Image | En verificación |

## 🎯 Próximos Pasos

### Recomendaciones Inmediatas

1. **Ejecutar Test Automático**:
   ```bash
   # Abrir test-hero-loading.html
   # Click en "Test Automático"
   ```

2. **Revisar Resultados**:
   - Identificar páginas con tiempos > 2s
   - Verificar imágenes sin `fetchpriority="high"`

3. **Optimizar Imágenes Lentas**:
   - Comprimir imágenes grandes
   - Convertir a WebP
   - Verificar tamaños (máx 1920px width)

4. **Re-ejecutar Tests**:
   ```bash
   npm run test:heroes
   ```

### Mejoras Futuras (Opcional)

- [ ] Agregar placeholders blur a todas las imágenes
- [ ] Implementar prefetch de imágenes de siguiente página
- [ ] Considerar CDN para serving más rápido
- [ ] Agregar progressive image loading
- [ ] Implementar lazy loading para imágenes below-fold

## 📞 Soporte

Si encuentras problemas o necesitas ayuda:

1. Revisa la documentación en `/HERO_PERFORMANCE_GUIDE.md`
2. Ejecuta los tests manuales para diagnóstico rápido
3. Verifica que el servidor esté corriendo en localhost:3000

## 📝 Comandos Rápidos de Referencia

```bash
# Desarrollo
npm run dev                    # Iniciar servidor

# Tests automatizados
npm test                       # Todos los tests
npm run test:ui                # Modo UI interactivo
npm run test:visibility        # Solo tests de visibilidad
npm run test:heroes            # Solo tests de heroes
npm run test:heroes:ui         # Heroes en modo UI

# Tests específicos
npm run test:heroes -- --grep "tiempos"     # Solo tiempos de carga
npm run test:heroes -- --grep "priority"    # Solo verificar priority
npm run test:visibility -- --grep "H1"      # Solo verificar H1

# Build
npm run build                  # Build de producción
npm start                      # Servidor de producción
```

## ✅ Checklist de Verificación

Antes de hacer deploy a producción:

- [ ] Ejecutar `npm run test:heroes` sin errores
- [ ] Ejecutar `npm run test:visibility` sin errores
- [ ] Verificar todos los heroes con test manual
- [ ] LCP < 2.5s en todas las páginas
- [ ] Todas las imágenes hero con `priority`
- [ ] No hay elementos invisibles al navegar
- [ ] Tiempos de carga < 2s en todas las páginas
