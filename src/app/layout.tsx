import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inte Sistemas - Soluciones Eléctricas y Automatización Industrial",
    template: "%s | Inte Sistemas"
  },
  description: "Empresa especializada en sistemas eléctricos y automatización industrial. Integradores oficiales de Eaton. Distribución de energía, cuadros eléctricos y programación de PLCs.",
  keywords: [
    "sistemas eléctricos",
    "automatización industrial",
    "cuadros eléctricos",
    "PLC",
    "distribución energía",
    "Eaton",
    "integrador oficial",
    "Barcelona",
    "Terrassa",
    "Hospitalet"
  ],
  authors: [{ name: "Inte Sistemas" }],
  creator: "Inte Sistemas",
  publisher: "Inte Sistemas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://intesistemas.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Inte Sistemas - Soluciones Eléctricas y Automatización',
    description: 'Empresa especializada en sistemas eléctricos y automatización industrial',
    siteName: 'Inte Sistemas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inte Sistemas',
    description: 'Soluciones eléctricas y automatización industrial',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'tu-codigo-de-verificacion',
    // yandex: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
