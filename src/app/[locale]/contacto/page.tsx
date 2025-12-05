import { Metadata } from 'next';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contacto | INTE SISTEMAS - Contáctanos para tus proyectos',
  description:
    '¿Tienes un proyecto en mente? Contacta con INTE SISTEMAS. Expertos en automatización industrial y sistemas eléctricos en Barcelona. Te responderemos en menos de 24h.',
  keywords:
    'contacto INTE SISTEMAS, presupuesto automatización, consultoría sistemas eléctricos, Barcelona, Hospitalet de Llobregat, solicitar información, contacto empresa industrial',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Intro Section */}
      <ContactIntro />

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-[400px] md:h-[500px] bg-secondary-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0447841384!2d2.0292412!3d41.5530007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496c5c5c5c5c5%3A0x0!2sAvenida%20Santa%20Eulalia%20290%2C%2008223%20Terrassa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación INTE SISTEMAS"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
