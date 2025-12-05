# 🔄 Soluciones para React Router (si algún día lo necesitas)

Aunque tu proyecto usa Next.js, aquí están las soluciones equivalentes para React Router por si las necesitas en otros proyectos.

---

## Solución 1: key en Routes (React Router v6)

### Configuración básica

```tsx
// App.tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {/* key={location.pathname} fuerza remontaje completo */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
```

### ¿Cómo funciona?

```
Usuario navega a /about
         ↓
location.pathname cambia de "/" a "/about"
         ↓
key={location.pathname} cambia de "/" a "/about"
         ↓
React ve una key diferente
         ↓
Desmonta <Routes> completamente
         ↓
Monta <Routes> nuevo desde cero
         ↓
Todos los componentes se resetean
```

---

## Solución 2: Wrapper con key en cada ruta

### Crear un RouteWrapper

```tsx
// components/RouteWrapper.tsx
import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

interface RouteWrapperProps {
  children: ReactNode;
}

export default function RouteWrapper({ children }: RouteWrapperProps) {
  const location = useLocation();

  // Scroll to top en cada cambio de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Incluir search params para que también fuerce remontaje
  const key = `${location.pathname}${location.search}`;

  return <div key={key}>{children}</div>;
}
```

### Usar el wrapper

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/RouteWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteWrapper>  {/* ← Wrapper con key dinámica */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RouteWrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
```

---

## Solución 3: key en cada página individualmente

Si solo quieres resetear páginas específicas:

```tsx
// pages/Products.tsx
import { useLocation, useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Incluir pathname + search params
  const key = `${location.pathname}-${searchParams.toString()}`;

  return (
    <div key={key}>
      <h1>Productos</h1>
      {/* Contenido */}
    </div>
  );
}
```

---

## Solución 4: Layout persistente con Outlet

Si quieres que el layout NO se remonte pero las páginas sí:

```tsx
// Layout.tsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />  {/* ← Nunca se remonta */}
      {/* Solo Outlet se remonta con cada navegación */}
      <main key={location.pathname}>
        <Outlet />
      </main>
      <Footer />  {/* ← Nunca se remonta */}
    </div>
  );
}
```

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## Solución 5: useEffect con location como dependencia

Para resetear estado manualmente en cada cambio de ruta:

```tsx
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyPage() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  // Se ejecuta en cada cambio de ruta
  useEffect(() => {
    // Resetear estados manualmente
    setData(null);
    setCount(0);

    // Cargar datos nuevos
    fetchData();

    console.log('Página reiniciada en:', location.pathname);
  }, [location.pathname]); // ← Se ejecuta cada vez que cambia la ruta

  const fetchData = async () => {
    // Cargar datos...
  };

  return <div>{/* Contenido */}</div>;
}
```

⚠️ **Limitación:** Esto NO desmonta el componente, solo resetea estados manualmente.

---

## Comparación de soluciones React Router

| Solución | Afecta a | Complejidad | Recomendada |
|----------|----------|-------------|-------------|
| **key en `<Routes>`** | Todas las rutas | 🟢 Baja | ⭐⭐⭐⭐⭐ |
| **RouteWrapper** | Todas las rutas | 🟢 Baja | ⭐⭐⭐⭐⭐ |
| **key en página** | Solo esa página | 🟡 Media | ⭐⭐⭐⭐ |
| **Layout + Outlet** | Solo páginas (no layout) | 🟡 Media | ⭐⭐⭐⭐ |
| **useEffect manual** | Solo estados específicos | 🟡 Media | ⭐⭐⭐ |

---

## Ejemplo completo: Aplicación de e-commerce

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteWrapper from './components/RouteWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <RouteWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </RouteWrapper>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

```tsx
// components/RouteWrapper.tsx
import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

interface RouteWrapperProps {
  children: ReactNode;
}

export default function RouteWrapper({ children }: RouteWrapperProps) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Log para debugging
    console.log('Navegando a:', location.pathname);

    return () => {
      console.log('Saliendo de:', location.pathname);
    };
  }, [location.pathname]);

  // Incluir pathname + search + hash para máxima precisión
  const key = `${location.pathname}${location.search}${location.hash}`;

  return <div key={key}>{children}</div>;
}
```

---

## Testing del comportamiento

```tsx
// pages/TestPage.tsx
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TestPage() {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState('');

  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setMountTime(time);
    console.log('🔥 Componente montado a las', time);

    return () => {
      console.log('💀 Componente desmontado. Count era:', count);
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test de Remontaje</h1>
      <p>Ruta actual: {location.pathname}</p>
      <p>Contador: {count}</p>
      <p>Montado a las: {mountTime}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">Home</Link> |
        <Link to="/test">Test</Link> |
        <Link to="/about">About</Link>
      </nav>

      <div style={{ background: '#f0f0f0', padding: '1rem', marginTop: '2rem' }}>
        <strong>Prueba:</strong>
        <ol>
          <li>Incrementa el contador</li>
          <li>Navega a otra página</li>
          <li>Vuelve aquí</li>
          <li>El contador estará en 0 (componente remontado)</li>
        </ol>
      </div>
    </div>
  );
}
```

---

## Diferencias clave: React Router vs Next.js

| Aspecto | React Router | Next.js App Router |
|---------|--------------|-------------------|
| **Hook de ruta** | `useLocation()` | `usePathname()` |
| **Navegación** | `<Link to="/about">` | `<Link href="/about">` |
| **Query params** | `useSearchParams()` | `useSearchParams()` |
| **Navegación programática** | `navigate('/about')` | `router.push('/about')` |
| **Componente de rutas** | `<Routes>` | Estructura de carpetas |
| **Layouts anidados** | `<Outlet />` | `layout.tsx` |

---

## 🎯 Resumen

Para **React Router**, la mejor solución es:

1. **Crear un `RouteWrapper`** con `key={location.pathname}`
2. **Envolver `<Routes>`** con ese componente
3. **Mantener Navbar/Footer fuera** del wrapper

Esto te da:
- ✅ Remontaje completo en cada navegación
- ✅ Navbar/Footer persisten sin parpadeo
- ✅ Scroll to top automático
- ✅ Configuración global (una sola vez)
- ✅ Performance óptima de SPA

**Es exactamente el mismo patrón que ya implementamos en tu proyecto Next.js**, solo con diferentes hooks.
