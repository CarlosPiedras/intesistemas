'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeroImageLoaderProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  blurDataURL?: string;
}

/**
 * Componente para cargar imágenes de hero con transición suave
 * y skeleton loader para evitar flash de fondo gris
 */
export function HeroImageLoader({
  src,
  alt,
  priority = true,
  className = 'object-cover',
  blurDataURL
}: HeroImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Skeleton loader mejorado - gradiente más visible y atractivo */}
      {!isLoaded && (
        <div className="absolute inset-0">
          {/* Gradient base - más saturado y visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1175c7] to-[#0e4a8a]" />

          {/* Overlay animado para efecto shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

          {/* Pattern overlay sutil */}
          <div className="absolute inset-0 opacity-10"
               style={{ backgroundImage: 'radial-gradient(circle, #a9d9ff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
      )}

      {/* Imagen con fade-in */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        loading="eager"
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        quality={85}
      />
    </>
  );
}
