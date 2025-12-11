'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes somos', href: '/about' },
    { name: 'Distribución de Energía', href: '/servicios/distribucion-energia' },
    { name: 'Automatización Industrial', href: '/servicios/automatizacion-industrial' },
    { name: 'Gestión de Proyectos', href: '/servicios/gestion-proyectos' },
    { name: 'Soporte Técnico', href: '/servicios/soporte-tecnico' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8]" />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#a9d9ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#65a6d8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-7xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <div className="mb-5">
              <Image
                src="/media/shared/logos/brand/logointe.webp"
                alt="INTE SISTEMAS"
                width={280}
                height={90}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Más de 30 años transformando la industria con tecnología eléctrica avanzada y automatización de procesos. Partner oficial EATON.
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 flex justify-start md:justify-center"
          >
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-left md:text-center"
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-200" strokeWidth={2} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="space-y-2">
              {/* Phones Row */}
              <div className="grid grid-cols-2 gap-2">
                {/* Phone 1 */}
                <a
                  href="tel:+34933379453"
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200 flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/70">Teléfono</p>
                    <p className="text-sm font-medium text-white">+34 933 379 453</p>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:627520831"
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200 flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/70">Móvil</p>
                    <p className="text-sm font-medium text-white">627 520 831</p>
                  </div>
                </a>
              </div>

              {/* Email - Full Width */}
              <a
                href="mailto:inte@inteautomatizacion.com"
                className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200 flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white/70">Email</p>
                  <p className="text-sm font-medium text-white">inte@inteautomatizacion.com</p>
                </div>
              </a>

              {/* Location - Full Width */}
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white/70">Oficina Principal</p>
                  <p className="text-sm font-medium text-white">Av. Santa Eulalia 290, 08223 Terrassa, Barcelona</p>
                </div>
              </div>

              {/* Schedule - Full Width */}
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white/70">Horario</p>
                  <p className="text-sm font-medium text-white">Lunes a Sábado: 8:00h - 20:00h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-white/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/70">
              © {currentYear} INTE SISTEMAS. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/70">
              Integradores oficiales <span className="font-semibold text-white">EATON</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
