'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Grid3x3 } from 'lucide-react';

interface CTAButton {
  text: string;
  href: string;
  icon?: 'arrow' | 'grid';
}

interface SectionCTAProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
}

export default function SectionCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: SectionCTAProps) {
  const getIcon = (iconType?: 'arrow' | 'grid') => {
    if (iconType === 'arrow') return <ArrowRight className="w-5 h-5 ml-2" />;
    if (iconType === 'grid') return <Grid3x3 className="w-5 h-5 ml-2" />;
    return null;
  };

  return (
    <section className="bg-gradient-to-r from-[#1175c7] via-[#3a89c5] to-[#65a6d8] py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botón Primario */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                {primaryButton.text}
                {getIcon(primaryButton.icon)}
              </Link>
            </motion.div>

            {/* Botón Secundario (opcional) */}
            {secondaryButton && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
                >
                  {secondaryButton.text}
                  {getIcon(secondaryButton.icon)}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
