'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1175c7] via-[#3a89c5] to-[#65a6d8] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Mail className="w-10 h-10 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-widest text-white mb-6"
          >
            ¿LISTO PARA EMPEZAR?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Contáctanos hoy y descubre cómo podemos ayudarte a optimizar tus sistemas eléctricos
            y procesos industriales con soluciones personalizadas y de última generación.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-[#1175c7] px-8 py-4 rounded-none font-semibold uppercase tracking-wider text-sm flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Solicitar Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
              </motion.button>
            </Link>

            {/* Secondary Button */}
            <Link href="tel:+34933379453">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-white hover:text-[#1175c7] transition-all duration-300"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>+34 933 379 453</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm text-white/70">
              Horario de atención: Lunes a Sábado, 8:00h - 20:00h
            </p>
            <p className="text-sm text-white/70 mt-2">
              Email:{' '}
              <a
                href="mailto:inte@inteautomatizacion.com"
                className="text-white/90 hover:text-white underline underline-offset-2 transition-colors duration-200"
              >
                inte@inteautomatizacion.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
