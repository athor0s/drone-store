'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    id: 1,
    name: "DJI",
    logo: "/api/placeholder/120/60",
    description: "Мировой лидер в области дронов",
    productsCount: 45,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 2,
    name: "Autel",
    logo: "/api/placeholder/120/60", 
    description: "Инновационные решения для профи",
    productsCount: 23,
    rating: 4.7,
    isPopular: false
  },
  {
    id: 3,
    name: "Parrot",
    logo: "/api/placeholder/120/60",
    description: "Французское качество и дизайн",
    productsCount: 18,
    rating: 4.6,
    isPopular: false
  },
  {
    id: 4,
    name: "Yuneec",
    logo: "/api/placeholder/120/60",
    description: "Надежность проверенная временем",
    productsCount: 15,
    rating: 4.5,
    isPopular: false
  },
  {
    id: 5,
    name: "Skydio",
    logo: "/api/placeholder/120/60",
    description: "Автономные интеллектуальные дроны",
    productsCount: 8,
    rating: 4.8,
    isPopular: true
  },
  {
    id: 6,
    name: "Holy Stone",
    logo: "/api/placeholder/120/60",
    description: "Доступные решения для новичков",
    productsCount: 32,
    rating: 4.3,
    isPopular: false
  },
  {
    id: 7,
    name: "Potensic",
    logo: "/api/placeholder/120/60",
    description: "Качественные дроны по выгодной цене",
    productsCount: 27,
    rating: 4.4,
    isPopular: false
  },
  {
    id: 8,
    name: "Ryze Tech",
    logo: "/api/placeholder/120/60",
    description: "Образовательные и развлекательные дроны",
    productsCount: 12,
    rating: 4.5,
    isPopular: false
  }
];

export default function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, brands.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Controls */}
        <div className="flex justify-end gap-3 mb-12">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-white border border-gray-300 hover:border-gray-400 rounded-xl flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-white border border-gray-300 hover:border-gray-400 rounded-xl flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {brands.map((brand) => (
              <div key={brand.id} className="flex-shrink-0 w-1/4 px-3">
                <Link href={`/catalog?brand=${brand.name.toLowerCase()}`}>
                  <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all p-8 relative">
                    {/* Popular Badge */}
                    {brand.isPopular && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Популярный
                      </div>
                    )}
                    
                    {/* Brand Logo */}
                    <div className="flex items-center justify-center h-20 mb-6 bg-gray-50 rounded-xl">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                    
                    {/* Brand Info */}
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{brand.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{brand.description}</p>
                      
                      <div className="flex items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium text-gray-700">{brand.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">{brand.productsCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all ${
                index === currentIndex 
                  ? 'w-6 h-2 bg-blue-600 rounded-full' 
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
