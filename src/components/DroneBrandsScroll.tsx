'use client';

import Image from 'next/image';
import { useState } from 'react';

const droneBrands = [
  {
    id: 1,
    name: "DJI",
    logo: "/brands/dji.png"
  },
  {
    id: 2,
    name: "Autel",
    logo: "/brands/autel.png"
  },
  {
    id: 3,
    name: "Parrot",
    logo: "/brands/parrot.png"
  },
  {
    id: 4,
    name: "Yuneec",
    logo: "/brands/yuneec.png"
  },
  {
    id: 5,
    name: "Skydio",
    logo: "/brands/skydio.png"
  },
  {
    id: 6,
    name: "Holy Stone",
    logo: "/brands/holystone.png"
  },
  {
    id: 7,
    name: "FIMI",
    logo: "/brands/fimi.png"
  },
  {
    id: 8,
    name: "Hubsan",
    logo: "/brands/hubsan.png"
  }
];

export default function DroneBrandsScroll() {
  // Дублируем массив для бесконечной прокрутки
  const duplicatedBrands = [...droneBrands, ...droneBrands];
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (brandName: string) => {
    setFailedImages(prev => new Set([...prev, brandName]));
  };

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-gray-100">
      <div className="w-full">
        {/* Scrolling container with mask */}
        <div className="relative overflow-hidden">
          <div 
            className="flex space-x-12 hover:pause-animation pl-32 pr-32"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'fit-content'
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
              >
                {failedImages.has(brand.name) ? (
                  <div className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                    {brand.name}
                  </div>
                ) : (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                    onError={() => handleImageError(brand.name)}
                    unoptimized
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Fade gradients - увеличиваем для широкой области */}
          <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white from-50% via-white/95 via-70% to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white from-50% via-white/95 via-70% to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
