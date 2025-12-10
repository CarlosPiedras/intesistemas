'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'

export interface ScrollRevealProps {
  children: ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

/**
 * Componente que revela su contenido con animación al hacer scroll
 *
 * @param animation - Tipo de animación a usar
 * @param delay - Retraso antes de iniciar la animación (ms)
 * @param duration - Duración de la animación (ms)
 * @param threshold - Porcentaje del elemento visible antes de animar (0-1)
 *
 * @example
 * ```tsx
 * <ScrollReveal animation="slide-up" delay={200}>
 *   <h2>Este título aparecerá al hacer scroll</h2>
 * </ScrollReveal>
 * ```
 */
export function ScrollReveal({
  children,
  animation = 'fade',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Verificar si el elemento ya está visible en el viewport inicial
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isInitiallyVisible =
      rect.top >= 0 &&
      rect.top < windowHeight * threshold &&
      rect.bottom > 0;

    if (isInitiallyVisible) {
      // Si ya está visible, animar inmediatamente
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return;
    }

    // Si no está visible, usar IntersectionObserver para detectar cuando entre en viewport
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

  const getAnimationClasses = () => {
    const base = 'transition-all'
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return `${base} opacity-0`
        case 'slide-up':
          return `${base} opacity-0 translate-y-8`
        case 'slide-down':
          return `${base} opacity-0 -translate-y-8`
        case 'slide-left':
          return `${base} opacity-0 translate-x-8`
        case 'slide-right':
          return `${base} opacity-0 -translate-x-8`
        case 'scale':
          return `${base} opacity-0 scale-95`
        default:
          return `${base} opacity-0`
      }
    }

    return `${base} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
