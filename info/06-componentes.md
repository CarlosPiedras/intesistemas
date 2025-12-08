# Guía de Componentes - Inte Sistemas

## Arquitectura de Componentes

### Jerarquía

```
components/
├── ui/              # Componentes primitivos reutilizables
├── layout/          # Componentes de estructura (Header, Footer)
├── forms/           # Formularios y campos
├── gallery/         # Galerías de imágenes
├── sections/        # Secciones de página completas
└── shared/          # Componentes compartidos varios
```

---

## Componentes UI Primitivos

### Button

```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variants
          variant === 'primary' &&
            'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
          variant === 'secondary' &&
            'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
          variant === 'outline' &&
            'border-2 border-gray-300 bg-transparent hover:bg-gray-50',
          variant === 'ghost' && 'bg-transparent hover:bg-gray-100',

          // Sizes
          size === 'sm' && 'h-9 px-3 text-sm',
          size === 'md' && 'h-11 px-4 text-base',
          size === 'lg' && 'h-12 px-6 text-lg',

          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Uso
<Button variant="primary" size="lg">
  Comenzar
</Button>

<Button variant="outline" isLoading>
  Cargando...
</Button>
```

### Input

```tsx
// components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random()}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2',
            'text-gray-900 placeholder:text-gray-400',
            'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

// Uso
<Input
  label="Nombre"
  placeholder="Ingresa tu nombre"
  error={errors.name}
/>
```

### Textarea

```tsx
// components/ui/Textarea.tsx
import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random()}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2',
            'text-gray-900 placeholder:text-gray-400',
            'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            'resize-y',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
```

### Card

```tsx
// components/ui/Card.tsx
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated'
}

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg',
        variant === 'default' && 'bg-white',
        variant === 'outlined' && 'border border-gray-200 bg-white',
        variant === 'elevated' && 'bg-white shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center border-t border-gray-200 px-6 py-4', className)}
      {...props}
    />
  )
}

// Uso
<Card variant="elevated">
  <CardHeader>
    <h3>Título</h3>
  </CardHeader>
  <CardBody>
    <p>Contenido...</p>
  </CardBody>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

### Modal

```tsx
// components/ui/Modal.tsx
'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils/cn'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className={cn(
          'relative w-full rounded-lg bg-white shadow-xl',
          size === 'sm' && 'max-w-sm',
          size === 'md' && 'max-w-md',
          size === 'lg' && 'max-w-lg',
          size === 'xl' && 'max-w-xl'
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-gray-100"
              aria-label="Cerrar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  )
}

// Uso
const [isOpen, setIsOpen] = useState(false)

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Título del Modal"
  size="lg"
>
  <p>Contenido del modal...</p>
</Modal>
```

---

## Componentes de Layout

### Container

```tsx
// components/shared/Container.tsx
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({
  className,
  size = 'xl',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'sm' && 'max-w-3xl',
        size === 'md' && 'max-w-5xl',
        size === 'lg' && 'max-w-6xl',
        size === 'xl' && 'max-w-7xl',
        size === 'full' && 'max-w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Header

```tsx
// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/components/shared/Container'
import { Logo } from '@/components/shared/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden',
            isMobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <nav className="space-y-1 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
```

### Footer

```tsx
// components/layout/Footer.tsx
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/components/shared/Container'
import { Logo } from '@/components/shared/Logo'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  const links = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/services', label: tNav('services') },
    { href: '/portfolio', label: tNav('portfolio') },
    { href: '/contact', label: tNav('contact') },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'GitHub', href: '#', icon: 'github' },
  ]

  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-gray-600">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              {t('followUs')}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-600"
                  aria-label={social.name}
                >
                  {/* Icon component here */}
                  <span>{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 md:flex-row md:space-y-0">
            <p>
              © {currentYear} Inte Sistemas. {t('rights')}.
            </p>
            <div className="flex space-x-4">
              <Link href={`/${locale}/legal/privacy`} className="hover:text-blue-600">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/legal/terms`} className="hover:text-blue-600">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
```

---

## Componentes de Sección

### Hero

```tsx
// components/sections/Hero.tsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const t = useTranslations('home.hero')

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600">{t('subtitle')}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg">
                {t('cta')}
              </Button>
              <Button variant="outline" size="lg">
                {t('ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
            <Image
              src="/media/pages/about/hero.jpg"
              alt="Inte Sistemas Team"
              fill
              priority
              className="rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
```

---

## Best Practices

### 1. Props Interface

```tsx
// ✅ Definir interface explícita
export interface ComponentProps {
  title: string
  description?: string
  onAction: () => void
}

export function Component({ title, description, onAction }: ComponentProps) {
  // ...
}
```

### 2. Forward Refs

```tsx
// ✅ Para componentes que necesitan ref
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />
})

Input.displayName = 'Input'
```

### 3. Composición

```tsx
// ✅ Componentes compuestos
<Card>
  <CardHeader />
  <CardBody />
  <CardFooter />
</Card>

// En lugar de:
<Card header={...} body={...} footer={...} />
```

---

**Fecha:** 2025-11-21
