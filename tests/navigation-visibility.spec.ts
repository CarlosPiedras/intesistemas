import { test, expect } from '@playwright/test';

/**
 * Test para detectar problemas de visibilidad en elementos animados
 * al navegar entre páginas.
 *
 * Problema conocido: ScrollReveal con IntersectionObserver no siempre
 * se dispara correctamente en elementos visibles en el viewport inicial
 * durante la navegación SPA.
 */

const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/servicios', name: 'Servicios' },
  { path: '/servicios/automatizacion-industrial', name: 'Automatización' },
  { path: '/servicios/distribucion-energia', name: 'Distribución' },
  { path: '/servicios/soporte-tecnico', name: 'Soporte' },
  { path: '/servicios/gestion-proyectos', name: 'Gestión' },
  { path: '/contacto', name: 'Contacto' },
];

/**
 * Verifica que un elemento sea visible (opacity > 0)
 */
async function checkElementVisibility(page, selector: string, elementName: string) {
  const element = page.locator(selector).first();

  // Esperar a que el elemento exista en el DOM
  await expect(element).toBeAttached({ timeout: 5000 });

  // Obtener el computed style para verificar opacity
  const opacity = await element.evaluate((el) => {
    return window.getComputedStyle(el).opacity;
  });

  // Verificar que no esté oculto
  const isVisible = parseFloat(opacity) > 0;

  if (!isVisible) {
    console.error(`❌ ${elementName} tiene opacity: ${opacity} (debería ser > 0)`);

    // Capturar screenshot del problema
    await page.screenshot({
      path: `test-results/visibility-issue-${Date.now()}.png`,
      fullPage: true
    });
  }

  expect(isVisible).toBe(true);
  return isVisible;
}

test.describe('Visibilidad de elementos al navegar', () => {

  test('Los títulos H1 deben ser visibles inmediatamente al navegar', async ({ page }) => {
    // Comenzar en home
    await page.goto('/');

    // Navegar por todas las rutas
    for (const route of ROUTES) {
      console.log(`\n📍 Navegando a: ${route.name} (${route.path})`);
      await page.goto(route.path);

      // Esperar a que la página esté cargada
      await page.waitForLoadState('networkidle');

      // Pequeña espera para simular la navegación real
      await page.waitForTimeout(100);

      // Buscar títulos H1
      const h1Elements = await page.locator('h1').all();

      if (h1Elements.length > 0) {
        console.log(`  Encontrados ${h1Elements.length} títulos H1`);

        for (let i = 0; i < h1Elements.length; i++) {
          const text = await h1Elements[i].textContent();
          console.log(`  Verificando H1: "${text?.substring(0, 50)}..."`);

          const opacity = await h1Elements[i].evaluate((el) => {
            return window.getComputedStyle(el).opacity;
          });

          if (parseFloat(opacity) === 0) {
            console.error(`  ❌ H1 invisible (opacity: ${opacity})`);
            await page.screenshot({
              path: `test-results/h1-invisible-${route.name}-${Date.now()}.png`,
              fullPage: true
            });
          }

          expect(parseFloat(opacity)).toBeGreaterThan(0);
        }
      }
    }
  });

  test('Navegación secuencial: verificar visibilidad en cada cambio de página', async ({ page }) => {
    await page.goto('/');

    for (let i = 0; i < ROUTES.length - 1; i++) {
      const currentRoute = ROUTES[i];
      const nextRoute = ROUTES[i + 1];

      console.log(`\n🔄 Navegando de ${currentRoute.name} → ${nextRoute.name}`);

      // Navegar usando enlaces si es posible, o goto
      await page.goto(nextRoute.path);
      await page.waitForLoadState('domcontentloaded');

      // Espera mínima para que se disparen animaciones
      await page.waitForTimeout(50);

      // Verificar elementos principales
      const mainContent = page.locator('main').first();
      await expect(mainContent).toBeVisible();

      // Verificar que no haya elementos con opacity-0 en el viewport
      const invisibleElements = await page.evaluate(() => {
        const elements = document.querySelectorAll('h1, h2, h3, [class*="fade"], [class*="slide"]');
        const invisible = [];

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          const opacity = parseFloat(style.opacity);

          // Si está en el viewport y tiene opacity 0, es un problema
          if (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            opacity === 0
          ) {
            invisible.push({
              tag: el.tagName,
              text: el.textContent?.substring(0, 50),
              opacity: opacity,
              classes: el.className
            });
          }
        });

        return invisible;
      });

      if (invisibleElements.length > 0) {
        console.error(`❌ Elementos invisibles detectados en ${nextRoute.name}:`, invisibleElements);
        await page.screenshot({
          path: `test-results/navigation-invisible-${nextRoute.name}-${Date.now()}.png`,
          fullPage: false
        });
      }

      expect(invisibleElements).toHaveLength(0);
    }
  });

  test('Verificar visibilidad después de scroll hacia arriba', async ({ page }) => {
    for (const route of ROUTES) {
      console.log(`\n📍 Probando scroll en: ${route.name}`);
      await page.goto(route.path);
      await page.waitForLoadState('networkidle');

      // Scroll hacia abajo
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(300);

      // Scroll hacia arriba (esto debería hacer aparecer elementos según el bug)
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      // Ahora verificar visibilidad
      const h1Elements = await page.locator('h1').all();

      for (const h1 of h1Elements) {
        const opacity = await h1.evaluate((el) => {
          return window.getComputedStyle(el).opacity;
        });

        // Después del scroll, todo debería ser visible
        expect(parseFloat(opacity)).toBeGreaterThan(0);
      }
    }
  });

  test('Verificar tiempos de animación no bloqueantes', async ({ page }) => {
    // Ir a home
    await page.goto('/');

    // Medir tiempo hasta que el H1 principal sea visible
    const startTime = Date.now();

    await page.waitForSelector('h1', {
      state: 'visible',
      timeout: 5000
    });

    const endTime = Date.now();
    const timeToVisible = endTime - startTime;

    console.log(`⏱️  Tiempo hasta H1 visible: ${timeToVisible}ms`);

    // El contenido principal debería ser visible en menos de 1 segundo
    expect(timeToVisible).toBeLessThan(1000);
  });
});
