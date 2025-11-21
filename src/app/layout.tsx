import { ReactNode } from 'react';

// Root layout requerido por Next.js
// El contenido real se maneja en /app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
