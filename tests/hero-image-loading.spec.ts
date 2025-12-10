import { test, expect } from '@playwright/test';

/**
 * Tests para detectar problemas de carga de imágenes en Hero sections
 * al navegar entre páginas.
 *
 * Problemas detectados:
 * - Imágenes que tardan demasiado en cargar
 * - Heroes que se muestran vacíos/en blanco
 * - Transiciones lentas entre páginas
 */

const ROUTES_WITH_HEROES = [
  { path: '/', name: 'Home', hasVideo: true, hasImage: false },
  { path: '/about', name: 'About', hasVideo: false, hasImage: true },
  { path: '/servicios', name: 'Servicios', hasVideo: false, hasImage: true },
  { path: '/servicios/automatizacion-industrial', name: 'Automatización', hasVideo: false, hasImage: true },
  { path: '/servicios/distribucion-energia', name: 'Distribución', hasVideo: false, hasImage: true },
  { path: '/servicios/soporte-tecnico', name: 'Soporte', hasVideo: false, hasImage: true },
  { path: '/servicios/gestion-proyectos', name: 'Gestión', hasVideo: false, hasImage: true },
  { path: '/contacto', name: 'Contacto', hasVideo: false, hasImage: true },
];

/**
 * Mide el tiempo hasta que el hero esté completamente visible
 */
async function measureHeroLoadTime(page, routeName: string) {
  const startTime = Date.now();

  // Esperar a que el section del hero esté presente
  await page.waitForSelector('section', { timeout: 5000 });

  // Buscar el hero (normalmente es el primer section o tiene h1)
  const heroSection = page.locator('section').first();
  await expect(heroSection).toBeVisible({ timeout: 5000 });

  // Verificar que tenga contenido visible (h1 o video/imagen)
  const hasH1 = await page.locator('section h1').first().isVisible({ timeout: 3000 }).catch(() => false);

  const endTime = Date.now();
  const loadTime = endTime - startTime;

  console.log(`  ⏱️  ${routeName}: Hero visible en ${loadTime}ms`);

  return { loadTime, hasH1 };
}

/**
 * Verifica que las imágenes del hero estén cargadas
 */
async function checkHeroImageLoaded(page, routeName: string) {
  try {
    // Buscar imágenes en el hero section
    const heroImages = page.locator('section img').first();

    if (await heroImages.count() === 0) {
      console.log(`  ℹ️  ${routeName}: No hay imágenes en hero (puede ser video)`);
      return { loaded: true, type: 'no-image' };
    }

    // Verificar que la imagen esté cargada (naturalWidth > 0)
    const isLoaded = await heroImages.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalWidth > 0;
    });

    if (!isLoaded) {
      console.error(`  ❌ ${routeName}: Imagen del hero NO cargada`);
      await page.screenshot({
        path: `test-results/hero-not-loaded-${routeName}-${Date.now()}.png`,
        fullPage: false
      });
      return { loaded: false, type: 'image-failed' };
    }

    console.log(`  ✅ ${routeName}: Imagen del hero cargada correctamente`);
    return { loaded: true, type: 'image' };

  } catch (error) {
    console.error(`  ⚠️  ${routeName}: Error verificando imagen: ${error.message}`);
    return { loaded: false, type: 'error', error };
  }
}

/**
 * Verifica que el video del hero esté cargado (para home)
 */
async function checkHeroVideoLoaded(page, routeName: string) {
  try {
    const videoElement = page.locator('section video').first();

    if (await videoElement.count() === 0) {
      return { loaded: true, type: 'no-video' };
    }

    // Verificar que el video tenga datos cargados
    const videoState = await videoElement.evaluate((video: HTMLVideoElement) => {
      return {
        readyState: video.readyState, // 4 = HAVE_ENOUGH_DATA
        networkState: video.networkState,
        currentSrc: video.currentSrc,
        duration: video.duration
      };
    });

    console.log(`  📹 ${routeName}: Video readyState=${videoState.readyState}`);

    if (videoState.readyState < 2) {
      console.error(`  ❌ ${routeName}: Video no cargado (readyState: ${videoState.readyState})`);
      return { loaded: false, type: 'video-not-loaded', state: videoState };
    }

    console.log(`  ✅ ${routeName}: Video cargado correctamente`);
    return { loaded: true, type: 'video', state: videoState };

  } catch (error) {
    console.error(`  ⚠️  ${routeName}: Error verificando video: ${error.message}`);
    return { loaded: false, type: 'error', error };
  }
}

test.describe('Carga de Imágenes/Videos en Heroes', () => {

  test('Verificar que todas las imágenes de hero tengan priority', async ({ page }) => {
    console.log('\n🔍 Verificando atributo priority en imágenes de hero...\n');

    for (const route of ROUTES_WITH_HEROES) {
      if (!route.hasImage) continue;

      await page.goto(route.path);
      await page.waitForLoadState('domcontentloaded');

      // Verificar que las imágenes tengan el atributo fetchpriority="high"
      const heroImages = page.locator('section img').first();

      if (await heroImages.count() > 0) {
        const fetchPriority = await heroImages.getAttribute('fetchpriority');
        const loading = await heroImages.getAttribute('loading');

        console.log(`  ${route.name}:`);
        console.log(`    - fetchpriority: ${fetchPriority || 'no configurado'}`);
        console.log(`    - loading: ${loading || 'no configurado'}`);

        if (fetchPriority !== 'high') {
          console.error(`    ❌ fetchpriority debería ser "high" para carga prioritaria`);
        }

        // Next.js con priority debería generar fetchpriority="high"
        expect(fetchPriority).toBe('high');
      }
    }
  });

  test('Medir tiempos de carga de heroes al navegar', async ({ page }) => {
    console.log('\n⏱️  Midiendo tiempos de carga de heroes...\n');

    const loadTimes = [];

    for (const route of ROUTES_WITH_HEROES) {
      console.log(`📍 Navegando a: ${route.name}`);

      const navStart = Date.now();
      await page.goto(route.path);
      await page.waitForLoadState('networkidle');
      const navEnd = Date.now();

      console.log(`  Navegación completa: ${navEnd - navStart}ms`);

      // Medir tiempo de carga del hero
      const { loadTime, hasH1 } = await measureHeroLoadTime(page, route.name);
      loadTimes.push({ route: route.name, loadTime, hasH1 });

      // Verificar imagen o video
      if (route.hasImage) {
        await checkHeroImageLoaded(page, route.name);
      } else if (route.hasVideo) {
        await checkHeroVideoLoaded(page, route.name);
      }

      // Pequeña pausa entre navegaciones
      await page.waitForTimeout(500);
    }

    // Resumen de tiempos
    console.log('\n📊 Resumen de tiempos de carga:\n');
    loadTimes.forEach(({ route, loadTime, hasH1 }) => {
      const status = loadTime > 2000 ? '⚠️' : '✅';
      console.log(`  ${status} ${route}: ${loadTime}ms (H1: ${hasH1 ? 'Sí' : 'No'})`);
    });

    // Verificar que ningún hero tarde más de 3 segundos
    const slowHeros = loadTimes.filter(t => t.loadTime > 3000);
    if (slowHeros.length > 0) {
      console.error(`\n❌ Heroes lentos detectados:`);
      slowHeros.forEach(h => console.error(`   - ${h.route}: ${h.loadTime}ms`));
    }

    expect(slowHeros.length).toBe(0);
  });

  test('Navegación rápida: detectar imágenes que no se cargan a tiempo', async ({ page }) => {
    console.log('\n🚀 Test de navegación rápida entre páginas...\n');

    const problems = [];

    for (let i = 0; i < ROUTES_WITH_HEROES.length - 1; i++) {
      const currentRoute = ROUTES_WITH_HEROES[i];
      const nextRoute = ROUTES_WITH_HEROES[i + 1];

      console.log(`🔄 ${currentRoute.name} → ${nextRoute.name}`);

      // Navegar rápidamente (sin esperar networkidle)
      await page.goto(nextRoute.path);
      await page.waitForLoadState('domcontentloaded');

      // Espera corta para simular navegación rápida del usuario
      await page.waitForTimeout(300);

      // Verificar si la imagen del hero está cargada
      if (nextRoute.hasImage) {
        const result = await checkHeroImageLoaded(page, nextRoute.name);
        if (!result.loaded) {
          problems.push({
            from: currentRoute.name,
            to: nextRoute.name,
            issue: 'imagen-no-cargada'
          });
        }
      }

      // Verificar que el hero sea visible
      const heroVisible = await page.locator('section').first().isVisible();
      if (!heroVisible) {
        console.error(`  ❌ Hero section no visible en ${nextRoute.name}`);
        problems.push({
          from: currentRoute.name,
          to: nextRoute.name,
          issue: 'hero-no-visible'
        });
      }
    }

    if (problems.length > 0) {
      console.error('\n❌ Problemas detectados en navegación rápida:');
      problems.forEach(p => {
        console.error(`   ${p.from} → ${p.to}: ${p.issue}`);
      });
    }

    expect(problems).toHaveLength(0);
  });

  test('Verificar estado de carga de imágenes durante navegación', async ({ page }) => {
    console.log('\n🖼️  Verificando estados de carga de imágenes...\n');

    for (const route of ROUTES_WITH_HEROES) {
      if (!route.hasImage) continue;

      console.log(`📍 ${route.name}`);
      await page.goto(route.path);

      // Esperar a que el DOM esté listo
      await page.waitForLoadState('domcontentloaded');

      // Verificar inmediatamente el estado de la imagen
      const imageStates = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('section img'));
        return images.map(img => {
          const htmlImg = img as HTMLImageElement;
          return {
            src: htmlImg.src,
            complete: htmlImg.complete,
            naturalWidth: htmlImg.naturalWidth,
            naturalHeight: htmlImg.naturalHeight,
            loading: htmlImg.loading,
            fetchPriority: htmlImg.getAttribute('fetchpriority'),
            currentSrc: htmlImg.currentSrc
          };
        });
      });

      console.log(`  Imágenes encontradas: ${imageStates.length}`);
      imageStates.forEach((state, idx) => {
        console.log(`  Imagen ${idx + 1}:`);
        console.log(`    - Complete: ${state.complete}`);
        console.log(`    - Dimensions: ${state.naturalWidth}x${state.naturalHeight}`);
        console.log(`    - FetchPriority: ${state.fetchPriority}`);
        console.log(`    - Loading: ${state.loading}`);

        if (!state.complete || state.naturalWidth === 0) {
          console.error(`    ❌ Imagen no completamente cargada`);
        }
      });

      // Esperar networkidle para verificar si la imagen carga eventualmente
      await page.waitForLoadState('networkidle', { timeout: 10000 });

      // Verificar de nuevo
      const result = await checkHeroImageLoaded(page, route.name);
      expect(result.loaded).toBe(true);
    }
  });

  test('Simular conexión lenta y verificar comportamiento', async ({ page, context }) => {
    console.log('\n🐌 Simulando conexión lenta...\n');

    // Simular conexión 3G lenta
    await context.route('**/*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 500)); // 500ms de delay
      await route.continue();
    });

    const slowRoutes = [
      ROUTES_WITH_HEROES[0], // Home
      ROUTES_WITH_HEROES[1], // About
      ROUTES_WITH_HEROES[2], // Servicios
    ];

    for (const route of slowRoutes) {
      console.log(`📍 ${route.name} (conexión lenta)`);

      await page.goto(route.path);

      // El hero debería estar visible incluso con conexión lenta
      const heroSection = page.locator('section').first();
      await expect(heroSection).toBeVisible({ timeout: 8000 });

      // Verificar que haya un placeholder o skeleton mientras carga
      // (esto es opcional, pero mejora la UX)
      const hasBackground = await heroSection.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
               styles.backgroundColor !== 'transparent';
      });

      console.log(`  Background visible: ${hasBackground ? 'Sí' : 'No'}`);
    }
  });

  test('Verificar preload de imágenes críticas', async ({ page }) => {
    console.log('\n🔗 Verificando preload de recursos...\n');

    for (const route of ROUTES_WITH_HEROES.slice(0, 3)) {
      await page.goto(route.path);

      // Buscar tags de preload en el head
      const preloadLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('link[rel="preload"]'));
        return links.map(link => ({
          href: link.getAttribute('href'),
          as: link.getAttribute('as'),
          fetchpriority: link.getAttribute('fetchpriority')
        }));
      });

      console.log(`  ${route.name}:`);
      console.log(`    Preloads encontrados: ${preloadLinks.length}`);

      const imagePreloads = preloadLinks.filter(l => l.as === 'image');
      console.log(`    Preloads de imágenes: ${imagePreloads.length}`);

      imagePreloads.forEach(preload => {
        console.log(`      - ${preload.href} (priority: ${preload.fetchpriority})`);
      });
    }
  });
});

test.describe('Performance de Carga', () => {

  test('Medir Web Vitals durante navegación', async ({ page }) => {
    console.log('\n📊 Midiendo Web Vitals...\n');

    for (const route of ROUTES_WITH_HEROES.slice(0, 3)) {
      await page.goto(route.path);
      await page.waitForLoadState('networkidle');

      // Medir LCP (Largest Contentful Paint)
      const lcp = await page.evaluate(() => {
        return new Promise((resolve) => {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.renderTime || lastEntry.loadTime);
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          setTimeout(() => resolve(null), 3000);
        });
      });

      console.log(`  ${route.name}: LCP = ${lcp ? Math.round(lcp as number) + 'ms' : 'N/A'}`);

      if (lcp && (lcp as number) > 2500) {
        console.error(`    ⚠️  LCP mayor a 2.5s (malo para performance)`);
      }
    }
  });
});
