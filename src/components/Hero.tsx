'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faShield, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Мир дронов
                <span className="block text-blue-600">будущего</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя инновационные дроны с передовыми технологиями. 
                Профессиональные модели для съемки, развлечений и бизнеса.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Смотреть каталог
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <FontAwesomeIcon icon={faPlay} className="w-5 h-5 text-blue-600 ml-1" />
                </div>
                Смотреть видео
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faShield} className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Гарантия качества</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faTruck} className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Быстрая доставка</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faHeadset} className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">24/7 поддержка</p>
              </div>
            </div>
          </div>

          {/* Right column - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for drone image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-20 h-20 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-lg font-semibold">Изображение дрона</p>
                  <p className="text-sm opacity-75">Placeholder</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">🚁</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
