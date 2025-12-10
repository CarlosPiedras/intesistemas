#!/usr/bin/env node

/**
 * Script para optimizar automáticamente las imágenes de heroes
 * Requiere: npm install sharp
 */

const fs = require('fs');
const path = require('path');

console.log('\n🎨 Optimizador de Imágenes de Heroes\n');
console.log('='.repeat(60));

// Verificar si sharp está instalado
let sharp;
try {
  sharp = require('sharp');
  console.log('✅ Sharp encontrado\n');
} catch (e) {
  console.log('❌ Sharp no está instalado\n');
  console.log('Para instalar sharp, ejecuta:');
  console.log('  npm install sharp');
  console.log('\nO usa las herramientas web recomendadas en DIAGNOSTICO_HEROES.md\n');
  process.exit(1);
}

// Imágenes a optimizar
const images = [
  {
    name: 'Servicios Hero',
    path: 'public/media/pages/servicios/hero.jpg',
    priority: 'CRÍTICO',
    currentSize: '9.70 MB'
  },
  {
    name: 'Gestión Hero',
    path: 'public/media/pages/servicios/gestion/hero.jpg',
    priority: 'CRÍTICO',
    currentSize: '9.39 MB'
  },
  {
    name: 'Automatización Hero',
    path: 'public/media/pages/servicios/automatizacion/hero.jpg',
    priority: 'ALTO',
    currentSize: '5.76 MB'
  },
  {
    name: 'Distribución Hero',
    path: 'public/media/pages/servicios/distribucion/hero.jpg',
    priority: 'MEDIO',
    currentSize: '3.46 MB'
  },
  {
    name: 'About Hero',
    path: 'public/media/pages/about/hero.jpg',
    priority: 'MEDIO',
    currentSize: '3.11 MB'
  },
  {
    name: 'Soporte Hero',
    path: 'public/media/pages/servicios/soporte/hero.jpg',
    priority: 'BAJO',
    currentSize: '1.08 MB'
  }
];

// Configuración de optimización
const config = {
  quality: 80, // Calidad JPEG/WebP (1-100)
  maxWidth: 1920, // Ancho máximo
  format: 'webp', // 'jpeg' o 'webp'
  createBackup: true // Crear respaldo antes de optimizar
};

console.log('📋 Configuración:');
console.log(`   - Formato: ${config.format.toUpperCase()}`);
console.log(`   - Calidad: ${config.quality}%`);
console.log(`   - Ancho máximo: ${config.maxWidth}px`);
console.log(`   - Backup: ${config.createBackup ? 'Sí' : 'No'}`);
console.log('');

async function optimizeImage(imageInfo) {
  const fullPath = path.join(process.cwd(), imageInfo.path);

  if (!fs.existsSync(fullPath)) {
    console.log(`   ⚠️  Archivo no encontrado: ${imageInfo.path}`);
    return { success: false, reason: 'not-found' };
  }

  try {
    // Obtener info de la imagen original
    const originalStats = fs.statSync(fullPath);
    const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);

    // Crear backup si está configurado
    if (config.createBackup) {
      const backupPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.original.$1');
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(fullPath, backupPath);
        console.log(`   💾 Backup creado: ${path.basename(backupPath)}`);
      }
    }

    // Obtener metadata de la imagen
    const metadata = await sharp(fullPath).metadata();
    console.log(`   📐 Dimensiones originales: ${metadata.width}x${metadata.height}`);

    // Determinar si necesita resize
    const needsResize = metadata.width > config.maxWidth;
    const newWidth = needsResize ? config.maxWidth : metadata.width;

    // Optimizar imagen
    let sharpInstance = sharp(fullPath);

    if (needsResize) {
      sharpInstance = sharpInstance.resize(newWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(`   🔽 Redimensionando a: ${newWidth}px`);
    }

    // Determinar ruta de salida
    const ext = config.format === 'webp' ? '.webp' : '.jpg';
    const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ext);

    // Aplicar compresión según formato
    if (config.format === 'webp') {
      await sharpInstance
        .webp({ quality: config.quality })
        .toFile(outputPath + '.tmp');
    } else {
      await sharpInstance
        .jpeg({ quality: config.quality, progressive: true })
        .toFile(outputPath + '.tmp');
    }

    // Reemplazar archivo original
    fs.renameSync(outputPath + '.tmp', outputPath);

    // Si cambió el formato, eliminar el original (pero mantener backup)
    if (config.format === 'webp' && outputPath !== fullPath) {
      fs.unlinkSync(fullPath);
    }

    // Obtener tamaño nuevo
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const newSizeKB = (newStats.size / 1024).toFixed(0);
    const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`   ✅ Optimizada: ${originalSizeMB} MB → ${newSizeMB} MB (${newSizeKB} KB)`);
    console.log(`   💰 Ahorro: ${savings}%`);

    return {
      success: true,
      originalSize: originalStats.size,
      newSize: newStats.size,
      savings: parseFloat(savings),
      outputPath: outputPath.replace(process.cwd(), '')
    };

  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return { success: false, reason: 'error', error };
  }
}

async function main() {
  console.log('🚀 Iniciando optimización...\n');

  const results = [];

  for (const imageInfo of images) {
    console.log(`📸 ${imageInfo.name} [${imageInfo.priority}]`);
    console.log(`   Actual: ${imageInfo.currentSize}`);

    const result = await optimizeImage(imageInfo);
    results.push({ ...imageInfo, ...result });

    console.log('');
  }

  // Resumen
  console.log('='.repeat(60));
  console.log('\n📊 RESUMEN\n');

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  if (successful.length > 0) {
    console.log(`✅ Optimizadas: ${successful.length} imágenes\n`);

    const totalOriginal = successful.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = successful.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

    console.log(`💾 Tamaño total antes: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`💾 Tamaño total después: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`💰 Ahorro total: ${totalSavings}%`);
  }

  if (failed.length > 0) {
    console.log(`\n❌ Fallidas: ${failed.length} imágenes`);
    failed.forEach(r => {
      console.log(`   - ${r.name}: ${r.reason}`);
    });
  }

  // Siguientes pasos
  console.log('\n' + '='.repeat(60));
  console.log('\n✅ PRÓXIMOS PASOS:\n');

  if (config.format === 'webp' && successful.length > 0) {
    console.log('⚠️  Has convertido imágenes a WebP. Debes actualizar las rutas:');
    console.log('');
    successful.forEach(r => {
      if (r.outputPath && r.outputPath.endsWith('.webp')) {
        console.log(`   En el componente de "${r.name}":`);
        console.log(`   Cambiar: src="${r.outputPath.replace('.webp', '.jpg')}"`);
        console.log(`   Por:     src="${r.outputPath}"`);
        console.log('');
      }
    });
  }

  console.log('1. Verifica las imágenes optimizadas visualmente');
  console.log('2. Ejecuta: node analyze-hero-images.js');
  console.log('3. Abre test-hero-loading.html y ejecuta "Test Automático"');
  console.log('4. Si hay problemas, restaura desde los backups .original.*');
  console.log('\n' + '='.repeat(60) + '\n');
}

main().catch(console.error);
