'use client';

import Image from 'next/image';

export default function ClientLogos() {
  const logos = [
    {
      name: 'SIEMENS',
      image: '/media/shared/logos/clientes/logo-siemens.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'SAEL',
      image: '/media/shared/logos/clientes/logo-sael.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'GEFRAN',
      image: '/media/shared/logos/clientes/logo-gefran.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MASELLI',
      image: '/media/shared/logos/clientes/logo-maselli.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'EATON',
      image: '/media/shared/logos/clientes/logo-eaton.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'BARNIGRADO',
      image: '/media/shared/logos/clientes/logo-barnigrado.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'BOROBIL',
      image: '/media/shared/logos/clientes/logo-borobil.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'CELSUR',
      image: '/media/shared/logos/clientes/logo-celsur.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'CROP',
      image: '/media/shared/logos/clientes/logo-crop.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'EIFFAGE',
      image: '/media/shared/logos/clientes/logo-eiffage.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ELECNOR',
      image: '/media/shared/logos/clientes/logo-elecnor.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ENDRESS',
      image: '/media/shared/logos/clientes/logo-endress.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'ITRESA',
      image: '/media/shared/logos/clientes/logo-itresa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MELINK',
      image: '/media/shared/logos/clientes/logo-melink.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'MOYANO',
      image: '/media/shared/logos/clientes/logo-moyano.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PAPER',
      image: '/media/shared/logos/clientes/logo-paper.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PRENSA',
      image: '/media/shared/logos/clientes/logo-prensa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'PRISA',
      image: '/media/shared/logos/clientes/logo-prisa.webp',
      width: 200,
      height: 90,
    },
    {
      name: 'VOCENTO',
      image: '/media/shared/logos/clientes/logo-vocento.webp',
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
