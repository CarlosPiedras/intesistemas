import { useTranslations } from 'next-intl';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold font-heading text-primary-600">
            Inte Sistemas
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl">
            Soluciones Eléctricas y Automatización Industrial
          </p>
          <p className="text-base text-secondary-500">
            Configuración de next-intl completada ✓
          </p>
        </div>
      </main>
    </div>
  );
}
