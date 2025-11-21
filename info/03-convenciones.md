# Convenciones de Código - Inte Sistemas

## Principios Generales

1. **Claridad sobre brevedad**: Código legible > Código corto
2. **Consistencia**: Seguir patrones existentes
3. **Simplicidad**: Solución más simple que funcione
4. **DRY**: Don't Repeat Yourself (pero sin sobre-abstraer)
5. **KISS**: Keep It Simple, Stupid

---

## TypeScript

### Tipos vs Interfaces

```tsx
// ✅ Usar 'interface' para objetos y props de componentes
interface UserProps {
  name: string
  age: number
}

// ✅ Usar 'type' para uniones, intersecciones, primitivos
type Status = 'idle' | 'loading' | 'success' | 'error'
type ID = string | number
type ComponentWithChildren = Component & { children: ReactNode }

// ✅ Interfaces se pueden extender fácilmente
interface AdminUser extends UserProps {
  role: 'admin'
}
```

### Tipado Estricto

```tsx
// ❌ Evitar 'any'
function process(data: any) { }

// ✅ Usar tipos específicos
function process(data: User | Product) { }

// ✅ O usar genéricos
function process<T extends BaseEntity>(data: T) { }

// ❌ Evitar type assertions innecesarias
const value = data as string

// ✅ Usar validación
if (typeof data === 'string') {
  const value = data // TypeScript infiere el tipo
}
```

### Nullability

```tsx
// ✅ Preferir valores por defecto
interface Config {
  timeout: number // No nullable
}

// ✅ Usar optional solo cuando realmente es opcional
interface UserProfile {
  bio?: string // Puede no existir
  email: string // Siempre existe
}

// ✅ Usar null/undefined de forma explícita
function findUser(id: string): User | null {
  // null indica explícitamente "no encontrado"
}
```

### Enums vs Union Types

```tsx
// ❌ Evitar enums (generan código extra)
enum Status {
  Idle,
  Loading,
  Success
}

// ✅ Preferir union types
type Status = 'idle' | 'loading' | 'success'

// ✅ O const objects para valores constantes
const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success'
} as const

type Status = typeof STATUS[keyof typeof STATUS]
```

---

## React y Next.js

### Componentes

```tsx
// ✅ Funciones nombradas (mejor para debugging)
export function ContactForm() {
  return <form>...</form>
}

// ❌ Evitar funciones anónimas en exports
export default () => <div>...</div>

// ✅ Server Component (por defecto)
export function ServerPage() {
  // Sin hooks, sin event handlers
  return <div>...</div>
}

// ✅ Client Component (solo cuando sea necesario)
'use client'
export function ClientForm() {
  const [value, setValue] = useState('')
  return <input value={value} onChange={e => setValue(e.target.value)} />
}
```

### Props

```tsx
// ✅ Desestructurar props en parámetros
export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

// ❌ Evitar acceder a props directamente
export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>
}

// ✅ Tipos de props explícitos
interface ButtonProps {
  children: ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

// ✅ Exportar tipos de props
export type { ButtonProps }
```

### Hooks

```tsx
// ✅ Hooks al inicio del componente
export function Component() {
  const t = useTranslations()
  const [state, setState] = useState()
  const router = useRouter()

  // Luego funciones auxiliares
  const handleClick = () => {}

  // Finalmente el render
  return <div>...</div>
}

// ❌ No llamar hooks condicionalmente
if (condition) {
  const [state] = useState() // ❌ ERROR
}

// ✅ Condicional dentro del hook
const [state] = useState(condition ? initialValue : defaultValue)
```

### Event Handlers

```tsx
// ✅ Prefijo 'handle' para handlers
const handleClick = () => {}
const handleSubmit = () => {}
const handleChange = () => {}

// ✅ Prefijo 'on' para props de callback
interface Props {
  onClick: () => void
  onSubmit: (data: FormData) => void
}

// ✅ Tipos correctos para eventos
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}
```

### Conditional Rendering

```tsx
// ✅ Usar && para renderizado condicional simple
{isLoading && <Spinner />}

// ✅ Usar ternario para if-else
{isLoading ? <Spinner /> : <Content />}

// ❌ Evitar ternarios anidados complejos
{isLoading ? <Spinner /> : isError ? <Error /> : <Content />}

// ✅ Usar early returns o variables intermedias
if (isLoading) return <Spinner />
if (isError) return <Error />
return <Content />

// O
const content = isLoading ? <Spinner /> : isError ? <Error /> : <Content />
return <div>{content}</div>
```

### Lists y Keys

```tsx
// ✅ Key única y estable
{items.map(item => (
  <Item key={item.id} {...item} />
))}

// ❌ Evitar index como key (a menos que la lista sea estática)
{items.map((item, index) => (
  <Item key={index} {...item} /> // ❌ Puede causar bugs
))}

// ❌ Evitar valores no únicos
{items.map(item => (
  <Item key={item.name} {...item} /> // ❌ Si hay nombres duplicados
))}
```

---

## CSS y Tailwind

### Convenciones de Clases

```tsx
// ✅ Orden de clases Tailwind (recomendado)
// Layout → Positioning → Display → Sizing → Spacing → Typography → Visual → Effects

<div className="
  container relative flex
  w-full h-screen
  px-4 py-8 space-y-4
  text-lg font-bold text-gray-900
  bg-white rounded-lg shadow-lg
  hover:shadow-xl transition-shadow
">

// ✅ Usar función 'cn' para clases condicionales
import { cn } from '@/lib/utils/cn'

<button className={cn(
  "px-4 py-2 rounded",
  variant === 'primary' && "bg-blue-500 text-white",
  variant === 'secondary' && "bg-gray-200 text-gray-900",
  disabled && "opacity-50 cursor-not-allowed"
)} />
```

### Clases Personalizadas

```tsx
// ✅ Agrupar utilities repetidas en componentes
// ❌ Repetir mismas clases
<button className="px-4 py-2 bg-blue-500 text-white rounded">
<button className="px-4 py-2 bg-blue-500 text-white rounded">

// ✅ Crear componente
<Button variant="primary">

// ✅ Para patrones únicos, usar @apply en CSS
// styles/globals.css
.prose-custom {
  @apply text-gray-900 leading-relaxed;
  @apply prose prose-lg prose-headings:font-bold;
}
```

### Responsive Design

```tsx
// ✅ Mobile-first (sin prefijo = mobile)
<div className="
  text-sm     /* mobile */
  md:text-base  /* tablet */
  lg:text-lg    /* desktop */
">

// ✅ Breakpoints estándar
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

---

## Estructura de Archivos

### Naming

```
// Componentes
ContactForm.tsx       ✅ PascalCase
contact-form.tsx      ❌

// Utilidades y hooks
useAuth.ts           ✅ camelCase
validators.ts        ✅ camelCase
use-auth.ts          ❌

// Páginas (Next.js App Router)
page.tsx             ✅ Nombre especial Next.js
layout.tsx           ✅ Nombre especial Next.js
loading.tsx          ✅ Nombre especial Next.js
error.tsx            ✅ Nombre especial Next.js

// Tipos
types.ts             ✅ Para tipos generales
api.ts               ✅ Para tipos específicos
index.ts             ✅ Para re-exportar
```

### Organización

```
// ✅ Colocation - agrupar archivos relacionados
components/
  ContactForm/
    ContactForm.tsx
    ContactForm.test.tsx
    useContactForm.ts
    types.ts
    index.ts  // Re-export

// ✅ Index para re-exports limpios
// components/forms/index.ts
export { ContactForm } from './ContactForm'
export { LoginForm } from './LoginForm'
export type { ContactFormProps, LoginFormProps } from './types'

// Uso limpio
import { ContactForm, LoginForm } from '@/components/forms'
```

---

## Imports

### Orden de Imports

```tsx
// 1. React y Next.js
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// 2. Librerías externas
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

// 3. Imports internos (alias @/)
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/lib/hooks/useAuth'
import type { User } from '@/types'

// 4. Imports relativos
import { helper } from './utils'
import styles from './Component.module.css'

// 5. Tipos (al final, separados)
import type { ComponentProps } from './types'
```

### Path Aliases

```tsx
// ✅ Usar alias @ para imports internos
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

// ❌ Evitar paths relativos profundos
import { Button } from '../../../components/ui/Button'
```

---

## Comentarios y Documentación

### Cuándo Comentar

```tsx
// ✅ Comentar el "por qué", no el "qué"
// Usamos setTimeout para evitar race condition con el fetch
setTimeout(() => refetch(), 100)

// ❌ Comentarios obvios
// Incrementa el contador
setCount(count + 1)

// ✅ Documentar funciones complejas
/**
 * Valida email según RFC 5322 (simplificado)
 * @param email - Email a validar
 * @returns true si es válido
 */
export function validateEmail(email: string): boolean {
  // ...
}

// ✅ Explicar decisiones técnicas no obvias
// Deshabilitamos ESLint aquí porque el patrón es válido en este contexto específico
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {}, [dependency])
```

### JSDoc

```tsx
// ✅ Para funciones de utilidad públicas
/**
 * Formatea un número como moneda
 * @param amount - Cantidad a formatear
 * @param currency - Código de moneda ISO (default: 'EUR')
 * @returns String formateado como moneda
 * @example
 * formatCurrency(1234.56, 'EUR') // "1.234,56 €"
 */
export function formatCurrency(amount: number, currency = 'EUR'): string {
  // ...
}
```

---

## Manejo de Errores

### Try-Catch

```tsx
// ✅ Capturar errores específicos
try {
  await api.sendEmail(data)
} catch (error) {
  if (error instanceof ValidationError) {
    setErrors(error.fields)
  } else if (error instanceof NetworkError) {
    showNotification('Error de conexión')
  } else {
    // Error inesperado
    console.error('Unexpected error:', error)
    showNotification('Error inesperado')
  }
}

// ✅ Tipar errores correctamente
catch (error) {
  const message = error instanceof Error
    ? error.message
    : 'Error desconocido'
}
```

### Error Boundaries (React)

```tsx
// ✅ Usar error.tsx en Next.js App Router
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Algo salió mal!</h2>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}
```

---

## Constantes y Configuración

```tsx
// ✅ Constantes en UPPER_SNAKE_CASE
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ALLOWED_EXTENSIONS = ['.jpg', '.png', '.webp']
export const API_TIMEOUT = 30000

// ✅ Configuración en objeto
export const CONFIG = {
  email: {
    maxLength: 100,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100
  }
} as const

// ✅ Variables de entorno con prefijo
// .env.local
NEXT_PUBLIC_SITE_URL=https://intesistemas.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL=info@intesistemas.com

// Uso
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

---

## Testing (Preparado para futuro)

```tsx
// ✅ Nombre de tests descriptivo
describe('ContactForm', () => {
  it('should display error when email is invalid', () => {})
  it('should submit form when all fields are valid', () => {})
})

// ❌ Tests vagos
describe('ContactForm', () => {
  it('works', () => {})
  it('test 1', () => {})
})
```

---

## Git

### Commits

```bash
# ✅ Mensajes descriptivos en imperativo
git commit -m "feat(contact): add email validation"
git commit -m "fix(i18n): correct French translation for services"

# ❌ Mensajes vagos
git commit -m "fix stuff"
git commit -m "changes"
git commit -m "wip"
```

### Branches

```bash
# ✅ Naming de ramas
feature/contact-form
fix/header-mobile-menu
hotfix/security-vulnerability
refactor/api-endpoints

# ❌ Nombres vagos
test
fix
mychanges
```

---

## Performance

```tsx
// ✅ Memoizar componentes costosos
const MemoizedChart = memo(Chart)

// ✅ useCallback para funciones en props
const handleClick = useCallback(() => {
  // ...
}, [dependencies])

// ✅ useMemo para cálculos costosos
const sortedItems = useMemo(
  () => items.sort((a, b) => a.value - b.value),
  [items]
)

// ❌ Evitar optimización prematura
// Solo optimizar si hay problema de performance medible
```

---

## Seguridad

```tsx
// ✅ Sanitizar inputs de usuario
import { sanitize } from '@/lib/utils/sanitize'
const cleanInput = sanitize(userInput)

// ✅ Validar en cliente Y servidor
// Cliente: UX inmediata
// Servidor: Seguridad real

// ❌ Nunca confiar solo en validación cliente
// Siempre validar en API route

// ✅ Usar variables de entorno para secretos
// NUNCA hardcodear API keys en código
const apiKey = process.env.SECRET_API_KEY
```

---

**Fecha:** 2025-11-21
**Autor:** Sistema de Convenciones Inte Sistemas
