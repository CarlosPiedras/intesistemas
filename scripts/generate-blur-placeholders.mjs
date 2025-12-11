import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const images = [
  {
    name: 'About Hero',
    path: path.join(__dirname, '../public/media/pages/about/hero.webp'),
  },
  {
    name: 'Services Hero',
    path: path.join(__dirname, '../public/media/pages/servicios/hero.webp'),
  },
];

async function generateBlurPlaceholder(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(10, 10, { fit: 'inside' })
      .blur()
      .toBuffer();

    const base64 = buffer.toString('base64');
    return `data:image/webp;base64,${base64}`;
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error);
    return null;
  }
}

async function main() {
  console.log('🎨 Generando blur placeholders...\n');

  const results = {};

  for (const image of images) {
    console.log(`📸 Procesando: ${image.name}`);
    const blurDataURL = await generateBlurPlaceholder(image.path);

    if (blurDataURL) {
      results[image.name] = blurDataURL;
      console.log(`✅ Blur placeholder generado (${blurDataURL.length} chars)`);
      console.log(`\nblurDataURL:\n${blurDataURL}\n`);
    }
  }

  console.log('\n✨ ¡Listo! Copia los blur placeholders a tus componentes.');
}

main();
