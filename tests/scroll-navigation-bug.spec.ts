import { test, expect } from '@playwright/test';

/**
 * Test específico para detectar el bug de visibilidad en componentes whileInView
 * cuando se navega después de hacer scroll en otra página.
 *
 * BUG DESCRIPCIÓN:
 * - Usuario hace scroll hacia abajo en página A
 * - Usuario navega a página B (ej: gestión proyectos)
 * - El hero se ve perfecto (usa animate)
 * - Los componentes debajo del hero con whileInView no se cargan (quedan en opacity: 0)
 *
 * CAUSA:
 * - PageWrapper hace scrollTo(0,0) instantáneamente
 * - Los componentes con whileInView + viewport={{ once: true }} se montan YA en viewport
 * - IntersectionObserver nunca detecta el evento "enter viewport"
 * - Los componentes quedan permanentemente en opacity: 0
 */

const PAGES_TO_TEST = [
  {
    path: '/servicios/gestion-proyectos',
    name: 'Gestión de Proyectos',
    heroSelector: 'h1:has-text("GESTIÓN CON")',
    contentSelector: 'h2:has-text("SERVICIOS DE GESTIÓN DE PROYECTOS")',
    descriptionText: 'Ofrecemos cuatro pilares fundamentales',
  },
  {
    path: '/servicios/soporte-tecnico',
    name: 'Soporte Técnico',
    heroSelector: 'h1:has-text("SOPORTE")',
    contentSelector: 'h2:has-text("MANTÉN TUS SISTEMAS OPERATIVOS")',
    descriptionText: 'Asistencia técnica profesional',
  },
];

test.describe('Bug de visibilidad después de scroll y navegación', () => {

  test('Detectar elementos invisibles después de navegar desde página con scroll', async ({ page }) => {
    console.log('\n🧪 TEST: Reproducir bug de navegación + scroll\n');

    // Páginas desde las que navegaremos (después de hacer scroll)
    const sourcePages = ['/', '/servicios', '/about'];

    for (const sourcePage of sourcePages) {
      for (const targetPage of PAGES_TO_TEST) {
        console.log(`\n📍 Escenario: ${sourcePage} → ${targetPage.name}`);
        console.log('─'.repeat(60));

        // PASO 1: Navegar a página de origen
        console.log(`1️⃣  Navegando a ${sourcePage}`);
        await page.goto(sourcePage);
        await page.waitForLoadState('networkidle');

        // PASO 2: Hacer scroll hacia abajo (simular lectura de la página)
        console.log('2️⃣  Haciendo scroll hacia abajo...');
        await page.evaluate(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await page.waitForTimeout(500);

        // Verificar que hicimos scroll
        const scrollPosition = await page.evaluate(() => window.scrollY);
        console.log(`   Posición de scroll: ${scrollPosition}px`);

        // PASO 3: Navegar a la página objetivo
        console.log(`3️⃣  Navegando a ${targetPage.path}`);
        await page.goto(targetPage.path);
        await page.waitForLoadState('domcontentloaded');

        // Esperar un poco para que las animaciones se disparen
        await page.waitForTimeout(200);

        // PASO 4: Verificar que estamos arriba del todo
        const newScrollPosition = await page.evaluate(() => window.scrollY);
        console.log(`   Nueva posición de scroll: ${newScrollPosition}px`);

        // PASO 5: Verificar visibilidad del HERO (este debería funcionar)
        console.log(`4️⃣  Verificando HERO...`);
        const heroElement = page.locator(targetPage.heroSelector).first();
        await expect(heroElement).toBeAttached({ timeout: 5000 });

        const heroOpacity = await heroElement.evaluate((el) => {
          return window.getComputedStyle(el).opacity;
        });

        console.log(`   Hero opacity: ${heroOpacity} ${parseFloat(heroOpacity) > 0 ? '✅' : '❌'}`);
        expect(parseFloat(heroOpacity)).toBeGreaterThan(0);

        // PASO 6: Verificar visibilidad del CONTENIDO DEBAJO DEL HERO (aquí está el bug)
        console.log(`5️⃣  Verificando CONTENIDO debajo del hero...`);
        const contentElement = page.locator(targetPage.contentSelector).first();
        await expect(contentElement).toBeAttached({ timeout: 5000 });

        const contentOpacity = await contentElement.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            opacity: style.opacity,
            display: style.display,
            visibility: style.visibility,
            transform: style.transform,
          };
        });

        console.log(`   Contenido opacity: ${contentOpacity.opacity}`);
        console.log(`   Contenido display: ${contentOpacity.display}`);
        console.log(`   Contenido visibility: ${contentOpacity.visibility}`);
        console.log(`   Contenido transform: ${contentOpacity.transform}`);

        // Verificar si está en el viewport
        const isInViewport = await contentElement.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          return {
            inViewport: rect.top < window.innerHeight && rect.bottom > 0,
            top: rect.top,
            bottom: rect.bottom,
            windowHeight: window.innerHeight,
          };
        });

        console.log(`   En viewport: ${isInViewport.inViewport} (top: ${isInViewport.top.toFixed(0)}px)`);

        // ⚠️ AQUÍ DEBERÍA FALLAR SI EL BUG ESTÁ PRESENTE
        if (parseFloat(contentOpacity.opacity) === 0) {
          console.error(`   ❌ BUG DETECTADO: Elemento invisible con opacity: 0`);
          console.error(`      El elemento está en el DOM y en el viewport, pero no se animó`);

          // Capturar screenshot del bug
          await page.screenshot({
            path: `test-results/bug-detected-${targetPage.name.replace(/\s+/g, '-')}-from-${sourcePage.replace(/\//g, '-')}.png`,
            fullPage: true,
          });
        } else {
          console.log(`   ✅ Elemento visible correctamente`);
        }

        expect(parseFloat(contentOpacity.opacity)).toBeGreaterThan(0);

        // PASO 7: Verificar descripción también
        const descriptionElement = page.locator(`p:has-text("${targetPage.descriptionText}")`).first();
        if (await descriptionElement.count() > 0) {
          const descOpacity = await descriptionElement.evaluate((el) => {
            return window.getComputedStyle(el).opacity;
          });
          console.log(`   Descripción opacity: ${descOpacity} ${parseFloat(descOpacity) > 0 ? '✅' : '❌'}`);
          expect(parseFloat(descOpacity)).toBeGreaterThan(0);
        }

        console.log('');
      }
    }
  });

  test('Verificar elementos whileInView en viewport inicial', async ({ page }) => {
    console.log('\n🧪 TEST: Elementos con whileInView en todas las páginas\n');

    for (const targetPage of PAGES_TO_TEST) {
      console.log(`\n📍 Analizando: ${targetPage.name}`);
      console.log('─'.repeat(60));

      await page.goto(targetPage.path);
      await page.waitForLoadState('networkidle');

      // Esperar un poco para animaciones
      await page.waitForTimeout(300);

      // Buscar todos los elementos con framer-motion en el viewport inicial
      const elementsInViewport = await page.evaluate(() => {
        const allElements = Array.from(document.querySelectorAll('h1, h2, h3, p, div[class*="motion"]'));
        const results = [];

        allElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          const opacity = parseFloat(style.opacity);

          // Solo elementos en viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const text = el.textContent?.trim().substring(0, 60) || '';
            results.push({
              tag: el.tagName,
              text: text,
              opacity: opacity,
              top: rect.top,
              classes: el.className,
              isInvisible: opacity === 0 && text.length > 0,
            });
          }
        });

        return results;
      });

      // Filtrar elementos invisibles con contenido
      const invisibleElements = elementsInViewport.filter(el => el.isInvisible);

      console.log(`   Total elementos en viewport: ${elementsInViewport.length}`);
      console.log(`   Elementos invisibles: ${invisibleElements.length}`);

      if (invisibleElements.length > 0) {
        console.error('\n   ❌ ELEMENTOS INVISIBLES DETECTADOS:');
        invisibleElements.forEach(el => {
          console.error(`      - ${el.tag}: "${el.text.substring(0, 50)}" (opacity: ${el.opacity})`);
        });

        await page.screenshot({
          path: `test-results/invisible-elements-${targetPage.name.replace(/\s+/g, '-')}.png`,
          fullPage: true,
        });
      } else {
        console.log('   ✅ Todos los elementos visibles correctamente');
      }

      expect(invisibleElements.length).toBe(0);
    }
  });

  test('Test directo sin navegación previa', async ({ page }) => {
    console.log('\n🧪 TEST: Navegación directa (sin scroll previo)\n');

    for (const targetPage of PAGES_TO_TEST) {
      console.log(`\n📍 Navegación directa a: ${targetPage.name}`);

      await page.goto(targetPage.path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(300);

      const contentElement = page.locator(targetPage.contentSelector).first();
      const opacity = await contentElement.evaluate((el) => {
        return window.getComputedStyle(el).opacity;
      });

      console.log(`   Contenido opacity: ${opacity} ${parseFloat(opacity) > 0 ? '✅' : '❌'}`);
      expect(parseFloat(opacity)).toBeGreaterThan(0);
    }
  });

  test('Analizar atributos de framer-motion en elementos problemáticos', async ({ page }) => {
    console.log('\n🧪 TEST: Analizar configuración de framer-motion\n');

    for (const targetPage of PAGES_TO_TEST) {
      console.log(`\n📍 Analizando: ${targetPage.name}`);

      await page.goto(targetPage.path);
      await page.waitForLoadState('networkidle');

      // Buscar elementos con whileInView
      const motionConfig = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('[style*="opacity"]'));
        const configs = [];

        elements.forEach((el) => {
          const text = el.textContent?.trim().substring(0, 50);
          const style = window.getComputedStyle(el);

          if (text && text.length > 10) {
            configs.push({
              tag: el.tagName,
              text: text,
              opacity: style.opacity,
              transform: style.transform,
              hasDataAttribute: el.hasAttribute('data-projection-id'),
            });
          }
        });

        return configs;
      });

      console.log(`   Elementos motion encontrados: ${motionConfig.length}`);
      motionConfig.forEach(config => {
        const status = parseFloat(config.opacity) > 0 ? '✅' : '❌';
        console.log(`   ${status} ${config.tag}: "${config.text.substring(0, 40)}" (opacity: ${config.opacity})`);
      });
    }
  });
});
