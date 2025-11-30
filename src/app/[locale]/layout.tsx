import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n/config';
import Footer from '@/components/layout/Footer';
import "../globals.css";

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

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validar que el locale sea español
  if (locale !== 'es') {
    notFound();
  }

  // Obtener mensajes de traducción
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
