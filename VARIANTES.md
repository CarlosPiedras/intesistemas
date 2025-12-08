# 🎨 Guía de Variantes Hero

## 📍 Acceso a las Variantes

**URL:** `http://localhost:3000/variantes`

---

## 🚀 Las 3 Variantes Disponibles

### **VARIANTE 1: Fullscreen Dramático**

**Estilo:** Moderno, impactante, cinematográfico

**Características:**
- ✅ Hero a pantalla completa (100vh)
- ✅ Imagen de fondo con overlay gradiente azul
- ✅ Texto GRANDE centrado
- ✅ Badge "Integradores oficiales de Eaton"
- ✅ 2 CTAs prominentes (blanco + outline)
- ✅ Contacto rápido (teléfono + email)
- ✅ Scroll indicator animado
- ✅ Partículas decorativas de fondo

**Sección Siguiente:**
- Logos de partners en grises (efecto hover color)
- 4 logos: Eaton, CEA, SAEL, Inte

**Mejor para:**
- Primera impresión impactante
- Marca premium/moderna
- Captar atención inmediata

---

### **VARIANTE 2: Split Layout Corporativo**

**Estilo:** Profesional, estructurado, corporativo

**Características:**
- ✅ Layout dividido 60/40 (texto/imagen)
- ✅ Badge con icono "Líderes en automatización"
- ✅ Título con gradiente de texto
- ✅ Lista de 4 beneficios con checkmarks animados
- ✅ 2 CTAs (solid + outline)
- ✅ Imagen lateral con card flotante
- ✅ Card de estadística "Integrador Oficial Eaton"

**Sección Siguiente:**
- Barra oscura con 4 estadísticas
- Iconos: Users, Award, Shield, Zap
- Stats: 10+ años, 500+ proyectos, 100% satisfacción, 24/7 soporte

**Mejor para:**
- Público corporativo/B2B
- Mostrar credibilidad inmediata
- Listado de beneficios claros

---

### **VARIANTE 3: Minimalista con Cards**

**Estilo:** Limpio, espacioso, moderno minimalista

**Características:**
- ✅ Fondo blanco/claro con gradiente sutil
- ✅ Badge con animación de "ping" pulsante
- ✅ Título grande con gradiente y línea animada debajo
- ✅ Texto amplio y respirado
- ✅ 2 CTAs (gradiente + outline)
- ✅ Trust indicators (años, Eaton, proyectos)
- ✅ **3 cards de servicios integrados en el hero:**
  - Distribución de Energía
  - Automatización
  - Cuadros Eléctricos

**Sección Siguiente:**
- Imagen fullwidth con texto superpuesto
- CTA "Explorar Sectores"
- Tema oscuro con overlay

**Mejor para:**
- Mostrar servicios inmediatamente
- Diseño limpio y profesional
- Navegación clara desde el inicio

---

## 🎯 Comparación Rápida

| Aspecto | Variante 1 | Variante 2 | Variante 3 |
|---------|------------|------------|------------|
| **Impacto visual** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Información mostrada** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Profesionalidad** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Modernidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Claridad mensaje** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎨 Uso de la Paleta de Colores

Todas las variantes usan la paleta oficial de Inte Sistemas:

```css
/* Colores principales */
#1175c7  /* denim - color principal */
#a9d9ff  /* anakiwa - azul claro */
#3a89c5  /* boston-blue - azul medio */
#65a6d8  /* danube - azul medio-claro */

/* Gradientes usados */
from-denim to-boston-blue
from-boston-blue to-danube
from-danube to-anakiwa
```

---

## ✨ Animaciones Implementadas

**Framer Motion:**
- Fade in/out
- Slide up/down
- Scale effects
- Stagger (secuenciales)
- Hover effects en cards
- Ping animation (pulse)

**Timing:**
- Entrada inicial: 0.6-1s
- Delay entre elementos: 0.1-0.2s
- Hover transitions: 0.2-0.3s

---

## 📱 Responsive Design

Todas las variantes son responsive:

- **Mobile:** Stack vertical, texto más pequeño
- **Tablet:** Layout adaptado
- **Desktop:** Diseño completo

Breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px

---

## 🛠️ Tecnologías Usadas

```json
{
  "framer-motion": "Animaciones fluidas",
  "lucide-react": "Iconos modernos",
  "next/image": "Optimización de imágenes",
  "tailwindcss": "Estilos con paleta custom"
}
```

---

## 📸 Imágenes Utilizadas

**Variante 1:**
- Hero: `/media/shared/variantes/hero-01.jpg`
- Partners: logos de `/media/shared/logos/clientes/`

**Variante 2:**
- Hero: `/media/pages/about/hero.jpg`
- Card flotante con icono Award

**Variante 3:**
- Decorativa: `/media/pages/servicios/distribucion/hero.jpg`
- Partners: `/media/shared/logos/clientes/logo-eaton.webp`

---

## 🔧 Cómo Cambiar entre Variantes

1. Ir a `http://localhost:3000/variantes`
2. Hacer clic en los botones superiores "Variante 1/2/3"
3. Cada variante carga dinámicamente
4. Incluye hero + sección siguiente para contexto completo

---

## 💡 Recomendación de Uso

**Variante 1** → Si quieres impacto visual máximo y marca moderna

**Variante 2** → Si necesitas mostrar credibilidad y beneficios claros (B2B)

**Variante 3** → Si prefieres diseño limpio y mostrar servicios desde el inicio

---

## 📝 Archivos Creados

```
src/
├── components/heroes/
│   ├── HeroVariant1.tsx    (Fullscreen dramático)
│   ├── HeroVariant2.tsx    (Split corporativo)
│   └── HeroVariant3.tsx    (Minimalista cards)
└── app/[locale]/variantes/
    └── page.tsx            (Comparador)
```

---

## ✅ Próximos Pasos

1. ✅ Revisar las 3 variantes en `/variantes`
2. ⬜ Seleccionar la variante preferida
3. ⬜ Implementar la seleccionada en la home definitiva
4. ⬜ Crear secciones adicionales (servicios, sectores, contacto)
5. ⬜ Agregar Header y Footer globales

---

**Hecho con:** Next.js 16 + Tailwind 4 + Framer Motion + TypeScript
