'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'Teléfono Principal',
    value: '+34 933 379 453',
    link: 'tel:+34933379453',
  },
  {
    icon: Phone,
    title: 'Móvil',
    value: '627 520 831',
    link: 'tel:627520831',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'inte@inteautomatizacion.com',
    link: 'mailto:inte@inteautomatizacion.com',
  },
  {
    icon: MapPin,
    title: 'Terrassa - Oficina Principal',
    value: 'Av. Santa Eulalia 290, 08223 Barcelona',
  },
  {
    icon: MapPin,
    title: 'Hospitalet de Llobregat',
    value: 'Pasaje Milans 1, Barcelona',
  },
  {
    icon: Clock,
    title: 'Horario de Atención',
    value: 'Lunes a Sábado: 8:00h - 20:00h',
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-8" style={{ color: '#1175c7' }}>
        Información de contacto
      </h2>

      <div className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const Component = item.link ? 'a' : 'div';
          const linkProps = item.link
            ? { href: item.link }
            : {};

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Component
                {...linkProps}
                className={`group flex items-start gap-4 p-5 bg-secondary-50 rounded-lg transition-all duration-200 ${
                  item.link
                    ? 'hover:bg-[#a9d9ff]/30 hover:shadow-md cursor-pointer'
                    : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.link
                      ? 'bg-[#1175c7] group-hover:bg-[#0e5fa3]'
                      : 'bg-[#65a6d8]'
                  } transition-colors duration-200`}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-secondary-700 mb-1">
                    {item.title}
                  </h3>
                  <p
                    className={`text-base font-semibold ${
                      item.link ? 'text-[#1175c7] group-hover:text-[#0e5fa3]' : 'text-secondary-900'
                    } transition-colors duration-200`}
                  >
                    {item.value}
                  </p>
                </div>
              </Component>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
