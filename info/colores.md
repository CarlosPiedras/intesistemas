# Paleta de Colores - Inte Sistemas

## Colores Principales de Marca

### Denim (Color Principal)
- **HEX:** `#1175c7`
- **RGB:** `rgb(17, 117, 199)`
- **Uso:** Color primario de la marca, botones principales, enlaces, encabezados destacados
- **Tailwind:** `bg-denim`, `text-denim`, `bg-primary-600`

### Anakiwa (Azul Claro)
- **HEX:** `#a9d9ff`
- **RGB:** `rgb(169, 217, 255)`
- **Uso:** Fondos claros, hover states, elementos secundarios
- **Tailwind:** `bg-anakiwa`, `text-anakiwa`, `bg-primary-200`

### Boston Blue (Azul Medio)
- **HEX:** `#3a89c5`
- **RGB:** `rgb(58, 137, 197)`
- **Uso:** Elementos interactivos, estados hover
- **Tailwind:** `bg-boston-blue`, `text-boston-blue`, `bg-primary-500`

### Danube (Azul Medio-Claro)
- **HEX:** `#65a6d8`
- **RGB:** `rgb(101, 166, 216)`
- **Uso:** Acentos, bordes, elementos decorativos
- **Tailwind:** `bg-danube`, `text-danube`, `bg-primary-400`

---

## Escala Completa de Primarios

Basada en la paleta de marca:

```css
primary-50:  #e6f4ff  /* Muy claro */
primary-100: #cce9ff  /* Claro */
primary-200: #a9d9ff  /* anakiwa */
primary-300: #7dc4f0
primary-400: #65a6d8  /* danube */
primary-500: #3a89c5  /* boston-blue */
primary-600: #1175c7  /* denim - COLOR PRINCIPAL */
primary-700: #0e5fa3
primary-800: #0b4a7f
primary-900: #08355b  /* Muy oscuro */
primary-950: #051f37  /* Casi negro */
```

---

## Colores Secundarios (Grises)

Para texto, fondos y elementos neutrales:

```css
secondary-50:  #f8fafc
secondary-100: #f1f5f9
secondary-200: #e2e8f0
secondary-300: #cbd5e1
secondary-400: #94a3b8
secondary-500: #64748b
secondary-600: #475569
secondary-700: #334155
secondary-800: #1e293b
secondary-900: #0f172a
secondary-950: #020617
```

---

## Colores de Utilidad

### Success (Verde)
- **DEFAULT:** `#10b981`
- **light:** `#d1fae5`
- **dark:** `#047857`

### Warning (Amarillo/Naranja)
- **DEFAULT:** `#f59e0b`
- **light:** `#fef3c7`
- **dark:** `#d97706`

### Error (Rojo)
- **DEFAULT:** `#ef4444`
- **light:** `#fee2e2`
- **dark:** `#dc2626`

### Info (Azul - usando denim)
- **DEFAULT:** `#1175c7` (denim)
- **light:** `#a9d9ff` (anakiwa)
- **dark:** `#0e5fa3`

---

## Variables CSS

Disponibles en `:root`:

```css
/* Colores de marca */
--denim: #1175c7;
--anakiwa: #a9d9ff;
--boston-blue: #3a89c5;
--danube: #65a6d8;

/* Color principal */
--primary: var(--denim);
--primary-light: var(--anakiwa);
--primary-dark: #0e5fa3;

/* Colores secundarios */
--secondary: #475569;
--secondary-light: #cbd5e1;
--secondary-dark: #1e293b;
```

---

## Ejemplos de Uso en Tailwind

### Botones

```tsx
// Botón principal
<button className="bg-denim hover:bg-primary-700 text-white">
  Contactar
</button>

// Botón secundario
<button className="bg-boston-blue hover:bg-primary-600 text-white">
  Ver más
</button>

// Botón outline
<button className="border-2 border-denim text-denim hover:bg-anakiwa">
  Saber más
</button>
```

### Fondos y Secciones

```tsx
// Fondo claro
<section className="bg-primary-50">...</section>

// Fondo azul principal
<section className="bg-denim text-white">...</section>

// Gradiente
<div className="bg-gradient-to-r from-denim to-boston-blue">...</div>
```

### Texto

```tsx
// Título principal
<h1 className="text-denim font-bold">Inte Sistemas</h1>

// Texto de enlace
<a className="text-boston-blue hover:text-denim">Ver más</a>

// Texto secundario
<p className="text-secondary-600">Descripción...</p>
```

---

## Guía de Accesibilidad

### Combinaciones con buen contraste:

✅ **Texto oscuro sobre fondos claros:**
- `text-denim` sobre `bg-white`
- `text-primary-700` sobre `bg-primary-50`
- `text-secondary-900` sobre `bg-anakiwa`

✅ **Texto claro sobre fondos oscuros:**
- `text-white` sobre `bg-denim`
- `text-white` sobre `bg-boston-blue`
- `text-primary-50` sobre `bg-primary-900`

❌ **Evitar:**
- `text-anakiwa` sobre `bg-white` (contraste bajo)
- `text-danube` sobre `bg-boston-blue` (contraste insuficiente)

---

## Uso Recomendado

### Hero / Header
- Fondo: `bg-denim` o gradiente
- Texto: `text-white`
- Botón CTA: `bg-white text-denim` o `bg-boston-blue`

### Secciones Alternadas
- Par: `bg-white`
- Impar: `bg-primary-50` o `bg-secondary-50`

### Footer
- Fondo: `bg-secondary-900` o `bg-primary-950`
- Texto: `text-white` o `text-secondary-200`

### Tarjetas
- Fondo: `bg-white`
- Borde: `border-primary-200`
- Hover: `hover:border-denim` o `hover:shadow-lg`
