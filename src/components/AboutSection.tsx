'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faCamera, 
  faUsers, 
  faAward 
} from '@fortawesome/free-solid-svg-icons';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Почему выбирают <span className="text-blue-600">нас</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы - команда профессионалов, страстно увлеченных технологиями дронов 
            и стремящихся предоставить лучший сервис нашим клиентам
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Довольных клиентов</p>
          </div>
          <div className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600 font-medium">Моделей дронов</p>
          </div>
          <div className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600 font-medium">Техподдержка</p>
          </div>
          <div className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5</div>
            <p className="text-gray-600 font-medium">Лет опыта</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faRocket} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Инновации
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Самые современные технологии и передовые разработки в области дронов
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faCamera} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Качество
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Только проверенные бренды и модели с гарантированным качеством
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Поддержка
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Круглосуточная техническая поддержка и консультации экспертов
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faAward} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Гарантия
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Официальная гарантия на все товары и бесплатное обслуживание
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
