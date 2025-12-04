'use client';

import Image from 'next/image';

export default function ClientLogos() {
  const logos = [
    {
      name: 'SIEMENS',
      image: '/images/logos/clientes/logo-siemens.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'SAEL',
      image: '/images/logos/clientes/logo-sael.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'GEFRAN',
      image: '/images/logos/clientes/logo-gefran.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MASELLI',
      image: '/images/logos/clientes/logo-maselli.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'EATON',
      image: '/images/logos/clientes/logo-eaton.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'BARNIGRADO',
      image: '/images/logos/clientes/logo-barnigrado.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'BOROBIL',
      image: '/images/logos/clientes/logo-borobil.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'CELSUR',
      image: '/images/logos/clientes/logo-celsur.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'CROP',
      image: '/images/logos/clientes/logo-crop.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'EIFFAGE',
      image: '/images/logos/clientes/logo-eiffage.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ELECNOR',
      image: '/images/logos/clientes/logo-elecnor.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ENDRESS',
      image: '/images/logos/clientes/logo-endress.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ITRESA',
      image: '/images/logos/clientes/logo-itresa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MELINK',
      image: '/images/logos/clientes/logo-melink.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MOYANO',
      image: '/images/logos/clientes/logo-moyano.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PAPER',
      image: '/images/logos/clientes/logo-paper.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PRENSA',
      image: '/images/logos/clientes/logo-prensa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PRISA',
      image: '/images/logos/clientes/logo-prisa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'VOCENTO',
      image: '/images/logos/clientes/logo-vocento.webp',
      width: 200,
      height: 90,
    },
  ];

  // Duplicamos los logos para el efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="pt-20 pb-10 md:pt-24 md:pb-12 bg-gradient-to-b from-white to-secondary-50 overflow-hidden">
      <div className="relative">
        {/* Logos en carrusel infinito */}
        <div className="flex items-center">
          <div className="flex items-center animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
                style={{ height: '90px' }}
              >
                <Image
                  src={logo.image}
                  alt={`Logo ${logo.name}`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center animate-scroll" aria-hidden="true">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-duplicate-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
                style={{ height: '90px' }}
              >
                <Image
                  src={logo.image}
                  alt={`Logo ${logo.name}`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
