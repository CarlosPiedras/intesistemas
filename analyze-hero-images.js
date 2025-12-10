#!/usr/bin/env node

/**
 * Script para analizar imágenes de heroes sin necesidad de Playwright
 * Analiza los archivos de componentes y verifica configuración
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Análisis de Imágenes de Heroes\n');
console.log('='.repeat(60));

// Rutas de heroes a analizar
const heroComponents = [
  {
    name: 'Home Hero',
    path: 'src/components/heroes/Hero.tsx',
    route: '/',
    expectedType: 'video'
  },
  {
    name: 'About Hero',
    path: 'src/components/about/AboutHero.tsx',
    route: '/about',
    expectedType: 'image'
  },
  {
    name: 'Services Hero',
    path: 'src/components/services/ServicesHero.tsx',
    route: '/servicios',
    expectedType: 'image'
  },
  {
    name: 'Automation Hero',
    path: 'src/components/services/AutomationHero.tsx',
    route: '/servicios/automatizacion-industrial',
    expectedType: 'image'
  },
  {
    name: 'Distribution Hero',
    path: 'src/components/services/DistributionHero.tsx',
    route: '/servicios/distribucion-energia',
    expectedType: 'image'
  }
];

const issues = [];
const recommendations = [];

console.log('\n📊 Analizando componentes...\n');

heroComponents.forEach((hero, index) => {
  console.log(`${index + 1}. ${hero.name} (${hero.route})`);

  const fullPath = path.join(process.cwd(), hero.path);

  if (!fs.existsSync(fullPath)) {
    console.log(`   ❌ Archivo no encontrado: ${hero.path}`);
    issues.push({
      component: hero.name,
      severity: 'high',
      issue: 'Archivo no encontrado',
      path: hero.path
    });
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');

  // Verificar uso de Image component
  const hasImageComponent = content.includes('import Image from');
  const hasImageTag = content.includes('<Image');
  const hasVideoTag = content.includes('<video');
  const hasPriority = content.includes('priority');
  const hasFill = content.includes('fill');
  const hasPlaceholder = content.includes('placeholder');
  const hasBlurDataURL = content.includes('blurDataURL');

  if (hero.expectedType === 'image') {
    if (!hasImageComponent || !hasImageTag) {
      console.log('   ❌ No usa Next.js Image component');
      issues.push({
        component: hero.name,
        severity: 'high',
        issue: 'No usa Next.js Image component optimizado',
        recommendation: 'Cambiar <img> por <Image from="next/image">'
      });
    } else {
      console.log('   ✅ Usa Next.js Image component');
    }

    if (!hasPriority) {
      console.log('   ⚠️  Falta prop "priority"');
      issues.push({
        component: hero.name,
        severity: 'medium',
        issue: 'Falta prop "priority"',
        recommendation: 'Agregar priority={true} al Image component'
      });
    } else {
      console.log('   ✅ Tiene priority configurado');
    }

    if (!hasFill) {
      console.log('   ⚠️  No usa "fill" (puede afectar responsive)');
    } else {
      console.log('   ✅ Usa "fill" para responsive');
    }

    if (!hasPlaceholder) {
      console.log('   ℹ️  Sin placeholder (opcional)');
      recommendations.push({
        component: hero.name,
        priority: 'low',
        recommendation: 'Considerar agregar placeholder="blur" para mejor UX'
      });
    }

    if (!hasBlurDataURL && hasPlaceholder) {
      console.log('   ℹ️  Tiene placeholder pero sin blurDataURL');
    }

    // Buscar la ruta de la imagen
    const imageSrcMatch = content.match(/src=["']([^"']+)["']/);
    if (imageSrcMatch) {
      const imageSrc = imageSrcMatch[1];
      console.log(`   📁 Imagen: ${imageSrc}`);

      // Verificar si el archivo existe
      const publicPath = path.join(process.cwd(), 'public', imageSrc);
      if (fs.existsSync(publicPath)) {
        const stats = fs.statSync(publicPath);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`   📏 Tamaño: ${sizeInMB} MB`);

        if (stats.size > 500000) { // > 500KB
          issues.push({
            component: hero.name,
            severity: 'medium',
            issue: `Imagen grande: ${sizeInMB} MB`,
            recommendation: 'Comprimir imagen o usar formato WebP'
          });
          console.log(`   ⚠️  Imagen grande (> 500KB), considerar comprimir`);
        } else {
          console.log(`   ✅ Tamaño apropiado`);
        }
      } else {
        console.log(`   ⚠️  Imagen no encontrada en: ${publicPath}`);
        issues.push({
          component: hero.name,
          severity: 'high',
          issue: 'Imagen no encontrada',
          path: imageSrc
        });
      }
    }

  } else if (hero.expectedType === 'video') {
    if (hasVideoTag) {
      console.log('   ✅ Usa video');

      // Buscar atributos del video
      const hasAutoPlay = content.includes('autoPlay');
      const hasLoop = content.includes('loop');
      const hasMuted = content.includes('muted');
      const hasPlaysInline = content.includes('playsInline');

      if (!hasAutoPlay) console.log('   ⚠️  Sin autoPlay');
      if (!hasMuted) console.log('   ⚠️  Sin muted');
      if (!hasPlaysInline) console.log('   ⚠️  Sin playsInline (importante para móviles)');

      const videoSrcMatch = content.match(/src=["']([^"']+\.mp4)["']/);
      if (videoSrcMatch) {
        const videoSrc = videoSrcMatch[1];
        console.log(`   📹 Video: ${videoSrc}`);

        const publicPath = path.join(process.cwd(), 'public', videoSrc);
        if (fs.existsSync(publicPath)) {
          const stats = fs.statSync(publicPath);
          const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
          console.log(`   📏 Tamaño: ${sizeInMB} MB`);

          if (stats.size > 5000000) { // > 5MB
            console.log(`   ⚠️  Video muy grande (> 5MB)`);
            issues.push({
              component: hero.name,
              severity: 'medium',
              issue: `Video grande: ${sizeInMB} MB`,
              recommendation: 'Comprimir video para mejor carga'
            });
          }
        }
      }
    }
  }

  console.log('');
});

// Resumen de problemas
console.log('='.repeat(60));
console.log('\n📋 RESUMEN DE PROBLEMAS\n');

if (issues.length === 0) {
  console.log('✅ No se encontraron problemas críticos!\n');
} else {
  const critical = issues.filter(i => i.severity === 'high');
  const warnings = issues.filter(i => i.severity === 'medium');

  if (critical.length > 0) {
    console.log(`❌ Problemas Críticos (${critical.length}):\n`);
    critical.forEach((issue, idx) => {
      console.log(`   ${idx + 1}. [${issue.component}]`);
      console.log(`      - ${issue.issue}`);
      if (issue.recommendation) {
        console.log(`      → ${issue.recommendation}`);
      }
      console.log('');
    });
  }

  if (warnings.length > 0) {
    console.log(`⚠️  Advertencias (${warnings.length}):\n`);
    warnings.forEach((issue, idx) => {
      console.log(`   ${idx + 1}. [${issue.component}]`);
      console.log(`      - ${issue.issue}`);
      if (issue.recommendation) {
        console.log(`      → ${issue.recommendation}`);
      }
      console.log('');
    });
  }
}

// Recomendaciones
if (recommendations.length > 0) {
  console.log('='.repeat(60));
  console.log('\n💡 RECOMENDACIONES DE MEJORA\n');
  recommendations.forEach((rec, idx) => {
    console.log(`   ${idx + 1}. [${rec.component}]`);
    console.log(`      ${rec.recommendation}`);
    console.log('');
  });
}

// Verificar archivos de imágenes en public
console.log('='.repeat(60));
console.log('\n📁 Analizando archivos de imágenes...\n');

const publicDir = path.join(process.cwd(), 'public', 'media', 'pages');
const imagePaths = [
  'about/hero.jpg',
  'servicios/hero.jpg',
  'servicios/automatizacion/hero.jpg',
  'servicios/distribucion/hero.jpg',
  'servicios/soporte/hero.jpg',
  'servicios/gestion/hero.jpg'
];

imagePaths.forEach(imgPath => {
  const fullPath = path.join(publicDir, imgPath);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    const status = stats.size > 500000 ? '⚠️' : '✅';
    console.log(`${status} ${imgPath}: ${sizeInMB} MB`);
  } else {
    console.log(`❌ No encontrado: ${imgPath}`);
  }
});

// Checklist final
console.log('\n' + '='.repeat(60));
console.log('\n✅ CHECKLIST DE OPTIMIZACIÓN\n');

const checklist = [
  { item: 'Todos los heroes usan Next.js Image', check: issues.filter(i => i.issue.includes('Image component')).length === 0 },
  { item: 'Todas las imágenes tienen priority', check: issues.filter(i => i.issue.includes('priority')).length === 0 },
  { item: 'Imágenes < 500KB', check: issues.filter(i => i.issue.includes('grande')).length === 0 },
  { item: 'No hay imágenes faltantes', check: issues.filter(i => i.issue.includes('no encontrada')).length === 0 },
];

checklist.forEach(item => {
  console.log(`${item.check ? '✅' : '❌'} ${item.item}`);
});

console.log('\n' + '='.repeat(60));
console.log('\n💻 PRÓXIMOS PASOS:\n');
console.log('1. Revisar y corregir los problemas críticos listados arriba');
console.log('2. Comprimir imágenes grandes usando: https://squoosh.app/');
console.log('3. Considerar formato WebP para mejor compresión');
console.log('4. Ejecutar el test manual: abre test-hero-loading.html en tu navegador');
console.log('5. Navegar entre páginas y verificar tiempos de carga');
console.log('\n' + '='.repeat(60) + '\n');

// Exit code basado en problemas críticos
const critical = issues.filter(i => i.severity === 'high');
process.exit(critical.length > 0 ? 1 : 0);
