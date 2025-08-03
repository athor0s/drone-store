'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface DroneProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  features: string[];
}

const drones: DroneProduct[] = [
  {
    id: 1,
    name: "DJI Air 3S",
    price: 129000,
    rating: 4.9,
    image: "/placeholder-drone-1.jpg",
    category: "Профессиональный",
    features: ["4K камера", "45 мин полет", "GPS"]
  },
  {
    id: 2,
    name: "DJI Mini 4 Pro",
    price: 89000,
    rating: 4.8,
    image: "/placeholder-drone-2.jpg", 
    category: "Компактный",
    features: ["HDR видео", "34 мин полет", "Легкий"]
  },
  {
    id: 3,
    name: "Autel EVO Lite+",
    price: 95000,
    rating: 4.7,
    image: "/placeholder-drone-3.jpg",
    category: "Любительский", 
    features: ["6K камера", "40 мин полет", "Gimbal"]
  },
  {
    id: 4,
    name: "DJI Mavic 3 Classic",
    price: 159000,
    rating: 4.9,
    image: "/placeholder-drone-4.jpg",
    category: "Профессиональный",
    features: ["Hasselblad", "46 мин полет", "5.1K видео"]
  },
  {
    id: 5,
    name: "Parrot Anafi AI",
    price: 75000,
    rating: 4.6,
    image: "/placeholder-drone-5.jpg",
    category: "Любительский",
    features: ["AI функции", "32 мин полет", "180° камера"]
  },
  {
    id: 6,
    name: "Skydio 2+",
    price: 110000,
    rating: 4.8,
    image: "/placeholder-drone-6.jpg",
    category: "Автономный",
    features: ["Автопилот", "27 мин полет", "360° избежание"]
  }
];

export default function ProductCatalog() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Полный каталог дронов
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите идеальный дрон из нашей коллекции премиальных моделей
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all">
            Все
          </button>
          <button className="px-6 py-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
            Профессиональные
          </button>
          <button className="px-6 py-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
            Любительские
          </button>
          <button className="px-6 py-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
            Компактные
          </button>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drones.map((drone) => (
            <div key={drone.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden group hover:scale-105">
              {/* Image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <span className="text-3xl">🚁</span>
                    </div>
                    <p className="font-semibold text-white">{drone.name}</p>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {drone.category}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{drone.name}</h3>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{drone.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {drone.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded backdrop-blur-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {formatPrice(drone.price)}
                  </span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="bg-white/10 text-gray-300 px-8 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold backdrop-blur-sm">
            Показать еще
          </button>
        </div>
      </div>
    </section>
  );
}
