# Guía de Deployment - Inte Sistemas

## Opciones de Hosting

### Opción 1: Vercel (Recomendado para Next.js)

**Ventajas:**
- Optimizado para Next.js
- Deploy automático desde Git
- Edge Network global
- SSL gratuito
- Analytics incluido
- Zero-config

**Plan recomendado:** Pro ($20/mes)

#### Setup Vercel

```bash
# 1. Instalar CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Production deploy
vercel --prod
```

#### Configuración Vercel

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "fra1"],
  "env": {
    "CONTACT_EMAIL": "@contact-email",
    "RESEND_API_KEY": "@resend-api-key"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

### Opción 2: Netlify

**Ventajas:**
- Fácil integración Git
- Edge Functions
- Forms integrado
- CDN global
- SSL gratuito

#### Setup Netlify

```bash
# 1. Instalar CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy

# 4. Production deploy
netlify deploy --prod
```

#### Configuración Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

---

### Opción 3: VPS (Servidor Propio)

**Proveedores:**
- DigitalOcean ($12-24/mes)
- Hetzner ($5-20/mes)
- Linode ($12-24/mes)
- AWS EC2 (variable)

#### Setup VPS Ubuntu

```bash
# 1. Conectar al servidor
ssh root@your-server-ip

# 2. Actualizar sistema
apt update && apt upgrade -y

# 3. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# 4. Instalar PM2
npm install -g pm2

# 5. Instalar Nginx
apt install -y nginx

# 6. Instalar Certbot (SSL)
apt install -y certbot python3-certbot-nginx

# 7. Crear usuario para app
adduser nextapp
usermod -aG sudo nextapp
```

#### Deploy en VPS

```bash
# 1. Clonar repositorio
cd /var/www
git clone https://github.com/your-repo/intesistemas.git
cd intesistemas

# 2. Instalar dependencias
npm install

# 3. Build
npm run build

# 4. Configurar variables de entorno
nano .env.local
# Añadir variables

# 5. Iniciar con PM2
pm2 start npm --name "intesistemas" -- start
pm2 save
pm2 startup
```

#### Configuración Nginx

```nginx
# /etc/nginx/sites-available/intesistemas
server {
    listen 80;
    server_name intesistemas.com www.intesistemas.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache static assets
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Cache media assets
    location /media/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 7d;
        add_header Cache-Control "public, max-age=604800, immutable";
    }
}
```

```bash
# Activar sitio
ln -s /etc/nginx/sites-available/intesistemas /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Configurar SSL
certbot --nginx -d intesistemas.com -d www.intesistemas.com
```

---

## Variables de Entorno

### Desarrollo (.env.local)

```env
# Base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@intesistemas.com

# Email (Nodemailer alternativo)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=tu@email.com
# SMTP_PASS=tu_password

# Analytics (opcional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Node environment
NODE_ENV=development
```

### Producción

```env
# Base URL
NEXT_PUBLIC_SITE_URL=https://intesistemas.com

# Email
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@intesistemas.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Rate Limiting (Upstash)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxx

# Node environment
NODE_ENV=production
```

---

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm run lint
    - npm run type-check
    - npm test

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour

deploy:
  stage: deploy
  image: node:18
  script:
    - npm i -g vercel
    - vercel --token=$VERCEL_TOKEN --prod
  only:
    - main
```

---

## Optimización Pre-Deploy

### Build Optimization

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comprimir output
  compress: true,

  // Remover source maps en producción
  productionBrowserSourceMaps: false,

  // Optimizar imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Headers de seguridad y cache
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### Bundle Analyzer

```bash
# Instalar
npm install -D @next/bundle-analyzer

# Configurar
# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Ejecutar
ANALYZE=true npm run build
```

---

## Monitoreo Post-Deploy

### Health Checks

```ts
// app/api/health/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  // Verificar conexiones críticas aquí
  const checks = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
  }

  return NextResponse.json(checks)
}
```

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

```js
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
})
```

### Uptime Monitoring

Servicios recomendados:
- **UptimeRobot** (gratuito): Checks cada 5 min
- **Pingdom** (pago): Checks desde múltiples locaciones
- **Better Uptime** (pago): Alertas avanzadas

---

## Backup y Disaster Recovery

### Backup Código

```bash
# Git como backup principal
git push origin main
git push backup main  # Segundo remote

# Backup de build
tar -czf backup-$(date +%Y%m%d).tar.gz .next/
```

### Backup Base de Datos (si aplica en futuro)

```bash
# PostgreSQL
pg_dump -U user -d dbname > backup-$(date +%Y%m%d).sql

# MongoDB
mongodump --uri="mongodb://..." --out=backup-$(date +%Y%m%d)/
```

---

## Rollback

### Vercel

```bash
# Ver deployments
vercel ls

# Rollback a deployment anterior
vercel rollback [deployment-url]
```

### VPS con PM2

```bash
# Ver proceso
pm2 list

# Rollback con Git
cd /var/www/intesistemas
git log --oneline
git checkout [commit-hash]
npm install
npm run build
pm2 restart intesistemas
```

---

## Checklist Pre-Deploy

### Código
- [ ] Build exitoso localmente
- [ ] Linter sin errores
- [ ] TypeScript sin errores
- [ ] Tests pasando (si existen)
- [ ] No hay console.logs olvidados
- [ ] Código commiteado y pusheado

### Configuración
- [ ] Variables de entorno configuradas
- [ ] Dominios configurados
- [ ] SSL/HTTPS habilitado
- [ ] redirects configurados (www, etc)
- [ ] robots.txt configurado
- [ ] sitemap.xml generado

### SEO
- [ ] Metadatos en todas las páginas
- [ ] Open Graph tags
- [ ] Structured data (schema.org)
- [ ] Alt text en imágenes
- [ ] Google Search Console configurado
- [ ] Google Analytics configurado

### Performance
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals optimizados
- [ ] Imágenes optimizadas
- [ ] Cache headers configurados
- [ ] Compression habilitado

### Seguridad
- [ ] Headers de seguridad configurados
- [ ] Rate limiting implementado
- [ ] CSRF protection
- [ ] Input validation
- [ ] Secrets en variables de entorno

---

## Post-Deploy

### Verificaciones

```bash
# 1. Check HTTP status
curl -I https://intesistemas.com

# 2. Check SSL
curl -vI https://intesistemas.com 2>&1 | grep -A 2 "SSL certificate"

# 3. Check headers
curl -I https://intesistemas.com | grep -i "x-frame-options"

# 4. Test health endpoint
curl https://intesistemas.com/api/health

# 5. Test contact form
curl -X POST https://intesistemas.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

### Monitoreo

1. **Google Search Console**
   - Verificar propiedad
   - Enviar sitemap
   - Revisar errores de indexación

2. **Google Analytics**
   - Verificar tracking
   - Configurar objetivos
   - Revisar tráfico en tiempo real

3. **Uptime Monitor**
   - Configurar checks
   - Configurar alertas
   - Añadir emails de contacto

---

## Mantenimiento

### Actualización de Dependencias

```bash
# Ver outdated
npm outdated

# Actualizar patch/minor versions
npm update

# Actualizar major versions manualmente
npm install next@latest

# Verificar después de actualizar
npm run build
npm run lint
npm run type-check
```

### Logs y Debugging

```bash
# Vercel
vercel logs [deployment-url]

# VPS con PM2
pm2 logs intesistemas
pm2 logs intesistemas --lines 100

# Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

---

## Dominios y DNS

### Configuración DNS

```
# Configuración recomendada

A     @              -> IP_del_servidor
A     www            -> IP_del_servidor
AAAA  @              -> IPv6_del_servidor (si aplica)
CNAME www            -> intesistemas.com (alternativa a A record)

# Para Vercel
CNAME @              -> cname.vercel-dns.com
CNAME www            -> cname.vercel-dns.com

# Email (si se configura)
MX    @              -> mx1.provider.com (priority 10)
MX    @              -> mx2.provider.com (priority 20)
TXT   @              -> "v=spf1 include:provider.com ~all"
```

---

## Costos Estimados

### Vercel Pro
- Hosting: $20/mes
- Bandwidth: Incluido (hasta 1TB)
- Build time: 400h/mes incluidas

### VPS DigitalOcean
- Droplet: $12-24/mes
- Backups: +20%
- Domain: $10-15/año
- Total: ~$15-30/mes

### Servicios Adicionales
- Email (Resend): $20/mes (50k emails)
- Uptime monitoring: $0-20/mes
- CDN (Cloudflare): Gratuito o $20/mes Pro
- Analytics: Gratuito (GA) o $9/mes (Plausible)

**Total estimado:** $30-80/mes

---

**Fecha:** 2025-11-21
**Próxima revisión:** Después del primer deploy
