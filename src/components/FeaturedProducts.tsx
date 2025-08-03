'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const featuredDrones = [
  {
    id: 1,
    name: "DJI Mavic 3 Pro",
    price: 159000,
    image: "🚁",
    category: "Профессиональный",
    features: ["8K камера", "46 мин полет", "AI автопилот"],
    rating: 4.9,
    badge: "Популярный"
  },
  {
    id: 2,
    name: "DJI Mini 4 Pro",
    price: 89000,
    image: "📱",
    category: "Компактный",
    features: ["4K HDR", "34 мин полет", "249г"],
    rating: 4.8,
    badge: "Компактный"
  },
  {
    id: 3,
    name: "DJI Air 3",
    price: 119000,
    image: "�",
    category: "Любительский",
    features: ["Dual камера", "46 мин полет", "Препятствия"],
    rating: 4.7,
    badge: "Новинка"
  }
];

export default function FeaturedProducts() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Рекомендуемые модели</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Популярные <span className="font-medium text-blue-600">дроны</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Тщательно отобранные модели для профессионалов и любителей
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredDrones.map((drone) => (
            <div key={drone.id} className="group">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {drone.badge}
                    </span>
                  </div>
                  
                  {/* Image area */}
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {drone.image}
                      </div>
                      <div className="text-lg font-medium text-gray-700">{drone.name}</div>
                      <div className="text-sm text-gray-500">{drone.category}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{drone.name}</h3>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">{drone.rating}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {drone.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatPrice(drone.price)}
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/catalog"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
          >
            Посмотреть все модели
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
