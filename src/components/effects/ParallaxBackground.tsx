'use client'

import { useEffect, useRef, CSSProperties } from 'react'
import Image from 'next/image'

export interface ParallaxBackgroundProps {
  imageSrc: string
  alt?: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
}

/**
 * Componente de fondo con efecto parallax
 *
 * @param imageSrc - Ruta de la imagen de fondo
 * @param speed - Velocidad del efecto parallax (0.1 - 1.0)
 * @param overlay - Si se debe mostrar una capa oscura sobre la imagen
 * @param overlayOpacity - Opacidad de la capa overlay (0 - 100)
 *
 * @example
 * ```tsx
 * <section className="relative h-screen overflow-hidden">
 *   <ParallaxBackground
 *     imageSrc="/media/pages/servicios/hero.jpg"
 *     speed={0.3}
 *     overlay
 *     overlayOpacity={40}
 *   />
 *   <div className="relative z-10">
 *     <h1>Contenido sobre el fondo parallax</h1>
 *   </div>
 * </section>
 * ```
 */
export function ParallaxBackground({
  imageSrc,
  alt = 'Background',
  speed = 0.5,
  className = '',
  overlay = false,
  overlayOpacity = 50,
}: ParallaxBackgroundProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return

      const scrolled = window.scrollY
      const movement = scrolled * speed

      imageRef.current.style.transform = `translateY(${movement}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <>
      <div
        ref={imageRef}
        className={`absolute inset-0 -z-10 h-[120%] w-full will-change-transform ${className}`}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>
      {overlay && (
        <div
          className="absolute inset-0 -z-10 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}
    </>
  )
}
