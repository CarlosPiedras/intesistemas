'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeroImageLoaderProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

/**
 * Componente para cargar imágenes de hero con transición suave
 * y skeleton loader para evitar flash de fondo gris
 */
export function HeroImageLoader({
  src,
  alt,
  priority = true,
  className = 'object-cover'
}: HeroImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Skeleton loader - se muestra mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-900 animate-pulse" />
      )}

      {/* Imagen con fade-in */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        loading="eager"
      />
    </>
  );
}
