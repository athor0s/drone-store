'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faShoppingCart, faHeart, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const recentlyViewed = [
  {
    id: 1,
    name: "DJI Mavic 3 Pro",
    price: "189 990 ₽",
    originalPrice: "219 990 ₽",
    image: "/api/placeholder/300/200",
    category: "Профессиональные",
    discount: 14,
    views: 847
  },
  {
    id: 2,
    name: "DJI Mini 3",
    price: "64 990 ₽",
    image: "/api/placeholder/300/200",
    category: "Любительские",
    views: 1203
  },
  {
    id: 3,
    name: "Autel EVO Lite+",
    price: "129 990 ₽",
    image: "/api/placeholder/300/200",
    category: "Профессиональные",
    views: 654
  },
  {
    id: 4,
    name: "DJI FPV",
    price: "149 990 ₽",
    image: "/api/placeholder/300/200",
    category: "FPV дроны",
    views: 923
  }
];

export default function BrowsingHistory() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-200">
              <FontAwesomeIcon icon={faHistory} className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-1">История просмотра</h2>
              <p className="text-gray-600">Недавно просмотренные товары</p>
            </div>
          </div>
          
          <Link 
            href="/catalog" 
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50"
          >
            Смотреть все
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-52 object-cover"
                />
                
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    -{product.discount}%
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                  </button>
                </div>

                {/* Views counter */}
                <div className="absolute bottom-4 left-4 flex items-center px-2 py-1 bg-black/60 rounded-full text-white text-xs">
                  <FontAwesomeIcon icon={faEye} className="w-3 h-3 mr-1" />
                  {product.views}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 text-lg">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
