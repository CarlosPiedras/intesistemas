# Guía de Desarrollo - Inte Sistemas

## Configuración del Entorno

### Requisitos Previos

```bash
# Versiones requeridas
Node.js: >= 18.17.0
npm: >= 9.0.0
Git: >= 2.30.0
```

### Instalación Inicial

```bash
# 1. Clonar repositorio
git clone <repository-url>
cd intesistemas

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir navegador
# http://localhost:3000
```

---

## Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor desarrollo (puerto 3000)
npm run dev -- -p 3001   # Servidor en puerto específico

# Build y Producción
npm run build            # Compilar para producción
npm run start            # Servidor producción (requiere build)

# Calidad de Código
npm run lint             # Ejecutar ESLint
npm run lint:fix         # Corregir problemas de lint automáticamente
npm run type-check       # Verificar tipos TypeScript

# Testing (cuando se implemente)
npm run test             # Ejecutar tests
npm run test:watch       # Tests en modo watch
npm run test:coverage    # Coverage de tests

# Utilidades
npm run analyze          # Analizar tamaño del bundle
npm run clean            # Limpiar archivos generados
```

---

## Workflow de Desarrollo

### 1. Crear Nueva Feature

```bash
# 1. Crear rama desde main/master
git checkout main
git pull origin main
git checkout -b feature/nombre-feature

# 2. Desarrollar
# ... hacer cambios ...

# 3. Commit (ver convenciones más abajo)
git add .
git commit -m "feat: descripción de la feature"

# 4. Push
git push origin feature/nombre-feature

# 5. Crear Pull Request en GitHub/GitLab
```

### 2. Estructura de Commits

Seguimos **Conventional Commits**:

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato (no afecta lógica)
- `refactor`: Refactorización
- `perf`: Mejora de performance
- `test`: Tests
- `chore`: Tareas de mantenimiento
- `ci`: CI/CD

**Ejemplos:**
```bash
feat(i18n): añadir soporte para francés
fix(contact-form): validación de email incorrecta
docs(readme): actualizar instrucciones de instalación
style(header): ajustar espaciado en navegación
refactor(api): simplificar lógica de envío de emails
perf(images): implementar lazy loading en galería
```

### 3. Pull Request Guidelines

**Checklist antes de PR:**
- [ ] Código pasa lint (`npm run lint`)
- [ ] TypeScript sin errores (`npm run type-check`)
- [ ] Build exitoso (`npm run build`)
- [ ] Tests pasan (si existen)
- [ ] Probado en múltiples navegadores
- [ ] Probado responsive (móvil, tablet, desktop)
- [ ] Probado en ambos idiomas (ES/EN)
- [ ] Sin console.logs olvidados
- [ ] Documentación actualizada si es necesario

**Plantilla de PR:**
```markdown
## Descripción
Breve descripción de los cambios

## Tipo de cambio
- [ ] Nueva feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas

## Screenshots (si aplica)
Añadir imágenes antes/después

## Checklist
- [ ] Mi código sigue las convenciones del proyecto
- [ ] He revisado mi propio código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He probado en diferentes navegadores
```

---

## Estructura de Componentes

### Anatomía de un Componente

```tsx
// components/forms/ContactForm.tsx

// 1. Imports
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import type { ContactFormData } from '@/types'

// 2. Types/Interfaces (si son específicos del componente)
interface ContactFormProps {
  className?: string
  onSuccess?: () => void
}

// 3. Componente
export function ContactForm({ className, onSuccess }: ContactFormProps) {
  // 3.1 Hooks
  const t = useTranslations('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 3.2 Handlers
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // ...lógica
  }

  // 3.3 Render
  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* JSX */}
    </form>
  )
}

// 4. Exports nombrados adicionales (si hay)
export type { ContactFormProps }
```

### Convenciones de Naming

```tsx
// Componentes: PascalCase
export function ContactForm() {}

// Hooks personalizados: camelCase con prefijo 'use'
export function useContactForm() {}

// Utilidades: camelCase
export function formatEmail(email: string) {}

// Constantes: UPPER_SNAKE_CASE
export const MAX_FILE_SIZE = 5000000

// Tipos/Interfaces: PascalCase
export interface ContactFormData {}
export type ContactStatus = 'idle' | 'loading' | 'success' | 'error'

// Archivos:
// - Componentes: PascalCase (ContactForm.tsx)
// - Utilidades: camelCase (validators.ts)
// - Tipos: camelCase (api.ts)
// - Constantes: camelCase (constants.ts)
```

---

## Trabajar con i18n

### Añadir Traducciones

```bash
# 1. Editar archivos JSON
public/locales/es/common.json
public/locales/en/common.json
```

```json
// public/locales/es/common.json
{
  "nav": {
    "home": "Inicio",
    "about": "Nosotros",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "buttons": {
    "submit": "Enviar",
    "cancel": "Cancelar"
  }
}
```

### Usar Traducciones en Componentes

```tsx
// Server Component
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('common')

  return <h1>{t('nav.home')}</h1>
}

// Client Component
'use client'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('contact')

  return <button>{t('buttons.submit')}</button>
}
```

### Añadir Nuevo Idioma

```bash
# 1. Crear carpeta
mkdir public/locales/fr

# 2. Copiar archivos de referencia
cp public/locales/es/*.json public/locales/fr/

# 3. Traducir contenido

# 4. Actualizar configuración i18n
# src/lib/i18n/config.ts
export const locales = ['es', 'en', 'fr']
```

---

## Trabajar con Imágenes

### Añadir Imágenes

```bash
# Ubicación
public/images/[categoría]/nombre-descriptivo.jpg

# Ejemplos
public/images/hero/office-team.jpg
public/images/services/consulting.jpg
public/images/gallery/project-01.jpg
```

### Usar Imágenes en Componentes

```tsx
import Image from 'next/image'

// Imagen optimizada
<Image
  src="/images/hero/office-team.jpg"
  alt="Equipo de Inte Sistemas"
  width={1200}
  height={600}
  priority // Solo para imágenes above the fold
  className="rounded-lg"
/>

// Con placeholder blur
<Image
  src="/images/services/consulting.jpg"
  alt="Consultoría"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generar con plaiceholder
/>
```

### Optimización de Imágenes

```bash
# Antes de subir imágenes:
# 1. Comprimir con herramientas online
#    - TinyPNG, Squoosh, ImageOptim

# 2. Tamaños recomendados
Hero images: 1920x1080px (max)
Service cards: 800x600px
Gallery: 1200x800px
Thumbnails: 400x300px

# 3. Formatos
Fotos: JPG/JPEG
Gráficos: PNG
Iconos: SVG
```

---

## Debugging

### Next.js DevTools

```tsx
// Activar React DevTools
// Ya viene integrado en modo desarrollo

// Ver cual es Server o Client Component
// Los Server Components no aparecen en React DevTools
```

### Logs Útiles

```tsx
// Solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data)
}

// O usar la variable de entorno
console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
```

### Errores Comunes

**1. "Error: Text content does not match"**
- Causa: Hydration mismatch (contenido diferente en servidor y cliente)
- Solución: Asegurar que el HTML inicial sea idéntico

**2. "Module not found"**
- Verificar path aliases en `tsconfig.json`
- Reiniciar servidor de desarrollo

**3. "Cannot use useState in Server Component"**
- Añadir `'use client'` al principio del componente

**4. Imágenes no se muestran**
- Verificar que la ruta sea correcta
- Verificar configuración de `next.config.js` (domains, remotePatterns)

---

## Hot Reload y Fast Refresh

### Qué Activa Hot Reload
- Cambios en componentes
- Cambios en páginas
- Cambios en CSS

### Qué Requiere Restart
- Cambios en `next.config.js`
- Cambios en `.env.local`
- Cambios en `middleware.ts`
- Instalación de nuevas dependencias

### Forzar Reinicio

```bash
# Detener servidor (Ctrl+C)
# Limpiar cache
rm -rf .next
npm run dev
```

---

## Performance Profiling

### Medir Rendimiento Local

```bash
# 1. Build de producción
npm run build

# 2. Iniciar en modo producción
npm run start

# 3. Abrir Lighthouse en Chrome DevTools
# - Click derecho > Inspeccionar
# - Tab "Lighthouse"
# - Generar reporte

# 4. Revisar métricas
# - Performance score > 90
# - Accessibility score > 95
# - Best Practices score > 95
# - SEO score > 95
```

### Analizar Bundle

```bash
# Instalar analizador
npm install -D @next/bundle-analyzer

# Añadir a next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Ejecutar análisis
ANALYZE=true npm run build
# Se abrirá visualización en navegador
```

---

## Tips y Best Practices

### 1. Performance

```tsx
// ✅ Usar dynamic imports para componentes pesados
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Cargando...</p>
})

// ✅ Memoizar componentes costosos
const MemoizedComponent = memo(ExpensiveComponent)

// ✅ Lazy loading de imágenes
<Image src="..." loading="lazy" />
```

### 2. SEO

```tsx
// ✅ Metadatos en cada página
export const metadata = {
  title: 'Servicios - Inte Sistemas',
  description: 'Descripción optimizada para SEO'
}

// ✅ Alt text descriptivo en imágenes
<Image alt="Equipo de desarrollo trabajando en oficina moderna" />
```

### 3. Accesibilidad

```tsx
// ✅ Labels en formularios
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Atributos ARIA cuando sea necesario
<button aria-label="Cerrar menú">×</button>

// ✅ Contraste de colores adecuado (WCAG AA)
// Verificar con herramientas online
```

### 4. TypeScript

```tsx
// ✅ Tipar props correctamente
interface Props {
  title: string
  count?: number // Opcional
}

// ✅ Evitar 'any'
// ❌ const data: any = await fetch()
// ✅ const data: ApiResponse = await fetch()

// ✅ Usar tipos utilitarios
type ReadonlyUser = Readonly<User>
type PartialUser = Partial<User>
```

---

## Recursos Útiles

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Herramientas
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Next.js CLI](https://nextjs.org/docs/api-reference/cli)
- [VS Code Extensions](https://marketplace.visualstudio.com)
  - ES7+ React/Redux Snippets
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier

### Comunidad
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Última actualización:** 2025-11-21
