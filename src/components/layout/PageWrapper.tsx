'use client';

import { usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

/**
 * PageWrapper fuerza el desmontaje y remontaje completo de las páginas
 * cada vez que cambia la ruta, simulando un F5.
 *
 * Cómo funciona:
 * - usePathname() detecta cambios en la URL
 * - key={pathname} le dice a React que es un componente completamente nuevo
 * - React desmonta el árbol anterior y monta uno nuevo desde cero
 * - Todos los estados locales se resetean
 * - Todos los useEffect se ejecutan como en una carga inicial
 */
export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();

  // Opcional: scroll to top en cada cambio de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // La key hace que React trate este div como un componente completamente nuevo
  // cada vez que cambia el pathname
  return <div key={pathname}>{children}</div>;
}
