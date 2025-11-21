'use client'

import { useEffect, useRef, ReactNode } from 'react'

export interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down'
}

/**
 * Componente de sección con efecto parallax
 *
 * @param speed - Velocidad del efecto parallax (0.1 - 1.0). Valores más bajos = movimiento más lento
 * @param direction - Dirección del movimiento ('up' o 'down')
 * @param className - Clases CSS adicionales
 *
 * @example
 * ```tsx
 * <ParallaxSection speed={0.5} direction="up">
 *   <h2>Título con efecto parallax</h2>
 * </ParallaxSection>
 * ```
 */
export function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const movement = (scrollProgress - 0.5) * 100 * speed
        const translateY = direction === 'up' ? -movement : movement
        sectionRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={sectionRef}
      className={`parallax-layer transition-transform will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
