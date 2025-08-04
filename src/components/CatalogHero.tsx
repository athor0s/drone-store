'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faFilter,
  faPlane,
  faArrowRight,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CatalogHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6">
            Идеальный{' '}
            <span className="font-medium text-blue-600">
              дрон
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Откройте мир безграничных возможностей с премиальными дронами от лучших мировых брендов
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Найти дрон мечты..."
                className="w-full pl-14 pr-32 py-5 bg-white text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-gray-500 text-lg"
              />
              <button className="absolute inset-y-0 right-2 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                Поиск
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalog"
              className="inline-flex items-center px-8 py-4 bg-white border border-gray-300 text-gray-800 rounded-xl font-medium hover:bg-gray-50"
            >
              Весь каталог
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
            </Link>
            
            <button className="inline-flex items-center px-8 py-4 bg-gray-100 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-200">
              <FontAwesomeIcon icon={faFilter} className="w-4 h-4 mr-2" />
              Фильтры
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Моделей</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Брендов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
