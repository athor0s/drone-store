'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFire, 
  faShoppingCart, 
  faHeart, 
  faStar,
  faEye,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const trendingProducts = [
  {
    id: 1,
    name: "DJI Mavic 3 Pro",
    price: "189 990 ₽",
    originalPrice: "219 990 ₽",
    image: "/api/placeholder/400/300",
    category: "Профессиональные",
    rating: 4.9,
    reviews: 127,
    discount: 14,
    badge: "Хит продаж",
    features: ["4K видео", "До 43 мин полета", "Тройная камера"]
  },
  {
    id: 2,
    name: "DJI Mini 3",
    price: "64 990 ₽",
    image: "/api/placeholder/400/300",
    category: "Любительские",
    rating: 4.8,
    reviews: 89,
    badge: "Новинка",
    features: ["Легкий вес", "4K HDR", "Складной дизайн"]
  },
  {
    id: 3,
    name: "DJI FPV",
    price: "149 990 ₽",
    image: "/api/placeholder/400/300",
    category: "FPV дроны",
    rating: 4.7,
    reviews: 56,
    badge: "Для экстрима",
    features: ["Очки FPV", "До 140 км/ч", "Акробатический режим"]
  }
];

const categories = [
  { name: "Профессиональные", count: 45, dotColor: "bg-blue-500" },
  { name: "Любительские", count: 67, dotColor: "bg-green-500" },
  { name: "FPV дроны", count: 23, dotColor: "bg-purple-500" },
  { name: "Аксессуары", count: 156, dotColor: "bg-orange-500" }
];

export default function TrendingProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faFire} className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Популярные товары</h2>
          </div>
          <p className="text-gray-600">Самые востребованные дроны и аксессуары этого месяца</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Featured Product */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={trendingProducts[0].image}
                  alt={trendingProducts[0].name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  -{trendingProducts[0].discount}%
                </div>
                
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {trendingProducts[0].badge}
                </div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faEye} className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{trendingProducts[0].category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{trendingProducts[0].name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{trendingProducts[0].rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({trendingProducts[0].reviews} отзывов)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {trendingProducts[0].features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{trendingProducts[0].price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{trendingProducts[0].originalPrice}</span>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Products & Categories */}
          <div className="lg:col-span-2 space-y-6">
            {/* Other Trending Products */}
            <div className="grid sm:grid-cols-2 gap-4">
              {trendingProducts.slice(1).map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 p-4">
                  <div className="relative mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                      {product.badge}
                    </div>
                  </div>
                  
                  <div className="text-xs text-blue-600 font-medium mb-1">{product.category}</div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">{product.name}</h4>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{product.price}</span>
                    <button className="w-8 h-8 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg flex items-center justify-center transition-colors">
                      <FontAwesomeIcon icon={faShoppingCart} className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Популярные категории</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Link key={index} href={`/catalog?category=${category.name.toLowerCase()}`}>
                    <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${category.dotColor} rounded-full`}></div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{category.count} товаров</span>
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" 
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
