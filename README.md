# Inte Sistemas - Web Corporativa

Web corporativa de Inte Sistemas desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- ⚡ **Next.js 14** con App Router
- 🎨 **Tailwind CSS** para estilos
- 🌍 **Multiidioma** (ES/EN) con next-intl
- 📱 **Responsive Design** - Mobile-first
- 🖼️ **Optimización de imágenes** con Next.js Image
- 🔍 **SEO Optimizado** - Metadatos, Sitemap, Schema.org
- ♿ **Accesible** - WCAG 2.1 AA
- 📧 **Formulario de contacto** funcional
- 🎭 **TypeScript** - Type-safe

## 📋 Requisitos

- Node.js 18+
- npm 9+

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd intesistemas

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📜 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 📁 Estructura del Proyecto

```
intesistemas/
├── public/
│   ├── media/           # Activos estáticos (organizados por página/uso)
│   │   ├── pages/       # Imágenes y videos específicos por página
│   │   └── shared/      # Recursos compartidos (logos, sectores, proceso, etc.)
│   └── locales/         # Traducciones i18n
│       ├── es/
│       └── en/
├── src/
│   ├── app/             # App Router (páginas)
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI primitivos
│   │   ├── layout/     # Header, Footer, etc.
│   │   ├── forms/      # Formularios
│   │   ├── gallery/    # Galerías de imágenes
│   │   ├── sections/   # Secciones de página
│   │   └── shared/     # Compartidos
│   ├── lib/            # Utilidades y configuración
│   │   ├── i18n/       # Configuración i18n
│   │   ├── utils/      # Funciones utilidad
│   │   └── email/      # Servicio de email
│   ├── types/          # Tipos TypeScript
│   └── styles/         # Estilos globales
├── info/               # Documentación del proyecto
├── PLANTILLA.md        # Especificación del proyecto
└── README.md           # Este archivo
```

## 🌍 Internacionalización

El proyecto soporta múltiples idiomas:

- 🇪🇸 Español (por defecto)
- 🇬🇧 Inglés

Las traducciones se encuentran en `public/locales/{locale}/`.

## 📚 Documentación

La documentación completa del proyecto está en la carpeta [`/info`](./info/):

- [Arquitectura](./info/01-arquitectura.md)
- [Guía de Desarrollo](./info/02-guia-desarrollo.md)
- [Convenciones de Código](./info/03-convenciones.md)
- [SEO](./info/04-seo.md)
- [Internacionalización](./info/05-i18n.md)
- [Componentes](./info/06-componentes.md)
- [Imágenes](./info/07-imagenes.md)
- [Estilos y Diseño](./info/08-estilos-diseno.md)
- [Formularios](./info/09-formularios.md)
- [Deployment](./info/10-deployment.md)

## 🎨 Stack Tecnológico

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 3
- **i18n:** next-intl
- **Email:** Resend / Nodemailer
- **Deployment:** Vercel / VPS

## 🔧 Configuración

### Variables de Entorno

Copiar `.env.example` a `.env.local` y configurar:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL=info@intesistemas.com
```

### Tailwind CSS

Configuración en `tailwind.config.ts` con:
- Colores personalizados (primary, secondary)
- Tipografía (Inter, Poppins)
- Plugins (forms, typography, aspect-ratio)

## 📧 Formulario de Contacto

El formulario de contacto se configura en:
1. Añadir API key de Resend en `.env.local`
2. El endpoint está en `src/app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Build Manual

```bash
npm run build
npm run start
```

Ver [guía completa de deployment](./info/10-deployment.md).

## 🤝 Contribución

1. Leer [Convenciones de Código](./info/03-convenciones.md)
2. Crear rama: `git checkout -b feature/nueva-feature`
3. Commit: `git commit -m "feat: descripción"`
4. Push: `git push origin feature/nueva-feature`
5. Crear Pull Request

## 📄 Licencia

© 2025 Inte Sistemas. Todos los derechos reservados.

## 📞 Contacto

- **Email:** info@intesistemas.com
- **Web:** https://intesistemas.com

---

Desarrollado con ❤️ por el equipo de Inte Sistemas
