'use client';

import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState, useRef, ReactNode } from 'react';

interface SmartMotionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  /**
   * Si true, detecta automáticamente si está en viewport inicial
   * y usa animate en lugar de whileInView para evitar el bug
   */
  autoDetect?: boolean;
  /**
   * Umbral de viewport para considerar "visible inicialmente"
   * Por defecto 0.5 (50% del viewport desde el top)
   */
  viewportThreshold?: number;
}

/**
 * Componente SmartMotion que soluciona el problema de visibilidad
 * con whileInView durante la navegación SPA.
 *
 * Problema:
 * - Al navegar entre páginas, componentes con whileInView pueden
 *   quedarse con opacity:0 si ya están en el viewport inicial
 * - El IntersectionObserver no se dispara correctamente en navegación
 *
 * Solución:
 * - Detecta si el elemento está en el viewport inicial al montar
 * - Si está visible: usa animate para animación inmediata
 * - Si no está visible: usa whileInView para animar al hacer scroll
 *
 * @example
 * ```tsx
 * <SmartMotion
 *   initial={{ opacity: 0, y: 20 }}
 *   whileInView={{ opacity: 1, y: 0 }}
 *   viewport={{ once: true }}
 *   autoDetect={true}
 * >
 *   <h1>Este título siempre será visible</h1>
 * </SmartMotion>
 * ```
 */
export function SmartMotion({
  children,
  autoDetect = true,
  viewportThreshold = 0.5,
  initial,
  whileInView,
  animate,
  viewport,
  transition,
  ...props
}: SmartMotionProps) {
  const [isInInitialViewport, setIsInInitialViewport] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoDetect || !ref.current) {
      setHasChecked(true);
      return;
    }

    // Verificar si el elemento está en el viewport inicial
    const checkInitialPosition = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Elemento está en la parte superior del viewport
      const isInViewport =
        rect.top >= 0 &&
        rect.top < windowHeight * viewportThreshold;

      setIsInInitialViewport(isInViewport);
      setHasChecked(true);
    };

    // Pequeño delay para asegurar que el layout esté estable
    const timer = setTimeout(checkInitialPosition, 50);

    return () => clearTimeout(timer);
  }, [autoDetect, viewportThreshold]);

  // Si no hemos verificado aún, renderizar sin ref para evitar flash
  if (!hasChecked) {
    return (
      <motion.div
        ref={ref}
        initial={initial}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Si está en viewport inicial, usar animate
  if (isInInitialViewport) {
    return (
      <motion.div
        ref={ref}
        initial={initial}
        animate={whileInView || animate}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Si no está en viewport inicial, usar whileInView
  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Variante simplificada que siempre anima inmediatamente
 * Útil para heroes y elementos siempre visibles
 */
export function InstantMotion({
  children,
  initial,
  whileInView,
  animate,
  transition = { duration: 0.6 },
  ...props
}: SmartMotionProps) {
  return (
    <motion.div
      initial={initial}
      animate={whileInView || animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hook para detectar si un elemento está en viewport inicial
 * Útil para lógica personalizada
 */
export function useIsInInitialViewport(threshold = 0.5) {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const inViewport =
      rect.top >= 0 &&
      rect.top < windowHeight * threshold;

    setIsInViewport(inViewport);
  }, [threshold]);

  return { ref, isInViewport };
}
