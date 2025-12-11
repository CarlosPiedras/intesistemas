'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '¿Qué es un PLC y para qué sirve?',
    answer:
      'Un PLC (Controlador Lógico Programable) es un dispositivo electrónico industrial diseñado para controlar maquinaria y procesos mediante un programa personalizado. Permite automatizar tareas repetitivas con alta fiabilidad, precisión y flexibilidad, siendo fundamental en la industria moderna para el control de líneas de producción, procesos químicos, sistemas de transporte y mucho más.',
  },
  {
    id: 2,
    question: '¿Cuánto tiempo lleva un proyecto de automatización?',
    answer:
      'El tiempo de ejecución depende de la complejidad del sistema. Un proyecto básico de automatización de una máquina puede completarse en 2-4 semanas, mientras que sistemas complejos de líneas completas pueden requerir de 3 a 6 meses. Realizamos una planificación detallada en la fase inicial del proyecto y proporcionamos cronogramas realistas.',
  },
  {
    id: 3,
    question: '¿Ofrecen formación para nuestros operarios?',
    answer:
      'Sí, la formación es parte integral de nuestros proyectos. Capacitamos a sus operarios y personal de mantenimiento en el uso y gestión del sistema instalado. Proporcionamos manuales de operación detallados, documentación técnica completa y sesiones de formación práctica adaptadas al nivel de cada usuario.',
  },
  {
    id: 4,
    question: '¿Dan soporte después de la instalación?',
    answer:
      'Absolutamente. Ofrecemos contratos de mantenimiento preventivo y correctivo, asistencia técnica remota 24/7 para incidencias críticas, y soporte presencial cuando sea necesario. También realizamos actualizaciones del sistema y mejoras continuas. Nuestro objetivo es garantizar el óptimo funcionamiento de su inversión a largo plazo.',
  },
  {
    id: 5,
    question: '¿Pueden integrar equipos de diferentes fabricantes?',
    answer:
      'Sí, nuestra experiencia nos permite integrar equipos de múltiples fabricantes (Siemens, Allen-Bradley, Schneider Electric, EATON, Omron, etc.) en un sistema unificado. Utilizamos protocolos de comunicación industrial estándar (Profinet, Ethernet/IP, Modbus, OPC UA) para garantizar la interoperabilidad entre todos los elementos del sistema.',
  },
  {
    id: 6,
    question: '¿Qué ventajas aporta un sistema SCADA?',
    answer:
      'Un sistema SCADA permite supervisar y controlar procesos industriales desde una interfaz gráfica intuitiva. Las ventajas incluyen: monitorización en tiempo real de todas las variables, gestión centralizada de alarmas, registro histórico de datos para análisis, generación automática de informes de producción, acceso remoto seguro y toma de decisiones informada basada en datos reales.',
  },
];

export default function AutomatizacionFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-widest uppercase mb-4 font-bold"
            style={{ color: '#65a6d8' }}
          >
            FAQ
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-widest mb-4"
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
            ¿Necesitas más información sobre automatización industrial?
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
