'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AutomatizacionCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">
      {/* Content */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            ¿LISTO PARA AUTOMATIZAR TU INDUSTRIA?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-secondary-600 mb-10 max-w-3xl mx-auto"
          >
            Contacta con nuestro equipo de ingenieros para una consultoría sin compromiso.
            Analizaremos tus necesidades y te propondremos la mejor solución de automatización.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-3 text-secondary-900">
              <Phone className="w-5 h-5" style={{ color: '#1175c7' }} />
              <div className="text-left">
                <p className="text-sm text-secondary-600">Llámanos ahora</p>
                <p className="text-lg font-semibold">+34 933 379 453</p>
              </div>
            </div>

            <div className="hidden sm:block h-12 w-px bg-secondary-300" />

            <div className="text-secondary-900 text-left">
              <p className="text-sm text-secondary-600">Email</p>
              <p className="text-lg font-semibold">inte@inteautomatizacion.com</p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <Link
              href="/es/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#1175c7' }}
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/es/about"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary-50"
              style={{ borderColor: '#1175c7', color: '#1175c7' }}
            >
              Conocer Más
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-secondary-600 mt-8"
          >
            Horario de atención: Lunes a Sábado de 8:00h a 20:00h
          </motion.p>
        </div>
      </div>
    </section>
  );
}
