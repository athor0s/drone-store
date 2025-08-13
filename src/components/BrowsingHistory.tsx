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
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-gray-50/50 rounded-3xl flex items-center justify-center border border-gray-200/50 hover:bg-gray-100/50 transition-all duration-300">
              <FontAwesomeIcon icon={faHistory} className="w-7 h-7 text-gray-400" />
            </div>
            <div>
              <h2 className="text-4xl font-extralight text-gray-900 mb-2 tracking-wide">история <span className="font-nauryz">просмотра</span></h2>
              <p className="text-gray-500 font-extralight text-lg tracking-wide">недавно просмотренные товары</p>
            </div>
          </div>
          
          <Link 
            href="/catalog" 
            className="inline-flex items-center px-8 py-4 bg-gray-50/50 border border-gray-200 text-gray-700 rounded-full font-extralight text-lg tracking-wide hover:bg-gray-100/50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
          >
            смотреть все
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-3" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 hover:border-gray-300/50 hover:shadow-lg transition-all duration-500 overflow-hidden group hover:scale-105">
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {product.discount && (
                  <div className="absolute top-6 left-6 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-extralight tracking-wide">
                    -{product.discount}%
                  </div>
                )}
                
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <button className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                  </button>
                  <button className="w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                  </button>
                </div>

                {/* Views counter */}
                <div className="absolute bottom-6 left-6 flex items-center px-3 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-extralight tracking-wide">
                  <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-2" />
                  {product.views}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-extralight bg-blue-50/50 px-4 py-2 rounded-full tracking-wide border border-blue-100/50">{product.category}</span>
                </div>
                <h3 className="font-extralight text-gray-900 mb-6 line-clamp-2 text-xl tracking-wide">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-extralight text-gray-900 tracking-wide">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-base text-gray-400 line-through font-extralight tracking-wide">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="w-12 h-12 bg-gray-50/50 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center border border-gray-200/50 hover:border-blue-600 transition-all duration-300 hover:scale-110">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
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
