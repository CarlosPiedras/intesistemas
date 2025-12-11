'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '¿Qué servicios ofrece INTE SISTEMAS?',
    answer:
      'Ofrecemos una amplia gama de servicios incluyendo distribución eléctrica, automatización industrial, programación de PLCs y sistemas SCADA, gestión integral de proyectos eléctricos, y soporte técnico continuo. Adaptamos nuestras soluciones a las necesidades específicas de cada cliente.',
  },
  {
    id: 2,
    question: '¿Cómo puedo solicitar un presupuesto?',
    answer:
      'Puede solicitar un presupuesto contactándonos a través de nuestro formulario web, por correo electrónico o por teléfono. Nuestro equipo analizará sus necesidades y le proporcionará un presupuesto detallado sin compromiso en un plazo de 24-48 horas.',
  },
  {
    id: 3,
    question: '¿En qué sectores tienen experiencia?',
    answer:
      'Tenemos más de 30 años de experiencia trabajando en diversos sectores industriales incluyendo manufactura, alimentación, farmacéutica, logística, energías renovables y construcción. Cada proyecto es abordado con la experiencia técnica específica del sector.',
  },
  {
    id: 4,
    question: '¿Cuánto tiempo toma completar un proyecto?',
    answer:
      'El tiempo de ejecución varía según la complejidad y alcance del proyecto. Proyectos pequeños pueden completarse en 2-4 semanas, mientras que instalaciones más complejas pueden tomar 2-6 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación.',
  },
  {
    id: 5,
    question: '¿Ofrecen servicio de mantenimiento post-instalación?',
    answer:
      'Sí, ofrecemos servicios completos de mantenimiento preventivo y correctivo, asistencia técnica 24/7, y programas de formación continua para su equipo. Nuestro objetivo es garantizar el óptimo funcionamiento de todos los sistemas instalados.',
  },
  {
    id: 6,
    question: '¿Trabajan con marcas reconocidas del sector?',
    answer:
      'Sí, somos partners certificados de marcas líderes como EATON, CEA y SAEL. Esto nos permite ofrecer productos de la más alta calidad con garantía del fabricante y acceso a soporte técnico especializado.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6"
            style={{ color: '#1175c7' }}
          >
            PREGUNTAS FRECUENTES
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden bg-white"
                style={{ border: '1px solid #65a6d8' }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary-50 transition-colors duration-200"
                >
                  <span className="text-base md:text-lg font-medium text-secondary-900 pr-4">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-secondary-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-secondary-700" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-secondary-600 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            style={{ backgroundColor: '#1175c7', color: '#ffffff' }}
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
